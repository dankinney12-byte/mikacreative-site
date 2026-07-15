// Grow with Joy — waitlist capture (server-side).
//
// The browser POSTs { email, firstName } here. This function talks to Kit
// (formerly ConvertKit) using a SECRET API key that lives only in Netlify
// environment variables — it is never exposed to the browser.
//
// Required Netlify env var:
//   KIT_API_KEY            your Kit v4 API key (Settings → Advanced → API)
//
// Optional Netlify env vars (set whichever you use):
//   KIT_FORM_ID            id of the Kit form to subscribe people to.
//                          Subscribing to a form is what triggers the
//                          welcome email / automation you build in Kit.
//   KIT_WAITLIST_TAG_ID    id of the "Grow with Joy waitlist" tag, applied
//                          for segmentation (and can also trigger a welcome
//                          automation if you prefer to drive it off the tag).
//
// Kit v4 reference: https://developers.kit.com  (base: https://api.kit.com/v4,
// auth header: X-Kit-Api-Key)

const KIT_BASE = 'https://api.kit.com/v4';

async function kit(path, apiKey, body) {
  const res = await fetch(`${KIT_BASE}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Kit-Api-Key': apiKey,
    },
    body: JSON.stringify(body),
  });
  let data = null;
  try { data = await res.json(); } catch (_) { /* empty body is fine */ }
  return { ok: res.ok, status: res.status, data };
}

exports.handler = async (event) => {
  const json = (status, payload) => ({
    statusCode: status,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'method not allowed' });
  }

  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) {
    console.error('KIT_API_KEY is not set in Netlify environment variables');
    return json(500, { error: 'server not configured' });
  }

  // Parse + validate input
  let email, firstName;
  try {
    const parsed = JSON.parse(event.body || '{}');
    email = (parsed.email || '').trim();
    firstName = (parsed.firstName || '').trim();
  } catch (_) {
    return json(400, { error: 'invalid request body' });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { error: 'please enter a valid email address' });
  }

  try {
    // 1) Create or update the subscriber (captures the first name).
    const create = await kit('/subscribers', apiKey, {
      email_address: email,
      first_name: firstName || undefined,
    });
    // Kit returns 200/201 on success, or 422 if they already exist — both are
    // acceptable for our purposes (we still want to subscribe/tag them below).
    if (!create.ok && create.status !== 422) {
      console.error('Kit create subscriber failed', create.status, create.data);
      return json(502, { error: 'could not reach the mailing list' });
    }

    console.log('Kit create subscriber:', create.status);

    // 2) Subscribe to the form — this is what fires a form-triggered welcome
    //    automation in Kit. Skipped if KIT_FORM_ID isn't set.
    //    Note: Kit returns 201 on a NEW form join, but 200 if this email was
    //    ever on the form before — and a 200 does NOT re-fire "joins form"
    //    automations. Tag-triggered automations are more reliable here.
    if (process.env.KIT_FORM_ID) {
      const form = await kit(`/forms/${process.env.KIT_FORM_ID}/subscribers`, apiKey, {
        email_address: email,
      });
      if (!form.ok) {
        console.error('Kit form subscribe failed', form.status, JSON.stringify(form.data));
        // Non-fatal: the subscriber exists; surface a soft error only if
        // nothing else succeeded.
      } else {
        console.log('Kit form subscribe:', form.status, form.status === 200 ? '(was already on form; no join event fired)' : '(new form join)');
      }
    } else {
      console.warn('KIT_FORM_ID is not set; skipping form subscribe');
    }

    // 3) Apply the waitlist tag (segmentation). Skipped if not set.
    if (process.env.KIT_WAITLIST_TAG_ID) {
      const tag = await kit(`/tags/${process.env.KIT_WAITLIST_TAG_ID}/subscribers`, apiKey, {
        email_address: email,
      });
      if (!tag.ok) {
        console.error('Kit tag apply failed', tag.status, JSON.stringify(tag.data));
      } else {
        console.log('Kit tag apply:', tag.status);
      }
    } else {
      console.warn('KIT_WAITLIST_TAG_ID is not set; skipping tag');
    }

    return json(200, { ok: true });
  } catch (err) {
    console.error('waitlist function error', err);
    return json(500, { error: 'something went wrong' });
  }
};

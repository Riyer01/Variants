/* Worker is DEPLOYED at: https://cloudflare-internship.iyer.workers.dev/ */

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  /**
   * Respond to the request
   * @param {Request} request
   */
  async function handleRequest(request) {
    let choices = await fetch('https://cfw-takehome.developers.workers.dev/api/variants');
    let parsed = await choices.json();
    let resp = await fetch(parsed.variants[Math.floor(Math.random() * 2)])
    const text = await resp.text();
    // EXTRA CREDIT: Changing copy/URLs
    let modified = text.replace("cloudflare.com", 'cdc.gov');
    modified = modified.replace("cloudflare.com", 'cdc.gov');
    return new Response(modified, {
      status: resp.status,
      statusText: resp.statusText,
      headers: resp.headers
    });
  }
export default {
  async fetch(request) {
    const url = new URL(request.url);
    url.hostname = 'vuzcudxulhqkrkniulsl.supabase.co';
    const modifiedRequest = new Request(url.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
    return fetch(modifiedRequest);
  }
};

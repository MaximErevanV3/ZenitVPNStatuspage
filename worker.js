export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // Меняем домен на Supabase
    url.hostname = 'vuzcudxulhqkrkniulsl.supabase.co';
    
    // Создаём новый запрос
    const modifiedRequest = new Request(url.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
    
    // Проксируем
    return fetch(modifiedRequest);
  }
};

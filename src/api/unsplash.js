import fetch from 'isomorphic-fetch';
const token = 'LxxnGmngRmOMt3UWBLFO-6u7WOjKY0_YqM2rKLX9PLA';
class Unsplash {
  static async search(searchTerm, token) {
    const url = `https://api.unsplash.com/search/photos?page=1&query=${searchTerm}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Client-ID ${token}`,
      },
    });
    console.log(response);
  }
}

Unsplash.search('hi', token);

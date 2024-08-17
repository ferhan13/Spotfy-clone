const url = "https://shazam.p.rapidapi.com/charts/track?locale=tr-TR&list-Id=ip-country-chart-TR";

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '63a58e5b24msh3c3490058a3bc22p1982d5jsnc31372811937',
    'x-rapidapi-host': 'shazam.p.rapidapi.com'
  }
};

export class API {
  constructor() {
    this.songs = [];
  }

  async getPopular() {
    try {
      const res = await fetch(url, options);
      
      // Yanıtın başarılı olup olmadığını kontrol et
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      // Yanıtı düz metin olarak al
      const text = await res.text();
      
      // Yanıtı konsola yazdır
      console.log('API Response:', text);
      
      // Yanıtı JSON olarak ayrıştır
      if (text) {
        try {
          const data = JSON.parse(text);
          console.log('Parsed JSON:', data);
        } catch (jsonError) {
          console.error('Error parsing JSON:', jsonError);
        }
      } else {
        console.warn('Response is empty');
      }
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}

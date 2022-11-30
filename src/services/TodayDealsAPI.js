import axios from 'axios';

const API_ENDPOINT = 'https://amazon24.p.rapidapi.com/api/todaydeals'
const options = {
     method: 'GET',
     url: API_ENDPOINT,
     headers: {
          'X-RapidAPI-Key': '545664b0b7mshcb8baf80f8b0419p13c615jsn61182e45873f',
          'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
     }
};

export default async function getTodayDeals() {
     try {
          const { data } = await axios.request(options);
          return data
     } catch (error) {
          console.log(error)
     }
}
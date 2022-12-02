import axios from "axios";

const END_POINT = `${process.env.REACT_APP_AMAZON_API_URL}/todaydeals`
console.log(END_POINT)
const options = {
  method: "GET",
  url: END_POINT,
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
  },
};

export default async function getTodayDeals() {
  try {
    const { data } = await axios.request(options);
    return await data;
  } catch (error) {
    console.log(error);
  }
}

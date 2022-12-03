import axios from "axios";

function returnCustomOptionObject(method, url) {
  const option = {
    method,
    url: `${process.env.REACT_APP_AMAZON_API_URL}/${url}`,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
    },
  };

  return option;
}

export async function getTodayDeals() {
  try {
    const options = returnCustomOptionObject("GET", "todaydeals");
    const { data } = await axios.request(options);
    return await data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAmazonCategory() {
  try {
    
    const options = returnCustomOptionObject("GET", "category");
    const { data } = await axios.request(options);
    console.log(data)
    return await data;
  } catch (error) {
    console.log(error);
  }
}

// getAmazonCategory()
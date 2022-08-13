export const getData=async(date)=>{
    const res= await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${date}`);
    let data = await res.json();
    return data;
}
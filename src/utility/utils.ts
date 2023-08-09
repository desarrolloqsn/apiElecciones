import fs from 'fs';
//funcion del para sumarle 
// export function delay(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
//funcion para hacer el llamado al archivo de url que pasa nico
export  function callUrls() {
  const url = fs.readFileSync('./url.json','utf-8');
  return JSON.parse(url)
}

const token = 'eyJraWQiOiJETU5RbVZ6ZlpBd2xTZUN5YkFNcGZNbTZjUlV5Y0NqMVFDZXRYSTNqM0tBPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5NGY4NzQ2OC05MDIxLTcwYzItZTk1OS05YTMwNWQzODA1MmUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9LTEtUVWRGQmciLCJjbGllbnRfaWQiOiI0anJhZnU5YTdpOWFtbDU3cWxocnEyMHFwMyIsIm9yaWdpbl9qdGkiOiJhYTk4OTk5Ni01OTkzLTQ4OTEtOTFjYS02NDgzZGUzZWUzMWEiLCJldmVudF9pZCI6Ijk2MDY5MzA3LTczYTQtNGJmOS04ZjBmLTdhMGQwOTBlMjg1ZiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2OTE1ODIzMzEsImV4cCI6MTY5MTY2ODczMSwiaWF0IjoxNjkxNTgyMzMxLCJqdGkiOiJhYzMwYzRiNi1kMTkzLTQ3ZWItYmU4NS1kYWM0OGZmY2Q4ZDkiLCJ1c2VybmFtZSI6IjI3OTQ1NDYzNTg0In0.YzCo6KLrkRTNYOH9UUaJChWHJW8PZeJRkygFtz01SCemP1921ilUfeWfrnP4Y2y6PzFUdoBZZ8OcTs4Jkg8rN7RYVs2WVT2SidJgr3nQ-LsuI7cLr2HB3FqNOb29sneWIiK7upxcT5MSWBhjdz2J0yzebRmHVSZLGZFu0Nn-AGfzXG6FB2d1jxPeGT_uCvOt8XpzGYR9HJ4SfKkfPRrQ4I9_q99EEFzOe6x5OV-KzDBUKI6eJdTiaOevcIN9gyjKKmr6JuqwBEU3ClPcaleuGl5BEb9IHR_P8-SByHSMlerJxo0a4idug8cXaOAgrtHLm6Kd1brIq4MnCzh62Gm3LA';
export const requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };


export async function checkStatus (status:number) {
  if (status == 401)  throw new Error(' Error: Unauthorized (401) ');
} 
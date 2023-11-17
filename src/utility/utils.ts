import fs from 'fs';
import { ListaJson } from 'src/models/controllesInterface';
import {} from '../Json/DISTRITOS.json'
export  function callUrls() {
  const url = fs.readFileSync('./src/Json/URLS.json','utf-8');
  return JSON.parse(url)
}
export  function callUrlsPBA() {
  // const url = fs.readFileSync('./DISTRITOS.json','utf-8');
  const url = fs.readFileSync('./src/Json/DISTRITOS.json','utf-8');
  return JSON.parse(url)
}
export function callReview() {
  const url = fs.readFileSync('./src/Json/TRADUCTOR.json', 'utf-8');
  return JSON.parse(url);
}
const token = 'eyJraWQiOiJETU5RbVZ6ZlpBd2xTZUN5YkFNcGZNbTZjUlV5Y0NqMVFDZXRYSTNqM0tBPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5NGY4NzQ2OC05MDIxLTcwYzItZTk1OS05YTMwNWQzODA1MmUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9LTEtUVWRGQmciLCJjbGllbnRfaWQiOiI0anJhZnU5YTdpOWFtbDU3cWxocnEyMHFwMyIsIm9yaWdpbl9qdGkiOiIxZTRlMTEyMi0yYWQwLTRjMGQtOTllYy0wNGI0ZGZmZTMzNjAiLCJldmVudF9pZCI6ImZmYmZiNTQzLTgwYzEtNDgzMi05MzFhLTA3MjQ2OWFlMzhjOSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MDAyMzIyNjIsImV4cCI6MTcwMDMxODY2MywiaWF0IjoxNzAwMjMyMjYzLCJqdGkiOiIwY2IzMWI2My00ZDRlLTRjYTQtODVlZi03ZDQwMzJhMTZhNTUiLCJ1c2VybmFtZSI6IjI3OTQ1NDYzNTg0In0.n-nb8SQKIMckn5bO0kmnj2tipLPhfdVC1RVrW9glchm-xBruB1ZKfIvV1g8OxCXjmXN6pqVSC7eB-B1wHlhWynWJCU6_54sb3vaQzUmTSzE_e_mFEB2qsT29h0bcvDQD2GMgSEhDLE0ywzavLcTENHd5KCTCY8MVEFlI6UEL6aoEJ7FAY5M6VQHh4a5-4h5WU9dpqP0k7kRXfA6vkUsP_hVYBfojViM5Pg6am_tp4BvbRsCpyuH7m8tEaLCH5KszH9iGsYJ8ml_z3-3EA6zyBOYyGydua6-e1V-B3SNR7KgADMZo7hKYVAyw7-IcUHyeHqMRA8_wt2eVEYXh4zDKHA';
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

export function sumarElementosNumericos(arr: ListaJson[]): number {
  return arr.reduce((acumulador, elemento) => {
    if (typeof elemento.votosLista === "number") {
      return acumulador + elemento.votosLista;
    }
    return acumulador;
  }, 0);
}
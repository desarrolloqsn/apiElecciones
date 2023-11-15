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
const token = 'eyJraWQiOiJETU5RbVZ6ZlpBd2xTZUN5YkFNcGZNbTZjUlV5Y0NqMVFDZXRYSTNqM0tBPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5NGY4NzQ2OC05MDIxLTcwYzItZTk1OS05YTMwNWQzODA1MmUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9LTEtUVWRGQmciLCJjbGllbnRfaWQiOiI0anJhZnU5YTdpOWFtbDU3cWxocnEyMHFwMyIsIm9yaWdpbl9qdGkiOiI2NGVjYWQ4OS1lZDMxLTQ2MTYtYmZkYS00Y2Y3YzlhN2IyNTYiLCJldmVudF9pZCI6ImU5YmU3MjYyLWExNjktNDlkMC1hNDVhLTVjNWZiYmQyODIwNSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MDAwNDgyNjcsImV4cCI6MTcwMDEzNDY2OCwiaWF0IjoxNzAwMDQ4MjY4LCJqdGkiOiJlZmJlMTk4NS0zNTBiLTQyNjEtOWI4Zi02NmJiNGI4MGFiZDMiLCJ1c2VybmFtZSI6IjI3OTQ1NDYzNTg0In0.Hqr_fv6zyn9NGX5BZns1a_eMvp3ZJjIfKrIX9TXy4fnucd6f_fminrnG4sLyTEgurzmWPtDq9cmf0ANACZlOBSvAJZ3kd1wgyCE2kNoX9eQi3yb8GH_6o_VuFD6qnCmWDERNsFABlzDWBXyl6dKaIK7O16d036AjjYdoTITmPJN3JrNKjSzHgWpxpg55LQafXp2W5FlqyyarXFVB4a7239Wwfd8b0mgnBNRZ8pRbsAggEOMAb6glJ13W3viafX_EBIoHdb4meJKR89XxkG5KyWJsC6Bpg5-LeNnz4qaK6-PG-pFmeZAb6e4OtU6JogAyoMuPtcS7E55e_C_IQiwqsA';
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
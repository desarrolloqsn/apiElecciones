import fs from 'fs';
import { ListaJson } from 'src/models/controllesInterface';
//funcion del para sumarle 
// export function delay(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
//funcion para hacer el llamado al archivo de url que pasa nico
export  function callUrls() {
  const url = fs.readFileSync('./url.json','utf-8');
  return JSON.parse(url)
}
export function callReview() {
  const url = fs.readFileSync('./TRADUCTOR.json', 'utf-8');
  return JSON.parse(url);
}
const token = 'eyJraWQiOiJETU5RbVZ6ZlpBd2xTZUN5YkFNcGZNbTZjUlV5Y0NqMVFDZXRYSTNqM0tBPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5NGY4NzQ2OC05MDIxLTcwYzItZTk1OS05YTMwNWQzODA1MmUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9LTEtUVWRGQmciLCJjbGllbnRfaWQiOiI0anJhZnU5YTdpOWFtbDU3cWxocnEyMHFwMyIsIm9yaWdpbl9qdGkiOiJjYWI4MmM0Mi05ZGQzLTQ0MGEtODNlNS1kYmQwMzA4YjcxODAiLCJldmVudF9pZCI6IjJhMWE5OWM2LTQxZWUtNGM3MC1hYTY0LTBlNjQ4YTNkZTNhNSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2OTE3NTY1OTEsImV4cCI6MTY5MTg0Mjk5MSwiaWF0IjoxNjkxNzU2NTkxLCJqdGkiOiIzZjY0ZjZmZi04MmVhLTQwN2QtYWEyZS01YjRlZmQ2ZDNlMzgiLCJ1c2VybmFtZSI6IjI3OTQ1NDYzNTg0In0.nHh5yQ76uRQeSID_7BmFgeTv65CyHXF_R7EHKMovTxzcfi_FHf74yQMk4Zxi37iVcWxZeWAChHdWhgyv3eerelqRUNYIGLLubaRpn1YJJLu00hWodGV4Rmup3_O1_lzjF67N6MKULu8nQDoepUcBOtZHnrf3yvgPNw_lSiHBdCzWSUAAzR8arMcobyzfrcRDj2AchEQdSCb2WmLVETMHH1mY1ynQ7_A8ZCNZX-w64GqfWUgV9cTEwGcuTU0b2hD8Ai3B4-tWbLBofwjBJaMsXSxcoEYPmh0z4WxN5NkcRvm0EWunN38GkFlMxyhUHtMdmt_47sgtsUpr62zrr_EtVw';
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
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
const token = 'eyJraWQiOiJETU5RbVZ6ZlpBd2xTZUN5YkFNcGZNbTZjUlV5Y0NqMVFDZXRYSTNqM0tBPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5NGY4NzQ2OC05MDIxLTcwYzItZTk1OS05YTMwNWQzODA1MmUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9LTEtUVWRGQmciLCJjbGllbnRfaWQiOiI0anJhZnU5YTdpOWFtbDU3cWxocnEyMHFwMyIsIm9yaWdpbl9qdGkiOiJiZGRiNjRiZS1jOTU1LTQ0YzUtYWI5Mi1jYTJmMmU4NmQxZGEiLCJldmVudF9pZCI6IjU2YWZlN2EyLWEyYTktNDM5Yy1iMzlhLTY1ZjliYzViODQxYSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MDA0MjY4NjUsImV4cCI6MTcwMDUxMzI2NSwiaWF0IjoxNzAwNDI2ODY1LCJqdGkiOiJjODdhOWY0Mi1mMTZjLTQ1ZDYtOGFjNi01ZTJkZGRlZjdhNDkiLCJ1c2VybmFtZSI6IjI3OTQ1NDYzNTg0In0.KWlzwODqmzrdPsgwF_YEMyVp4266n9pq_fNSrr_YRRSyguOMSBijHw-VI_ovy-wVJAfFS9N9Uv_iDKXZtd0roWYSDX_s0ID9ZweHotli6INPJQgPhnPvLYvym8o4GXDnyErvtZj77RnDvPlMT1iLJvudKhNw-M2VDlWn2LyJacmiZZY_j1d7tX1nGejc666oRelJQM1DvfB1T8uVpUQDZOnDTMXiNSvt8D4fy-SNsPuTdp3DKPlwCN6Sd-ng-sjFHCULkS59ioS8AVTsQAR_ptjLqKYCLl6XxpiKYxMPhR1TfG7XclAFSAs-9frMi12Yoj-L_JE3B6vDALDfodWQqA';
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
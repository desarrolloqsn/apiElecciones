"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkStatus = exports.requestOptions = exports.callUrls = void 0;
const fs_1 = __importDefault(require("fs"));
//funcion del para sumarle 
// export function delay(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
//funcion para hacer el llamado al archivo de url que pasa nico
function callUrls() {
    const url = fs_1.default.readFileSync('./url.json', 'utf-8');
    return JSON.parse(url);
}
exports.callUrls = callUrls;
const token = 'eyJraWQiOiJETU5RbVZ6ZlpBd2xTZUN5YkFNcGZNbTZjUlV5Y0NqMVFDZXRYSTNqM0tBPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5NGY4NzQ2OC05MDIxLTcwYzItZTk1OS05YTMwNWQzODA1MmUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9LTEtUVWRGQmciLCJjbGllbnRfaWQiOiI0anJhZnU5YTdpOWFtbDU3cWxocnEyMHFwMyIsIm9yaWdpbl9qdGkiOiJhMzAwZjg5ZC1lMTRmLTRiYmQtYmUzNi01ZTcwYzVlNzFlMzAiLCJldmVudF9pZCI6IjhiZGQ0ZjUyLTZmYjctNDJhMy05NWFmLTAxMjUwMTkyMzYxZCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2OTE0ODk5NzIsImV4cCI6MTY5MTU3NjM3MiwiaWF0IjoxNjkxNDg5OTcyLCJqdGkiOiJmM2FjOGI2OS1lZDM2LTRhYmMtYjcwYy02MWI5ODYxYzE0MTUiLCJ1c2VybmFtZSI6IjI3OTQ1NDYzNTg0In0.NRu0yp0o1f5OGs0-goOFqzzf4v2GukDqJ5gJQWqsMxxZWLIgLB3b-86TUuGaLi7PWJQAh7als3hXEg0lyOAoJqlD3--N-wy1IS8dfyppNGhZarL8gjJyqQkLtHkMFjGTVRb8i9c66d-hAxryIZQOCVNZs1law32mzmLcqwAy0Fdv4vZz2JPfsgSLZumt0yqM_XkhajIj4g6exL3UXl19IRoiFwDwzDFVgbxtBgiB7viib9bd-vOqu7ON8k78ZH94QPDVS69pTQRHiZE8hKPBBkw5ta54E_WvPzOqqxpLvSEZqoKiGaBCPiTyXZSGLtFIswS-7qa6UBzj8mzaktR1Sg';
exports.requestOptions = {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
};
async function checkStatus(status) {
    if (status == 401)
        throw new Error(' Error: Unauthorized (401) ');
}
exports.checkStatus = checkStatus;
//# sourceMappingURL=utils.js.map
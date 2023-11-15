export interface Config {
    host: string;
    port: number;
    user: string;
    password: string;
  }
  
export interface Options {
    logging: 'basic' | 'none' | 'info' | 'warn' | 'error' | 'debug';
  }

export interface Url{
  ID: string;
  PUESTO: string;
  DISTRITO: string;
  URL: string;
}
export interface UrlPBA{
  ID: string;
  "DISTRITO DINE": string;
  "DISTRITO CANAL": string;
  URL: string;
}


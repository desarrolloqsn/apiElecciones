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
  PUESTO: string;
  DISTRITO: string;
  URL: string;
}
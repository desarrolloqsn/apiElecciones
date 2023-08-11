import { Client as FTPClient } from 'basic-ftp';

export async function enviar_archivo_ftp(
  host: string,
  puerto: number,
  usuario: string,
  contrasena: string,
  archivo_local: string,
  ruta_remota: string
): Promise<void> {
  try {
    // Establecer conexión FTP
    const client = new FTPClient();
    await client.access({
      host,
      port: puerto,
      user: usuario,
      password: contrasena,
    });

    await client.cd(ruta_remota);

    // Subir el archivo al servidor FTP
    await client.uploadFrom(archivo_local, archivo_local);
    console.log('se mando con exito')
    await client.close();

    console.log(`Archivo "${archivo_local}" enviado con éxito a "${ruta_remota}" en el servidor FTP.`);
  } catch (error) {
    console.error(`Error al enviar el archivo: ${error}`);
  }
}

// Configuración de conexión FTP y detalles del archivo
const host_ftp = 'ftp.telearteonline.net';
const puerto_ftp = 21;
const usuario_ftp = 'datoselecciones';
const contrasena_ftp = 'Pjos7(Ld33';
const archivo_local_a_enviar = './src/db/Resultados.xml';
const ruta_remota_servidor = '/'; // Ruta remota

//enviar_archivo_ftp(host_ftp, puerto_ftp, usuario_ftp, contrasena_ftp, archivo_local_a_enviar, ruta_remota_servidor);

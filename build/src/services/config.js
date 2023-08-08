"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basic_ftp_1 = require("basic-ftp");
async function enviar_archivo_ftp(host, puerto, usuario, contrasena, archivo_local, ruta_remota) {
    try {
        // Establecer conexión FTP
        const client = new basic_ftp_1.Client();
        await client.access({
            host,
            port: puerto,
            user: usuario,
            password: contrasena,
        });
        await client.cd(ruta_remota);
        // Subir el archivo al servidor FTP
        await client.uploadFrom(archivo_local, archivo_local);
        await client.close();
        console.log(`Archivo "${archivo_local}" enviado con éxito a "${ruta_remota}" en el servidor FTP.`);
    }
    catch (error) {
        console.error(`Error al enviar el archivo: ${error}`);
    }
}
// Configuración de conexión FTP y detalles del archivo
const host_ftp = 'ftp.telearteonline.net';
const puerto_ftp = 21;
const usuario_ftp = 'datoselecciones';
const contrasena_ftp = 'Pjos7(Ld33';
const archivo_local_a_enviar = 'data.xml';
const ruta_remota_servidor = '/'; // Ruta remota
enviar_archivo_ftp(host_ftp, puerto_ftp, usuario_ftp, contrasena_ftp, archivo_local_a_enviar, ruta_remota_servidor);
//# sourceMappingURL=config.js.map
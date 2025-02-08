import { createHeader } from './partials/header.js';
import { createHead } from './partials/head.js';
import { createFooter } from './partials/footer.js';

export const renderAboutHtml = () => {
  const title = 'Acerca de Mi Librería | Mi librería';
  const pageTitle = 'Mi librería';

  return `
        <!DOCTYPE html>
        <html lang="es">
            ${createHead(title)}
            <body>
                ${createHeader(pageTitle)}

                <main>
                    <section>
                        <h2>Acerca de Mi Librería</h2>
                        <p>
                            A través de este portal web, el cliente (entendiéndose como tal cualquier persona física o jurídica) podrá adquirir los diferentes productos ofertados por SOPORTES DE LECTURA, S.L. (en adelante, “La Librería”). En aquellos productos para los que La Librería no disponga de existencias en ese momento, su intervención se limitará a canalizar la solicitud del cliente ante la distribuidora y, en caso de confirmarse por parte de la distribuidora la existencia del producto solicitado por el cliente, este podrá iniciar el trámite para la adquisición de dicho producto a través de este portal web en base a los términos y condiciones establecidos.</p>
                            <p>

Es imprescindible registrarse en la web como cliente para:
-    cambiar la clave de acceso a la cuenta.
-    consultar el estado de los pedidos pendientes.
-    consultar o modificar tus datos personales.
No es necesario registrarse como cliente para:
-    comprar.
Para registrarse como cliente Vd. deberá rellenar el formulario de registro, en el apartado “Mi cuenta” (se accede en la parte superior derecha, en el menú principal), o bien en cualquier momento en que se te solicite la identificación de acceso (página de ''login'').
Su dirección email y una contraseña son los datos que le identifican como cliente. Si ha olvidado la contraseña, seleccione la opción correspondiente y se la enviaremos a su buzón de correo.
Puede modificar sus datos personales (cambio de domicilio, de email,…) o cambiar su contraseña entrando desde la misma opción “Mi cuenta”  en el menú principal. Si realiza un pedido, se tendrán en cuenta para ese pedido los datos que tuviese registrados en ese momento.
                        </p>
                    </section>
                </main>
                ${createFooter()}
            </body>
        </html>
    `;
};

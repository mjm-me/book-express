// import { html } from 'lit-html';
import { createHeader } from './partials/header.js';
import { createHead } from './partials/head.js';
import { createDialogNav } from './partials/dialog-nav.js';
import { createFooter } from './partials/footer.js';

export const renderIndexHtml = () => {
  const title = 'Inicio | Mi librería';
  const pageTitle = 'Mi librería';

  return `
        <!DOCTYPE html>
        <html lang="en">
            ${createHead(title)}
            <body>
                ${createHeader(pageTitle)}
                ${createDialogNav()}
                <main>
                    <section>
                        <h2>Mi librería</h2>
                        <p>El mes de agosto del 2009 abría por primera vez sus puertas al público la librería Lé, fruto de la iniciativa particular y la ilusión de personas dedicadas al mundo de los libros durante años. Pretendemos que nuestra librería sea un lugar donde puedas acercarte a los libros y encontrar lo que buscas o necesitas, pero también pretendemos que los libros se acerquen a ti. Con ese propósito realizamos diversos eventos e iniciativas, como cuentacuentos para los más pequeños, presentaciones y firmas de libros, encuentros con autores, charlas y coloquios, un espacio dedicado a exposiciones o nuestro Club de Lectura.</p>
                        <p>Comenzamos nuestra andadura en el Paseo de la Castellana, en el histórico local donde antes que nosotros estuvieron la librería Crisol y la librería Aguilar. En julio de 2021 inauguramos una nueva etapa cambiándonos a un local más moderno, cálido y funcional en la Avenida Alberto Alcocer nº 8, a apenas 400 metros de nuestra anterior ubicación. Sus dos plantas y sus casi 500 metros cuadrados convierten a Lé en una de las librerías de iniciativa particular más grandes de Madrid. Nuestras estanterías albergan una variada gama de libros y temáticas: desde la narrativa clásica hasta la más actual, la poesía y el teatro, comic y libros ilustrados, obras de historia, filosofía, economía, ciencia, cocina, pedagogía, psicología, derecho, nuevas tecnologías, política, sociología, arte, religión, viajes… y también una cuidada sección infantil y juvenil. Todo ello tiene cabida en este espacio dedicado a los libros. Esperamos que entre nuestros estantes encuentres lo que buscas, y si no realizar las gestiones pertinentes para poder proporcionártelo.</p>
                        <p>Es también nuestra intención que en la librería encuentres un entorno agradable donde adquirir libros sea algo más que una mera transacción comercial. Para ello contamos con un equipo de personal especializado, con años de bagaje en el sector de las librerías, que te atenderán y asesorarán lo mejor posible. El trato personalizado al cliente es nuestra marca distintiva, pretendemos que el cliente no sea sólo un cliente sino que poco a poco se convierta también en un amigo.</p>
                        <p>Queremos que te sientas como en tu casa y que Lé sea un punto de encuentro cultural en la zona norte de Madrid.</p>
                        <p>¡¡ Te esperamos !!</p>
                    </section>
                </main>
                ${createFooter()}
            </body>
        </html>
    `;
};

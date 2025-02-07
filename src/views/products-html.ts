import { createHeader } from './partials/header.js';
import { createHead } from './partials/head.js';
import { createFooter } from './partials/footer.js';
import { createCatalog } from './partials/catalog.js';

export const renderProductsHtml = () => {
  const title = 'Libros | Mi librería';
  const pageTitle = 'Mi librería';

  return `
        <!DOCTYPE html>
        <html lang="en">
            ${createHead(title)}
            <body>
                ${createHeader(pageTitle)}

                <main>

                    <section>
                        <h2>Catálogo de libros</h2>
                        <p>
                            Podrás encontrar más información sobre nuestros libros y comprar el que desees.
                        </p>
                        ${createCatalog()}
                    </section>
                    
                </main>
                ${createFooter()}
            </body>
        </html>
    `;
};

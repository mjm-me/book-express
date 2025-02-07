import { createHeader } from './partials/header.js';
import { createHead } from './partials/head.js';
import { createFooter } from './partials/footer.js';
import { createCatalog } from './partials/catalog.js';
import { booksCollection } from '../../data/books.js';

export const renderBookHtml = () => {
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
                            Verás un libro concreto
                        </p>
                        ${createCatalog()}
                    </section>
                    
                </main>
                ${createFooter()}
            </body>
        </html>
    `;
};

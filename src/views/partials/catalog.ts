import { booksCollection } from '../../data/books.js';

export function createCatalog() {
  const template = `
        <section>
         <nav class="inline">
            <ul>
                <li class="menu-tablet">
                    <a href="/product/${book.id}" target="_blank">${booksCollection.book1.title}</a>
                    ${booksCollection.book1.author}</span>
                    ${booksCollection.book1.price}</span>
                </li>
                <li class="menu-tablet">
                    <a href="" target="_blank">${booksCollection.book2.title}</a>
                    ${booksCollection.book2.author}</span>
                    ${booksCollection.book2.price}</span>
                </li>
                <li class="menu-tablet">
                    <a href="" target="_blank">${booksCollection.book3.title}</a>
                    ${booksCollection.book3.author}</span>
                    ${booksCollection.book3.price}</span>
                </li>
                 <li class="menu-tablet">
                    <a href="" target="_blank">${booksCollection.book4.title}</a>
                    ${booksCollection.book4.author}</span>
                    ${booksCollection.book4.price}</span>
                </li>
                </ul>
            </nav>
        </section>
    `;
  return template;
}

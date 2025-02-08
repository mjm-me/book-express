import { createHeader } from './partials/header.js';
import { createHead } from './partials/head.js';
import { createFooter } from './partials/footer.js';
import { Request, Response } from 'express';
import createDebug from 'debug';
//import { renderProductsHtml } from './views/products-html.js';
import fs from 'fs';
import path from 'path';

// views/products-html.js

export const renderProductsHtml = (books) => {
  let booksHtml = '';
  books.forEach((book) => {
    booksHtml += `
      <div>
        <img src="${book.image}" alt="${book.title}" width="100" />
        <h2><a href="/book/${book.id}">${book.title}</a></h2>
        <p>Autor: ${book.author}</p>
        <p>Editorial: ${book.editorial}</p>
        <p>ISBN: ${book.isbn}</p>
        <p>Páginas: ${book.pages}</p>
        <p>Precio: ${book.price} €</p>
      </div>
    `;
  });

  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Productos</title>
    </head>
    <body>
      <h1>Listado de Libros</h1>
      ${booksHtml}
    </body>
    </html>
  `;
};
xs;

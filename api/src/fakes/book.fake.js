// Importa la API que genera datos falsos
const { faker } = require('@faker-js/faker');

// Genera un libro falso
const generateOneBook = () => ({
  // Utiliza la biblioteca faker-js para generar un ID único para el libro
  _id: faker.datatype.uuid(),

  // Genera un nombre de producto falso utilizando la biblioteca faker-js
  name: faker.commerce.productName(),

  // Genera un precio falso utilizando la biblioteca faker-js
  price: faker.commerce.price(),
});

// Genera varios libros falsos
const generateManyBook = (size) => {
  // Establece un límite predeterminado de 10 libros si no se proporciona un tamaño específico
  const limit = size ?? 10;

  // Crea un array vacío para almacenar los libros falsos generados
  const fakeBooks = [];

  // Itera hasta alcanzar el límite establecido y genera un libro falso en cada iteración
  for (let index = 0; index < limit; index += 1) {
    fakeBooks.push(generateOneBook());
  }

  // Devuelve una copia del array de libros falsos generados
  return [...fakeBooks];
};

// Exporta las funciones para que estén disponibles para otros módulos
module.exports = { generateOneBook, generateManyBook };

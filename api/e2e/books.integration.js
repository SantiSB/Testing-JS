// Define un mock para la función getAll del servicio de base de datos
const mockGetAll = jest.fn();

// Importa la biblioteca 'supertest' para realizar solicitudes HTTP en los tests
const request = require('supertest');

// Importa la función generadora de libros desde el módulo "book.fake"
const { generateManyBook } = require('../src/fakes/book.fake');

// Importa la función para crear la aplicación desde el módulo "app"
const createApp = require('../src/app');

// Implementa el mock para getAll y create del servicio de base de datos
jest.mock('../src/lib/mongo.lib.js', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => { },
})));

// Inicio de los tests
describe('Test for books', () => {
  let app = null;
  let server = null;

  // Configuración antes de todos los tests
  beforeAll(() => {
    // Crea la aplicación
    app = createApp();
    // Inicia el servidor en el puerto 3001
    server = app.listen(3001);
  });

  // Configuración después de todos los tests
  afterAll(async () => {
    // Cierra el servidor
    await server.close();
  });

  // Tests para la ruta [GET] /api/v1/books
  describe('Test for [GET] /api/v1/books', () => {
    test('should return a list of books', () => {
      // Arrange
      // Genera libros falsos
      const fakeBooks = generateManyBook(3);
      // Establece el valor resuelto del mock de la función getAll
      mockGetAll.mockResolvedValue(fakeBooks);

      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);

          // Assert
          expect(body.length).toEqual(fakeBooks.length);
        });
    });
  });
});

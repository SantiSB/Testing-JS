// Importa las funciones generadoras de libros desde el módulo "book.fake"
const { generateManyBook } = require('../fakes/book.fake');

// Importa el servicio de libros desde el módulo "books.service"
const BooksService = require('./books.service');

// Define un mock para la función getAll del servicio de base de datos
const mockGetAll = jest.fn();

// Implementa el mock para getAll y create del servicio de base de datos
jest.mock('../../src/lib/mongo.lib.js', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

// Inicio de los tests
describe('Test for BooksService', () => {
  let service;

  // Limpia todos los mocks antes de cada test
  jest.clearAllMocks();

  // Configuración previa a cada test
  beforeEach(() => {
    // Crea una nueva instancia del servicio de libros
    service = new BooksService();
  });

  // Tests para la función getBooks
  describe('Test for getBooks', () => {
    // Test asíncrono que verifica si se devuelve una lista de libros
    test('should return a list of books', async () => {
      // Arrange
      // Genera libros falsos
      const fakeBooks = generateManyBook(20);

      // Establece el valor resuelto del mock de la función getAll
      mockGetAll.mockResolvedValue(fakeBooks);

      // Act
      const books = await service.getBooks({});

      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    // Test asíncrono que verifica si se devuelve un libro específico
    test('should return a specific book', async () => {
      // Arrange
      const fakeBooks = generateManyBook(4);
      mockGetAll.mockResolvedValue(fakeBooks);

      // Act
      const books = await service.getBooks({});

      // Assert
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});

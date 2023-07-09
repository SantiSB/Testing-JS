// Importa la biblioteca 'supertest' para realizar pruebas HTTP
const request = require('supertest');

// Importa la clase 'MongoClient' de la biblioteca 'mongodb'
const { MongoClient } = require('mongodb');

// Importa la función 'createApp' del archivo 'app.js'
const createApp = require('../src/app');

// Importa el objeto 'config' del archivo 'config.js'
const { config } = require('../src/config');

// Obtiene el nombre de la base de datos de la configuración
const DB_NAME = config.dbName;

// Obtiene la URL de la base de datos de la configuración
const MONGO_URL = config.dbUrl;

// Bloque de pruebas principal
describe('Test for books', () => {
  // Variables para la aplicación, el servidor y la base de datos
  let app = null;
  let server = null;
  let database = null;

  // Antes de todas las pruebas, se ejecuta esta función
  beforeAll(async () => {
    // Crea la aplicación
    app = createApp();

    // Inicia el servidor en el puerto 3002
    server = app.listen(3002);

    // Crea una instancia del cliente de MongoDB con la URL y opciones
    const client = new MongoClient(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Conecta al cliente a la base de datos
    await client.connect();

    // Asigna la base de datos conectada a la variable 'database'
    database = client.db(DB_NAME);
  });

  // Después de todas las pruebas, se ejecuta esta función
  afterAll(async () => {
    // Cierra el servidor
    await server.close();

    // Elimina la base de datos
    await database.dropDatabase();
  });

  // Bloque de pruebas para el endpoint [GET] /api/v1/books
  describe('Test for [GET] /api/v1/books', () => {
    // Prueba: debe devolver una lista de libros
    test('should return a list of books', async () => {
      // Arrange: inserta datos de prueba en la colección 'books'
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book 1',
          year: 1998,
          author: 'nicol',
        },
        {
          name: 'Book 2',
          year: 1999,
          author: 'nicolasa',
        },
      ]);
      console.log(seedData);

      // Act: realiza una solicitud HTTP GET a la ruta '/api/v1/books'
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);

          // Assert
          // Verifica que la longitud de respuesta sea igual a la cantidad de datos insertados
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});

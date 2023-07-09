# Apuntes sobre Unit Testing para JavaScript (Jest)

En este documento se presentan algunos apuntes sobre pruebas unitarias y herramientas de testing para JavaScript utilizando Jest.

## Pruebas Unitarias

Las pruebas unitarias, también conocidas como "pruebas aisladas", son las más comunes en el desarrollo de software. Una unidad puede ser una función, una clase o cualquier otra entidad dependiendo del contexto.

### Tipos de pruebas

- Pruebas de caja negra: Solo se enfocan en el input y output, sin tener en cuenta la lógica interna de la unidad.
- Pruebas de caja blanca: Se analiza la lógica interna y se realizan pruebas de comportamiento más exhaustivas.

### Pirámide y trofeo de pruebas

En lugar de seguir la pirámide clásica del testing, en JavaScript se sugiere seguir el "trofeo de tests", que propone la siguiente estructura:

- Static tests (pruebas estáticas): Mayor número de pruebas.
- Unit tests: Mismo número de pruebas que e2e y menos que static e integration.
- Integration tests: El mayor número de pruebas debe estar aquí.
- End-to-end tests: Mismo tamaño que unit tests y menos que static e integration.

## Deuda Técnica

La deuda técnica se refiere a compromisos adquiridos durante el desarrollo, diseño y pruebas que deben resolverse en algún momento. Al hacer pruebas, se maneja el riesgo y se cura la deuda técnica en diferentes etapas de la compañía.

## Herramientas de Testing

Las herramientas de testing se clasifican según el tipo o nivel de pruebas a realizar.

### Multi propósito o Robustas

- Jest
- Chai
- Mocha
- Ava
- Jasmine

### Pruebas de Interfaz de Usuario (UI)

- Playwright
- Cypress
- WebdriverIO
- Puppeteer

### Pruebas de API

- Supertest
- Dredd
- Postman

### Pruebas Estáticas

- ESLint
- Prettier
- Herramientas de TypeScript (TSLint)

## Pruebas Estáticas

Las pruebas estáticas analizan el código sin ejecutarlo y proporcionan un feedback temprano sobre las buenas prácticas de programación.

## Assertions (Afirmaciones)

Las afirmaciones permiten verificar el comportamiento del código. Algunos de los assertions más comunes en Jest son:

- expect
- toBe
- toEqual
- toMatch
- toBeNull
- toBeUndefined
- toBeDefined
- toBeTruthy
- toBeFalsy
- toThrow

## Organización de pruebas

Para organizar las pruebas, se pueden utilizar las siguientes funciones:

- describe
- beforeAll
- beforeEach
- afterEach
- afterAll

## Tipos de Pruebas

### Conceptos

- SUT (System Under Test): Sujeto Bajo Prueba.
- Validar
- Verificar

### Metodologías

- TDD (Test Driven Development)
- BDD (Behavior Driven Development)

## Falsos positivos y falsos negativos

- Falso positivo
- Falso negativo

## Sistema Legacy y Clean Architecture

- Sistema Legacy
- Clean Architecture

## AAA en BDD

Cuando se utiliza BDD, se debe utilizar un lenguaje común llamado Gherkin, entendido tanto por el equipo técnico como por el equipo de negocio.

## Definición de unidad

Una unidad puede ser una función o una clase, y su definición depende del contexto en el que se encuentre.

# Cobertura

La cobertura es una medida porcentual que indica cuánto del código que se enviará a producción ha sido probado y cuánto falta por probar. También muestra qué partes del código no se utilizan. Aunque ISO y la FAA exigen un 100% de cobertura, en la realidad esto puede variar. Por ejemplo, probar los setters y getters puede resultar innecesario en algunos casos. Alcanzar el 100% de cobertura no garantiza la ausencia de errores ni que se haya implementado el mejor conjunto de pruebas.

# Doubles en Pruebas de Software

Los "doubles" son objetos o técnicas utilizadas en las pruebas de software para simular comportamientos o datos. Estos "doubles" son herramientas útiles para llenar información ficticia y para simular interacciones con componentes externos, como bases de datos o servicios web.

## Tipos de Doubles

### Dummy

Los "dummies" son datos ficticios que se utilizan para llenar información en las pruebas. Estos datos no tienen un impacto real en el funcionamiento del sistema, pero son necesarios para cumplir con los requisitos de entrada de una prueba.

### Fake

Los "fakes" son objetos que simulan comportamientos o datos de manera simplificada. Estos objetos se utilizan para suplantar componentes reales en las pruebas, proporcionando respuestas predefinidas y controladas. Por ejemplo, se pueden utilizar "fakes" para simular un usuario ficticio en un escenario de prueba.

## Requisitos

- [Faker.js](https://fakerjs.dev/): Biblioteca para generar datos falsos.

## Uso de Fakes de Respuesta (Mocking)

El "mocking" es una técnica que utiliza "fakes de respuesta" para simular el comportamiento de componentes externos durante las pruebas. Estos "fakes de respuesta" se utilizan para evitar dependencias reales y para controlar el flujo de ejecución de las pruebas. Al utilizar "fakes de respuesta", se pueden simular diferentes escenarios y condiciones para verificar el comportamiento del sistema bajo diferentes circunstancias.

## Pruebas end-to-end

Las pruebas end-to-end son un tipo de prueba que evalúa la funcionalidad y el comportamiento de todo el sistema, desde el inicio hasta el final. Estas pruebas simulan el flujo completo de una aplicación, involucrando múltiples componentes y escenarios de uso. Las pruebas end-to-end son útiles para detectar problemas de integración, validar requisitos funcionales y garantizar que el sistema funcione correctamente en su conjunto.

## Referencias

- Faker.js: [https://fakerjs.dev/](https://fakerjs.dev/)

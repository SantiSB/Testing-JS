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

### Pruebas de UI (Interfaz de Usuario)

Las pruebas de UI, también conocidas como pruebas de interfaz de usuario, se centran en la validación del aspecto visual y la interacción del software con los usuarios. Estas pruebas pueden involucrar la simulación de acciones del usuario, como hacer clic en botones, ingresar texto en campos de entrada, navegar por páginas y verificar que los elementos se muestren correctamente en la interfaz de usuario.

### Automatización con GitHub Actions

GitHub Actions es un servicio de integración continua y automatización de tareas en GitHub. Permite definir flujos de trabajo personalizados que se activan en respuesta a eventos específicos, como la confirmación de cambios en un repositorio. Con GitHub Actions, es posible automatizar la ejecución de pruebas y otros procesos de desarrollo, lo que ayuda a mantener la calidad del código y acelerar el ciclo de entrega.

En el contexto de las pruebas, se puede utilizar GitHub Actions para ejecutar automáticamente las pruebas unitarias, de integración y de UI cuando se realizan cambios en el repositorio. Esto permite obtener una retroalimentación rápida sobre la calidad del código y detectar posibles problemas de manera temprana.

Es importante tener en cuenta que la configuración específica de GitHub Actions puede variar según las necesidades y el entorno de desarrollo de cada proyecto.

# JavaScript Testing

En este documento se presentan algunos apuntes sobre testing con JavaScript.

## Testing

Proceso utilizado en el desarrollo de software para evaluar la calidad y el rendimiento de un sistema o aplicación.
Consiste en ejecutar el software con el propósito de identificar errores, defectos o problemas en su funcionamiento.
El proceso de testing implica diseñar y ejecutar casos de prueba, que son escenarios o situaciones específicas en las que se evalúa el comportamiento del software.

## Deuda técnica
Se refiere a problemas en el diseño, la calidad del código o la infraestructura que pueden causar retrasos, dificultades y costos adicionales en el futuro. 
Es importante gestionar y reducir la deuda técnica para mantener un software sostenible y de calidad.

## ¿Por qué hacer testing?
Normalmente hay cuatro fases en el desarrollo de software para crear un producto:

Diseño ⇒ Desarrollo ⇒ Pruebas ⇒ Producción

En estas fases, detectar un error se vuelve cada vez más costoso. Ahí es donde hacemos técnicas para prevenir estas situaciones. 
El testing es la manera en la que nosotros gestionamos el riesgo y tratamos de evitar, en la medida de lo posible, los errores en el sistema.

## Etapas de una empresa y sus enfoques de pruebas:
  1.	Tracción: En esta etapa inicial, el enfoque principal está en las pruebas de concepto y la validación de la idea o el producto. Se realizan pruebas para obtener retroalimentación rápida y validar la propuesta de valor.
  2.	Inflexión: Durante la etapa de crecimiento acelerado, se pone énfasis en asegurar la estabilidad y la escalabilidad del producto. En esta fase, las pruebas estáticas desempeñan un papel importante para verificar la calidad del código y detectar posibles problemas antes de que afecten al producto. 
  3.	Escala: A medida que la empresa se expande, el enfoque se dirige hacia la automatización de las pruebas y la mejora continua. En esta etapa, se implementan pruebas unitarias y de integración para garantizar la calidad del software a medida que la compañía crece. 
  4.	Expansión: En esta etapa de expansión y madurez, las pruebas automatizadas se vuelven esenciales para mantener la calidad del software a medida que se agregan nuevas funcionalidades y se abordan diferentes mercados. En esta etapa se implementan pruebas E2E, de rendimiento y de regresión.

## Metodologías
Enfoques y prácticas para el proceso de desarrollo y las pruebas.

### TDD (Test Driven Development)
El Desarrollo Guiado por Pruebas (TDD) es una metodología en la que las pruebas se escriben antes de desarrollar el código. 
El objetivo es escribir código que cumpla con los requisitos y las expectativas definidas por las pruebas.
Este enfoque ayuda a garantizar que el software sea funcional y confiable, y también promueve el diseño modular y la cobertura de pruebas exhaustiva.

### BDD (Behavior Driven Development)
El Desarrollo Guiado por el Comportamiento (BDD) se enfoca en el comportamiento esperado del software basado en los requisitos y las historias de usuario. 
En BDD, las pruebas se escriben en un lenguaje más cercano al lenguaje natural, lo que facilita la comprensión y colaboración entre los equipos de desarrollo y las partes interesadas. 
Esto ayuda a garantizar que el software cumpla con los requisitos y expectativas del negocio.

## Tipos de pruebas

### Pruebas de caja negra (Black-box testing)
Se centran en la funcionalidad externa del software, sin tener en cuenta los detalles internos de implementación. 
En este enfoque, el tester solo tiene acceso a la entrada (input) y salida (output) del software, sin conocer cómo se realiza el procesamiento interno. 
El objetivo principal de estas pruebas es verificar si el software cumple con los requisitos y produce los resultados esperados. 
El tester se basa en la especificación del software y en escenarios de prueba diseñados para cubrir diferentes casos. 
Esto ayuda a identificar errores o discrepancias entre la entrada y la salida, sin necesidad de conocer los detalles internos del código.

### Pruebas de caja blanca (White-box testing)
Se centran en el análisis y la evaluación de la lógica interna del software. 
En este enfoque, el tester tiene acceso a la estructura y el código fuente del software, lo que le permite realizar pruebas más exhaustivas y específicas. 
Se evalúa la ejecución del código, las condiciones lógicas, las rutas de ejecución y las estructuras de datos utilizadas en el software. 
El objetivo principal de estas pruebas es identificar errores y defectos que pueden surgir en el nivel de implementación y lógica del software. 
Esto implica diseñar pruebas que cubran diferentes caminos de ejecución, condiciones de borde y posibles casos problemáticos.

## Herramientas de testing

### Multipropósito o Robustas
Estas herramientas tienen la capacidad de ejecutar una amplia variedad de pruebas en diferentes niveles de la pirámide de testing.
Herramientas populares:
  -	Jest
  -	Chai
  -	Mocha
  -	Ava
  -	Jasmine.

### UI Testing
Las pruebas de UI se realizan en un navegador, ya sea en un dispositivo real o simulado, y automatizan acciones y gestos en la aplicación para validar su funcionamiento. 
Herramientas populares:
  -	Playwright
  -	Cypress
  -	WebdriverIO
  -	Puppeteer.

### API Testing
Las APIs, que no tienen interfaz de usuario, se prueban mediante peticiones a través de protocolos de servicios. 
Las herramientas de API testing permiten enviar solicitudes, verificar respuestas y validar el comportamiento de las APIs. 
Herramientas populares:
  -	Supertest
  -	Dredd
  -	Postman

## Pruebas Estáticas
Estas herramientas no ejecutan directamente el código, sino que se integran con el editor de código y analizan el código en busca de malas prácticas o errores potenciales. Ayudan a mantener la calidad y consistencia del código. 
Herramientas populares:
  -	ESLint
  -	Prettier
  -	Typescript

## Pruebas Estáticas
Pruebas que se centran en analizar el código fuente sin ejecutarlo. 
Se enfocan en identificar problemas potenciales, malas prácticas y errores de código antes de que se produzcan problemas en tiempo de ejecución.
El objetivo principal de las pruebas estáticas es mejorar la calidad del código y garantizar que se sigan buenas prácticas de desarrollo.
Herramientas:
  1.	ESLint: Es una herramienta de análisis estático de código para JavaScript y TypeScript. Permite definir reglas personalizadas para verificar el estilo, las convenciones y las posibles fuentes de errores en el código. ESLint ayuda a mantener un código limpio, consistente y libre de errores comunes.
  2.	Prettier: Es una herramienta de formateo de código que nos ayuda a mantener una estructura y estilo de código coherentes. Prettier analiza el código y lo reformatea automáticamente según las reglas de estilo predefinidas. Esto ayuda a mantener un código más legible y facilita la colaboración en equipos de desarrollo.
  3.	TypeScript: Es un lenguaje de programación que extiende JavaScript con características de tipado estático. Al utilizar TypeScript, se pueden realizar pruebas estáticas adicionales en el código para detectar posibles errores de tipo y mejorar la calidad del código.

## Pirámide de Testing 

La pirámide de testing es un modelo conceptual que representa la estructura jerárquica de las diferentes capas de pruebas en un proyecto de desarrollo de software. 

Niveles de la pirámide de testing:
  1.	Pruebas unitarias: Se enfocan en verificar el funcionamiento correcto de unidades individuales de código, como funciones, métodos o componentes. Son rápidas, automatizadas y se llevan a cabo por los propios desarrolladores.
  2.	Pruebas de integración: Verifican la interacción y comunicación correcta entre diferentes componentes, módulos o sistemas. Evalúan cómo se combinan y trabajan juntos los distintos elementos que han superado las pruebas unitarias. El objetivo es detectar problemas de interoperabilidad y asegurar que los componentes se integren sin fallos.
       2.1.	Pruebas end-to-end: Evalúan el flujo completo de la aplicación o sistema, simulando la interacción del usuario desde el inicio hasta el final. Verifican la funcionalidad general del sistema, incluyendo múltiples componentes y sistemas interconectados. Se centran en validar que el software funcione adecuadamente en situaciones reales, abarcando desde la interfaz de usuario hasta la capa de datos.
  3.	Pruebas de interfaz de usuario: Se centran en validar el comportamiento de la interfaz gráfica con la que los usuarios interactúan. Verifican que los elementos de la interfaz funcionen correctamente y sean intuitivos para los usuarios. 


## Pruebas unitarias

Se centran en verificar el funcionamiento correcto de unidades individuales de código en el desarrollo de software. Estas unidades pueden ser funciones, métodos, clases o cualquier otra entidad que tenga una funcionalidad específica dentro del sistema.
El objetivo de las pruebas unitarias es asegurarse de que cada unidad de código funcione correctamente de manera aislada, es decir, independientemente de las otras unidades o componentes con los que interactúa. 
Las pruebas unitarias suelen ser automatizadas, lo que significa que se escriben como código y se ejecutan automáticamente durante el proceso de desarrollo. Esto permite que las pruebas sean repetibles y se puedan ejecutar rápidamente cada vez que se realicen cambios en el código.
Al realizar pruebas unitarias, se pueden detectar y corregir errores en el código de manera temprana, lo que ayuda a mejorar la calidad del software y facilita su mantenimiento. También proporcionan una documentación viviente del comportamiento esperado de las unidades de código, lo que facilita la comprensión y colaboración entre los miembros del equipo de desarrollo.

### AAA "Mantra" para Pruebas Unitarias:

El mantra AAA es un enfoque utilizado para estructurar las pruebas unitarias. 
Es una guía para organizar el código de las pruebas y mejorar su legibilidad y mantenibilidad.
  1.	Arrange (preparar): Se establecen las condiciones iniciales y se configuran los objetos necesarios para la prueba. Se prepara el entorno y se crean los datos de prueba.
  2.	Act (ejecutar): Se ejecuta el código o la función que se está probando. Se realiza la acción que se quiere evaluar.
  3.	Assert (resolver hipótesis): Se realizan las afirmaciones o comparaciones para verificar si el resultado de la prueba es el esperado. Se comprueba si los resultados coinciden con las expectativas definidas.

### Assertions / Matchers: 

Las assertions (afirmaciones) o matchers (comparadores) son funciones utilizadas para verificar que un resultado o estado cumpla con una condición esperada.
Estas herramientas permiten definir expresiones que deben ser verdaderas para que la prueba pase correctamente. 
Por ejemplo, se pueden utilizar assertions para verificar que un valor sea igual a otro, que una condición sea verdadera o que una excepción sea lanzada. 

### Coverage Report (Informe de cobertura): 

Proporciona información sobre las partes del código que han sido cubiertas por las pruebas y las partes que aún no han sido ejecutadas. 
Es útil para evaluar la efectividad y la exhaustividad de las pruebas, ayudando a identificar áreas del código que necesitan una mayor cobertura o que no han sido probadas.

### Mocking: 

Es una técnica utilizada en las pruebas de software para simular o imitar el comportamiento de objetos o componentes dependientes. 
Durante las pruebas unitarias, es común que ciertas unidades de código dependan de otros componentes, como bases de datos, servicios web u otras clases. Al utilizar mocks, se pueden simular estos componentes dependientes para aislar la unidad de código que se está probando y controlar su comportamiento durante la ejecución de la prueba. 
Los mocks permiten establecer expectativas y definir respuestas simuladas para las interacciones con los componentes dependientes, lo que facilita la creación de pruebas más controladas y aisladas.

### Stub: 
Un stub es un tipo de objeto simulado o falso que se utiliza en las pruebas para reemplazar temporalmente un componente o funcionalidad dependiente. 
A diferencia de los mocks, los stubs no se centran en verificar las interacciones, sino en proporcionar respuestas predefinidas para las llamadas a los componentes dependientes. 
Los stubs se utilizan para simplificar las pruebas y asegurar que la unidad de código se ejecute correctamente sin la necesidad de involucrar a los componentes reales.

### Spies: 

Los spies (espías) son objetos utilizados en las pruebas para registrar información sobre las llamadas realizadas a un componente o función durante la ejecución de la prueba. 
Los spies permiten verificar si una función fue llamada, cuántas veces fue llamada, con qué argumentos y otros detalles relacionados. 
Se utilizan para observar y registrar el comportamiento de una función o componente durante las pruebas, sin afectar su implementación o lógica interna.

### Doubles: 

Los doubles son objetos que se utilizan en las pruebas para reemplazar temporalmente componentes o funcionalidades reales por versiones simplificadas.
Los doubles pueden ser mocks, stubs o cualquier otro objeto que imite el comportamiento del componente real, pero de forma simplificada y controlada. 
Los doubles se utilizan para aislar las unidades de código durante las pruebas y permiten crear pruebas más rápidas, predecibles y controladas.

### Dummy: 

Un dummy es un objeto utilizado en las pruebas que no tiene ninguna funcionalidad real. 
Se utiliza cuando se necesita proporcionar un objeto como argumento en una prueba, pero su comportamiento no es relevante para el escenario de prueba específico. 
Los dummies son objetos simples que cumplen con la interfaz requerida, pero no realizan ninguna acción significativa durante la prueba.

### Fake Data (Datos falsos): 

Son conjuntos de datos simulados o generados para utilizar en pruebas. Estos datos no son reales, pero se crean para imitar o representar diferentes situaciones y escenarios que puedan surgir durante la ejecución del software. 

## Pruebas de Integración
Son pruebas que se realizan para verificar la correcta interacción y funcionamiento conjunto de diferentes componentes o módulos de un sistema. 
Se centran en probar cómo los diferentes elementos del sistema interactúan entre sí y si cumplen con los requisitos y expectativas establecidas.
Cuando se realiza una prueba de integración, los componentes individuales ya han sido probados de manera aislada a través de las pruebas unitarias. 

### Tipos de tests de integración:

  -	Pruebas de integración de API: Verificar que los diferentes servicios y APIs se comuniquen correctamente y que los datos se transmitan de manera adecuada.
  -	Pruebas de integración de bases de datos: Asegurarse de que las bases de datos se conecten y funcionen correctamente con el software, verificando la inserción, actualización y recuperación de datos.
  -	Pruebas de integración de sistemas: Probar la interacción entre sistemas o componentes de software más grandes, como la integración de un sistema de facturación con un sistema de inventario.

### Pruebas end to end (E2E)

Se centran en verificar el comportamiento y la funcionalidad de un sistema de extremo a extremo, simulando la interacción del usuario con la aplicación en un escenario real. 
Se realizan para evaluar el flujo completo de un sistema, desde el inicio hasta el final, y asegurarse de que todos los componentes funcionen correctamente juntos.
Se enfocan en simular acciones y comportamientos del usuario, como hacer clic en botones, llenar formularios, navegar por diferentes páginas y verificar los resultados. 
Estas pruebas imitan los pasos y acciones que un usuario real llevaría a cabo al interactuar con la aplicación.
Involucran múltiples capas del sistema, incluyendo la interfaz de usuario, la lógica del negocio y la integración con sistemas externos. 
Pueden cubrir escenarios complejos y realistas que abarquen múltiples funcionalidades y flujos de trabajo.
Son útiles para detectar problemas que pueden surgir debido a la integración incorrecta de componentes, problemas de comunicación entre diferentes partes del sistema o errores en el flujo del proceso. 

### Supertest
Es una biblioteca de pruebas en JavaScript/Node.js que se utiliza específicamente para realizar pruebas de API. Proporciona una interfaz simple y flexible para realizar solicitudes HTTP y realizar aserciones sobre las respuestas recibidas.

## Pruebas de Interfaz de Usuario

Se centra en validar el aspecto visual y la interacción del software con los usuarios. 
Durante las pruebas de UI, se simulan acciones y eventos que un usuario realizaría en la aplicación, como hacer clic en botones, ingresar texto en campos de entrada, seleccionar opciones de menú y navegar por diferentes páginas. 
Pueden ser realizadas de forma manual, donde un tester realiza las interacciones y verifica los resultados visualmente. 
También se pueden automatizar utilizando herramientas específicas que simulan las acciones del usuario y realizan comprobaciones automáticas en la interfaz.

## Pruebas de rendimiento 

Son un tipo de prueba de software diseñada para evaluar cómo se comporta una aplicación, sistema o componente en términos de su rendimiento y capacidad de respuesta bajo diferentes cargas y condiciones. 
El objetivo principal de estas pruebas es identificar posibles cuellos de botella, problemas de rendimiento y evaluar la eficiencia general del sistema.

## Pruebas de regresión
Se realiza para asegurarse de que los cambios o actualizaciones realizados en una aplicación o sistema no hayan introducido nuevos errores o hayan afectado negativamente las funcionalidades existentes. 

## Automatización de Pruebas

Se refiere al proceso de utilizar herramientas y software especializados para ejecutar pruebas de forma automatizada, en lugar de realizarlas manualmente.
Consiste en escribir scripts o código que simulan las acciones del usuario y realizan verificaciones automatizadas sobre la funcionalidad y el rendimiento del software.
La automatización de pruebas puede abarcar diferentes tipos de pruebas, como pruebas unitarias, pruebas de integración, pruebas de interfaz de usuario (UI), pruebas de rendimiento y pruebas de regresión. 

Beneficios:
-	Ahorro de tiempo y recursos
-	Mayor cobertura de pruebas
-	Mayor precisión y consistencia
-	Identificación temprana de problemas
-	Facilita la repetición de pruebas
-	Mejora la calidad del software

## Integración Continua y Despliegue Continuo (CI/CD)

(Continuous Integration / Continuous Deployment) 

Son prácticas en el desarrollo de software que se enfocan en la automatización y la entrega rápida y confiable de aplicaciones.

### Integración Continua 

Se refiere a la práctica de combinar y probar regularmente el código fuente de un proyecto a medida que los desarrolladores lo van modificando. 
Consiste en integrar el trabajo de varios desarrolladores en un repositorio centralizado y realizar pruebas automatizadas para identificar errores de manera temprana. 
Características:
  -	Control de versiones: Utiliza un sistema de control de versiones, como Git, para gestionar el código fuente y permitir a los desarrolladores trabajar en paralelo en diferentes ramas.
  -	Automatización de pruebas: Se ejecutan pruebas automatizadas (como pruebas unitarias y pruebas de integración) cada vez que se realiza una nueva integración de código. Estas pruebas verifican que el código se integre correctamente y no introduzca errores en el sistema.
  -	Construcción automática: Se utiliza una herramienta de construcción automatizada, como Jenkins o Travis CI, para compilar y generar versiones ejecutables del software en un entorno controlado y reproducible.
  -	Notificaciones y retroalimentación: Los resultados de las pruebas y la construcción se notifican a los desarrolladores, lo que permite identificar rápidamente cualquier problema y corregirlo antes de que se propaguen errores en el código base.

### Despliegue Continuo / Entrega Continua

Es una extensión de la Integración Continua que se enfoca en automatizar y acelerar el proceso de entrega y despliegue de aplicaciones en producción.
Características:
  -	Automatización del despliegue: Se automatiza el proceso de implementación de la aplicación en diferentes entornos, como entornos de prueba, preproducción y producción.
  -	Entornos de pruebas automatizadas: Se utilizan entornos de pruebas automatizadas para realizar pruebas funcionales y de rendimiento en réplicas del entorno de producción, lo que permite detectar problemas antes de lanzar la aplicación a los usuarios finales.
  -	Entregas incrementales: Se busca entregar nuevas funcionalidades y mejoras de manera incremental y frecuente, en lugar de grandes lanzamientos infrecuentes. Esto permite una retroalimentación más rápida y una entrega más ágil de valor a los usuarios.
  -	Monitoreo y gestión de la calidad: Se implementan herramientas y procesos para monitorear y gestionar la calidad de la aplicación en producción, lo que permite identificar problemas y mejorar continuamente el software.

## Técnicas de depuración en el navegador 
Son métodos y herramientas utilizados por los desarrolladores web para identificar y solucionar problemas en el código JavaScript, CSS y HTML que se ejecuta en un navegador. 
Permiten examinar el comportamiento del código, detectar errores, rastrear la ejecución, inspeccionar variables y realizar ajustes para corregir problemas.

Técnicas:
  -	Consola de desarrollo: Los navegadores modernos ofrecen una consola de desarrollo integrada que permite mostrar mensajes de registro, errores y advertencias generados por el código JavaScript. La consola también permite ejecutar comandos y realizar pruebas interactivas.
  -	Puntos de interrupción: Los puntos de interrupción permiten detener la ejecución del código en un punto específico para examinar el estado del programa en ese momento. Esto facilita la inspección de variables, el seguimiento de la ejecución línea por línea y la detección de posibles errores.
  -	Inspección de elementos: Las herramientas de desarrollo del navegador permiten inspeccionar y manipular el árbol de elementos HTML y los estilos CSS aplicados en una página web. Esto es útil para identificar problemas de diseño, encontrar elementos específicos y realizar ajustes en tiempo real.
  -	Depuración paso a paso: Los navegadores suelen proporcionar opciones para ejecutar el código JavaScript paso a paso, permitiendo avanzar y retroceder línea por línea, observando el flujo de ejecución y verificando los valores de las variables en cada punto.
  -	Control de eventos: Las herramientas de depuración en el navegador también permiten rastrear y controlar los eventos que ocurren en una página web. Esto es útil para verificar si los eventos se activan correctamente, depurar problemas de interacción y entender el flujo de eventos en una aplicación.
  -	Anotaciones y seguimiento de rendimiento: Algunos navegadores proporcionan herramientas para registrar y analizar el rendimiento de una página web, incluyendo el tiempo de carga, la utilización de recursos y la velocidad de ejecución del código. Estas características ayudan a identificar cuellos de botella y optimizar el rendimiento del sitio.

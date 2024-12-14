# **Cypress - XAcademy QA Automation**

Este repositorio contiene el desarrollo de una actividad práctica asignada como parte de la **capacitación en QA Automation con Cypress** ofrecida por **XAcademy**. El objetivo de esta actividad es reforzar conocimientos en automatización de pruebas utilizando el framework **Cypress**.

## **Descripción del Proyecto**
El proyecto se enfoca en la automatización de pruebas para la plataforma [Automation in Testing](https://automationintesting.online/). Se implementaron scripts para validar elementos clave de la página y garantizar que cumplan con los criterios establecidos. Entre las tareas realizadas se incluyen:

  - Verificación de la información principal del sitio web.
  - Validación de la visibilidad de imágenes y otros elementos.
  - Revisión del contenido de texto del sitio para garantizar consistencia.
  - Uso de comandos personalizados en Cypress para mantener un código modular y reutilizable.

## **Tecnologías Utilizadas**
- **Cypress:** Framework para pruebas end-to-end.
- **JavaScript:** Lenguaje utilizado para escribir los scripts de prueba.

## **Cómo ejecutar el proyecto**

Sigue estos pasos para clonar el repositorio y ejecutar el proyecto en tu máquina local:

### **1. Clonar el repositorio**
Primero, clona este repositorio en tu máquina local utilizando el siguiente comando en tu terminal:
```bash
git clone https://github.com/cdvillas/Automation-Cypress-XAcademy.git
```
### **2. Navegar al directorio del proyecto**
Cambia al directorio del proyecto:
```bash
cd Cypress-XAcademy
```
### **3. Instalar las dependencias**
Asegúrate de tener Node.js instalado en tu sistema. Luego, instala las dependencias del proyecto utilizando:
```bash
npm install
```
### **4. Abrir Cypress**
Para abrir el panel de Cypress y ejecutar las pruebas en un navegador interactivo, utiliza el siguiente comando:
```bash
npx cypress open
```
### **5. Ejecutar las pruebas**
Puedes ejecutar las pruebas de dos maneras:
- Desde la interfaz de Cypress: Selecciona los archivos de prueba desde la interfaz gráfica.
- Desde la terminal: Ejecuta todas las pruebas directamente en la terminal utilizando:

```bash
npx cypress run
```
### **6. Ver los resultados**
Si utilizas la interfaz de Cypress, podrás ver los resultados en tiempo real en el navegador.
Si ejecutas las pruebas desde la terminal, se generarán reportes en la consola y, dependiendo de la configuración, capturas de pantalla o videos de las pruebas fallidas se almacenarán en las carpetas cypress/screenshots/ y cypress/videos/.


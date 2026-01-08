# CRUD con Node.js, Angular, MySQL y PrimeNG

## Descripción
Este proyecto consiste en el desarrollo de un sistema CRUD (Create, Read, Update, Delete) como parte del proceso de postulación a un voluntariado de la carrera de Ingeniería de Sistemas Computacionales.

El sistema permite la gestión básica de usuarios mediante una arquitectura cliente-servidor, utilizando tecnologías modernas de desarrollo web.

---

## Tecnologías utilizadas

### Backend
- Node.js
- Express
- MySQL

### Frontend
- Angular
- PrimeNG

---

## Funcionalidades
- Listar usuarios
- Registrar nuevos usuarios
- Eliminar usuarios
- Validaciones básicas en formularios
- Interfaz gráfica utilizando componentes de PrimeNG

---

## Base de datos
La base de datos fue creada en MySQL con el nombre:

Tabla principal:
- usuarios

Campos:
- id
- nombre
- correo
- telefono

---

## Ejecución del proyecto

###Backend
```bash
cd backend
npm install
node index.js

Servidor disponible en:

http://localhost:3000

## FrontEnd
cd frontend
npm install
ng serve

Aplicación disponible en:

http://localhost:4200

Endpoints principales

GET /usuarios → Listar usuarios

POST /usuarios → Crear usuario

PUT /usuarios/:id → Actualizar usuario

DELETE /usuarios/:id → Eliminar usuario

Pruebas

Los endpoints del backend fueron probados utilizando Postman antes de su integración con el frontend.

👩‍💻 Autora

Sarely Castillo
Estudiante de Ingeniería de Sistemas Computacionales
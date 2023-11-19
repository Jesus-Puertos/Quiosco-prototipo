# Proyecto Prototipo - Quiosco de Comida

Este proyecto es un prototipo para un quiosco de comida que permite a los clientes realizar pedidos de manera eficiente. El objetivo es desarrollar un software que agilice el proceso de toma de pedidos y mejore la gestión en la cocina de los restaurantes.

## Requisitos del Sistema

- Node.js (v20.9.0)
- NPM (v10.2.0)
- MySQL (v8.0.35)

## Configuración del Entorno de Desarrollo

1. Clona el repositorio a tu máquina local.
2. Abre la terminal en el directorio del proyecto.

```bash
npm install
Crea la base de datos MySQL llamada quioscoapp.

Instala Prisma.

bash
Copy code
npm install @prisma/cli @prisma/client
Configura las variables de entorno necesarias para la conexión a la base de datos en .env.
Estructura del Proyecto
/pages: Archivos de páginas de Next.js.
/components: Componentes reutilizables de React.
/public: Archivos estáticos (imágenes, etc.).
/prisma: Archivos y directorios de configuración de Prisma.
/scripts: Scripts personalizados.
Ejecución del Proyecto
bash
Copy code
npm run dev
La aplicación estará disponible en http://localhost:3000.

Migraciones con Prisma
Para aplicar migraciones de la base de datos, ejecuta:

bash
Copy code
npx prisma migrate dev
Contribuciones
¡Contribuciones son bienvenidas! Si tienes alguna mejora o corrección, por favor abre un issue o envía una pull request.

Contacto
Para cualquier pregunta o sugerencia, no dudes en contactarme:

Equipo:
Correo Electrónico:
Licencia
Este proyecto está bajo la Licencia MIT.
```

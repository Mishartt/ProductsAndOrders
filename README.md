🛒 Products&Orders (Desktop)
Products&Orders is a test application for managing orders and products. It is built using Next.js, Node.js, and TypeScript. Order data is stored on the server in a file using fs, as integrating a database for this test project was considered unnecessary (and wasn't mentioned in the requirements).

📦 Features:
View all orders and products

Delete orders and products

Search for products

View detailed information for each order




🚀 Technologies
Frontend: Next.js (with SSR), Redux, TypeScript, SCSS
Backend: Node.js, Express
Real-time: Socket.io
Infrastructure: Docker (containerization of both frontend and backend)

Although I didn’t have time to implement JWT authentication, unit tests, and internationalization (i18n), I’ve worked with them before and can easily add these features if necessary.

🧪 Run Locally via Docker:

Clone the repository:

git clone https://github.com/yourname/products-and-orders.git
cd products-and-orders


Run the project:
docker-compose up --build


After starting:

Frontend: http://localhost:5000

Backend: http://localhost:5500


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


1-npm create vite@latest .
2-npm init -y in root folder.       (This will create package.json in root).
3-in package.json change "main": "index.js" to "server.js"
4-Create server.js inside backend folder.
5-npm install express dotenv cookie-parser bcryptjs mongoose socket.io jsonwebtoken  in root folder. 
6-Create "scripts": {
    "server": "node backend/server.js"
  },           inside package.json in root folder.

7-Now run npm run server.
8-npm install nodemon --save-dev
9-Now Change the scripts in package.json in root folder to "scripts": {
    "server": "nodemon backend/server.js"
  },
10-Install dotenv extension so that we dont have to use require we can directly import. 
11- Also change the type as module in package.json.
12-Make middlewares in server.js files
13-Create a folder routes inside backend folder.





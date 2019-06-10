# Front-End-Cannabis-E-Commerce-App

This is the frontend repo for a cannabis e-commerce platform. Users will be able to sign up and browse the catelog of products and purchase them with their credit cards through Stripe payments. The admins will be able to add, update and delete products as needed.

## Launching the app

This app is hosted on Netlify at: https://flower-co.netlify.com/

To launch the app locally you will need to:
- Clone the backend repo at https://github.com/tommaay/backend-cannabis-e-commerce-app
- Install the dependencies by typing npm install or yarn in the terminal at the root directory
- Run yarn server in the terminal and the server should be up and running
- Then clone this repo and install the depencies
- Run yarn start in the terminal and that should open the React application in your browser

## Features - Admins

- Add new products
- Update existing products
- Delete existing products
- Add and update inventory
- Add new users for admin roles
- Upload images for products
- Accept payments through Stripe

## Features - Customers

- Sign up for an account
- Browse the catelog of products
- Add products to their shopping cart
- Checkout using a credit card through Stripe

## Dependencies

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start) - Routing Library
- [Styled Components](https://www.styled-components.com/) - Styling library for CSS in JS
- [Redux](https://redux.js.org/) - State container

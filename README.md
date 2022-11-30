# jwt-auth
This minimal API with [reactJS](https://reactjs.org/) & [BulmaCSS](https://bulma.io/) provides users a safe authorization via JSON Web Tokens. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token.

## Installation
Clone the repository. You will need `node` and `npm` on your machine.

To start the app: 

Split two terminals;

 on one of them write `cd backend` `npm i` `node index.js`,

 on the other one write `cd frontend` `npm i` `npm start`.


## Screenshots

Register page if anything goes wrong:
![Register](/img/register.png)

If it doesn't you will be redirected to the login page:

Login page if your password is wrong:
![Login](/img/login.png)

Login page if your email is wrong:
![Login](/img/login2.png)

With your email and password you will be authorized&redirected into the dashboard:

![Dashboard](/img/dashboard.png)
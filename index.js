const express = require('express');

const app = express();

const profileRoute = require('./route/profile.route');
const loginRoute = require('./route/login.route');
const registerRoute = require('./route/register.route');
const changepassRoute = require('./route/changepass.route');

const port = 3000;


app.use('/profile',profileRoute);
app.use('/login',loginRoute);
app.use('/register',registerRoute);
app.use('/changepassword',changepassRoute);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})
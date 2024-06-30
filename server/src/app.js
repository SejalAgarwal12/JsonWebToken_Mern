const express = require('express');
const bodyParser = require('body-parser');
const signUpRouter = require('./router/signUp');
const loginRouter = require('./router/login')
const authenticateRoute =require('./router/authenticated')
const cors = require('cors')
const {createAdmin} = require('./admin/admin');
const dotenv = require('dotenv')

const app = express();

dotenv.config({path : "./config/config.env"});

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

// only once admin account will get created by using this function
createAdmin();

app.use('/user', signUpRouter) // user/register
app.use('/auth', loginRouter)  // auth/login
app.use('/api', authenticateRoute) // api/user

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`listening to port ${PORT}`))
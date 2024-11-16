const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex')

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: 3001,
        user: 'valenciaigiraneza',
        password: '',
        database: 'smart-brain',
    },
});

db.select('*').from('users');

// const db = knex({
//     client: 'pg',
//     connection: {
//         host: '127.0.0.1',
//         user: 'aneagoie',
//         password: '',
//         database: 'smart-brain'
//     }
// });

const app = express();

app.use(cors())
app.use(express.json()); 

app.get('/', (req, res)=> {res.send(database.users);}) 
app.post('/signin', (req, res) => {signin.handleSignin(req,res,db,bcrypt)})
app.post('/register', (req, res) => {register.handleRegister(req,res,db,bcrypt)})
app.get('/profile/:id', (req, res) => { Profiler.handleProfileGet(req, res, db)})
app.put('/image', (req, res) => { Image.handleImage(req, res, db)})
app.post('/image', (req, res) => { Image.handleApiCall(req, res) })

app.listen(3000, () => {
    console.log('app is running on port 3000');
})
const express = require('express')
const bodyParse = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const app = express()

//Person Modules
const createPerson = require('./controllers/persona/create')
const updatePerson = require('./controllers/persona/update')
const readPerson = require('./controllers/persona/read')
const readAllPersons = require('./controllers/persona/readAll')
const deletePerson = require('./controllers/persona/delete')

//Business Modules
const createBusiness = require('./controllers/empresa/create')
const deleteBusiness = require('./controllers/empresa/delete')
const readBusiness = require('./controllers/empresa/read')
const readAllBusiness = require('./controllers/empresa/readAll')
const updateBusiness = require('./controllers/empresa/update')

//Login Module
const loginAdmin = require('./controllers/login/login')

//DB Manage
mongoose.connect('mongodb://drgxx0:drgx5265@ds117691.mlab.com:17691/drgxtest')

let personaSchema = new mongoose.Schema({
    nombre: String,
    dni: String,
    celular: String,
    correo: String,
    departamento: String,
    provincia: String,
    distrito: String,
    direccion: String, 
    comentario: String,
    category: String
})

let empresaSchema = new mongoose.Schema({
    nombre: String,
    ruc: String,
    celular: String,
    correo: String,
    departamento: String,
    provincia: String,
    distrito: String,
    direccion: String,
    razon: String,
    comentario: String,
    category: String
})

let loginSchema = new mongoose.Schema({
    email: String,
    contraseña: String
})

let Persona = mongoose.model('Persona', personaSchema)
let Empresa = mongoose.model('Empresa', empresaSchema)
let Login = mongoose.model('Login', loginSchema)


//Middlewares
app.use(bodyParse.json())
app.use(cors())


app.get('/', (req, res) => res.send('working...'))

//Login

app.post('/login/', loginAdmin.handleLogin(Login, bcrypt))

//Person
app.get('/persona/', readAllPersons.handleReactPersons(Persona))

app.get('/persona/:id', readPerson.handleReadPerson(Persona))

app.post('/persona/', createPerson.handleCreatePerson(Persona))

app.put('/persona/:id', updatePerson.handleUpdatePerson(Persona))

app.delete('/persona/:id', deletePerson.handleDeletePerson(Persona))


//Business
app.get('/empresa/', readAllBusiness.handleReadAllBusiness(Empresa))

app.get('/empresa/:id', readBusiness.handleReadBusiness(Empresa))

app.post('/empresa/', createBusiness.handleCreateBusiness(Empresa))

app.put('/empresa/:id', updateBusiness.handleUpdateBusiness(Empresa))

app.delete('/empresa/:id', deleteBusiness.handleDeleteBusiness(Empresa))


//Port controll
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`listen in port ${PORT}`)
})
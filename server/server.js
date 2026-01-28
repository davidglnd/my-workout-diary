//import express 
import express from 'express';
import path from 'path';
//import connectToDB
import { connectToDB } from './db.js';
//import cors
import cors from 'cors';
// //import validators
import { registerValidator } from './validators/register.validator.js';
import { loginValidator } from './validators/login.validator.js';
//import controllers
import { register } from './controller/signup.controller.js';
import { login } from './controller/login.controller.js';
import { profileController } from './controller/profile.controller.js';
import { logout } from './controller/logout.controller.js';
// import middlewares
import { auth } from './middleware/auth.js';

import { fileURLToPath } from 'url';
import coolkieParser from 'cookie-parser';


const app = express();
const PORT = process.env.PORT || 1337;

//cors json and cookies
app.use(cors());
app.use(express.json());
app.use(coolkieParser());


// __dirname route
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// __dirname route to frontend
const frontendPath = path.join(__dirname, '../src');

// static
app.use(express.static(frontendPath));

// routes
app.get('/', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

//endpoints routes
app.post('/api/login', loginValidator, login);

app.post('/api/signup', registerValidator, register);

app.post('/api/logout', logout);
//private routes
app.get('/api/profile', auth, profileController)
// Page 404
app.use((req, res) => {
  res.status(404).sendFile('404.html', { root: frontendPath });
});
// connect Mongo
connectToDB();
// start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

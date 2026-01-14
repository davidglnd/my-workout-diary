//import express 
import express from 'express';
import path from 'path';
//import connectToDB
import { connectToDB } from './db.js';
//import cors
import cors from 'cors';

import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 1337;

//middlewares cors y json
app.use(cors());
app.use(express.json());

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
app.post('/api/signup', (req, res) => {
    console.log(req.body);
    res.send('ok');
});

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

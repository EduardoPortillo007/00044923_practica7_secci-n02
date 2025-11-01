import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'Servidor funcionando!' });
});

// Ruta de login de ejemplo
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  // Aquí tu lógica de autenticación
  res.json({ message: 'Login exitoso', token: 'jwt-token-here' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
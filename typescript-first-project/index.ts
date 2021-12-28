import express from 'express';
import { calculate } from './calculator'

const app = express();

app.use(express.json({strict: false}));

app.get('/ping', (_req, res) => {
  res.send('hola ');
});

app.post('/calculate', (req, res) => {
  const { value1, value2, op } = req.body

  const result = calculate(value1, value2, op);
  console.log(result)
  res.json({result});
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
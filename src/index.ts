import express from 'express';
import plataformaRouter from './routes/plataforma.router';
import cors from 'cors';

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());

app.use('/plataformas', plataformaRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando puerto ${PORT}`)
});
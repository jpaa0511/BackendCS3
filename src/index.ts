import express from 'express';
import plataformaRouter from './routes/plataforma.router';
import cors from 'cors';


const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use('/plataformas', plataformaRouter);

app.use('/',(req, res)=>{
    res.redirect('/plataformas');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando puerto ${PORT}`)
});
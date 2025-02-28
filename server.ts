import express from 'express';
import ArticleRouter from './router/Article';
import cors from 'cors';

const app: express.Application = express();
const port: number = 3000;

app.use(cors({
    origin: 'http://localhost:8081',
    methods: ['GET', 'POST','PATCH',"PUT","DELETE"],
    credentials: true,
}));


app.use(express.json({ limit: '100mb' })); 
app.use(express.urlencoded({ limit: '100mb', extended: true })); 

app.use('/article', ArticleRouter);

app.listen(port, () => {
  console.log(`TypeScript with Express
    http://localhost:${port}/`);
});

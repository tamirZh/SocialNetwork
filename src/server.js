import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/render/indexRouter';
import apiRouter from './routes/api/apiRouter';
import resLocals from './middlewares/resLocals';
import authRouter from './routes/api/authRouter';

const PORT = process.env.PORT || 3000;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components', 'pages'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(resLocals);

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));

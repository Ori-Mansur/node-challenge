import express from 'express';
import compression from 'compression';
import userRouter from './api/user/user.routes.js';
import bookRouter from './api/book/book.routes.js';


var app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(compression());


app.use('/api/users', userRouter);
app.use('/api/book', bookRouter);





const port = process.env.PORT || 6150;


app.listen(port, () => console.log(`App listening at port ${port}`))


import express, { Request, Response, NextFunction } from 'express';
import path from 'path';

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https')
      res.redirect(301, `https://${req.header('host')}${req.url}`);
    else next();
  });
}

app.use('/public', express.static(path.join(__dirname, '../public')));
app.use('/build', express.static(path.join(__dirname, '../build')));
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.use('/', (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  } catch (error) {
    next(error);
  }
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(err.status || 500).send(err.message);
});

export default app;

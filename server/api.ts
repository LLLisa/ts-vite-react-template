import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

const app = express();

app.get('/', cors(), (req, res, next) => {
  try {
    res.json({ foo: 'bar' });
  } catch (error) {
    next(error);
  }
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(err.status || 500).send(err.message);
});

export default app;

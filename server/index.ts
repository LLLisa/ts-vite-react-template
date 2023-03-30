import express from 'express';

const app = express();

const PORT = process.env.port || 1956;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

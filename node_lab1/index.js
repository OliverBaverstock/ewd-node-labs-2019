import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const server = express();

// eslint-disable-next-line no-undef
const port = process.env.PORT;

server.use(express.static('public'));

server.listen(port, () => {
  console.info(`Server running at ${port}`);
});
// import { isPropertyAccessChain } from 'typescript';

require('dotenv/config');

export default {
  jwt: {
    secret: process.env.APP_SECRET || 'default',
    expiresIn: '1d',
  },
};

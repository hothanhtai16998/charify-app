
import express from 'express';
import path from 'path';
import authRoute from './routes/authRoute.js';

import {ENV} from './libs/env.js'

const app = express();

const __dirname = path.resolve();

const PORT = ENV.PORT || 3000;

app.use(express.json());
app.use('/api/auth', authRoute)

//deployment

// make ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // This route handles all non-API GET requests and serves the frontend app.
  // It uses a regular expression to avoid conflicting with API routes.
  app.get(/^(?!\/api).*$/, (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}...  `);
})

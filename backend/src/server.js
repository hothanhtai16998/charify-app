import express from 'express';

import authRoute from './routes/authRoute.js';
import messageRoute from './routes/messageRoute.js';

const app = express();
app.use(express.json());

app.use('/api/auth', authRoute)
app.use('/api/auth', messageRoute)


app.listen(3000, () => {
    console.log('Server started on port 3000');
})
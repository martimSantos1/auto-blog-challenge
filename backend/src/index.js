import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Initial test route
app.get('/', (req, res) => {
    res.json({ message: 'Backend is running!' });
});

app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});

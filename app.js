const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Trending Topics API Integration
app.get('/trending', async (req, res) => {
    try {
        const response = await axios.get('https://api.example.com/trending-topics'); // Replace with actual API
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching trending topics' });
    }
});

// AI Content Generation Endpoint
app.post('/generate-content', async (req, res) => {
    const { topic } = req.body;
    try {
        const response = await axios.post('https://api.example.com/generate-content', { topic }); // Replace with actual API
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error generating content' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
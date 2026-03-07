// trendingTopics.js

const fetch = require('node-fetch');

const sources = [
    'https://api.example.com/trending', // Example API for trending topics
    'https://api.anotherexample.com/most-searched', // Example API for most searched topics
];

async function fetchTrendingTopics() {
    try {
        let results = await Promise.all(sources.map(source => fetch(source)));
        let topics = await Promise.all(results.map(res => res.json()));
        return topics.flat(); // Combine all the results
    } catch (error) {
        console.error('Error fetching topics:', error);
        return [];
    }
}

async function displayTrendingTopics() {
    const topics = await fetchTrendingTopics();
    console.log('Trending Topics:', topics);
}

displayTrendingTopics();
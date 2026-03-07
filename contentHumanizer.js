// contentHumanizer.js

// Function to replace certain phrases with more human-like alternatives
function humanizeContent(content) {
    const replacements = {
        'i am': 'I’m',
        'it is': 'it’s',
        'you are': 'you’re',
        'have to': 'got to',
        'going to': 'gonna',
        'want to': 'wanna',
    };

    // Replace phrases in the content
    for (const [key, value] of Object.entries(replacements)) {
        content = content.replace(new RegExp(key, 'gi'), value);
    }

    return content;
}

// Function to add personal anecdotes
function addAnecdote(content) {
    const anecdotes = [
        "I once tried this and it worked wonders.",
        "In my experience, this has always been true.",
        "A friend of mine said this changed everything for them."
    ];

    // Randomly select an anecdote to insert
    const randomAnecdote = anecdotes[Math.floor(Math.random() * anecdotes.length)];
    return content + '\n\n' + randomAnecdote;
}

// Main function to humanize content
function humanize(content) {
    let humanizedContent = humanizeContent(content);
    humanizedContent = addAnecdote(humanizedContent);
    return humanizedContent;
}

// Example usage
const aiContent = "i am going to explain how to humanize AI generated content.";
console.log(humanize(aiContent));
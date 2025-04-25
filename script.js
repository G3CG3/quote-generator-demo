const messageComponents = {
    quotes: [
        "The only thing we have to fear is fear itself.",
        "Be the change that you wish to see in the world.",
        "In the middle of every difficulty lies opportunity.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "Life is what happens when you're busy making other plans.",
        "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        "Happiness depends upon ourselves."
    ],
    authors: [
        "Franklin D. Roosevelt",
        "Mahatma Gandhi",
        "Albert Einstein",
        "Winston Churchill",
        "John Lennon",
        "Ralph Waldo Emerson",
        "Aristotle"
    ],
    reflections: [
        "Face your fears today.",
        "Lead by example.",
        "Don’t give up when things get hard.",
        "Keep going—you’re closer than you think.",
        "Live with intention, not expectation.",
        "Create your own journey.",
        "Happiness is a daily choice."
    ]
};

function generateMessage(components) {
    const index = Math.floor(Math.random() * components.quotes.length);

    const quote = components.quotes[index];
    const author = components.authors[index];
    const reflection = components.reflections[index];

    return `💬 "${quote}"\n— ${author}\n🧠 Reflection: ${reflection}`;
}

// Test the generator
// console.log(generateMessage(messageComponents));
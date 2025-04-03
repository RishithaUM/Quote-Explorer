const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { text: "Do what you feel in your heart to be right – for you’ll be criticized anyway.", author: "Eleanor Roosevelt" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" },
    { text: "Quality means doing it right when no one is looking.", author: "Henry Ford" },
    { text: "Well done is better than well said.", author: "Benjamin Franklin" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "Either you run the day or the day runs you.", author: "Jim Rohn" },
    { text: "Do what you love and the money will follow.", author: "Marsha Sinetar" },
    { text: "Definiteness of purpose is the starting point of all achievement.", author: "W. Clement Stone" },
    { text: "Everything has beauty, but not everyone can see.", author: "Confucius" },
    { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { text: "Setting goals is the first step in turning the invisible into the visible.", author: "Tony Robbins" },
    { text: "Do what you have to do until you can do what you want to do.", author: "Oprah Winfrey" },
    { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { text: "When we strive to become better than we are, everything around us becomes better too.", author: "Paulo Coelho" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Everything negative – pressure, challenges – is all an opportunity for me to rise.", author: "Kobe Bryant" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "A goal without a plan is just a wish.", author: "Antoine de Saint-Exupéry" },
    { text: "The harder the conflict, the greater the triumph.", author: "George Washington" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" }
];

let currentIndex = -1;
const backgroundImages = [

    'https://wallpapercave.com/wp/wp4958422.jpg',
    'https://wallpaperaccess.com/full/6634719.jpg',
    'https://wallpapercave.com/wp/wp8550042.jpg',
    'https://wallpapercave.com/wp/wp7303125.jpg',
    'https://wallpaperaccess.com/full/791469.jpg',
    'https://i.pinimg.com/736x/f3/d1/fe/f3d1fea38f521b5f5e0ba82e52bd8c1d.jpg'

];
let imageIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
    changeBackground();
    setInterval(changeBackground, 5000);
});

function changeBackground() {
    document.body.style.backgroundImage = `url('${backgroundImages[imageIndex]}')`;
    imageIndex = (imageIndex + 1) % backgroundImages.length;
}

function startQuotes() {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("quote-screen").style.display = "block";
    getRandomQuote();
}

function getRandomQuote() {
    currentIndex = Math.floor(Math.random() * quotes.length);
    displayQuote();
}

function nextQuote() {
    if (currentIndex < quotes.length - 1) {
        currentIndex++;
        displayQuote();
    }
}

function prevQuote() {
    if (currentIndex > 0) {
        currentIndex--;
        displayQuote();
    }
}

function displayQuote() {
    document.getElementById("quote-text").innerText = `"${quotes[currentIndex].text}"`;
    document.getElementById("quote-author").innerText = `- ${quotes[currentIndex].author}`;
}

function exitToHome() {
    document.getElementById("quote-screen").style.display = "none";
    document.getElementById("welcome-screen").style.display = "block";
}

// Arrays for random words
const wordCategories = {
    nouns: ["beaver", "moose", "polar bear", "loon", "caribou"],
    verbs: ["skates", "hikes", "paddles", "skis", "canoes"],
    adjectives: ["cold", "friendly", "vast", "beautiful", "frozen"],
    objects: ["cake", "ball", "book", "bicycle", "computer"],
    places: ["in Banff", "on Parliament Hill", "in a cabin", "at Niagara Falls", "in the Rockies"]
};

// Variable to hold the story
let textToSpeak = "";

// Generic function to generate a random word from any category
function generateRandomWord(category) {
    const word = wordCategories[category][Math.floor(Math.random() * wordCategories[category].length)];
    textToSpeak += word + " ";
    document.getElementById("story").innerText = textToSpeak;
}

// Functions triggered by each button to produce random words
function produceNoun() { generateRandomWord('nouns'); }
function produceVerb() { generateRandomWord('verbs'); }
function produceAdjective() { generateRandomWord('adjectives'); }
function produceAdverb() { generateRandomWord('objects'); }
function producePlace() { generateRandomWord('places'); }

// Function to trigger TextToSpeech API
function speakNow() {
    const speech = new SpeechSynthesisUtterance(textToSpeak);
    window.speechSynthesis.speak(speech);
}

// Function to reset the story
function resetStory() {
    textToSpeak = "";
    document.getElementById("story").innerText = "Your story will display here...";
}
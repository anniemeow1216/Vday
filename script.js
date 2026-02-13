// Get DOM elements
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const mainImage = document.getElementById('main-image');
const question = document.getElementById('question');
const yesScreen = document.getElementById('yes-screen');

// Track click count
let clickCount = 0;

// No button text messages
const noMessages = [
    "No",
    "Are you sure?",
    "Think again!",
    "Really?",
    "You might hurt my feelings...",
    "I'm gonna cry :("
];

// Image mapping based on click count
function getImageForClickCount(count) {
    if (count === 1) {
        return '100.webp';
    } else if (count === 2 || count === 3) {
        return '200.webp';
    } else if (count === 4) {
        return 'giphy.webp';
    } else if (count >= 5) {
        return '100.webp';
    }
    return 'giphy.webp';
}

// No button click handler
noBtn.addEventListener('click', function() {
    clickCount++;
    
    // Update No button text
    if (clickCount < noMessages.length) {
        noBtn.textContent = noMessages[clickCount];
    } else {
        noBtn.textContent = noMessages[noMessages.length - 1];
    }
    
    // Increase Yes button size (with reasonable max limit)
    const yesScale = Math.min(1 + clickCount * 1.2, 8);
    yesBtn.style.transform = `scale(${yesScale})`;
    
    // Move No button to random position
    const randomX = Math.floor(Math.random() * 400) - 200; // Random X between -200 and 200
    const randomY = Math.floor(Math.random() * 300) - 150; // Random Y between -150 and 150
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    
    // Move image and question text upward (with reasonable max limit)
    const upwardMove = Math.max(-clickCount * 25, -150);
    mainImage.style.transform = `translateY(${upwardMove}px)`;
    question.style.transform = `translateY(${upwardMove}px)`;
    
    // Change image based on click count
    mainImage.src = getImageForClickCount(clickCount);
});

// Yes button click handler
yesBtn.addEventListener('click', function() {
    // Show celebration screen
    yesScreen.classList.remove('hidden');
    
    // Disable page scrolling
    document.body.classList.add('no-scroll');
});

const images = [
    'images/Asuma.PNG.webp',
    'images/Choji.jpg',
    'images/Danzo.avif',
    'images/Darui.webp',
    'images/Deidara.avif',
    'images/Gaara.webp',
    'images/Gai.jpg',
    'images/Hashirama.webp',
    'images/Itachi.webp',
    'images/Jiraiya.avif',
    'images/Kabuto.avif',
    'images/kakashi.webp',
    'images/Kakuzu.webp',
    'images/Killer Bee.webp',
    'images/Kisame.webp',
    'images/madara-uchiha.avif',
    'images/Minato.avif',
    'images/Nagato.avif',
    'images/Naruto.webp',
    'images/neji.webp',
    'images/Obito.avif',
    'images/Onoki.webp',
    'images/Orochimaru.webp',
    'images/Raikage.webp',
    'images/Sarutobi.avif',
    'images/Sasori.webp',
    'images/Sasuke.webp',
    'images/Shisui.webp',
    'images/Tobirama.webp',
    'images/Zabuza.webp'
];

function getRandomImages() {
    let randomIndexes = [];
    while (randomIndexes.length < 2) {
        let index = Math.floor(Math.random() * images.length);
        if (!randomIndexes.includes(index)) randomIndexes.push(index);
    }

    document.getElementById('image1').src = images[randomIndexes[0]];
    document.getElementById('image2').src = images[randomIndexes[1]];
}

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    document.getElementById('clock').textContent = timeString;
}

// Switch images and update the clock every 30 seconds
setInterval(() => {
    getRandomImages();
}, 30000); // Switch every 30 seconds

// Update clock every second
setInterval(() => {
    updateClock();
}, 1000); // Update time every second

// Initial call to set images and clock immediately
getRandomImages();
updateClock();

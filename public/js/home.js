import { getPosts } from './posts.js';

const randomPostsGrid = document.querySelector('#random-posts-grid');
const randomMessage = document.querySelector('#random-status-message');
const shuffleButton = document.querySelector('#shuffle-posts-btn');

const categoryPhotos = {
    'Daily life': 'images/daily-life.jpg',
    Nature: 'images/nature.jpg',
    Ideas: 'images/ideas.jpg',
    Travel: 'images/travel.jpg',
    Home: 'images/home.jpg',
    Learning: 'images/learning.jpg',
    Food: 'images/food.jpg',
    Creativity: 'images/creativity.jpg',
    Technology: 'images/technology.jpg'
};

const formatDate = (date) => new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
});

const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const createPostCard = ({ id, title, content, date, category, author, image }) => `
    <article class="post-card fade-in">
        <div class="post-card-image-wrap">
            <img class="post-card-photo" src="${image || categoryPhotos[category] || categoryPhotos.Ideas}" alt="Visual for ${category}" loading="lazy">
            <span class="category-badge">${category}</span>
        </div>
        <div class="post-card-content">
            <p class="post-date">${formatDate(date)} &bull; <span>${author || 'Student Author'}</span></p>
            <h3><a href="post.html?id=${id}">${title}</a></h3>
            <p class="post-snippet">${content.length > 130 ? content.slice(0, 130) + '...' : content}</p>
            <a class="read-more-link" href="post.html?id=${id}">Read Article &rarr;</a>
        </div>
    </article>
`;

let allPostsCache = [];

const loadAndDisplayRandomPosts = async () => {
    if (!randomPostsGrid) return;
    try {
        if (randomPostsGrid) {
            randomPostsGrid.classList.add('loading-fade');
        }
        if (allPostsCache.length === 0) {
            allPostsCache = await getPosts();
        }
        const randomThree = shuffleArray(allPostsCache).slice(0, 3);
        randomPostsGrid.innerHTML = randomThree.map(createPostCard).join('');
        if (randomMessage) {
            randomMessage.textContent = '3 fresh random posts selected on this visit';
        }
    } catch (error) {
        if (randomPostsGrid) {
            randomPostsGrid.innerHTML = '<p class="error-text">Unable to load random posts right now.</p>';
        }
    } finally {
        if (randomPostsGrid) {
            setTimeout(() => randomPostsGrid.classList.remove('loading-fade'), 200);
        }
    }
};

if (shuffleButton) {
    shuffleButton.addEventListener('click', () => {
        const icon = shuffleButton.querySelector('.shuffle-icon');
        if (icon) icon.classList.add('spin-anim');
        loadAndDisplayRandomPosts();
        setTimeout(() => {
            if (icon) icon.classList.remove('spin-anim');
        }, 500);
    });
}

// Automatically load 3 random posts every time the page is opened or refreshed
loadAndDisplayRandomPosts();

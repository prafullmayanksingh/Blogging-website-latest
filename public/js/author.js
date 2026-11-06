import { getPosts } from './posts.js';

const randomPostsGrid = document.querySelector('#author-posts-grid');
const prafullArticlesGrid = document.querySelector('#prafull-articles-grid');
const message = document.querySelector('#author-message');
const shuffleButton = document.querySelector('#author-shuffle-btn');

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

const shuffle = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const createPostCard = ({ title, content, date, category, id, author, image }) => `
  <article class="post-card fade-in">
    <div class="post-card-image-wrap">
        <img class="post-card-photo" src="${image || categoryPhotos[category] || categoryPhotos.Ideas}" alt="Visual for ${category}" loading="lazy">
        <span class="category-badge">${category}</span>
    </div>
    <div class="post-card-content">
        <p class="post-date">${formatDate(date)} &bull; <span>${author || 'PRAFULL MAYANK SINGH'}</span></p>
        <h3><a href="post.html?id=${id}">${title}</a></h3>
        <p class="post-snippet">${content.length > 130 ? content.slice(0, 130) + '...' : content}</p>
        <a class="read-more-link" href="post.html?id=${id}">Read Full Story &rarr;</a>
    </div>
  </article>
`;

let cachedPosts = [];

const displayRandomPosts = async () => {
    try {
        if (randomPostsGrid) {
            randomPostsGrid.classList.add('loading-fade');
        }
        if (cachedPosts.length === 0) {
            cachedPosts = await getPosts();
        }
        
        // 3 random posts every time someone opens the page or refreshes it
        const selectedPosts = shuffle(cachedPosts).slice(0, 3);
        if (randomPostsGrid) {
            randomPostsGrid.innerHTML = selectedPosts.map(createPostCard).join('');
        }
        if (message) {
            message.textContent = '3 fresh random posts selected on this visit';
        }

        // Render articles specifically authored by PRAFULL MAYANK SINGH
        if (prafullArticlesGrid) {
            const prafullPosts = cachedPosts.filter(p => p.author && p.author.toUpperCase().includes('PRAFULL'));
            if (prafullPosts.length > 0) {
                prafullArticlesGrid.innerHTML = prafullPosts.map(createPostCard).join('');
            } else {
                prafullArticlesGrid.innerHTML = selectedPosts.map(createPostCard).join('');
            }
        }
    } catch (error) {
        if (message) message.textContent = error.message;
        if (randomPostsGrid) randomPostsGrid.innerHTML = '<p class="error-text">Unable to load posts right now.</p>';
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
        displayRandomPosts();
        setTimeout(() => {
            if (icon) icon.classList.remove('spin-anim');
        }, 500);
    });
}

// Automatically execute on every visit / refresh
displayRandomPosts();

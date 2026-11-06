import { getPosts } from './posts.js';

const postsGrid = document.querySelector('#posts-grid');
const message = document.querySelector('#message');
const searchInput = document.querySelector('#search-posts');
const categoryFilter = document.querySelector('#category-filter');
const pagination = document.querySelector('#pagination');
let allPosts = [];
let currentPage = 1;
const postsPerPage = 3;

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

// Format an ISO date into a readable date for the card.
const formatDate = (date) => new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
});

// Create one post card using a template literal.
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

// Draw the selected page of filtered posts.
const renderPosts = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const filteredPosts = allPosts.filter(({ title, content, category }) => {
        const matchesSearch = `${title} ${content}`.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    const pageCount = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
    currentPage = Math.min(currentPage, pageCount);
    const startIndex = (currentPage - 1) * postsPerPage;
    postsGrid.innerHTML = filteredPosts.slice(startIndex, startIndex + postsPerPage).map(createPostCard).join('');
    message.textContent = `${filteredPosts.length} matching post${filteredPosts.length === 1 ? '' : 's'}`;
    pagination.innerHTML = Array.from({ length: pageCount }, (_, index) => `
        <button class="page-button ${index + 1 === currentPage ? 'active' : ''}" data-page="${index + 1}">${index + 1}</button>
    `).join('');
};

// Load posts and categories from the free public API.
const displayPosts = async () => {
    try {
        allPosts = await getPosts();
        [...new Set(allPosts.map(({ category }) => category))].forEach((category) => {
            categoryFilter.insertAdjacentHTML('beforeend', `<option value="${category}">${category}</option>`);
        });
        renderPosts();
    } catch (error) {
        message.textContent = error.message;
        postsGrid.innerHTML = '<p>We could not show the posts right now.</p>';
    }
};

searchInput.addEventListener('input', () => { currentPage = 1; renderPosts(); });
categoryFilter.addEventListener('change', () => { currentPage = 1; renderPosts(); });
pagination.addEventListener('click', ({ target }) => {
    if (target.matches('.page-button')) {
        currentPage = Number(target.dataset.page);
        renderPosts();
    }
});

displayPosts();

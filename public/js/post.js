import { deletePost, getPost, isLocalPost } from './posts.js';

const postContent = document.querySelector('#post-content');
const postMessage = document.querySelector('#post-message');
const postId = new URLSearchParams(window.location.search).get('id');

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

const defaultPhoto = 'images/night-sky.jpg';

// Load one post and render it with a template literal.
const displayPost = async () => {
    try {
        const post = await getPost(postId);
        document.title = `${post.title} | Student Blog`;
        const photo = post.image || categoryPhotos[post.category] || defaultPhoto;
        const canManagePost = isLocalPost(post.id);
        postContent.innerHTML = `
            <figure class="post-photo">
                <img src="${photo}" alt="A photo illustrating ${post.category.toLowerCase()}" loading="eager">
                <figcaption class="post-photo-caption">
                    <p class="eyebrow">${post.category} | ${new Date(post.date).toLocaleDateString()}</p>
                    <h1>${post.title}</h1>
                </figcaption>
            </figure>
            <p class="post-author">Written by ${post.author}</p>
            ${canManagePost ? `<div class="post-actions"><a class="small-button" href="editor.html?id=${post.id}">Edit post</a><button class="small-button delete-button" type="button">Delete post</button></div>` : ''}
            <div class="post-body"><p>${post.content}</p></div>
        `;
    } catch (error) {
        postMessage.textContent = error.message;
    }
};

postContent.addEventListener('click', async (event) => {
    if (!event.target.matches('.delete-button')) return;
    if (!window.confirm('Delete this post?')) return;
    try {
        await deletePost(postId);
        window.location.href = 'blogs.html';
    } catch (error) {
        postMessage.textContent = error.message;
    }
});

displayPost();

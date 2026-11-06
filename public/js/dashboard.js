import { getPosts, deletePost, isLocalPost } from './posts.js';
import { createCategoryChart } from './chart.js';

const user = JSON.parse(localStorage.getItem('user') || 'null');
const tableBody = document.querySelector('#posts-table-body');
const dashboardMessage = document.querySelector('#dashboard-message');

// Stop unauthenticated visitors from opening the dashboard.
if (!user) {
    window.location.href = 'login.html';
}

// Add one post to the table using DOM table methods.
const addPostRow = (post) => {
    const row = tableBody.insertRow();
    row.insertCell().textContent = post.title;
    row.insertCell().textContent = post.category;
    row.insertCell().textContent = new Date(post.date).toLocaleDateString();
    const actionsCell = row.insertCell();
    actionsCell.innerHTML = `<a class="small-button" href="editor.html?id=${post.id}">Edit</a> <button class="small-button delete-button" data-id="${post.id}">Delete</button>`;
};

// Load the user's posts and draw the dynamic table and chart.
const loadDashboard = async () => {
    try {
        const posts = await getPosts();
        const userPosts = posts.filter(({ author, id }) => author === user.name && isLocalPost(id));
        document.querySelector('#welcome-title').textContent = `${user.name}'s dashboard`;
        tableBody.innerHTML = '';
        userPosts.forEach(addPostRow);
        dashboardMessage.textContent = `${userPosts.length} post${userPosts.length === 1 ? '' : 's'} written by you`;
        createCategoryChart(userPosts, document.querySelector('#category-chart'));
    } catch (error) {
        dashboardMessage.textContent = error.message;
    }
};

// Delete a row and refresh the table without a full page reload.
tableBody.addEventListener('click', async (event) => {
    if (!event.target.matches('.delete-button')) return;
    if (!window.confirm('Delete this post?')) return;
    try {
        await deletePost(event.target.dataset.id);
        await loadDashboard();
    } catch (error) {
        dashboardMessage.textContent = error.message;
    }
});

document.querySelector('#logout-button').addEventListener('click', () => {
    localStorage.removeItem('user');
    window.location.href = 'login.html';
});

loadDashboard();

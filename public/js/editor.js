import { getPost, createPost, updatePost, isLocalPost } from './posts.js';

const user = JSON.parse(localStorage.getItem('user') || 'null');
const form = document.querySelector('#post-form');
const message = document.querySelector('#editor-message');
const postId = new URLSearchParams(window.location.search).get('id');
const user = JSON.parse(localStorage.getItem('user') || 'null');
const draftKey = postId ? `post-draft-${postId}` : 'new-post-draft';
const fields = ['title', 'category', 'content'];
let postAuthor = user ? user.name : '';

if (!user && !postId) window.location.href = 'login.html';

// Save the current form values as an unsaved browser draft.
const saveDraft = () => {
    const formData = new FormData(form);
    localStorage.setItem(draftKey, JSON.stringify(Object.fromEntries(formData.entries())));
};

// Put saved values into the form.
const fillForm = (values) => fields.forEach((field) => { form.elements[field].value = values[field] || ''; });

// Load an existing post and any unsaved draft.
const loadEditor = async () => {
    try {
        if (postId) {
            if (!isLocalPost(postId)) throw new Error('Only posts created in this browser can be edited.');
            const post = await getPost(postId);
            postAuthor = post.author;
            fillForm(post);
            document.querySelector('#editor-title').textContent = 'Edit post';
            document.querySelector('#save-post').textContent = 'Save changes';
        }
        const savedDraft = localStorage.getItem(draftKey);
        if (savedDraft) fillForm(JSON.parse(savedDraft));
        updateCharacterCount();
    } catch (error) {
        message.textContent = error.message;
    }
};

// Show a simple content character counter.
const updateCharacterCount = () => {
    document.querySelector('#character-count').textContent = `${form.elements.content.value.length} characters`;
};

form.addEventListener('input', () => { saveDraft(); updateCharacterCount(); });
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
        const postData = { title: form.elements.title.value.trim(), category: form.elements.category.value.trim(), content: form.elements.content.value.trim(), author: postAuthor };
        const savedPost = postId ? await updatePost(postId, postData) : await createPost(postData);
        localStorage.removeItem(draftKey);
        window.location.href = `post.html?id=${savedPost.id}`;
    } catch (error) {
        message.textContent = error.message;
    }
});

document.querySelector('#clear-draft').addEventListener('click', () => {
    localStorage.removeItem(draftKey);
    form.reset();
    updateCharacterCount();
    message.textContent = 'Draft cleared.';
});

loadEditor();

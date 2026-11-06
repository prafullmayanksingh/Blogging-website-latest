import { createPost } from './posts.js';

const form = document.querySelector('#post-form');
const message = document.querySelector('#editor-message');
const draftKey = 'new-post-draft';
const fields = ['author', 'title', 'category', 'content'];

const saveDraft = () => {
    const formData = new FormData(form);
    localStorage.setItem(draftKey, JSON.stringify(Object.fromEntries(formData.entries())));
};

const fillForm = (values) => fields.forEach((field) => {
    form.elements[field].value = values[field] || '';
});

const updateCharacterCount = () => {
    document.querySelector('#character-count').textContent = `${form.elements.content.value.length} characters`;
};

const savedDraft = localStorage.getItem(draftKey);
if (savedDraft) fillForm(JSON.parse(savedDraft));
updateCharacterCount();

form.addEventListener('input', () => {
    saveDraft();
    updateCharacterCount();
});

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
        const postData = {
            author: form.elements.author.value.trim(),
            title: form.elements.title.value.trim(),
            category: form.elements.category.value.trim(),
            content: form.elements.content.value.trim()
        };
        const savedPost = await createPost(postData);
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

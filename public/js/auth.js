const form = document.querySelector('#auth-form');
const formMessage = document.querySelector('#form-message');
const submitButton = document.querySelector('#submit-button');
const modeText = document.querySelector('#mode-text');
const confirmGroup = document.querySelector('#confirm-group');
let isSignup = true;

// Show one inline validation message beside a form field.
const showError = (fieldName, text) => {
    document.querySelector(`[data-error="${fieldName}"]`).textContent = text;
};

// Check the form values before saving the demo user.
const validateForm = ({ name, email, password, confirmPassword }) => {
    let isValid = true;
    showError('name', '');
    showError('email', '');
    showError('password', '');
    showError('confirmPassword', '');

    if (isSignup && !name.trim()) {
        showError('name', 'Name is required.');
        isValid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('email', 'Enter a valid email address.');
        isValid = false;
    }
    if (password.length < 6) {
        showError('password', 'Password must contain at least 6 characters.');
        isValid = false;
    }
    if (isSignup && password !== confirmPassword) {
        showError('confirmPassword', 'Passwords must match.');
        isValid = false;
    }
    return isValid;
};

// Save a demo user and log them in without real authentication.
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    if (!validateForm(values)) {
        formMessage.textContent = 'Please fix the highlighted fields.';
        formMessage.classList.remove('success');
        return;
    }

    const savedUser = isSignup ? { name: values.name, email: values.email } : JSON.parse(localStorage.getItem('user') || '{}');
    localStorage.setItem('user', JSON.stringify({ name: savedUser.name || 'Blog User', email: values.email }));

    formMessage.textContent = isSignup ? 'Account created successfully.' : 'Login successful.';
    formMessage.classList.add('success');

    window.setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 1200);
});

// Switch between the signup and login forms.
document.querySelector('#mode-toggle').addEventListener('click', () => {
    isSignup = !isSignup;
    confirmGroup.hidden = !isSignup;
    document.querySelector('#name-group').hidden = !isSignup;
    submitButton.textContent = isSignup ? 'Create account' : 'Login';
    modeText.textContent = isSignup ? 'Already have an account?' : 'Need an account?';
    document.querySelector('#mode-toggle').textContent = isSignup ? 'Login' : 'Sign up';
});

const themeToggle = document.querySelector('#theme-toggle');
const themeOptions = document.querySelector('#theme-options');
const themePicker = document.querySelector('.theme-picker');
const themeChoices = [...document.querySelectorAll('[data-theme-choice]')];
const availableThemes = new Set(themeChoices.map(({ dataset }) => dataset.themeChoice));

const setupThemePicker = () => {
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme === 'dark' ? 'night' : savedTheme === 'light' ? 'paper' : savedTheme;

    const applyTheme = (theme) => {
        const selectedTheme = availableThemes.has(theme) ? theme : 'paper';
        document.body.dataset.theme = selectedTheme;
        localStorage.setItem('theme', selectedTheme);
        themeChoices.forEach((choice) => {
            choice.setAttribute('aria-pressed', String(choice.dataset.themeChoice === selectedTheme));
        });
    };

    const setPickerOpen = (isOpen) => {
        themeOptions.hidden = !isOpen;
        themeToggle.setAttribute('aria-expanded', String(isOpen));
    };

    applyTheme(initialTheme);

    themeToggle.addEventListener('click', () => {
        setPickerOpen(themeOptions.hidden);
    });

    themeChoices.forEach((choice) => {
        choice.addEventListener('click', () => {
            applyTheme(choice.dataset.themeChoice);
            setPickerOpen(false);
            themeToggle.focus();
        });
    });

    document.addEventListener('click', ({ target }) => {
        if (!themePicker.contains(target)) setPickerOpen(false);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !themeOptions.hidden) {
            setPickerOpen(false);
            themeToggle.focus();
        }
    });
};

if (themeToggle && themeOptions && themePicker) setupThemePicker();

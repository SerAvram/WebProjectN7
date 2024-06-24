// Оголосити об’єкт formData з порожніми полями email та message
const formData = {
    email: "",
    message: ""
};

// Знайти елементи форми
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Функція для збереження даних у локальне сховище
function saveToLocalStorage() {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// Функція для оновлення об'єкта formData та локального сховища
function handleInput(event) {
    formData[event.target.name] = event.target.value;
    saveToLocalStorage();
}

// Додавання обробника події input до форми
form.addEventListener('input', handleInput);

// Функція для завантаження даних з локального сховища
function loadFromLocalStorage() {
    const storedData = localStorage.getItem('feedback-form-state');
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        formData.email = parsedData.email || "";
        formData.message = parsedData.message || "";

        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
}

// Завантажити дані з локального сховища при завантаженні сторінки
window.addEventListener('DOMContentLoaded', loadFromLocalStorage);

// Обробник події submit форми
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Перевірка, чи заповнені обидва поля
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    // Вивести актуальні значення formData в консоль
    console.log(formData);

    // Очистити локальне сховище
    localStorage.removeItem('feedback-form-state');

    // Очистити об'єкт formData та поля форми
    formData.email = "";
    formData.message = "";
    emailInput.value = "";
    messageInput.value = "";
});

// emailInput.onfocus = () => emailInput.value = "Type area"
// 1. Очищаем страницу и задаем базовые стили для body
document.body.innerHTML = '';
Object.assign(document.body.style, {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    align-items: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
    margin: '0'
});

// 2. Создаем контейнер (карточку)
const card = document.createElement('div');
Object.assign(card.style, {
    background: 'white',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    textAlign: 'center'
});

// 3. Создаем заголовок
const title = document.createElement('h1');
title.textContent = 'Привет, мир!';
card.appendChild(title);

// 4. Создаем описание
const description = document.createElement('p');
description.textContent = 'Эта страница создана чисто на JS.';
card.appendChild(description);

// 5. Создаем кнопку
const button = document.createElement('button');
button.textContent = 'Нажми меня';
Object.assign(button.style, {
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '6px',
    cursor: 'pointer'
});
card.appendChild(button);

// 6. Добавляем логику клика
button.addEventListener('click', () => {
    title.textContent = 'Текст изменен через JS!';
    title.style.color = '#0070f3';
    button.textContent = 'Готово!';
    button.disabled = true;
});

// 7. Монтируем всю карточку на страницу
document.body.appendChild(card);


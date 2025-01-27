document.getElementById('issueCardBtn').addEventListener('click', async () => {
    const userId = Telegram.WebApp.initDataUnsafe.user?.id;
    if (!userId) {
        alert('Ошибка: пользователь не авторизован.');
        return;
    }

    document.getElementById('status').textContent = 'Обработка запроса...';

    try {
        const response = await fetch('https://your-backend.com/api/issue-card', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId }),
        });

        const result = await response.json();
        if (result.success) {
            document.getElementById('status').textContent = 'Карта успешно выпущена!';
        } else {
            document.getElementById('status').textContent = 'Ошибка: ' + result.message;
        }
    } catch (error) {
        document.getElementById('status').textContent = 'Ошибка сети: ' + error.message;
    }
});

const formData = [];

        // Сбор данных и имитация отправки
        function submitForm() {
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();

            if (!email || !phone) {
                alert('Пожалуйста, заполните оба поля.');
                return;
            }

            const entry = { email, phone, timestamp: new Date().toISOString() };
            formData.push(entry);

            console.log('Собранные данные:', formData);

            // Пример отправки на сервер (запрос будет выполнен, но endpoint условный)
            fetch('https://example.com/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(entry)
            })
            .then(res => {
                if (res.ok) {
                    alert('Данные успешно отправлены!');
                } else {
                    alert('Ошибка при отправке данных.');
                }
            })
            .catch(() => alert('Не удалось связаться с сервером.'));
        }

        // Очистка формы и массива
        function resetForm() {
            document.getElementById('contactForm').reset();
            formData.length = 0;
            console.log('Форма и массив очищены.');
        }

        // Показать текущие данные в alert
        function showData() {
            if (formData.length === 0) {
                alert('Нет собранных данных.');
                return;
            }
            const formatted = formData.map((d, i) => `${i + 1}. ${d.email} | ${d.phone}`).join('\n');
            alert('Собранные записи:\n' + formatted);
        }
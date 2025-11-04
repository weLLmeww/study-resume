const formData = [];

        function submitForm() {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();

            if (!name || !email) {
                alert('Пожалуйста, заполните оба поля.');
                return;
            }

            const entry = { name, email, timestamp: new Date().toISOString() };
            formData.push(entry);

            console.log('Собранные данные:', formData);
        }

        function resetForm() {
            document.getElementById('contactForm').reset();
            formData.length = 0;
            console.log('Форма и массив очищены.');
        }

        function showData() {
            if (formData.length === 0) {
                alert('Нет собранных данных.');
                return;
            }
            const formatted = formData.map((d, i) => `${i + 1}. ${d.name} | ${d.email}`).join('\n');
            alert('Собранные записи:\n' + formatted);
        }
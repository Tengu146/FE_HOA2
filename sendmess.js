document.addEventListener('DOMContentLoaded', () => {
    const name = document.getElementById('name');
    const mail = document.getElementById('mail');
    const number = document.getElementById('number');
    const member = document.getElementById('member');
    const message = document.getElementById('message');
    const submit = document.getElementById('submit');
    submit.addEventListener('click', (e) => {
        e.preventDefault();      
        const data = {
            name: name.value,
            mail: mail.value,
            number: number.value,
            member: member.value,
            message: message.value,
        };
        postGoogle(data);
    });
    async function postGoogle(data) {
        const formURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd3kNdSlWZa2kVn971dqVOJiqRVT9IKK22HOWhQKnUPPQHbCw/formResponse";
        const formData = new FormData();
        formData.append('entry.623930853', data.name); // Thay thế đúng với entry ID trong Google Forms
        formData.append('entry.661435505', data.mail); // Thay thế đúng với entry ID trong Google Forms
        formData.append('entry.1170832226', data.number); // Thay thế đúng với entry ID trong Google Forms
        formData.append('entry.1971435324', data.member); // Thay thế đúng với entry ID trong Google Forms
        formData.append('entry.1033430551', data.message); // Thay thế đúng với entry ID trong Google Forms
        try {
            const response = await fetch(formURL, {
                method: 'POST',
                mode: 'no-cors', // 'no-cors' để không bị chặn bởi chính sách CORS
                body: formData,
            });
            if (response.ok) {
                console.log('Form successfully submitted');
            } else {
                console.log('Error submitting the form');
                alert('Đặt Bàn Thành Công')
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
});

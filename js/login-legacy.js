document.addEventListener('DOMContentLoaded', function() {
    const individualBtn = document.getElementById('individual-btn');
    const teamBtn = document.getElementById('team-btn');

    if (individualBtn && teamBtn) {
        individualBtn.addEventListener('click', function() {
            individualBtn.classList.add('active');
            teamBtn.classList.remove('active');
        });

        teamBtn.addEventListener('click', function() {
            teamBtn.classList.add('active');
            individualBtn.classList.remove('active');
        });
    }

    const fileInput = document.getElementById('file');
    const fileText = document.querySelector('.file-text');

    if (fileInput && fileText) {
        fileInput.addEventListener('change', function() {
            if (fileInput.files && fileInput.files.length > 0) {
                fileText.textContent = fileInput.files[0].name;

                const fileSize = fileInput.files[0].size / 1024 / 1024;
                if (fileSize > 2) {
                    alert('حجم الملف كبير جدًا. الحد الأقصى هو 2 ميجابايت.');
                    fileInput.value = '';
                    fileText.textContent = 'اختر ملف';
                }
            } else {
                fileText.textContent = 'اختر ملف';
            }
        });
    }

    const loginForm = document.getElementById('login-form');
    if (!loginForm) return;

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name')?.value || '';
        const identity = document.getElementById('identity')?.value || '';
        const mobile = document.getElementById('mobile')?.value || '';
        const activity = document.getElementById('activity')?.value || '';

        if (!name || !identity || !mobile || !activity) {
            alert('يرجى ملء جميع الحقول المطلوبة');
            return;
        }

        console.log('Form submitted:', {
            name,
            identity,
            mobile,
            activity,
            type: individualBtn?.classList.contains('active') ? 'individual' : 'team'
        });

        alert('تم إرسال البيانات بنجاح!');
        loginForm.reset();
        if (fileText) fileText.textContent = 'اختر ملف';
    });
});
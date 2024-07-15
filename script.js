document.addEventListener('DOMContentLoaded', function () {
    var faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {
        item.querySelector('.faq-question').addEventListener('click', function () {
            faqItems.forEach(function (otherItem) {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-answer').style.display = 'none';
                    otherItem.querySelector('.pluslogo').style.display = 'block';
                    otherItem.querySelector('.crosslogo').style.display = 'none';
                }
            });

            var answer = item.querySelector('.faq-answer');
            var plusLogo = item.querySelector('.pluslogo');
            var crossLogo = item.querySelector('.crosslogo');

            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                plusLogo.style.display = 'block';
                crossLogo.style.display = 'none';
            } else {
                answer.style.display = 'block';
                plusLogo.style.display = 'none';
                crossLogo.style.display = 'block';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.features .container');
    const cards = section.querySelector('.cards');
    const title = section.querySelector('.title');

    const cardSets = [
        [
            { img: '/images/crm.svg', text: 'CRM' },
            { img: '/images/analytics.svg', text: 'Analytics' },
            { img: '/images/database.svg', text: 'Database' }
        ],
        [
            { img: '/images/ecommerce.svg', text: 'Ecommerce' },
            { img: '/images/applications.svg', text: 'Applications' },
            { img: '/images/multi-tenant.svg', text: 'Multi-Tenant' }
        ]
    ];
    const titles = [
        'Integrate anything',
        'Ship Everywhere'
    ];

    function animateSwap() {
        const start = window.innerHeight; // 100vh
        const end = window.innerHeight * 3; // 400vh
        const scrollY = window.scrollY;

        let progress = (scrollY - start) / (end - start);
        progress = Math.max(0, Math.min(1, progress));

        const maxOffset = window.innerHeight * 2;
        const offset = progress * maxOffset;
        cards.style.top = `${offset}px`;
        const currentIndex = offset > 200 ? 1 : 0;

        let localProgress = (offset % 700) / 700;
        console.log(localProgress);

        if (currentIndex === 0) {
            title.style.opacity = 1 - localProgress;
        } else {
            title.style.opacity = localProgress
        }

        title.innerHTML = titles[currentIndex];
        title.style.color = currentIndex === 0 ? '#fff' : '#00E56D';
        cards.querySelectorAll('.card').forEach((card, index) => {
            const cardData = cardSets[currentIndex][index];
            card.querySelector('img').src = cardData.img;
            card.querySelector('div').innerHTML = cardData.text;
        });
    }

    window.addEventListener('scroll', animateSwap);
    animateSwap();
});
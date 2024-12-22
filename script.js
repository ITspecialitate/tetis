document.addEventListener('DOMContentLoaded', function() {
    const phrases = [
        'Tu esi labākais tētis pasaulē!',
        'Paldies par visu, ko dari!',
        'Tu esi mans varonis!',
        'Tavs sirds siltums ir nepārspējams.',
        'Tu vienmēr esi man līdzās, kad man tas visvairāk vajadzīgs.',
        'Tavs smaids spēj apgaismot visu dienu.',
        'Esmu laimīgs, ka man ir tāds tētis kā tu.',
        'Paldies par visiem brīnišķīgajiem mirkļiem.',
        'Tava gudrība un mīlestība ir neizsmeļama.',
        'Tu esi mans paraugs.',
        'Bez tevis nevar.',
        'Vislabākie joki pasaulē.',
        'Optimistisks.',
        'Draugs.',
        'Padomdevējs.',
        'Cilvēks ar neizsmeļamu zināšanu bagāžu.'
    ];

    let shownPhrases = [];

    function getRandomPosition() {
        const x = Math.random() * (window.innerWidth - 200);
        const y = Math.random() * (window.innerHeight - 100);
        return { x, y };
    }

    function showPhrase() {
        if (shownPhrases.length === phrases.length) {
            shownPhrases = [];
        }

        let phraseText;
        do {
            phraseText = phrases[Math.floor(Math.random() * phrases.length)];
        } while (shownPhrases.includes(phraseText));

        shownPhrases.push(phraseText);

        const phraseElement = document.createElement('div');
        phraseElement.className = 'phrase';
        phraseElement.textContent = phraseText;

        const position = getRandomPosition();
        phraseElement.style.left = `${position.x}px`;
        phraseElement.style.top = `${position.y}px`;

        document.body.appendChild(phraseElement);

        // Show the phrase
        setTimeout(() => {
            phraseElement.classList.add('show');
        }, 100);

        // Remove the phrase after 3 seconds
        setTimeout(() => {
            phraseElement.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(phraseElement);
            }, 1000);
        }, 3000);
    }

    // Show a new phrase every 2 seconds
    setInterval(showPhrase, 2000);
});
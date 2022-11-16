const tips = [
    'Join our <a href="/load.html#aHR0cHM6Ly9kaXNjb3JkLmdnLzRQMkFnQlBZeHc%3D">Discord</a>!',
    '<a href="/load.html#aHR0cHM6Ly9wYXRyZW9uLmNvbS9ndWFjYXBsdXNoeQ%3D%3D">Donate</a> to keep Plooshi Docs running!'
];



function access(app) {
    if (document.querySelector('header').hasAttribute('data-init')) {
        document.querySelector('header').removeAttribute('data-init')
    };

    app.search.back.style.display = 'none';
    app.search.logo.style.display = 'inline';
    app.search.logo.style.marginLeft = '0';
    app.search.pd_round.submit.style.display = 'inline';
    app.search.pd_round.input.style.removeProperty('display');
    app.search.pd_round.input.placeholder = 'Search the web';
    app.search.pd_round.style.display = 'flex';
    app.search.pd_round.sep.style.display = 'flex';
    app.header.target.setAttribute('data-page', '');
    app.nav.target.style.removeProperty('display');
    document.querySelector('#open-nav').setAttribute('data-open', '');
    app.search.pd_round.input.focus();

    
    app.nav.community = app.createLink('#discord', '</div><i class="fa-brands fa-discord secondary"></i>');
    app.nav.support = app.createLink('#support', '<i class="fa-solid fa-question secondary"></i>');
    app.nav.apps = app.createLink('#apps', '<i class="fa-brands fa-app-store-ios secondary"></i>');
    app.nav.games = app.createLink('#gs', '<i class="fa-solid fa-gamepad secondary"></i>');
    app.nav.settings = app.createLink('#settings', '<i class="fa-solid fa-cog secondary"></i>', {
        id: 'apps'
    })
    app.nav.filter_bypass = app.createLink('#fb', '<i class="fa-solid fa-unlock secondary"></i>');

    app.main.tip = app.createElement('div', tips[Math.floor(Math.random() * tips.length)], {
        class: 'tip'
    });


    app.main.suggestions = app.createElement('div', [], {
        class: 'suggestions',
        style: {
            display: 'block'
        }
    });

    app.search.pd_round.input.setAttribute(
        'oninput',
        '(' + (async function () {
            app.main.suggestions.innerHTML = '';
            if (!event.target.value) {
                app.nav.target.style.removeProperty('display');
                app.header.target.setAttribute('data-page', '');
                app.main.tip.style.removeProperty('display');
                app.search.logo.style.display = 'inline';
                return;
            }
            app.main.tip.style.display = 'none';
            app.header.target.removeAttribute('data-page');
            app.nav.target.style.display = 'none';
            app.search.logo.style.display = 'none';

            clearTimeout(app.timeout);
            app.timeout = setTimeout(async () => {
                var mode = localStorage.getItem('incog||suggestions') || 'ddg';
                var path;
                var host;
                var prefix;
                var array;
                if(mode == 'none') {} else {
                    switch(mode) {
                        case 'ddg':
                            host = 'duckduckgo.com'
                            path = '/ac/?q='
                            prefix = 'phrase'
                            array = false
                            break;
                        case 'brave':
                            host = 'search.brave.com'
                            path = '/api/suggest?q='
                            array = true
                            break;
                    }
                    const res = await fetch(__uv$config.bare + 'v1/', {
                        headers: {
                            'x-bare-host': host,
                            'x-bare-protocol': 'https:',
                            'x-bare-path': path + encodeURIComponent(event.target.value),
                            'x-bare-port': '443',
                            'x-bare-headers': JSON.stringify({ Host: host }),
                            'x-bare-forward-headers': '[]'
                        }
                    })
                    const json = await res.json();
                    var suggestions = [];

                    if(array) { suggestions = json[1] } else {
                        json.forEach(element => suggestions.push(element[prefix]));
                    }

                    suggestions.forEach(element => {
                        app.main.suggestions.append(app.createElement('div', element, { class: 'suggestion',
                                events: {
                                    click() {
                                        app.search.pd_round.input.value = element;
                                        const frame = document.querySelector('iframe');
                                        document.querySelector('main').style.display = 'none';
                                        document.querySelector('header').style.display = 'none';
                                        frame.style.display = 'block';
                                        frame.src = './load.html#' + encodeURIComponent(btoa(element));
                                        document.querySelector('.access-panel').style.removeProperty('display');
                                    }
                                }
                            }))

                    });
            }
            }, 400);

        }).toString() + ')()'
    );
    app.search.pd_round.input.setAttribute('form', 'access-form');
    app.search.pd_round.submit.setAttribute('form', 'access-form');

    const params = new URLSearchParams(window.location.search);

    if (params.has('link')) {
        app.main.target.style.display = 'none';
        app.header.target.style.display = 'none';

        const frame = document.querySelector('.access-frame');

        frame.src = './load.html#' + encodeURIComponent(params.get('link'));
        frame.style.display = 'block';

        document.querySelector('.access-panel').style.removeProperty('display');
        history.replaceState('', '', window.location.pathname + '#');
    };
};

export { access };

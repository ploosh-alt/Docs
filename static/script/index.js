import { App } from './app.js'
import { gs } from './gs.js';
import { apps } from './apps.js';
import { access } from './home.js';
import { options } from './options.js';
import { support } from './support.js';
import { discord } from './discord.js';
import { filter_bypass } from './fb.js';

window.app = new App();


switch (localStorage.getItem('incog||background')) {
    case 'stars':
        particlesJS.load('.particles', './json/stars.json');
        break;
    case 'particles':
        particlesJS.load('.particles', './json/particles.json');
};

app.openNav = function () {
    document.querySelector('#close-nav').style.display = 'flex';
    document.querySelector('nav').style.display = 'flex';
};

app.closeNav = function () {
    document.querySelector('#close-nav').style.removeProperty('display')
    document.querySelector('nav').style.removeProperty('display')
};

app.destroyParticles = function () {
    if (window.pJSDom && window.pJSDom.length) window.pJSDom[0].pJS.fn.vendors.destroypJS();
    window.pJSDom = [];
    return true;
};

document.querySelector('#open-nav').addEventListener('click', app.openNav);
document.querySelector('#close-nav').addEventListener('click', app.closeNav);

document.title = localStorage.getItem('incog||title') || 'Plooshi Docs';
window.icon = document.querySelector('#favicon');

icon.href = localStorage.getItem('incog||icon') || '/index.svg';

app.on('init', () => {
    app.icon = document.querySelector('#favicon');
    app.search.back = app.createElement('a', 'chevron_left', {
        class: 'submit',
        style: {
            'font-family': 'Material Icons',
            'font-size': '30px',
            'color': 'var(--accent)',
            'display': 'none',
        }
    });
    app.search.title = app.createElement('div', [], {
        class: 'title',
        style: {
            'font-size': '16px',
            'font-weight': '500',
            color: 'var(--accent)',
            display: 'none',
        }
    });
    app.search.logo = createLink('#', '<img class="nav-logo" src="/index.svg" width=50 height=50></img>', {
        style: {
            display: 'none'
        }
    });
    app.search.pd_round = app.createElement('nav', [], {
        class: 'pd_round'
    })
    app.search.pd_round.input = app.createElement('input', [], {
        attrs: {
            placeholder: ''
        },
        class: 'interactive',
    });
    app.search.pd_round.sep = app.createElement('div', [], {
        style: {
            'border-left': '1px solid var(--accent)',
            height: '50px',
            margin: '0 10px',
            display: 'none'
        }
    });
    app.search.pd_round.submit = app.createElement('button', '<i class="fa-solid fa-rocket"></i>', {
        class: 'submit',
        style: {
            display: 'none'
        }
    });
    app.search.pd_round.append(app.search.pd_round.input, app.search.pd_round.sep, app.search.pd_round.submit);
});

app.on('exit', async () => {
    document.querySelector('#open-nav').removeAttribute('data-open');
    if (document.querySelector('header').hasAttribute('data-init')) {
        document.querySelector('header').removeAttribute('data-init')
    };

    if (app.search.logo.style.display === 'none') {
        app.search.logo.style.removeProperty('display');
    };

    if (document.querySelector('header').hasAttribute('data-page')) {
        document.querySelector('header').removeAttribute('data-page');
    };

    app.search.logo.style.display = 'none';
    app.search.pd_round.submit.style.display = 'none';

    app.search.pd_round.input.removeAttribute('oninput');
    app.search.title.textContent = '';
    app.search.title.style.display = 'none';

    app.nav.clear();
    app.main.clear();

    app.main.target.classList.toggle('transition')
});


app.on('after', () => {
    app.main.target.classList.toggle('transition')
});


document.querySelector('#access-form').addEventListener('submit', event => {
    event.preventDefault();
    app.main.target.style.display = 'none';
    app.header.target.style.display = 'none';

    const frame = document.querySelector('.access-frame');

    frame.src = '/load.html#' + btoa(event.target[0].value);
    frame.style.display = 'block';

    document.querySelector('.access-panel').style.removeProperty('display');
});

document.querySelector('.close-access').addEventListener('click', event => {
    event.preventDefault();
    app.main.target.style.display = 'block';
    app.header.target.style.display = 'flex';

    const frame = document.querySelector('.access-frame');

    frame.src = 'about:blank';
    frame.style.display = 'none';

    document.querySelector('.access-panel').style.display = 'none';
});

document.querySelector('.refresh-access').addEventListener('click', () => {
    const frame = document.querySelector('.access-frame');
    const win = frame.contentWindow;

    try {
        win.location.reload();
    } catch (e) {

    };
});

document.querySelector('.access-link').addEventListener('click', () => {
    const frame = document.querySelector('.access-frame');
    const win = frame.contentWindow;

    if (win.__uv) {
        navigator.clipboard.writeText(
            new URL('./?link=' + encodeURIComponent(btoa(win.__uv.location.href)), location.href).href
        );
    };

});

document.querySelector('.access-panel .controls .icon').addEventListener('error', event => {
    event.target.src = 'index.svg';
});


document.querySelector('.access-panel').addEventListener('mouseenter', async event => {
    const frame = document.querySelector('.access-frame');
    const win = frame.contentWindow;
    win.__uv.client = new win.UVClient(win);

    if (win && win.__uv) {
        document.querySelector('.access-panel .controls input').value = Object.getOwnPropertyDescriptor(Document.prototype, 'title').get.call(win.document);
        const favi = document.querySelector.call(win.document, 'link[rel=icon]');

        if (favi && Object.getOwnPropertyDescriptor(HTMLLinkElement.prototype, 'href').get.call(favi)) {
            const res = await win.__uv.client.fetch.fetch.call(
                win,
                Object.getOwnPropertyDescriptor(HTMLLinkElement.prototype, 'href').get.call(favi)
            );

            const blob = await res.blob();
            const url = URL.createObjectURL(blob);

            document.querySelector('.access-panel .controls .icon').src = url;
            URL.revokeObjectURL(url);
        } else {
            const res = await win.__uv.client.fetch.fetch.call(
                win,
                win.__uv.rewriteUrl(
                    '/favicon.ico'
                )
            );

            const blob = await res.blob();
            const url = URL.createObjectURL(blob);

            document.querySelector('.access-panel .controls .icon').src = url;
            URL.revokeObjectURL(url);
        };
    };
});

app.on('default', access);
app.on('#gs', gs);
app.on('#apps', apps);
app.on('#settings', options);
app.on('#support', support);
app.on('#discord', discord);
app.on('#fb', filter_bypass);

app.init();


function createLink(href = null, content = '', config = {}) {
    const elem = app.createElement('a', content, config);
    if (href) elem.href = href;
    return elem;
};

function timeout(time = 1000) {
    return new Promise(resolve =>
        setTimeout(resolve, time)
    );
};

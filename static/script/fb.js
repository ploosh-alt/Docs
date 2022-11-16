function filter_bypass(app) {
    let params = new URLSearchParams(window.location.search);
    app.search.title.style.display = 'block';
    app.search.title.textContent = 'Filter Bypasses';
    app.search.pd_round.input.style.display = 'none';
    app.search.pd_round.sep.style.display = 'none';
    app.search.pd_round.style.display = 'none';
    if (params.get('ext') == null) {
        app.main.filter_bypass = app.createElement(
            'div',
            [
                app.createElement('section', [
                    app.createElement('h3', 'Filter type', {
                        style: {
                            'margin-bottom': '0',
                            'text-align': 'center'
                        }
                    }),
                    app.createElement('a', 'Not extension based', {
                        style: {
                            'margin-bottom': '0'
                        },
                        href: '/#fb?ext=false'
                    }),
                    app.createElement('p', 'Are you sure you want to <a href="/load.html#aHR0cHM6Ly9kaXNjb3JkLmdnLzRQMkFnQlBZeHc%3D">proceed</a>?', {
                        style: {
                            'margin-bottom': '0'
                        },
                        href: '/#fb?ext=true'
                    }),
                ], {
                    class: 'data-section'
                }),

            ]);
    }
    app.search.back.style.display = 'inline';
    app.search.back.setAttribute(
        'onclick',
        '(' + (function () {
            window.location.hash = '';
        }).toString() + ')();'
    )
};

export { filter_bypass };

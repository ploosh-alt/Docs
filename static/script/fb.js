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
                    app.createLink('/#fb?ext=false', 'Not extension based', {
                        style: {
                            'margin-bottom': '0'
                        }
                    }),
                    app.createLink('/#fb?ext=true', 'Extension based', {
                        style: {
                            'margin-bottom': '0'
                        }
                    }),
                ], {
                    class: 'data-section'
                }),

            ], {
                'style': {
                    display: 'inline-flex'
                }
            });
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

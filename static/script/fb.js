function filter_bypass(app) {
    let params = new URLSearchParams(window.location.search);
    app.search.title.style.display = 'block';
    app.search.title.textContent = 'Filter Bypasses';
    app.search.pd_round.input.style.display = 'none';
    app.search.pd_round.sep.style.display = 'none';
    app.search.pd_round.style.display = 'none';
    let extBased = params.get('ext') ? params.get('ext') == "true" : null;
    if (extBased == null) {
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
                    app.createElement('br', '', {
                        style: {
                            'line-height': '7.5em',
                            'content': ' '
                        }
                    }),
                    app.createLink('/?ext=false#fb', 'Not extension based', {
                        style: {
                            'margin-bottom': '0',
                            'text-align': 'center'
                        }
                    }),
                    app.createElement('br'),
                    app.createLink('/?ext=true#fb', 'Extension based', {
                        style: {
                            'margin-bottom': '0',
                            'text-align': 'center'
                        }
                    }),
                ], {
                    class: 'data-section'
                }),

            ]);
    } else {
        console.log(extBased)
        if (extBased) {
            let browserInfo = Ultraviolet.Bowser.parse(navigator.userAgent).browser;
            let browserVer = parseInt(browserInfo.version.split(".")[0]);
            let browserName = browserInfo.name;
            if (browserVer >= 106) {
                app.main.filter_bypass = app.createElement(
                    'div',
                    [
                        app.createElement('section', [
                            app.createElement('h3', 'Error', {
                                style: {
                                    'margin-bottom': '0',
                                    'text-align': 'center'
                                }
                            }),
                            app.createElement('br', '', {
                                style: {
                                    'line-height': '7.5em',
                                    'content': ' '
                                }
                            }),
                            app.createElement('p', `Sorry, no exploit exists for ${browserName} v${browserVer}.`, {
                                style: {
                                    'margin-bottom': '0',
                                    'text-align': 'center'
                                }
                            }),
                            app.createElement
                        ], {
                            class: 'data-section'
                        }),
        
                    ]);
            }
        } else {
            app.main.filter_bypass = app.createElement(
                'div',
                [
                    app.createElement('section', [
                        app.createElement('h3', 'hi', {
                            style: {
                                'margin-bottom': '0',
                                'text-align': 'center'
                            }
                        }),
                        app.createElement('br', '', {
                            style: {
                                'line-height': '7.5em',
                                'content': ' '
                            }
                        }),
                        app.createElement('p', 'nvm', {
                            style: {
                                'margin-bottom': '0',
                                'text-align': 'center'
                            }
                        }),
                    ], {
                        class: 'data-section'
                    }),
    
                ]);
        }
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

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
        if (extBased) {
            let uaInfo = Ultraviolet.Bowser.parse(navigator.userAgent)
            let browserInfo = uaInfo.browser;
            let isCrOS = uaInfo.os.name == "Chrome OS";
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
                        ], {
                            class: 'data-section'
                        }),
        
                    ]);
            } else {
                if (isCrOS) {
                    app.main.filter_bypass = app.createElement(
                        'div',
                        [
                            app.createElement('section', [
                                app.createElement('h3', 'Exploit found!', {
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
                                app.createElement('p', 'First, open settings and find your WiFi network.', {
                                    style: {
                                        'margin-bottom': '0',
                                        'text-align': 'center'
                                    }
                                }),
                                app.createElement('br'),
                                app.createElement('p', 'Scroll down to where it says network, and click custom nameservers.', {
                                    style: {
                                        'margin-bottom': '0',
                                        'text-align': 'center'
                                    }
                                }),
                                app.createElement('br'),
                                app.createElement('p', 'Set all 4 boxes to 198.98.53.76', {
                                    style: {
                                        'margin-bottom': '0',
                                        'text-align': 'center'
                                    }
                                }),
                                app.createElement('br'),
                                app.createElement('p', 'Then, open a new tab and go to chrome://restart (this will restart your chrome!)', {
                                    style: {
                                        'margin-bottom': '0',
                                        'text-align': 'center'
                                    }
                                }),
                                app.createElement('br'),
                                app.createElement('p', 'Once it\'s rebooted, click on <a href="https://chrome.google.com/webstorex" target="_blank" rel="noopener noreferrer"><b>this</b></a>.', {
                                    style: {
                                        'margin-bottom': '0',
                                        'text-align': 'center'
                                    }
                                }),
                                app.createElement('br'),
                                app.createElement('p', 'In that tab, type <b>thisisunsafe</b> (no spaces) randomly, and disable your filter extension.', {
                                    style: {
                                        'margin-bottom': '0',
                                        'text-align': 'center'
                                    }
                                }),
                                app.createElement('br'),
                                app.createElement('p', 'Then, go back to custom name servers, and remove all of them.', {
                                    style: {
                                        'margin-bottom': '0',
                                        'text-align': 'center'
                                    }
                                }),
                                app.createElement('br'),
                                app.createElement('p', 'Congratulations! Your filter should now be disabled.', {
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
                    app.main.filter_bypass = app.createElement(
                        'div',
                        [
                            app.createElement('section', [
                                app.createElement('h3', 'Exploit found!', {
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
                                app.createElement('p', 'Add a bookmark with any name and this code as the URL: <br><b>javascript:(function(){var a=document.createElement(\'script\');a.src=\'https://cdn.jsdelivr.net/gh/FogNetwork/Ingot/ingot.min.js\';document.body.appendChild(a);}())</b>', {
                                    style: {
                                        'margin-bottom': '0',
                                        'text-align': 'center'
                                    }
                                }),
                                app.createElement('br'),
                                app.createElement('p', 'Click on <a href="https://chrome.google.com/webstorex" target="_blank" rel="noopener noreferrer"><b>this</b></a>.', {
                                    style: {
                                        'margin-bottom': '0',
                                        'text-align': 'center'
                                    }
                                }),
                                app.createElement('br'),
                                app.createElement('p', 'Click on the bookmark in that new tab, Disable your filter extension, then close the tab.', {
                                    style: {
                                        'margin-bottom': '0',
                                        'text-align': 'center'
                                    }
                                }),
                                app.createElement('br'),
                                app.createElement('p', 'Congratulations! Your filter should now be disabled.', {
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
        } else {
            app.main.filter_bypass = app.createElement(
                'div',
                [
                    app.createElement('section', [
                        app.createElement('h3', 'No exploits', {
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
                        app.createElement('p', 'no non-extension based filter bypasses are implemented... yet', {
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

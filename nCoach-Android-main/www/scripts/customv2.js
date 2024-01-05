setTimeout(function () {
    var _0x399bx1 = document.getElementById('preloader');
    if (_0x399bx1) {
        _0x399bx1.classList.add('preloader-hide')
    }
}, 150);
document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    let _0x399bx2 = true;
    let _0x399bx3 = true;
    var _0x399bx4 = 'Sticky';
    var _0x399bx5 = 1;
    var _0x399bx6 = false;
    var _0x399bx7 = 'http://localhost:8000/';
    var _0x399bx8 = '_service-worker.js';

    function _0x399bx9() {
        var _0x399bxa, _0x399bxb, _0x399bxc;
        var _0x399bxd = document.getElementsByClassName('menu-hider');
        if (!_0x399bxd.length) {
            document.body.innerHTML += '<div class="menu-hider"></div>'
        };
        document.querySelectorAll('.menu').forEach((_0x399bxc) => {
            _0x399bxc.style.display = 'block'
        });
        var _0x399bxe = document.querySelectorAll('input');
        if (_0x399bxe.length) {
            var _0x399bxf = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
            var _0x399bx10 = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
            var _0x399bx11 = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
            var _0x399bx12 = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/;
            var _0x399bx13 = /^(0|[1-9]\d*)$/;
            var _0x399bx14 = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/;
            var _0x399bx15 = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/;

            function _0x399bx16(_0x399bxc) {
                _0x399bxc.parentElement.querySelectorAll('.valid')[0].classList.remove('disabled');
                _0x399bxc.parentElement.querySelectorAll('.invalid')[0].classList.add('disabled')
            }

            function _0x399bx17(_0x399bxc) {
                _0x399bxc.parentElement.querySelectorAll('.valid')[0].classList.add('disabled');
                _0x399bxc.parentElement.querySelectorAll('.invalid')[0].classList.remove('disabled')
            }

            function _0x399bx18(_0x399bxc) {
                _0x399bxc.parentElement.querySelectorAll('em')[0].classList.remove('disabled');
                _0x399bxc.parentElement.querySelectorAll('.valid')[0].classList.add('disabled');
                _0x399bxc.parentElement.querySelectorAll('.invalid')[0].classList.add('disabled')
            }
            var _0x399bx19 = document.querySelectorAll('.input-style input:not([type="date"])');
            _0x399bx19.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('keyup', (_0x399bxb) => {
                    if (!_0x399bxc.value == '') {
                        _0x399bxc.parentElement.classList.add('input-style-active');
                        _0x399bxc.parentElement.querySelector('em').classList.add('disabled')
                    } else {
                        _0x399bxc.parentElement.querySelectorAll('.valid')[0].classList.add('disabled');
                        _0x399bxc.parentElement.querySelectorAll('.invalid')[0].classList.add('disabled');
                        _0x399bxc.parentElement.classList.remove('input-style-active');
                        _0x399bxc.parentElement.querySelector('em').classList.remove('disabled')
                    }
                })
            });
            var _0x399bx1a = document.querySelectorAll('.input-style textarea');
            _0x399bx1a.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('keyup', (_0x399bxb) => {
                    if (!_0x399bxc.value == '') {
                        _0x399bxc.parentElement.classList.add('input-style-active');
                        _0x399bxc.parentElement.querySelector('em').classList.add('disabled')
                    } else {
                        _0x399bxc.parentElement.classList.remove('input-style-active');
                        _0x399bxc.parentElement.querySelector('em').classList.remove('disabled')
                    }
                })
            });
            var _0x399bx1b = document.querySelectorAll('.input-style select');
            _0x399bx1b.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('change', (_0x399bxb) => {
                    if (_0x399bxc.value !== 'default') {
                        _0x399bxc.parentElement.classList.add('input-style-active');
                        _0x399bxc.parentElement.querySelectorAll('.valid')[0].classList.remove('disabled');
                        _0x399bxc.parentElement.querySelectorAll('.invalid, em, span')[0].classList.add('disabled')
                    };
                    if (_0x399bxc.value == 'default') {
                        _0x399bxc.parentElement.querySelectorAll('span, .valid, em')[0].classList.add('disabled');
                        _0x399bxc.parentElement.querySelectorAll('.invalid')[0].classList.remove('disabled');
                        _0x399bxc.parentElement.classList.add('input-style-active')
                    }
                })
            });
            var _0x399bx1c = document.querySelectorAll('.input-style input[type="date"]');
            _0x399bx1c.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('change', (_0x399bxb) => {
                    _0x399bxc.parentElement.classList.add('input-style-active');
                    _0x399bxc.parentElement.querySelectorAll('.valid')[0].classList.remove('disabled');
                    _0x399bxc.parentElement.querySelectorAll('.invalid')[0].classList.add('disabled')
                })
            });
            var _0x399bx1d = document.querySelectorAll('.validate-field input, .validator-field textarea');
            if (_0x399bx1d.length) {
                _0x399bx1d.forEach((_0x399bxc) => {
                    return _0x399bxc.addEventListener('keyup', (_0x399bxb) => {
                        var _0x399bx1e = _0x399bxc.getAttribute('type');
                        switch (_0x399bx1e) {
                        case 'name':
                            _0x399bx11.test(_0x399bxc.value) ? _0x399bx16(_0x399bxc) : _0x399bx17(_0x399bxc);
                            break;
                        case 'number':
                            _0x399bx13.test(_0x399bxc.value) ? _0x399bx16(_0x399bxc) : _0x399bx17(_0x399bxc);
                            break;
                        case 'email':
                            _0x399bxf.test(_0x399bxc.value) ? _0x399bx16(_0x399bxc) : _0x399bx17(_0x399bxc);
                            break;
                        case 'text':
                            _0x399bx15.test(_0x399bxc.value) ? _0x399bx16(_0x399bxc) : _0x399bx17(_0x399bxc);
                            break;
                        case 'url':
                            _0x399bx14.test(_0x399bxc.value) ? _0x399bx16(_0x399bxc) : _0x399bx17(_0x399bxc);
                            break;
                        case 'tel':
                            _0x399bx10.test(_0x399bxc.value) ? _0x399bx16(_0x399bxc) : _0x399bx17(_0x399bxc);
                            break;
                        case 'password':
                            _0x399bx12.test(_0x399bxc.value) ? _0x399bx16(_0x399bxc) : _0x399bx17(_0x399bxc);
                            break
                        };
                        if (_0x399bxc.value === '') {
                            _0x399bx18(_0x399bxc)
                        }
                    })
                })
            }
        };
        var _0x399bx1f = document.getElementsByClassName('splide');
        if (_0x399bx1f.length) {
            var _0x399bx20 = document.querySelectorAll('.single-slider');
            if (_0x399bx20.length) {
                _0x399bx20.forEach(function (_0x399bxb) {
                    var _0x399bx21 = new Splide('#' + _0x399bxb.id, {
                        type: 'loop',
                        autoplay: true,
                        interval: 4000,
                        perPage: 1
                    }).mount();
                    var _0x399bx22 = document.querySelectorAll('.slider-next');
                    var _0x399bx23 = document.querySelectorAll('.slider-prev');
                    _0x399bx22.forEach((_0x399bxc) => {
                        return _0x399bxc.addEventListener('click', (_0x399bxc) => {
                            _0x399bx21.go('>')
                        })
                    });
                    _0x399bx23.forEach((_0x399bxc) => {
                        return _0x399bxc.addEventListener('click', (_0x399bxc) => {
                            _0x399bx21.go('<')
                        })
                    })
                })
            };
            var _0x399bx24 = document.querySelectorAll('.double-slider');
            if (_0x399bx24.length) {
                _0x399bx24.forEach(function (_0x399bxb) {
                    var _0x399bx25 = new Splide('#' + _0x399bxb.id, {
                        type: 'loop',
                        autoplay: true,
                        interval: 4000,
                        arrows: false,
                        perPage: 2
                    }).mount()
                })
            };
            var _0x399bx26 = document.querySelectorAll('.tripple-slider');
            if (_0x399bx26.length) {
                _0x399bx26.forEach(function (_0x399bxb) {
                    var _0x399bx27 = new Splide('#' + _0x399bxb.id, {
                        type: 'loop',
                        autoplay: true,
                        padding: {
                            left: '0px',
                            right: '80px'
                        },
                        interval: 4000,
                        arrows: false,
                        perPage: 2,
                        perMove: 1
                    }).mount()
                })
            }
        };
        const _0x399bx28 = document.querySelectorAll('a[href="#"]');
        _0x399bx28.forEach((_0x399bxc) => {
            return _0x399bxc.addEventListener('click', (_0x399bxb) => {
                _0x399bxb.preventDefault();
                return false
            })
        });
        var _0x399bx29 = document.querySelectorAll('.map-full');
        if (_0x399bx29.length) {
            var _0x399bx2a = document.querySelectorAll('.show-map');
            var _0x399bx2b = document.querySelectorAll('.hide-map');
            _0x399bx2a[0].addEventListener('click', function (_0x399bxb) {
                document.getElementsByClassName('card-overlay')[0].classList.add('disabled');
                document.getElementsByClassName('card-center')[0].classList.add('disabled');
                document.getElementsByClassName('hide-map')[0].classList.remove('disabled')
            });
            _0x399bx2b[0].addEventListener('click', function (_0x399bxb) {
                document.getElementsByClassName('card-overlay')[0].classList.remove('disabled');
                document.getElementsByClassName('card-center')[0].classList.remove('disabled');
                document.getElementsByClassName('hide-map')[0].classList.add('disabled')
            })
        };
        var _0x399bx2c = document.querySelectorAll('.todo-list a');
        _0x399bx2c.forEach((_0x399bxc) => {
            return _0x399bxc.addEventListener('click', (_0x399bxb) => {
                _0x399bxc.classList.toggle('opacity-50');
                _0x399bxc.querySelector('i:last-child').classList.toggle('far');
                _0x399bxc.querySelector('i:last-child').classList.toggle('fa');
                _0x399bxc.querySelector('i:last-child').classList.toggle('fa-check-square');
                _0x399bxc.querySelector('i:last-child').classList.toggle('fa-square');
                _0x399bxc.querySelector('i:last-child').classList.toggle('color-green-dark')
            })
        });
        var _0x399bx2d = document.querySelectorAll('.menu');
        if (_0x399bx2d.length) {
            var _0x399bx2e = document.querySelectorAll('.menu-box-left, .menu-box-right');
            _0x399bx2e.forEach(function (_0x399bxb) {
                if (_0x399bxb.getAttribute('data-menu-width') === 'cover') {
                    _0x399bxb.style.width = '100%'
                } else {
                    _0x399bxb.style.width = (_0x399bxb.getAttribute('data-menu-width')) + 'px'
                }
            });
            var _0x399bx2f = document.querySelectorAll('.menu-box-bottom, .menu-box-top, .menu-box-modal');
            _0x399bx2f.forEach(function (_0x399bxb) {
                if (_0x399bxb.getAttribute('data-menu-width') === 'cover') {
                    _0x399bxb.style.width = '100%';
                    _0x399bxb.style.height = '100%'
                } else {
                    _0x399bxb.style.width = (_0x399bxb.getAttribute('data-menu-width')) + 'px';
                    _0x399bxb.style.height = (_0x399bxb.getAttribute('data-menu-height')) + 'px'
                }
            });
            var _0x399bx30 = document.querySelectorAll('[data-menu]');
            var _0x399bx31 = document.querySelectorAll('.header, #footer-bar, .page-content');
            _0x399bx30.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('click', (_0x399bxb) => {
                    const _0x399bx32 = document.querySelectorAll('.menu-active');
                    for (let _0x399bxa = 0; _0x399bxa < _0x399bx32.length; _0x399bxa++) {
                        _0x399bx32[_0x399bxa].classList.remove('menu-active')
                    };
                    var _0x399bx33 = _0x399bxc.getAttribute('data-menu');
                    document.getElementById(_0x399bx33).classList.add('menu-active');
                    document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
                    var _0x399bx34 = document.getElementById(_0x399bx33);
                    var _0x399bx35 = _0x399bx34.getAttribute('data-menu-effect');
                    var _0x399bx36 = _0x399bx34.classList.contains('menu-box-left');
                    var _0x399bx37 = _0x399bx34.classList.contains('menu-box-right');
                    var _0x399bx38 = _0x399bx34.classList.contains('menu-box-top');
                    var _0x399bx39 = _0x399bx34.classList.contains('menu-box-bottom');
                    var _0x399bx3a = _0x399bx34.offsetWidth;
                    var _0x399bx3b = _0x399bx34.offsetHeight;
                    if (_0x399bx35 === 'menu-push') {
                        var _0x399bx3a = document.getElementById(_0x399bx33).getAttribute('data-menu-width');
                        if (_0x399bx36) {
                            for (let _0x399bxa = 0; _0x399bxa < _0x399bx31.length; _0x399bxa++) {
                                _0x399bx31[_0x399bxa].style.transform = 'translateX(' + _0x399bx3a + 'px)'
                            }
                        };
                        if (_0x399bx37) {
                            for (let _0x399bxa = 0; _0x399bxa < _0x399bx31.length; _0x399bxa++) {
                                _0x399bx31[_0x399bxa].style.transform = 'translateX(-' + _0x399bx3a + 'px)'
                            }
                        };
                        if (_0x399bx39) {
                            for (let _0x399bxa = 0; _0x399bxa < _0x399bx31.length; _0x399bxa++) {
                                _0x399bx31[_0x399bxa].style.transform = 'translateY(-' + _0x399bx3b + 'px)'
                            }
                        };
                        if (_0x399bx38) {
                            for (let _0x399bxa = 0; _0x399bxa < _0x399bx31.length; _0x399bxa++) {
                                _0x399bx31[_0x399bxa].style.transform = 'translateY(' + _0x399bx3b + 'px)'
                            }
                        }
                    };
                    if (_0x399bx35 === 'menu-parallax') {
                        var _0x399bx3a = document.getElementById(_0x399bx33).getAttribute('data-menu-width');
                        if (_0x399bx36) {
                            for (let _0x399bxa = 0; _0x399bxa < _0x399bx31.length; _0x399bxa++) {
                                _0x399bx31[_0x399bxa].style.transform = 'translateX(' + _0x399bx3a / 10 + 'px)'
                            }
                        };
                        if (_0x399bx37) {
                            for (let _0x399bxa = 0; _0x399bxa < _0x399bx31.length; _0x399bxa++) {
                                _0x399bx31[_0x399bxa].style.transform = 'translateX(-' + _0x399bx3a / 10 + 'px)'
                            }
                        };
                        if (_0x399bx39) {
                            for (let _0x399bxa = 0; _0x399bxa < _0x399bx31.length; _0x399bxa++) {
                                _0x399bx31[_0x399bxa].style.transform = 'translateY(-' + _0x399bx3b / 5 + 'px)'
                            }
                        };
                        if (_0x399bx38) {
                            for (let _0x399bxa = 0; _0x399bxa < _0x399bx31.length; _0x399bxa++) {
                                _0x399bx31[_0x399bxa].style.transform = 'translateY(' + _0x399bx3b / 5 + 'px)'
                            }
                        }
                    }
                })
            });
            const _0x399bx3c = document.querySelectorAll('.close-menu, .menu-hider');
            _0x399bx3c.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('click', (_0x399bxb) => {
                    const _0x399bx32 = document.querySelectorAll('.menu-active');
                    for (let _0x399bxa = 0; _0x399bxa < _0x399bx32.length; _0x399bxa++) {
                        _0x399bx32[_0x399bxa].classList.remove('menu-active')
                    };
                    for (let _0x399bxa = 0; _0x399bxa < _0x399bx31.length; _0x399bxa++) {
                        _0x399bx31[_0x399bxa].style.transform = 'translateX(-' + 0 + 'px)'
                    }
                })
            })
        };
        const _0x399bx3d = document.querySelectorAll('[data-back-button]');
        if (_0x399bx3d.length) {
            _0x399bx3d.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('click', (_0x399bxb) => {
                    _0x399bxb.stopPropagation;
                    _0x399bxb.preventDefault;
                    window.history.go(-1)
                })
            })
        };
        const _0x399bx3e = document.querySelectorAll('.back-to-top-icon, .back-to-top-badge, .back-to-top');
        if (_0x399bx3e.length) {
            _0x399bx3e.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('click', (_0x399bxb) => {
                    window.scrollTo({
                        top: 0,
                        behavior: `${'smooth'}`
                    })
                })
            })
        };

        function _0x399bx3f() {
            let _0x399bx40, _0x399bx41;
            if (/iP(hone|od|ad)/ ['test'](navigator.platform)) {
                _0x399bx41 = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
                _0x399bx40 = {
                    status: true,
                    version: parseInt(_0x399bx41[1], 10),
                    info: parseInt(_0x399bx41[1], 10) + '.' + parseInt(_0x399bx41[2], 10) + '.' + parseInt(_0x399bx41[3] || 0, 10)
                }
            } else {
                _0x399bx40 = {
                    status: false,
                    version: false,
                    info: ''
                }
            };
            return _0x399bx40
        }
        let _0x399bx42 = _0x399bx3f();
        if (_0x399bx42.version > 14) {
            document.querySelectorAll('#page')[0].classList.add('min-ios15')
        };
        const _0x399bx43 = document.getElementsByClassName('card');

        function _0x399bx44() {
            var _0x399bx45, _0x399bx46, _0x399bx47;
            var _0x399bx47 = document.querySelectorAll('.header:not(.header-transparent)')[0];
            var _0x399bx48 = document.querySelectorAll('#footer-bar')[0];
            _0x399bx47 ? _0x399bx45 = document.querySelectorAll('.header')[0].offsetHeight : _0x399bx45 = 0;
            _0x399bx48 ? _0x399bx46 = document.querySelectorAll('#footer-bar')[0].offsetHeight : _0x399bx46 = 0;
            for (let _0x399bxa = 0; _0x399bxa < _0x399bx43.length; _0x399bxa++) {
                if (_0x399bx43[_0x399bxa].getAttribute('data-card-height') === 'cover') {
                    if (window.matchMedia('(display-mode: fullscreen)').matches) {
                        var _0x399bx49 = window.outerHeight
                    };
                    if (!window.matchMedia('(display-mode: fullscreen)').matches) {
                        var _0x399bx49 = window.innerHeight
                    };
                    var _0x399bx4a = _0x399bx49 + 'px'
                };
                if (_0x399bx43[_0x399bxa].hasAttribute('data-card-height')) {
                    var _0x399bx4b = _0x399bx43[_0x399bxa].getAttribute('data-card-height');
                    _0x399bx43[_0x399bxa].style.height = _0x399bx4b + 'px';
                    if (_0x399bx4b === 'cover') {
                        var _0x399bx4c = _0x399bx4b;
                        _0x399bx43[_0x399bxa].style.height = _0x399bx4a
                    }
                }
            }
        }
        if (_0x399bx43.length) {
            _0x399bx44();
            window.addEventListener('resize', _0x399bx44)
        };
        var _0x399bx4d = document.querySelectorAll('[data-change-highlight]');
        _0x399bx4d.forEach((_0x399bxc) => {
            return _0x399bxc.addEventListener('click', (_0x399bxb) => {
                var _0x399bx4e = _0x399bxc.getAttribute('data-change-highlight');
                var _0x399bx4f = document.querySelectorAll('.page-highlight');
                if (_0x399bx4f.length) {
                    _0x399bx4f.forEach(function (_0x399bxb) {
                        _0x399bxb.remove()
                    })
                };
                var _0x399bx50 = document.createElement('link');
                _0x399bx50.rel = 'stylesheet';
                _0x399bx50.className = 'page-highlight';
                _0x399bx50.type = 'text/css';
                _0x399bx50.href = 'styles/highlights/highlight_' + _0x399bx4e + '.css';
                document.getElementsByTagName('head')[0].appendChild(_0x399bx50);
                document.body.setAttribute('data-highlight', 'highlight-' + _0x399bx4e);
                localStorage.setItem(_0x399bx4 + '-Highlight', _0x399bx4e)
            })
        });
        var _0x399bx51 = localStorage.getItem(_0x399bx4 + '-Highlight');
        if (_0x399bx51) {
            document.body.setAttribute('data-highlight', _0x399bx51);
            var _0x399bx50 = document.createElement('link');
            _0x399bx50.rel = 'stylesheet';
            _0x399bx50.className = 'page-highlight';
            _0x399bx50.type = 'text/css';
            _0x399bx50.href = 'styles/highlights/highlight_' + _0x399bx51 + '.css';
            if (!document.querySelectorAll('.page-highlight').length) {
                document.getElementsByTagName('head')[0].appendChild(_0x399bx50);
                document.body.setAttribute('data-highlight', 'highlight-' + _0x399bx51)
            }
        } else {
            var _0x399bx52 = document.body.getAttribute('data-highlight');
            var _0x399bx53 = _0x399bx52.split('highlight-');
            document.body.setAttribute('data-highlight', _0x399bx53[1]);
            var _0x399bx50 = document.createElement('link');
            _0x399bx50.rel = 'stylesheet';
            _0x399bx50.className = 'page-highlight';
            _0x399bx50.type = 'text/css';
            _0x399bx50.href = 'styles/highlights/highlight_' + _0x399bx53[1] + '.css';
            if (!document.querySelectorAll('.page-highlight').length) {
                document.getElementsByTagName('head')[0].appendChild(_0x399bx50);
                document.body.setAttribute('data-highlight', 'highlight-' + _0x399bx53[1]);
                localStorage.setItem(_0x399bx4 + '-Highlight', _0x399bx53[1])
            }
        };
        var _0x399bx54 = document.querySelectorAll('[data-change-background]');
        _0x399bx54.forEach((_0x399bxc) => {
            return _0x399bxc.addEventListener('click', (_0x399bxb) => {
                var _0x399bx55 = _0x399bxc.getAttribute('data-change-background');
                document.body.setAttribute('data-gradient', 'body-' + _0x399bx55 + '');
                localStorage.setItem(_0x399bx4 + '-Gradient', _0x399bx55)
            })
        });
        var _0x399bx56 = localStorage.getItem(_0x399bx4 + '-Gradient');
        if (_0x399bx56) {
            document.body.setAttribute('data-gradient', 'body-' + _0x399bx56 + '')
        };
        const _0x399bx57 = document.querySelectorAll('[data-toggle-theme]');

        function _0x399bx58() {
            document.body.classList.add('theme-dark');
            document.body.classList.remove('theme-light', 'detect-theme');
            for (let _0x399bxa = 0; _0x399bxa < _0x399bx57.length; _0x399bxa++) {
                _0x399bx57[_0x399bxa].checked = 'checked'
            };
            localStorage.setItem(_0x399bx4 + '-Theme', 'dark-mode')
        }

        function _0x399bx59() {
            document.body.classList.add('theme-light');
            document.body.classList.remove('theme-dark', 'detect-theme');
            for (let _0x399bxa = 0; _0x399bxa < _0x399bx57.length; _0x399bxa++) {
                _0x399bx57[_0x399bxa].checked = false
            };
            localStorage.setItem(_0x399bx4 + '-Theme', 'light-mode')
        }

        function _0x399bx5a() {
            var _0x399bx5b = document.querySelectorAll('.btn, .header, #footer-bar, .menu-box, .menu-active');
            for (let _0x399bxa = 0; _0x399bxa < _0x399bx5b.length; _0x399bxa++) {
                _0x399bx5b[_0x399bxa].style.transition = 'all 0s ease'
            }
        }

        function _0x399bx5c() {
            var _0x399bx5d = document.querySelectorAll('.btn, .header, #footer-bar, .menu-box, .menu-active');
            for (let _0x399bxa = 0; _0x399bxa < _0x399bx5d.length; _0x399bxa++) {
                _0x399bx5d[_0x399bxa].style.transition = ''
            }
        }

        function _0x399bx5e() {
            const _0x399bx5f = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const _0x399bx60 = window.matchMedia('(prefers-color-scheme: light)').matches;
            const _0x399bx61 = window.matchMedia('(prefers-color-scheme: no-preference)').matches;
            window.matchMedia('(prefers-color-scheme: dark)').addListener((_0x399bxb) => {
                return _0x399bxb.matches && _0x399bx58()
            });
            window.matchMedia('(prefers-color-scheme: light)').addListener((_0x399bxb) => {
                return _0x399bxb.matches && _0x399bx59()
            });
            if (_0x399bx5f) {
                _0x399bx58()
            };
            if (_0x399bx60) {
                _0x399bx59()
            }
        }
        const _0x399bx62 = document.querySelectorAll('[data-toggle-theme]');
        _0x399bx62.forEach((_0x399bxc) => {
            return _0x399bxc.addEventListener('click', (_0x399bxb) => {
                if (document.body.className == 'theme-light') {
                    _0x399bx5a();
                    _0x399bx58()
                } else {
                    if (document.body.className == 'theme-dark') {
                        _0x399bx5a();
                        _0x399bx59()
                    }
                };
                setTimeout(function () {
                    _0x399bx5c()
                }, 350)
            })
        });
        if (localStorage.getItem(_0x399bx4 + '-Theme') == 'dark-mode') {
            for (let _0x399bxa = 0; _0x399bxa < _0x399bx57.length; _0x399bxa++) {
                _0x399bx57[_0x399bxa].checked = 'checked'
            };
            document.body.className = 'theme-dark'
        };
        if (localStorage.getItem(_0x399bx4 + '-Theme') == 'light-mode') {
            document.body.className = 'theme-light'
        };
        if (document.body.className == 'detect-theme') {
            _0x399bx5e()
        };
        const _0x399bx63 = document.querySelectorAll('.detect-dark-mode');
        _0x399bx63.forEach((_0x399bxc) => {
            return _0x399bxc.addEventListener('click', (_0x399bxb) => {
                document.body.classList.remove('theme-light', 'theme-dark');
                document.body.classList.add('detect-theme');
                setTimeout(function () {
                    _0x399bx5e()
                }, 50)
            })
        });
        const _0x399bx64 = document.querySelectorAll('.accordion-btn');
        if (_0x399bx64.length) {
            _0x399bx64.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('click', (_0x399bx65) => {
                    _0x399bxc.querySelector('i:last-child').classList.toggle('fa-rotate-180')
                })
            })
        };
        const _0x399bx66 = document.getElementsByClassName('upload-file');
        if (_0x399bx66.length) {
            _0x399bx66[0].addEventListener('change', _0x399bx67, false);

            function _0x399bx67(_0x399bx65) {
                if (this.files && this.files[0]) {
                    var _0x399bx68 = document.getElementById('image-data');
                    _0x399bx68.src = URL.createObjectURL(this.files[0])
                };
                const _0x399bx69 = _0x399bx65.target.files;
                const _0x399bx6a = _0x399bx69[0].name;
                document.getElementsByClassName('file-data')[0].classList.add('disabled');
                document.getElementsByClassName('upload-file-data')[0].classList.remove('disabled');
                document.getElementsByClassName('upload-file-name')[0].innerHTML = _0x399bx69[0].name;
                document.getElementsByClassName('upload-file-modified')[0].innerHTML = _0x399bx69[0].lastModifiedDate;
                document.getElementsByClassName('upload-file-size')[0].innerHTML = _0x399bx69[0].size / 1000 + 'kb';
                document.getElementsByClassName('upload-file-type')[0].innerHTML = _0x399bx69[0].type
            }
        };
        var _0x399bx6b = document.querySelectorAll('.get-location');
        if (_0x399bx6b.length) {
            var _0x399bx6c = document.getElementsByClassName('location-support')[0];
            if (typeof (_0x399bx6c) != 'undefined' && _0x399bx6c != null) {
                if ('geolocation' in navigator) {
                    _0x399bx6c.innerHTML = 'Your browser and device <strong class="color-green2-dark">support</strong> Geolocation.'
                } else {
                    _0x399bx6c.innerHTML = 'Your browser and device <strong class="color-red2-dark">support</strong> Geolocation.'
                }
            };

            function _0x399bx6d() {
                const _0x399bx6e = document.querySelector('.location-coordinates');

                function _0x399bx6f(_0x399bx70) {
                    const _0x399bx71 = _0x399bx70.coords.latitude;
                    const _0x399bx72 = _0x399bx70.coords.longitude;
                    _0x399bx6e.innerHTML = '<strong>Longitude:</strong> ' + _0x399bx72 + '<br><strong>Latitude:</strong> ' + _0x399bx71;
                    var _0x399bx73 = 'https://www.google.com/maps/embed/v1/view?key=AIzaSyAM3nxDVrkjyKwdIZp8QOplmBKLRVI5S_Y&center=';
                    var _0x399bx74 = _0x399bx71 + ',';
                    var _0x399bx75 = _0x399bx72;
                    var _0x399bx76 = '&zoom=16&maptype=satellite';
                    var _0x399bx77 = '';
                    var _0x399bx78 = _0x399bx73 + _0x399bx74 + _0x399bx75 + _0x399bx76;
                    var _0x399bx79 = _0x399bx73 + _0x399bx74 + _0x399bx75 + _0x399bx77;
                    document.getElementsByClassName('location-map')[0].setAttribute('src', _0x399bx78);
                    document.getElementsByClassName('location-button')[0].setAttribute('href', _0x399bx79);
                    document.getElementsByClassName('location-button')[0].classList.remove('disabled')
                }

                function _0x399bx7a() {
                    _0x399bx6e.textContent = 'Unable to retrieve your location'
                }
                if (!navigator.geolocation) {
                    _0x399bx6e.textContent = 'Geolocation is not supported by your browser'
                } else {
                    _0x399bx6e.textContent = 'Locating';
                    navigator.geolocation.getCurrentPosition(_0x399bx6f, _0x399bx7a)
                }
            }
            var _0x399bx7b = document.getElementsByClassName('get-location')[0];
            if (typeof (_0x399bx7b) != 'undefined' && _0x399bx7b != null) {
                _0x399bx7b.addEventListener('click', function () {
                    this.classList.add('disabled');
                    _0x399bx6d()
                })
            }
        };
        const _0x399bx7c = document.querySelectorAll('.card-scale');
        if (_0x399bx7c.length) {
            _0x399bx7c.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('mouseenter', (_0x399bx65) => {
                    _0x399bxc.querySelectorAll('img')[0].classList.add('card-scale-image')
                })
            });
            _0x399bx7c.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('mouseleave', (_0x399bx65) => {
                    _0x399bxc.querySelectorAll('img')[0].classList.remove('card-scale-image')
                })
            })
        };
        const _0x399bx7d = document.querySelectorAll('.card-hide');
        if (_0x399bx7d.length) {
            _0x399bx7d.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('mouseenter', (_0x399bx65) => {
                    _0x399bxc.querySelectorAll('.card-center, .card-bottom, .card-top, .card-overlay')[0].classList.add('card-hide-image')
                })
            });
            _0x399bx7d.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('mouseleave', (_0x399bx65) => {
                    _0x399bxc.querySelectorAll('.card-center, .card-bottom, .card-top, .card-overlay')[0].classList.remove('card-hide-image')
                })
            })
        };
        const _0x399bx7e = document.querySelectorAll('.card-rotate');
        if (_0x399bx7e.length) {
            _0x399bx7e.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('mouseenter', (_0x399bx65) => {
                    _0x399bxc.querySelectorAll('img')[0].classList.add('card-rotate-image')
                })
            });
            _0x399bx7e.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('mouseleave', (_0x399bx65) => {
                    _0x399bxc.querySelectorAll('img')[0].classList.remove('card-rotate-image')
                })
            })
        };
        const _0x399bx7f = document.querySelectorAll('.card-grayscale');
        if (_0x399bx7f.length) {
            _0x399bx7f.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('mouseenter', (_0x399bx65) => {
                    _0x399bxc.querySelectorAll('img')[0].classList.add('card-grayscale-image')
                })
            });
            _0x399bx7f.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('mouseleave', (_0x399bx65) => {
                    _0x399bxc.querySelectorAll('img')[0].classList.remove('card-grayscale-image')
                })
            })
        };
        const _0x399bx80 = document.querySelectorAll('.card-blur');
        if (_0x399bx80.length) {
            _0x399bx80.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('mouseenter', (_0x399bx65) => {
                    _0x399bxc.querySelectorAll('img')[0].classList.add('card-blur-image')
                })
            });
            _0x399bx80.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('mouseleave', (_0x399bx65) => {
                    _0x399bxc.querySelectorAll('img')[0].classList.remove('card-blur-image')
                })
            })
        };
        var _0x399bx81 = document.querySelectorAll('.check-visited');
        if (_0x399bx81.length) {
            function _0x399bx82() {
                var _0x399bx83 = JSON.parse(localStorage.getItem(_0x399bx4 + '_Visited_Links')) || [];
                var _0x399bx84 = document.querySelectorAll('.check-visited a');
                for (let _0x399bxa = 0; _0x399bxa < _0x399bx84.length; _0x399bxa++) {
                    var _0x399bx85 = _0x399bx84[_0x399bxa];
                    _0x399bx85.addEventListener('click', function (_0x399bxb) {
                        var _0x399bx86 = this.href;
                        if (_0x399bx83.indexOf(_0x399bx86) == -1) {
                            _0x399bx83.push(_0x399bx86);
                            localStorage.setItem(_0x399bx4 + '_Visited_Links', JSON.stringify(_0x399bx83))
                        }
                    });
                    if (_0x399bx83.indexOf(_0x399bx85.href) !== -1) {
                        _0x399bx85.className += ' visited-link'
                    }
                }
            }
            _0x399bx82()
        };
        var _0x399bx87 = document.querySelectorAll('.scroll-ad, .header-auto-show');
        if (_0x399bx87.length) {
            var _0x399bx88 = document.querySelectorAll('.scroll-ad');
            var _0x399bx89 = document.querySelectorAll('.header-auto-show');
            window.addEventListener('scroll', function () {
                if (document.querySelectorAll('.scroll-ad, .header-auto-show').length) {
                    function _0x399bx8a() {
                        _0x399bx88[0].classList.add('scroll-ad-visible')
                    }

                    function _0x399bx8b() {
                        _0x399bx88[0].classList.remove('scroll-ad-visible')
                    }

                    function _0x399bx8c() {
                        _0x399bx89[0].classList.add('header-active')
                    }

                    function _0x399bx8d() {
                        _0x399bx89[0].classList.remove('header-active')
                    }
                    var _0x399bx8e = window.outerWidth;
                    var _0x399bx8f = document.documentElement.scrollTop;
                    let _0x399bx90 = _0x399bx8f <= 150;
                    var _0x399bx91 = _0x399bx8f >= 150;
                    let _0x399bx92 = (_0x399bx8e - _0x399bx8f + 1000) <= 150;
                    if (_0x399bx88.length) {
                        _0x399bx90 ? _0x399bx8b() : null;
                        _0x399bx91 ? _0x399bx8a() : null;
                        _0x399bx92 ? _0x399bx8b() : null
                    };
                    if (_0x399bx89.length) {
                        _0x399bx90 ? _0x399bx8d() : null;
                        _0x399bx91 ? _0x399bx8c() : null
                    }
                }
            })
        };
        var _0x399bx93 = document.querySelectorAll('.stepper-add');
        var _0x399bx94 = document.querySelectorAll('.stepper-sub');
        if (_0x399bx93.length) {
            _0x399bx93.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('click', (_0x399bx65) => {
                    var _0x399bx95 = _0x399bxc.parentElement.querySelector('input').value;
                    _0x399bxc.parentElement.querySelector('input').value = +_0x399bx95 + 1
                })
            });
            _0x399bx94.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('click', (_0x399bx65) => {
                    var _0x399bx95 = _0x399bxc.parentElement.querySelector('input').value;
                    _0x399bxc.parentElement.querySelector('input').value = +_0x399bx95 - 1
                })
            })
        };
        var _0x399bx96 = document.querySelectorAll('[data-trigger-switch]:not([data-toggle-theme])');
        if (_0x399bx96.length) {
            _0x399bx96.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('click', (_0x399bx65) => {
                    var _0x399bx97 = _0x399bxc.getAttribute('data-trigger-switch');
                    var _0x399bx98 = document.getElementById(_0x399bx97);
                    _0x399bx98.checked ? _0x399bx98.checked = false : _0x399bx98.checked = true
                })
            })
        };
        var _0x399bx99 = document.querySelectorAll('.classic-toggle');
        if (_0x399bx99.length) {
            _0x399bx99.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('click', (_0x399bx65) => {
                    _0x399bxc.querySelector('i:last-child').classList.toggle('fa-rotate-180');
                    _0x399bxc.querySelector('i:last-child').style.transition = 'all 250ms ease'
                })
            })
        };
        var _0x399bx9a = document.querySelectorAll('[data-toast]');
        if (_0x399bx9a.length) {
            _0x399bx9a.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('click', (_0x399bx65) => {
                    var _0x399bx9b = _0x399bxc.getAttribute('data-toast');
                    var _0x399bx9c = document.getElementById(_0x399bx9b);
                    var _0x399bx9c = new bootstrap.Toast(_0x399bx9c);
                    _0x399bx9c.show()
                })
            })
        };
        var _0x399bx9d = [].slice.call(document.querySelectorAll('[data-bs-toggle="dropdown"]'));
        if (_0x399bx9d.length) {
            var _0x399bx9e = _0x399bx9d.map(function (_0x399bx9f) {
                return new bootstrap.Dropdown(_0x399bx9f)
            })
        };
        var _0x399bxa0 = document.querySelectorAll('.show-business-opened, .show-business-closed, .working-hours');
        if (_0x399bxa0.length) {
            var _0x399bx40 = new Date();
            var _0x399bxa1 = _0x399bx40.getDay();
            var _0x399bxa2 = _0x399bx40.getHours() + '.' + _0x399bx40.getMinutes();
            var _0x399bxa3 = [
                ['Sunday'],
                ['Monday', 9.00, 17.00],
                ['Tuesday', 9.00, 17.00],
                ['Wednesday', 9.00, 17.00],
                ['Thursday', 9.00, 17.00],
                ['Friday', 9.00, 17.00],
                ['Saturday', 9.00, 13.00]
            ];
            var _0x399bxa4 = _0x399bxa3[_0x399bxa1];
            var _0x399bxa5 = document.querySelectorAll('.show-business-opened');
            var _0x399bxa6 = document.querySelectorAll('.show-business-closed');
            if (_0x399bxa2 > _0x399bxa4[1] && _0x399bxa2 < _0x399bxa4[2] || _0x399bxa2 > _0x399bxa4[3] && _0x399bxa2 < _0x399bxa4[4]) {
                _0x399bxa5.forEach(function (_0x399bxb) {
                    _0x399bxb.classList.remove('disabled')
                });
                _0x399bxa6.forEach(function (_0x399bxb) {
                    _0x399bxb.classList.add('disabled')
                })
            } else {
                _0x399bxa5.forEach(function (_0x399bxb) {
                    _0x399bxb.classList.add('disabled')
                });
                _0x399bxa6.forEach(function (_0x399bxb) {
                    _0x399bxb.classList.remove('disabled')
                })
            };
            var _0x399bxa0 = document.querySelectorAll('.working-hours[data-day]');
            _0x399bxa0.forEach(function (_0x399bxa7) {
                var _0x399bxa8 = _0x399bxa7.getAttribute('data-day');
                if (_0x399bxa8 === _0x399bxa4[0]) {
                    var _0x399bxa9 = '[data-day="' + _0x399bxa4[0] + '"]';
                    if (_0x399bxa2 > _0x399bxa4[1] && _0x399bxa2 < _0x399bxa4[2] || _0x399bxa2 > _0x399bxa4[3] && _0x399bxa2 < _0x399bxa4[4]) {
                        document.querySelectorAll(_0x399bxa9)[0].classList.add('bg-green-dark');
                        document.querySelectorAll(_0x399bxa9 + ' p').forEach(function (_0x399bxaa) {
                            _0x399bxaa.classList.add('color-white')
                        })
                    } else {
                        document.querySelectorAll(_0x399bxa9)[0].classList.add('bg-red-dark');
                        document.querySelectorAll(_0x399bxa9 + ' p').forEach(function (_0x399bxaa) {
                            _0x399bxaa.classList.add('color-white')
                        })
                    }
                }
            })
        };
        var _0x399bxab = document.querySelectorAll('[data-vibrate]');
        if (_0x399bxab.length) {
            var _0x399bxac = document.getElementsByClassName('start-vibrating')[0];
            var _0x399bxad = document.getElementsByClassName('stop-vibrating')[0];
            _0x399bxac.addEventListener('click', function () {
                var _0x399bxae = document.getElementsByClassName('vibrate-demo')[0].value;
                window.navigator.vibrate(_0x399bxae)
            });
            _0x399bxad.addEventListener('click', function () {
                window.navigator.vibrate(0)
            });
            _0x399bxab.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('click', (_0x399bxb) => {
                    var _0x399bxae = _0x399bxc.getAttribute('data-vibrate');
                    window.navigator.vibrate(_0x399bxae)
                })
            })
        };
        var _0x399bxaf = document.querySelectorAll('[data-timed-ad]');
        if (_0x399bxaf.length) {
            _0x399bxaf.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('click', (_0x399bxb) => {
                    var _0x399bxb0 = _0x399bxc.getAttribute('data-timed-ad');
                    var _0x399bxb1 = _0x399bxc.getAttribute('data-menu');
                    var _0x399bxb2 = _0x399bxb0;
                    var _0x399bxb3 = setInterval(function () {
                        if (_0x399bxb2 <= 1) {
                            clearInterval(_0x399bxb3);
                            document.getElementById(_0x399bxb1).querySelectorAll('.fa-times')[0].classList.remove('disabled');
                            document.getElementById(_0x399bxb1).querySelectorAll('.close-menu')[0].classList.remove('no-click');
                            document.getElementById(_0x399bxb1).querySelectorAll('span')[0].style.display = 'none'
                        } else {};
                        document.getElementById(_0x399bxb1).querySelectorAll('span')[0].innerHTML = _0x399bxb2 -= 1
                    }, 1000)
                })
            })
        };
        var _0x399bxb4 = document.querySelectorAll('[data-auto-show-ad]');
        if (_0x399bxb4.length) {
            var _0x399bxb5 = _0x399bxb4[0].getAttribute('data-auto-show-ad');
            var _0x399bxb3 = setInterval(function () {
                if (_0x399bxb5 <= 1) {
                    clearInterval(_0x399bxb3);
                    var _0x399bxb6 = _0x399bxb4[0].getAttribute('data-menu');
                    document.getElementById(_0x399bxb6).classList.add('menu-active');
                    var _0x399bxb7 = _0x399bxb4[0].getAttribute('data-timed-ad');
                    var _0x399bxb8 = setInterval(function () {
                        if (_0x399bxb7 <= 0) {
                            clearInterval(_0x399bxb8);
                            document.getElementById(_0x399bxb6).querySelectorAll('.fa-times')[0].classList.remove('disabled');
                            document.getElementById(_0x399bxb6).querySelectorAll('.close-menu')[0].classList.remove('no-click');
                            document.getElementById(_0x399bxb6).querySelectorAll('span')[0].style.display = 'none'
                        };
                        document.getElementById(_0x399bxb6).querySelectorAll('span')[0].innerHTML = _0x399bxb7 -= 1
                    }, 1000)
                };
                _0x399bxb5 -= 1
            }, 1000)
        };
        var _0x399bxb9 = document.querySelectorAll('.reading-progress-text');
        if (_0x399bxb9.length) {
            var _0x399bxba = _0x399bxb9[0].innerHTML.split(' ').length;
            var _0x399bxbb = Math.floor(_0x399bxba / 250);
            var _0x399bxbc = _0x399bxba % 60;
            document.getElementsByClassName('reading-progress-words')[0].innerHTML = _0x399bxba;
            document.getElementsByClassName('reading-progress-time')[0].innerHTML = _0x399bxbb + ':' + _0x399bxbc
        };
        var _0x399bxbd = document.querySelectorAll('.text-size-changer');
        if (_0x399bxbd.length) {
            var _0x399bxbe = document.querySelectorAll('.text-size-increase');
            var _0x399bxbf = document.querySelectorAll('.text-size-decrease');
            var _0x399bxc0 = document.querySelectorAll('.text-size-default');
            _0x399bxbe[0].addEventListener('click', function () {
                _0x399bxbd[0].querySelectorAll('*').forEach(function (_0x399bxc1) {
                    const _0x399bxc2 = window.getComputedStyle(_0x399bxc1).fontSize.split('px', 2)[0];
                    _0x399bxc1.style.fontSize = (+_0x399bxc2 + 1) + 'px'
                })
            });
            _0x399bxbf[0].addEventListener('click', function () {
                _0x399bxbd[0].querySelectorAll('*').forEach(function (_0x399bxc1) {
                    const _0x399bxc2 = window.getComputedStyle(_0x399bxc1).fontSize.split('px', 2)[0];
                    _0x399bxc1.style.fontSize = (+_0x399bxc2 - 1) + 'px'
                })
            });
            _0x399bxc0[0].addEventListener('click', function () {
                _0x399bxbd[0].querySelectorAll('*').forEach(function (_0x399bxc1) {
                    const _0x399bxc2 = window.getComputedStyle(_0x399bxc1).fontSize.split('px', 2)[0];
                    _0x399bxc1.style.fontSize = ''
                })
            })
        };
        var _0x399bxc3 = document.querySelectorAll('.qr-image');
        if (_0x399bxc3.length) {
            var _0x399bxc4 = window.location.href;
            var _0x399bxc5 = document.getElementsByClassName('generate-qr-auto')[0];
            var _0x399bxc6 = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';
            if (_0x399bxc5) {
                _0x399bxc5.setAttribute('src', _0x399bxc6 + _0x399bxc4)
            };
            var _0x399bxc7 = document.getElementsByClassName('generate-qr-button')[0];
            if (_0x399bxc7) {
                _0x399bxc7.addEventListener('click', function () {
                    var _0x399bxc8 = document.getElementsByClassName('qr-url')[0].value;
                    var _0x399bxc6 = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';
                    var _0x399bxc9 = '<img class="mx-auto polaroid-effect shadow-l mt-4 delete-qr" width="200" src="' + _0x399bxc6 + _0x399bxc8 + '" alt="img"><p class="font-11 text-center mb-0">' + _0x399bxc8 + '</p>';
                    document.getElementsByClassName('generate-qr-result')[0].innerHTML = _0x399bxc9;
                    _0x399bxc7.innerHTML = 'Generate New Button'
                })
            }
        };
        if (window.location.protocol === 'file:') {
            var _0x399bxca = document.querySelectorAll('a');
            _0x399bxca.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('mouseover', (_0x399bx65) => {})
            })
        };
        var _0x399bxcb = document.querySelectorAll('[data-search]');
        if (_0x399bxcb.length) {
            var _0x399bxcc = document.querySelectorAll('.search-results');
            var _0x399bxcd = document.querySelectorAll('.search-no-results');
            var _0x399bxce = document.querySelectorAll('.search-results div')[0].childElementCount;
            var _0x399bxcf = document.querySelectorAll('.search-trending');
            var _0x399bxd0 = document.querySelectorAll('.clear-search')[0];
            _0x399bxd0.addEventListener('click', function () {
                _0x399bxcb[0].value = '';
                _0x399bxd0.classList.add('disabled');
                _0x399bxcd[0].classList.add('disabled');
                _0x399bxcc[0].classList.add('disabled-search-list');
                if (_0x399bxcf[0]) {
                    _0x399bxcf[0].classList.remove('disabled')
                };
                var _0x399bxd1 = document.querySelectorAll('[data-filter-item]');
                for (let _0x399bxa = 0; _0x399bxa < _0x399bxd1.length; _0x399bxa++) {
                    _0x399bxd1[_0x399bxa].classList.add('disabled')
                }
            });

            function _0x399bxd2() {
                var _0x399bxd3 = _0x399bxcb[0].value;
                var _0x399bxd4 = _0x399bxd3.toLowerCase();
                if (_0x399bxd4 != '') {
                    _0x399bxd0.classList.remove('disabled');
                    _0x399bxcc[0].classList.remove('disabled-search-list');
                    var _0x399bxd1 = document.querySelectorAll('[data-filter-item]');
                    for (let _0x399bxa = 0; _0x399bxa < _0x399bxd1.length; _0x399bxa++) {
                        var _0x399bxd5 = _0x399bxd1[_0x399bxa].getAttribute('data-filter-name');
                        if (_0x399bxd5.includes(_0x399bxd4)) {
                            _0x399bxd1[_0x399bxa].classList.remove('disabled');
                            if (_0x399bxcf.length) {
                                _0x399bxcf[0].classList.add('disabled')
                            }
                        } else {
                            _0x399bxd1[_0x399bxa].classList.add('disabled');
                            if (_0x399bxcf.length) {
                                _0x399bxcf[0].classList.remove('disabled')
                            }
                        };
                        var _0x399bxd6 = document.querySelectorAll('.search-results div')[0].getElementsByClassName('disabled').length;
                        if (_0x399bxd6 === _0x399bxce) {
                            _0x399bxcd[0].classList.remove('disabled');
                            if (_0x399bxcf.length) {
                                _0x399bxcf[0].classList.add('disabled')
                            }
                        } else {
                            _0x399bxcd[0].classList.add('disabled');
                            if (_0x399bxcf.length) {
                                _0x399bxcf[0].classList.add('disabled')
                            }
                        }
                    }
                };
                if (_0x399bxd4 === '') {
                    _0x399bxd0.classList.add('disabled');
                    _0x399bxcc[0].classList.add('disabled-search-list');
                    _0x399bxcd[0].classList.add('disabled');
                    if (_0x399bxcf.length) {
                        _0x399bxcf[0].classList.remove('disabled')
                    }
                }
            }
            _0x399bxcb[0].addEventListener('keyup', function () {
                _0x399bxd2()
            });
            _0x399bxcb[0].addEventListener('click', function () {
                _0x399bxd2()
            });
            var _0x399bxd7 = document.querySelectorAll('.search-trending a');
            _0x399bxd7.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('click', (_0x399bx65) => {
                    var _0x399bxd8 = _0x399bxc.querySelectorAll('span')[0].textContent.toLowerCase();
                    _0x399bxcb[0].value = _0x399bxd8;
                    _0x399bxcb[0].click()
                })
            })
        };
        var _0x399bxd9 = document.querySelectorAll('[data-toggle-search]');
        if (_0x399bxd9) {
            _0x399bxd9.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('click', (_0x399bx65) => {
                    window.scrollTo({
                        top: 0,
                        behavior: `${'smooth'}`
                    });
                    document.querySelectorAll('.header')[0].classList.toggle('header-search-active')
                })
            })
        };
        var _0x399bxda = document.title;
        var _0x399bxdb = document.title;
        var _0x399bxdc = window.location.href;
        if (document.querySelectorAll('.shareToFacebook, .shareToTwitter, .shareToLinkedIn')[0]) {
            document.querySelectorAll('.shareToFacebook, .shareToTwitter, .shareToLinkedIn, .shareToWhatsApp, .shareToMail').forEach((_0x399bxdd) => {
                _0x399bxdd.setAttribute('target', '_blank')
            });
            document.querySelectorAll('.shareToFacebook').forEach((_0x399bxdd) => {
                return _0x399bxdd.setAttribute('href', 'https://www.facebook.com/sharer/sharer.php?u=' + _0x399bxdc)
            });
            document.querySelectorAll('.shareToTwitter').forEach((_0x399bxdd) => {
                return _0x399bxdd.setAttribute('href', 'http://twitter.com/share?text=' + _0x399bxda + '%20' + _0x399bxdc)
            });
            document.querySelectorAll('.shareToPinterest').forEach((_0x399bxdd) => {
                return _0x399bxdd.setAttribute('href', 'https://pinterest.com/pin/create/button/?url=' + _0x399bxdc)
            });
            document.querySelectorAll('.shareToWhatsApp').forEach((_0x399bxdd) => {
                return _0x399bxdd.setAttribute('href', 'whatsapp://send?text=' + _0x399bxdc)
            });
            document.querySelectorAll('.shareToMail').forEach((_0x399bxdd) => {
                return _0x399bxdd.setAttribute('href', 'mailto:?body=' + _0x399bxdc)
            });
            document.querySelectorAll('.shareToLinkedIn').forEach((_0x399bxdd) => {
                return _0x399bxdd.setAttribute('href', 'https://www.linkedin.com/shareArticle?mini=true&url=' + _0x399bxdc + '&title=' + _0x399bxda + '&summary=&source=')
            })
        };
        if (navigator.canShare) {
            const _0x399bxde = {
                title: _0x399bxda,
                text: _0x399bxdb,
                url: _0x399bxdc
            };
            var _0x399bxdf = document.querySelectorAll('[data-menu="menu-share"], [data-show-share]');
            if (_0x399bxdf) {
                _0x399bxdf.forEach((_0x399bxc) => {
                    _0x399bxc.addEventListener('click', async () => {
                        _0x399bx34('menu-share', 'hide', 0);
                        try {
                            await navigator.share(_0x399bxde)
                        } catch (err) {}
                    })
                })
            }
        };
        var _0x399bxe0 = document.querySelectorAll('.contact-form');
        if (_0x399bxe0.length) {
            var _0x399bxe1 = document.getElementById('contactForm');
            _0x399bxe1.onsubmit = function (_0x399bxb) {
                _0x399bxb.preventDefault();
                var _0x399bxe2 = document.getElementById('contactNameField');
                var _0x399bxe3 = document.getElementById('contactEmailField');
                var _0x399bxe4 = document.getElementById('contactMessageTextarea');
                var _0x399bxe5 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if (_0x399bxe2.value === '') {
                    _0x399bxe1.setAttribute('data-form', 'invalid');
                    _0x399bxe2.classList.add('border-red-dark');
                    document.getElementById('validator-name').classList.remove('disabled')
                } else {
                    _0x399bxe1.setAttribute('data-form', 'valid');
                    document.getElementById('validator-name').classList.add('disabled');
                    _0x399bxe2.classList.remove('border-red-dark')
                };
                if (_0x399bxe3.value === '') {
                    _0x399bxe1.setAttribute('data-form', 'invalid');
                    _0x399bxe3.classList.add('border-red-dark');
                    document.getElementById('validator-mail1').classList.remove('disabled')
                } else {
                    document.getElementById('validator-mail1').classList.add('disabled');
                    if (!_0x399bxe5.test(_0x399bxe3.value)) {
                        _0x399bxe1.setAttribute('data-form', 'invalid');
                        _0x399bxe3.classList.add('border-red-dark');
                        document.getElementById('validator-mail2').classList.remove('disabled')
                    } else {
                        _0x399bxe1.setAttribute('data-form', 'valid');
                        document.getElementById('validator-mail2').classList.add('disabled');
                        _0x399bxe3.classList.remove('border-red-dark')
                    }
                };
                if (_0x399bxe4.value === '') {
                    _0x399bxe1.setAttribute('data-form', 'invalid');
                    _0x399bxe4.classList.add('border-red-dark');
                    document.getElementById('validator-text').classList.remove('disabled')
                } else {
                    _0x399bxe1.setAttribute('data-form', 'valid');
                    document.getElementById('validator-text').classList.add('disabled');
                    _0x399bxe4.classList.remove('border-red-dark')
                };
                if (_0x399bxe1.getAttribute('data-form') === 'valid') {
                    document.querySelectorAll('.form-sent')[0].classList.remove('disabled');
                    document.querySelectorAll('.contact-form')[0].classList.add('disabled');
                    var _0x399bxe6 = {};
                    for (let _0x399bxa = 0, _0x399bxe7 = _0x399bxe1.length; _0x399bxa < _0x399bxe7; ++_0x399bxa) {
                        let _0x399bxe8 = _0x399bxe1[_0x399bxa];
                        if (_0x399bxe8.name) {
                            _0x399bxe6[_0x399bxe8.name] = _0x399bxe8.value
                        }
                    };
                    var _0x399bxe9 = new XMLHttpRequest();
                    _0x399bxe9.open(_0x399bxe1.method, _0x399bxe1.action, true);
                    _0x399bxe9.setRequestHeader('Accept', 'application/json; charset=utf-8');
                    _0x399bxe9.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
                    _0x399bxe9.send(JSON.stringify(_0x399bxe6));
                    _0x399bxe9.onloadend = function (_0x399bxea) {
                        if (_0x399bxea.target.status === 200) {
                            console.log('Form Submitted')
                        }
                    }
                }
            }
        };
        var _0x399bxeb = document.querySelectorAll('[data-bs-toggle="collapse"]:not(.no-effect)');
        if (_0x399bxeb.length) {
            _0x399bxeb.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('click', (_0x399bxb) => {
                    if (_0x399bxc.querySelectorAll('i').length) {
                        _0x399bxc.querySelector('i').classList.toggle('fa-rotate-180')
                    }
                })
            })
        };
        var _0x399bxec = document.querySelectorAll('.tab-controls a');
        if (_0x399bxec.length) {
            _0x399bxec.forEach(function (_0x399bxb) {
                if (_0x399bxb.hasAttribute('data-active')) {
                    var _0x399bxed = _0x399bxb.parentNode.getAttribute('data-highlight');
                    _0x399bxb.classList.add(_0x399bxed);
                    _0x399bxb.classList.add('no-click')
                }
            });
            _0x399bxec.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('click', (_0x399bxb) => {
                    var _0x399bxed = _0x399bxc.parentNode.getAttribute('data-highlight');
                    var _0x399bxee = _0x399bxc.parentNode.querySelectorAll('a');
                    _0x399bxee.forEach(function (_0x399bxb) {
                        _0x399bxb.classList.remove(_0x399bxed);
                        _0x399bxb.classList.remove('no-click')
                    });
                    _0x399bxc.classList.add(_0x399bxed);
                    _0x399bxc.classList.add('no-click')
                })
            })
        };

        function _0x399bx34(_0x399bxef, _0x399bxf0, _0x399bxf1) {
            setTimeout(function () {
                if (_0x399bxf0 === 'show') {
                    return document.getElementById(_0x399bxef).classList.add('menu-active'), document.querySelectorAll('.menu-hider')[0].classList.add('menu-active')
                } else {
                    return document.getElementById(_0x399bxef).classList.remove('menu-active'), document.querySelectorAll('.menu-hider')[0].classList.remove('menu-active')
                }
            }, _0x399bxf1)
        }
        var _0x399bxf2 = document.querySelectorAll('[data-auto-activate]');
        if (_0x399bxf2.length) {
            setTimeout(function () {
                _0x399bxf2[0].classList.add('menu-active');
                _0x399bxd[0].classList.add('menu-active')
            }, 0)
        };
        var _0x399bxf3 = document.getElementById('copyright-year');
        if (_0x399bxf3) {
            var _0x399bxf4 = new Date();
            const _0x399bxf5 = _0x399bxf4.getFullYear();
            _0x399bxf3.textContent = _0x399bxf5
        };
        var _0x399bxf6 = document.querySelectorAll('.check-age');
        if (_0x399bxf6.length) {
            _0x399bxf6[0].addEventListener('click', function () {
                var _0x399bxf7 = document.querySelectorAll('#date-birth-day')[0].value;
                var _0x399bxf8 = document.querySelectorAll('#date-birth-month')[0].value;
                var _0x399bxf9 = document.querySelectorAll('#date-birth-year')[0].value;
                var _0x399bxfa = 18;
                var _0x399bxfb = new Date();
                _0x399bxfb.setFullYear(_0x399bxf9, _0x399bxf8 - 1, _0x399bxf7);
                var _0x399bxfc = new Date();
                var _0x399bxfd = new Date();
                _0x399bxfd.setFullYear(_0x399bxfb.getFullYear() + _0x399bxfa, _0x399bxf8 - 1, _0x399bxf7);
                var _0x399bxfe = document.querySelectorAll('#menu-age');
                var _0x399bxff = document.querySelectorAll('#menu-age-fail');
                var _0x399bx100 = document.querySelectorAll('#menu-age-okay');
                console.log(_0x399bxfc);
                console.log(_0x399bxfd);
                console.log(_0x399bxf8);
                if ((_0x399bxfc - _0x399bxfd) > 0) {
                    console.log('above 18');
                    _0x399bxfe[0].classList.remove('menu-active');
                    _0x399bx100[0].classList.add('menu-active')
                } else {
                    _0x399bxfe[0].classList.remove('menu-active');
                    _0x399bxff[0].classList.add('menu-active')
                };
                return true
            })
        };
        var _0x399bx101 = document.querySelectorAll('.offline-message');
        if (!_0x399bx101.length) {
            const _0x399bx102 = document.createElement('p');
            const _0x399bx103 = document.createElement('p');
            _0x399bx102.className = 'offline-message bg-red-dark color-white';
            _0x399bx102.textContent = 'No internet connection detected';
            _0x399bx103.className = 'online-message bg-green-dark color-white';
            _0x399bx103.textContent = 'You are back online';
            document.getElementsByTagName('body')[0].appendChild(_0x399bx102);
            document.getElementsByTagName('body')[0].appendChild(_0x399bx103)
        };

        function _0x399bx104() {
            var _0x399bx105 = document.querySelectorAll('a');
            _0x399bx105.forEach(function (_0x399bxb) {
                var _0x399bx106 = _0x399bxb.getAttribute('href');
                if (_0x399bx106.match(/.html/)) {
                    _0x399bxb.classList.add('show-offline');
                    _0x399bxb.setAttribute('data-link', _0x399bx106);
                    _0x399bxb.setAttribute('href', '#')
                }
            });
            var _0x399bx107 = document.querySelectorAll('.show-offline');
            _0x399bx107.forEach((_0x399bxc) => {
                return _0x399bxc.addEventListener('click', (_0x399bx65) => {
                    document.getElementsByClassName('offline-message')[0].classList.add('offline-message-active');
                    setTimeout(function () {
                        document.getElementsByClassName('offline-message')[0].classList.remove('offline-message-active')
                    }, 1500)
                })
            })
        }

        function _0x399bx108() {
            var _0x399bx109 = document.querySelectorAll('[data-link]');
            _0x399bx109.forEach(function (_0x399bxb) {
                var _0x399bx106 = _0x399bxb.getAttribute('data-link');
                if (_0x399bx106.match(/.html/)) {
                    _0x399bxb.setAttribute('href', _0x399bx106);
                    _0x399bxb.removeAttribute('data-link', '')
                }
            })
        }
        var _0x399bx10a = document.getElementsByClassName('offline-message')[0];
        var _0x399bx10b = document.getElementsByClassName('online-message')[0];

        function _0x399bx10c() {
            _0x399bx108();
            _0x399bx10b.classList.add('online-message-active');
            setTimeout(function () {
                _0x399bx10b.classList.remove('online-message-active')
            }, 2000);
            console.info('Connection: Online')
        }

        function _0x399bx10d() {
            _0x399bx104();
            _0x399bx10a.classList.add('offline-message-active');
            setTimeout(function () {
                _0x399bx10a.classList.remove('offline-message-active')
            }, 2000);
            console.info('Connection: Offline')
        }
        var _0x399bx10e = document.querySelectorAll('.simulate-offline');
        var _0x399bx10f = document.querySelectorAll('.simulate-online');
        if (_0x399bx10e.length) {
            _0x399bx10e[0].addEventListener('click', function () {
                _0x399bx10d()
            });
            _0x399bx10f[0].addEventListener('click', function () {
                _0x399bx10c()
            })
        };

        function _0x399bx110(_0x399bx65) {
            var _0x399bx111 = navigator.onLine ? 'online' : 'offline';
            _0x399bx10c()
        }

        function _0x399bx112(_0x399bx65) {
            _0x399bx10d()
        }
        window.addEventListener('online', _0x399bx110);
        window.addEventListener('offline', _0x399bx112);
        const _0x399bx113 = document.querySelectorAll('.simulate-iphone-badge');
        _0x399bx113.forEach((_0x399bxc) => {
            return _0x399bxc.addEventListener('click', (_0x399bxb) => {
                document.getElementsByClassName('add-to-home')[0].classList.add('add-to-home-visible', 'add-to-home-ios');
                document.getElementsByClassName('add-to-home')[0].classList.remove('add-to-home-android')
            })
        });
        const _0x399bx114 = document.querySelectorAll('.simulate-android-badge');
        _0x399bx114.forEach((_0x399bxc) => {
            return _0x399bxc.addEventListener('click', (_0x399bxb) => {
                document.getElementsByClassName('add-to-home')[0].classList.add('add-to-home-visible', 'add-to-home-android');
                document.getElementsByClassName('add-to-home')[0].classList.remove('add-to-home-ios')
            })
        });
        const _0x399bx115 = document.querySelectorAll('.add-to-home');
        _0x399bx115.forEach((_0x399bxc) => {
            return _0x399bxc.addEventListener('click', (_0x399bxb) => {
                document.getElementsByClassName('add-to-home')[0].classList.remove('add-to-home-visible')
            })
        });
        let _0x399bx116 = {
            Android: function () {
                return navigator.userAgent.match(/Android/i)
            },
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i)
            },
            any: function () {
                return (_0x399bx116.Android() || _0x399bx116.iOS())
            }
        };
        const _0x399bx117 = document.getElementsByClassName('show-android');
        const _0x399bx118 = document.getElementsByClassName('show-ios');
        const _0x399bx119 = document.getElementsByClassName('show-no-device');
        if (!_0x399bx116.any()) {
            for (let _0x399bxa = 0; _0x399bxa < _0x399bx118.length; _0x399bxa++) {
                _0x399bx118[_0x399bxa].classList.add('disabled')
            };
            for (let _0x399bxa = 0; _0x399bxa < _0x399bx117.length; _0x399bxa++) {
                _0x399bx117[_0x399bxa].classList.add('disabled')
            }
        };
        if (_0x399bx116.iOS()) {
            document.querySelectorAll('#page')[0].classList.add('device-is-ios');
            for (let _0x399bxa = 0; _0x399bxa < _0x399bx119.length; _0x399bxa++) {
                _0x399bx119[_0x399bxa].classList.add('disabled')
            };
            for (let _0x399bxa = 0; _0x399bxa < _0x399bx117.length; _0x399bxa++) {
                _0x399bx117[_0x399bxa].classList.add('disabled')
            }
        };
        if (_0x399bx116.Android()) {
            document.querySelectorAll('#page')[0].classList.add('device-is-android');
            for (let _0x399bxa = 0; _0x399bxa < _0x399bx118.length; _0x399bxa++) {
                _0x399bx118[_0x399bxa].classList.add('disabled')
            };
            for (let _0x399bxa = 0; _0x399bxa < _0x399bx119.length; _0x399bxa++) {
                _0x399bx119[_0x399bxa].classList.add('disabled')
            }
        };
        var _0x399bx11a = document.querySelectorAll('.otp');
        if (_0x399bx11a[0]) {
            _0x399bx11a.forEach((_0x399bxc) => {
                _0x399bxc.addEventListener('focus', (_0x399bxb) => {
                    _0x399bxc.value = ''
                });
                _0x399bxc.addEventListener('input', (_0x399bxb) => {
                    _0x399bxc.nextElementSibling ? _0x399bxc.nextElementSibling.focus() : _0x399bxc.blur()
                })
            })
        };
        if (_0x399bx2 === true) {
            var _0x399bx11b = document.getElementsByTagName('html')[0];
            if (!_0x399bx11b.classList.contains('isPWA')) {
                if ('serviceWorker' in navigator) {
                    window.addEventListener('load', function () {
                        navigator.serviceWorker.register(_0x399bx8, {
                            scope: _0x399bx7
                        })
                    })
                };
                var _0x399bx11c = _0x399bx5 * 24;
                var _0x399bxa2 = Date.now();
                var _0x399bx11d = localStorage.getItem(_0x399bx4 + '-PWA-Timeout-Value');
                if (_0x399bx11d == null) {
                    localStorage.setItem(_0x399bx4 + '-PWA-Timeout-Value', _0x399bxa2)
                } else {
                    if (_0x399bxa2 - _0x399bx11d > _0x399bx11c * 60 * 60 * 1000) {
                        localStorage.removeItem(_0x399bx4 + '-PWA-Prompt');
                        localStorage.setItem(_0x399bx4 + '-PWA-Timeout-Value', _0x399bxa2)
                    }
                };
                const _0x399bx11e = document.querySelectorAll('.pwa-dismiss');
                _0x399bx11e.forEach((_0x399bxc) => {
                    return _0x399bxc.addEventListener('click', (_0x399bxb) => {
                        const _0x399bx11f = document.querySelectorAll('#menu-install-pwa-android, #menu-install-pwa-ios');
                        for (let _0x399bxa = 0; _0x399bxa < _0x399bx11f.length; _0x399bxa++) {
                            _0x399bx11f[_0x399bxa].classList.remove('menu-active')
                        };
                        localStorage.setItem(_0x399bx4 + '-PWA-Timeout-Value', _0x399bxa2);
                        localStorage.setItem(_0x399bx4 + '-PWA-Prompt', 'install-rejected');
                        console.log('PWA Install Rejected. Will Show Again in ' + (_0x399bx5) + ' Days')
                    })
                });
                const _0x399bx11f = document.querySelectorAll('#menu-install-pwa-android, #menu-install-pwa-ios');
                if (_0x399bx11f.length) {
                    if (_0x399bx116.Android()) {
                        if (localStorage.getItem(_0x399bx4 + '-PWA-Prompt') != 'install-rejected') {
                            function _0x399bx120() {
                                setTimeout(function () {
                                    if (!window.matchMedia('(display-mode: fullscreen)').matches) {
                                        console.log('Triggering PWA Window for Android');
                                        document.getElementById('menu-install-pwa-android').classList.add('menu-active');
                                        document.querySelectorAll('.menu-hider')[0].classList.add('menu-active')
                                    }
                                }, 3500)
                            }
                            var _0x399bx121;
                            window.addEventListener('beforeinstallprompt', (_0x399bxb) => {
                                _0x399bxb.preventDefault();
                                _0x399bx121 = _0x399bxb;
                                _0x399bx120()
                            })
                        };
                        const _0x399bx122 = document.querySelectorAll('.pwa-install');
                        _0x399bx122.forEach((_0x399bxc) => {
                            return _0x399bxc.addEventListener('click', (_0x399bxb) => {
                                _0x399bx121.prompt();
                                _0x399bx121.userChoice.then((_0x399bx123) => {
                                    if (_0x399bx123.outcome === 'accepted') {
                                        console.log('Added')
                                    } else {
                                        localStorage.setItem(_0x399bx4 + '-PWA-Timeout-Value', _0x399bxa2);
                                        localStorage.setItem(_0x399bx4 + '-PWA-Prompt', 'install-rejected');
                                        setTimeout(function () {
                                            if (!window.matchMedia('(display-mode: fullscreen)').matches) {
                                                document.getElementById('menu-install-pwa-android').classList.remove('menu-active');
                                                document.querySelectorAll('.menu-hider')[0].classList.remove('menu-active')
                                            }
                                        }, 50)
                                    };
                                    _0x399bx121 = null
                                })
                            })
                        });
                        window.addEventListener('appinstalled', (_0x399bx124) => {
                            document.getElementById('menu-install-pwa-android').classList.remove('menu-active');
                            document.querySelectorAll('.menu-hider')[0].classList.remove('menu-active')
                        })
                    };
                    if (_0x399bx116.iOS()) {
                        if (localStorage.getItem(_0x399bx4 + '-PWA-Prompt') != 'install-rejected') {
                            setTimeout(function () {
                                if (!window.matchMedia('(display-mode: fullscreen)').matches) {
                                    console.log('Triggering PWA Window for iOS');
                                    document.getElementById('menu-install-pwa-ios').classList.add('menu-active');
                                    document.querySelectorAll('.menu-hider')[0].classList.add('menu-active')
                                }
                            }, 3500)
                        }
                    }
                }
            };
            _0x399bx11b.setAttribute('class', 'isPWA')
        };
        if (_0x399bx6 === true) {
            caches.delete('workbox-runtime').then(function () {});
            sessionStorage.clear();
            caches.keys().then((_0x399bx125) => {
                _0x399bx125.forEach((_0x399bx126) => {
                    caches.delete(_0x399bx126)
                })
            })
        };
        var _0x399bx127 = new LazyLoad();
        var _0x399bx128, _0x399bx129, _0x399bx12a, _0x399bx12b;
        var _0x399bx12c = 'plugins/';
        let _0x399bx12d = [{
            id: 'uniqueID',
            plug: 'pluginName/plugin.js',
            call: 'pluginName/pluginName-call.js',
            style: 'pluginName/pluginName-style.css',
            trigger: '.pluginTriggerClass'
        }, {
            id: 'charts-js-plugin',
            plug: 'charts/charts.js',
            call: 'charts/charts-call-graphs.js',
            trigger: '.graph'
        }, {
            id: 'count',
            plug: 'countdown/countdown.js',
            trigger: '.countdown'
        }, {
            id: 'gallery',
            plug: 'glightbox/glightbox.js',
            call: 'glightbox/glightbox-call.js',
            style: 'glightbox/glightbox.css',
            trigger: '[data-gallery]'
        }, {
            id: 'gallery-views',
            call: 'galleryViews/gallery-views.js',
            trigger: '.gallery-view-controls'
        }, {
            id: 'filter',
            plug: 'filterizr/filterizr.js',
            call: 'filterizr/filterizr-call.js',
            style: 'filterizr/filterizr.css',
            trigger: '.gallery-filter'
        }, {
            id: 'ba-slider',
            call: 'before-after/before-after.js',
            style: 'before-after/before-after.css',
            trigger: '#before-after-slider'
        }];
        for (let _0x399bxa = 0; _0x399bxa < _0x399bx12d.length; _0x399bxa++) {
            if (document.querySelectorAll('.' + _0x399bx12d[_0x399bxa].id + '-c').length) {
                document.querySelectorAll('.' + _0x399bx12d[_0x399bxa].id + '-c')[0].remove()
            };
            var _0x399bx12e = document.querySelectorAll(_0x399bx12d[_0x399bxa].trigger);
            if (_0x399bx12e.length) {
                var _0x399bx12f = document.getElementsByTagName('script')[1],
                    _0x399bx130 = document.createElement('script');
                _0x399bx130.type = 'text/javascript';
                _0x399bx130.className = _0x399bx12d[_0x399bxa].id + '-p';
                _0x399bx130.src = _0x399bx12c + _0x399bx12d[_0x399bxa].plug;
                _0x399bx130.addEventListener('load', function () {
                    if (_0x399bx12d[_0x399bxa].call !== undefined) {
                        var _0x399bx131 = document.getElementsByTagName('script')[2],
                            _0x399bx132 = document.createElement('script');
                        _0x399bx132.type = 'text/javascript';
                        _0x399bx132.className = _0x399bx12d[_0x399bxa].id + '-c';
                        _0x399bx132.src = _0x399bx12c + _0x399bx12d[_0x399bxa].call;
                        _0x399bx131.parentNode.insertBefore(_0x399bx132, _0x399bx131)
                    }
                });
                if (!document.querySelectorAll('.' + _0x399bx12d[_0x399bxa].id + '-p').length && _0x399bx12d[_0x399bxa].plug !== undefined) {
                    _0x399bx12f.parentNode.insertBefore(_0x399bx130, _0x399bx12f)
                } else {
                    setTimeout(function () {
                        var _0x399bx12f = document.getElementsByTagName('script')[1],
                            _0x399bx130 = document.createElement('script');
                        _0x399bx130.type = 'text/javascript';
                        _0x399bx130.className = _0x399bx12d[_0x399bxa].id + '-c';
                        _0x399bx130.src = _0x399bx12c + _0x399bx12d[_0x399bxa].call;
                        _0x399bx12f.parentNode.insertBefore(_0x399bx130, _0x399bx12f)
                    }, 50)
                };
                if (_0x399bx12d[_0x399bxa].style !== undefined) {
                    if (!document.querySelectorAll('.' + _0x399bx12d[_0x399bxa].id + '-s').length) {
                        var _0x399bx133 = document.createElement('link');
                        _0x399bx133.className = _0x399bx12d[_0x399bxa].id + '-s';
                        _0x399bx133.rel = 'stylesheet';
                        _0x399bx133.type = 'text/css';
                        _0x399bx133.href = _0x399bx12c + _0x399bx12d[_0x399bxa].style;
                        document.getElementsByTagName('head')[0].appendChild(_0x399bx133)
                    }
                }
            }
        }
    }
    if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
    };
    if (_0x399bx3 === true) {
        if (window.location.protocol !== 'file:') {
            const _0x399bx134 = {
                containers: ['#page'],
                cache: false,
                animateHistoryBrowsing: false,
                plugins: [new SwupPreloadPlugin()],
                linkSelector: 'a:not(.external-link):not(.default-link):not([href^="https"]):not([href^="http"]):not([data-gallery])'
            };
            const _0x399bx135 = new Swup(_0x399bx134);
            document.addEventListener('swup:pageView', (_0x399bxb) => {
                _0x399bx9()
            })
        }
    };
    _0x399bx9()
})
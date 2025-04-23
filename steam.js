let has_run = false;
let has_injected = false;
const { contextBridge, ipcRenderer } = require('electron');
class SteamStorage {
    getGemColor1() {
        try {
            const gemcolor1 = localStorage.getItem('gemcolor1');
            if (gemcolor1) {
                return JSON.parse(gemcolor1);
            } else {
                localStorage.setItem('gemcolor1', '"#ff0000"');
                return '#ff0000';
            }
        } catch (_) {
            localStorage.setItem('gemcolor1', '"#ff0000"');
            return '#ff0000';
        }
    }

    getGemColor2() {
        try {
            const gemcolor2 = localStorage.getItem('gemcolor2');
            if (gemcolor2) {
                return JSON.parse(gemcolor2);
            } else {
                localStorage.setItem('gemcolor2', '"#ff8080"');
                return '#ff8080';
            }
        } catch (_) {
            localStorage.setItem('gemcolor2', '"#ff8080"');
            return '#ff8080';
        }
    }

    enableScrollEvents() {
        const addScrollListener = selector => {
            const titleElement = document.querySelector(`div.customfield[data-type="${selector}"] > .title`);
            if (titleElement) {
                titleElement.addEventListener('wheel', e => {
                    const rightArrow = document.querySelector(`div.customfield[data-type="${selector}"] > i.fa.fa-caret-right`);
                    const leftArrow = document.querySelector(`div.customfield[data-type="${selector}"] > i.fa.fa-caret-left`);

                    if (e.deltaY < 1 && rightArrow) {
                        rightArrow.dispatchEvent(new MouseEvent('mousedown', { bubbles: false, cancelable: true }));
                    } else if (e.deltaY > 1 && leftArrow) {
                        leftArrow.dispatchEvent(new MouseEvent('mousedown', { bubbles: false, cancelable: true }));
                    }

                    e.stopPropagation();
                });
            }
        };

        ['badge', 'finish', 'laser'].forEach(addScrollListener);
    }
}
class ECPStorage {
    getGemColor1() {
        try {
            const gemcolor1 = localStorage.getItem('gemcolor1');
            if (gemcolor1) {
                return JSON.parse(gemcolor1);
            } else {
                localStorage.setItem('gemcolor1', '"#ff0000"');
                return '#ff0000';
            }
        } catch (_) {
            localStorage.setItem('gemcolor1', '"#ff0000"');
            return '#ff0000';
        }
    }

    getGemColor2() {
        try {
            const gemcolor2 = localStorage.getItem('gemcolor2');
            if (gemcolor2) {
                return JSON.parse(gemcolor2);
            } else {
                localStorage.setItem('gemcolor2', '"#ff8080"');
                return '#ff8080';
            }
        } catch (_) {
            localStorage.setItem('gemcolor2', '"#ff8080"');
            return '#ff8080';
        }
    }

    enableScrollEvents() {
        const addScrollListener = selector => {
            const titleElement = document.querySelector(`div.customfield[data-type="${selector}"] > .title`);
            if (titleElement) {
                titleElement.addEventListener('wheel', e => {
                    const rightArrow = document.querySelector(`div.customfield[data-type="${selector}"] > i.fa.fa-caret-right`);
                    const leftArrow = document.querySelector(`div.customfield[data-type="${selector}"] > i.fa.fa-caret-left`);

                    if (e.deltaY < 1 && rightArrow) {
                        rightArrow.dispatchEvent(new MouseEvent('mousedown', { bubbles: false, cancelable: true }));
                    } else if (e.deltaY > 1 && leftArrow) {
                        leftArrow.dispatchEvent(new MouseEvent('mousedown', { bubbles: false, cancelable: true }));
                    }

                    e.stopPropagation();
                });
            }
        };

        ['badge', 'finish', 'laser'].forEach(addScrollListener);
    }
}
class BrowserStorage {
    getGem1() {
        try {
            return JSON.parse(localStorage.getItem('gemindeed'));
        } catch (_) {
            localStorage.setItem('gemindeed', '"#ff0000"');
            return '#ff0000';
        }
    }

    getGem2() {
        try {
            return JSON.parse(localStorage.getItem('gemindeed1'));
        } catch (_) {
            localStorage.setItem('gemindeed1', '"#ff8080"');
            return '#ff8080';
        }
    }

    getEmotes() {
        try {
            return JSON.parse(localStorage.getItem('emopacity'));
        } catch (_) {
            localStorage.setItem('emopacity', '"4"');
            return '4';
        }
    }

    enableScrollEvents() {
        const addScrollListener = (selector, rightArrowSelector, leftArrowSelector) => {
            const element = document.querySelector(selector);
            if (element) {
                element.addEventListener('wheel', e => {
                    const rightArrow = document.querySelector(rightArrowSelector);
                    const leftArrow = document.querySelector(leftArrowSelector);

                    if (e.deltaY < 1 && rightArrow) {
                        rightArrow.click();
                    } else if (e.deltaY > 1 && leftArrow) {
                        leftArrow.click();
                    }

                    e.stopPropagation();
                });
            }
        };

        addScrollListener('body > div.modal > div.modalbody > div > table > tbody > tr > td.ecpverifiedlogo.frozenbg', 'body > div.modal > div.modalbody > div > table > tbody > tr > td:nth-child(2) > div:nth-child(1) > i.fa.fa-caret-right', 'body > div.modal > div.modalbody > div > table > tbody > tr > td:nth-child(2) > div:nth-child(1) > i.fa.fa-caret-left');

        addScrollListener('body > div.modal > div.modalbody > div > table > tbody > tr > td:nth-child(2) > div:nth-child(1) > div', 'body > div.modal > div.modalbody > div > table > tbody > tr > td:nth-child(2) > div:nth-child(1) > i.fa.fa-caret-right', 'body > div.modal > div.modalbody > div > table > tbody > tr > td:nth-child(2) > div:nth-child(1) > i.fa.fa-caret-left');

        addScrollListener('body > div.modal > div.modalbody > div > table > tbody > tr > td.shippreview.frozenbg', 'body > div.modal > div.modalbody > div > table > tbody > tr > td:nth-child(2) > div:nth-child(2) > i.fa.fa-caret-right', 'body > div.modal > div.modalbody > div > table > tbody > tr > td:nth-child(2) > div:nth-child(2) > i.fa.fa-caret-left');

        addScrollListener('body > div.modal > div.modalbody > div > table > tbody > tr > td:nth-child(2) > div:nth-child(2) > div', 'body > div.modal > div.modalbody > div > table > tbody > tr > td:nth-child(2) > div:nth-child(2) > i.fa.fa-caret-right', 'body > div.modal > div.modalbody > div > table > tbody > tr > td:nth-child(2) > div:nth-child(2) > i.fa.fa-caret-left');

        addScrollListener('body > div.modal > div.modalbody > div > table > tbody > tr > td:nth-child(2) > div:nth-child(3) > div', 'body > div.modal > div.modalbody > div > table > tbody > tr > td:nth-child(2) > div:nth-child(3) > i.fa.fa-caret-right', 'body > div.modal > div.modalbody > div > table > tbody > tr > td:nth-child(2) > div:nth-child(3) > i.fa.fa-caret-left');
    }
}

class electronAPI {
    sendMessage(msg) {
        ipcRenderer.send(msg);
    }
}

contextBridge.exposeInMainWorld('BrowserStorage', {
    getGem1: () => new BrowserStorage().getGem1(),
    getGem2: () => new BrowserStorage().getGem2(),
    getEmotes: () => new BrowserStorage().getEmotes(),
    enableScrollEvents: () => new BrowserStorage().enableScrollEvents(),
});
contextBridge.exposeInMainWorld('SteamStorage', {
    getGemColor1: () => new SteamStorage().getGemColor1(),
    getGemColor2: () => new SteamStorage().getGemColor2(),
    enableScrollEvents: () => new SteamStorage().enableScrollEvents(),
});
contextBridge.exposeInMainWorld('ECPStorage', {
    getGemColor1: () => new ECPStorage().getGemColor1(),
    getGemColor2: () => new ECPStorage().getGemColor2(),
    enableScrollEvents: () => new ECPStorage().enableScrollEvents(),
});
contextBridge.exposeInMainWorld('electronAPI', {
    sendMessage: msg => new electronAPI().sendMessage(msg),
});

function waitForWindow() {
    if (typeof window !== 'undefined' && window.document && !has_run) {
        console.log('Window is ready!');
        has_run = true;
        const pathname = window.location.pathname;
        const searchParams = window.location.search;
        switch (true) {
            case pathname === '/app.html' && searchParams === '?steam':
                SteaminjectLoader();
                break;
            case pathname === '/app.html' && searchParams === '?ecp':
                ECPinjectLoader();
                break;
            case pathname === '/':
                injectLoader();
                break;
            default:
                const filename = window.location.pathname.split('/').pop();
                if (!filename === 'index.html') {
                    document.open();
                    document.write('<h1>Invalid URL</h1>');
                    document.close();
                }
                break;
        }
    } else {
        requestAnimationFrame(waitForWindow);
    }
}
waitForWindow();
function SteaminjectLoader() {
    const log = msg => console.log(`%c[Client] ${msg}`, 'color: #c4bf9f');
    if (has_injected) return;
    has_injected = true;

    console.clear();
    log(`Started`);
    if (window.location.pathname != '/app.html' && window.location.search === '?steam') {
        log(`Wrong Injection`);
        return;
    }
    document.open();
    document.write(`<title>Loading...</title><style>.wrapper{position:fixed;z-index:100;top:0;left:0;width:100%;height:100%;background:#001019;display:flex;justify-content:center;align-items:center}@keyframes rotate-loading{0%{transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);-moz-transform:rotate(360deg)}}@-moz-keyframes rotate-loading{0%{transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);-moz-transform:rotate(360deg)}}@-webkit-keyframes rotate-loading{0%{transform:rotate(0);-ms-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);-moz-transform:rotate(360deg)}}@-o-keyframes rotate-loading{0%{transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);-moz-transform:rotate(360deg)}}@keyframes rotate-loading{0%{transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);-moz-transform:rotate(360deg)}}@-moz-keyframes rotate-loading{0%{transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);-moz-transform:rotate(360deg)}}@-webkit-keyframes rotate-loading{0%{transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);-moz-transform:rotate(360deg)}}@-o-keyframes rotate-loading{0%{transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);-moz-transform:rotate(360deg)}}@keyframes loading-text-opacity{0%{opacity:0}20%{opacity:0}50%{opacity:1}100%{opacity:0}}@-moz-keyframes loading-text-opacity{0%{opacity:0}20%{opacity:0}50%{opacity:1}100%{opacity:0}}@-webkit-keyframes loading-text-opacity{0%{opacity:0}20%{opacity:0}50%{opacity:1}100%{opacity:0}}@-o-keyframes loading-text-opacity{0%{opacity:0}20%{opacity:0}50%{opacity:1}100%{opacity:0}}.loading,.loading-container{height:100px;position:relative;width:100px;border-radius:100%}.loading-container{margin:40px auto}.loading{border:4px solid transparent;border-color:transparent hsla(200,72%,61%,.7) transparent hsla(200,72%,61%,.7);-moz-animation:rotate-loading 1.5s linear 0s infinite normal;-moz-transform-origin:50% 50%;-o-animation:rotate-loading 1.5s linear 0s infinite normal;-o-transform-origin:50% 50%;-webkit-animation:rotate-loading 1.5s linear 0s infinite normal;-webkit-transform-origin:50% 50%;animation:rotate-loading 1.5s linear 0s infinite normal;transform-origin:50% 50%}.loading-container:hover .loading{border-color:hsla(200,72%,61%,.7) transparent hsla(200,72%,61%,.7) transparent}.loading-container .loading,.loading-container:hover .loading{-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;-ms-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out}#loading-text{-moz-animation:loading-text-opacity 2s linear 0s infinite normal;-o-animation:loading-text-opacity 2s linear 0s infinite normal;-webkit-animation:loading-text-opacity 2s linear 0s infinite normal;animation:loading-text-opacity 2s linear 0s infinite normal;color:hsla(200,72%,61%,.7);font-family:arial;font-size:12px;font-weight:700;margin-top:45px;opacity:0;position:absolute;text-align:center;text-transform:uppercase;top:0;left:2px;width:100px}</style><div class=wrapper><div class=loading-container><div class=loading></div><div id=loading-text>loading...</div></div></div>`);
    document.close();
    var url = 'https://starblast.io/app.html?steam';
    var xhr = new XMLHttpRequest();
    log('Fetching starblast src...');
    xhr.open('GET', url);
    xhr.onreadystatechange = async function () {
        if (xhr.readyState === 4) {
            var src = xhr.responseText;
            if (src != undefined) {
                log(`Src fetched successfully`);
            } else {
                log(`Src fetch failed`);
                alert('An error occurred whilst fetching game code');
            }
            if (!localStorage.steam_client_id) {
                function writeInputField(message) {
                    document.open();
                    document.write(`
            <h1 id="header">${message}</h1>
            <p>Enter your Steam ID (17 digits):</p>
            <input type="text" id="steamInput" maxlength="17" pattern="[0-9]{17}" style="width: 200px; font-size: 16px;" />
            <button onclick="validateSteamID()">Submit</button>
            <script>
                function validateSteamID() {
                    const input = document.getElementById('steamInput').value;
                    const isValidSteamID = /^[0-9]{17}$/.test(input);
                    if (isValidSteamID) {
                        localStorage.steam_client_id = input;
                        location.reload();
                    } else {
                        document.getElementById('header').innerText = 'Invalid Steam ID';
                    }
                }
            </script>
        `);
                    document.close();
                }

                return writeInputField('Steam ID is required to proceed.');
            }
            const start_time = performance.now();
            log('Patching src...');
            src = src.replace('localStorage.getItem("debug")&&(location.href="/")', 'localStorage.getItem("debug")&&(console.log("reload prevented"))');
            let reegtest = src.match(/if\("select"!==(\w+\.)type\)e\+='<div\s*class="option">'\+t\(\w+\.name\)\+'<label\s*class="switch"><input\s*type="checkbox"\s*'\+\(\w+\.value\?'checked="checked"':""\)\+'\s*id="'\+(\w+)\+'""><div\s*class="slider"><\/div><\/label><\/div>';/);
            if (reegtest) {
                try {
                    src = src.replace(reegtest[0], `if ("select" !== ${reegtest[1]}type) if ("color" === ${reegtest[1]}type) { e += '<div class="option">' + t(${reegtest[1]}name) + '<div class="range" style=\\"cursor: pointer;\\">\\n  <input id=\\'\' + ${reegtest[2]} + "' type=\\"color\\" style=\\"-webkit-appearance:none;width:130px;border:transparent;background:transparent\\">\\n<span id='" + ${reegtest[2]} + "_value'>" + ${reegtest[1]}value + "</span>\\n  </div>\\n</div>";} else {e+='<div class="option">'+t(${reegtest[1]}name)+'<label class="switch"><input type="checkbox" '+(${reegtest[1]}value?'checked="checked"':"")+' id="'+ ${reegtest[2]} +'""><div class="slider"></div></label></div>'}`);
                } catch (error) {
                    console.error(error);
                }
            }
            let newrgs = src.match(/e\.[iI10OlL]{4,6}\.[iI10OlL]{4,6}\.beep\(4\+\.2\*math\.random\(\)/gi);
            let newnewrgs = newrgs[0].match(/[iI10OlL]{4,6}/g);
            src = src.replace(/for\(f=document\.queryselectorall\("\.option\s*input\[type=range\]"\),\s*i=function\(e\)\{.*?,1\)\}\)\}\}/gis, `for (f = document.querySelectorAll(".option input[type=range], .option input[type=color]"), i = function(e) {return function(i) {if(i.type === "range"){if (i.id === "emopacity") {i.addEventListener("input", function (s) {return x = document.querySelector("#" + i.getAttribute("id") + "_value"), x.innerText = parseInt(i.value, 10), e.updateSettings(s, !0)})} else {if (i.addEventListener("input", function (s) {return x = document.querySelector("#" + i.getAttribute("id") + "_value"), x.innerText = "0" === i.value ? t("Off") : Math.round(50 * i.value) + " %", e.updateSettings(s, !0)}), i.dispatchEvent(new Event("input")), "sounds" === i.id) return i.addEventListener("change", function (t) {return e.${newnewrgs[0]}.${newnewrgs[1]}.beep(4 + .2 * Math.random(), 1)})}} else if (i.type === "color") {if (i.id === "gemcolor1") {i.addEventListener("input", function (s) {return x = document.querySelector("#" + i.getAttribute("id") + "_value"), x.innerText = i.value, e.updateSettings(s, !0);});i.addEventListener("change", function (s) {i.value = window.SteamStorage.getGemColor1();x = document.querySelector("#" + i.getAttribute("id") + "_value").innerText = i.value;});i.value = window.SteamStorage.getGemColor1();} else if (i.id === "gemcolor2") {i.addEventListener("input", function (s) {return x = document.querySelector("#" + i.getAttribute("id") + "_value"), x.innerText = i.value, e.updateSettings(s, !0);});i.addEventListener("change", function (s) {i.value = window.SteamStorage.getGemColor2();x = document.querySelector("#" + i.getAttribute("id") + "_value").innerText = i.value;});i.value = window.SteamStorage.getGemColor2();}}}}`);
            src = src.replace('null!=e&&null!=this.client_version&&(e.innerText="Client Version: "+this.client_version)', `null != e && (e.innerText = 'Client Version: Steam 1.1.0')`);
            let Clientecp = `case "GG": this.icon = "https://raw.githubusercontent.com/officialtroller/starblast-things/refs/heads/main/ecp/gg.png";break;\n`;
            let Clientecp1 = `GG: "Xavi"`;
            src = src.replace(/case\s*"pmf"\s*:\s*this\.icon\s*=\s*".*?";\s*break;/, '$&' + Clientecp);
            src = src.replace(/seasonal\:"Seasonal"/i, '$&,' + Clientecp1);
            const titreg = src.match(/case\s*"titanium"\s*:(\w+)=t.createLinearGradient\(0,0,0,i\),[\s\S]*?;break;/);
            const defreg = src.match(/default:(\w+)=t\.createLinearGradient\(0,0,0,i\),\w+\.addColorStop\(0,"#EEE"\),\w+\.addColorStop\(1,"#666"\)/);
            src = src.replace('https://starblast.io/modsinfo.json', 'https://raw.githubusercontent.com/officialtroller/starblast-things/refs/heads/main/modsinfo.js');
            src = src.replace(/this\.hue,\.5,1/g, 'this.hue,1,1');
            src = src.replace('||(this.icon="https://starblast.io/ecp/gamepedia.png")', '||(this.icon=this.icon)');
            src = src.replace('NEW!', ' ');
            src = src.replace(/\.toUpperCase\(\)/g, '');
            src = src.replace(/text-transform:\s*uppercase;/gim, '');
            src = src.replace(/"blank"\s*!==\s*this\.custom\.badge/, '""!==this.custom.badge');
            src = src.replace(/case"star":.*?break;/g, `$&case"blank":t.fillStyle="hsla(200, 0%, 0%, 0)";break;`);
            src = src.replace(/default:t\.fillStyle="hsl\(50,100%,70%\)",t\.fillText\("S",e\/2,i\/2\)/, 'case"blank":t.fillStyle="hsla(200, 0%, 0%, 1)";break;default:t.fillStyle="hsl(50,100%,70%)",t.fillText("S",e/2,i/2)');
            src = src.replace(/default:t.fillStyle="hsl\(200,50%,20%\)"/, 'default:t.fillStyle = "hsl(50,100%,50%)"');
            src = src.replace(/default:t\.fillStyle="hsl\(50,100%,70%\)",t\.fillText\("S",e\/2,i\/2\)/, 'case"star":t.fillStyle="hsl(50,100%,70%)",t.fillText("S",e/2,i/2);break;default:t.fillStyle="hsl(0,50%,30%)",t.fillText("8",e/2,i/2)');
            src = src.replace(titreg[0], `$&case"zinc":${titreg[1]}=t.createLinearGradient(0,0,0,i),${titreg[1]}.addColorStop(0,"#EEE"),${titreg[1]}.addColorStop(1,"#666");break;`);
            src = src.replace(defreg[0], `default:${defreg[1]}=t.createLinearGradient(0,0,0,i),${defreg[1]}.addColorStop(0,"hsl(0,100%,50%)"),${defreg[1]}.addColorStop(.5,"hsl(60,100%,50%)"),${defreg[1]}.addColorStop(.5,"hsl(120,100%,50%)"),${defreg[1]}.addColorStop(1,"hsl(180,100%,50%)")`);
            src = src.replace('classList.add("shown")', '$&, window.SteamStorage.enableScrollEvents()');
            src = src.replace(/window\.parent\.postMessage\("([^"]*)","\*"\)/gim, 'window.electronAPI.sendMessage("$1")');

            const end_time = performance.now();
            log(`Patched src successfully (${(end_time - start_time).toFixed(0)}ms)`);
            document.open();
            document.write(src);
            document.close();
            let script = `
                    let sbibt = document.createElement('script');
                    sbibt.src = 'https://cdn.jsdelivr.net/gh/officialtroller/starblast-things/stationmodels.user.js';
                    document.body.appendChild(sbibt);
                    let script = document.createElement('script');
                    script.src = 'https://cdn.jsdelivr.net/gh/officialtroller/starblast-things/weaponmodels.user.js';
                    document.body.appendChild(script);
                window.module.exports.settings.parameters.selftag = { name: 'Self Ship Tag', value: !0, skipauto: !0, filter: 'default,app,mobile' };
                window.module.exports.settings.parameters.gemcolor1 = { name: 'Gem Color 1', value: window.SteamStorage.getGemColor1(), skipauto: true, type: 'color', filter: 'default,app,mobile' };
                window.module.exports.settings.parameters.gemcolor2 = { name: 'Gem Color 2', value: window.SteamStorage.getGemColor2(), skipauto: true, type: 'color', filter: 'default,app,mobile' };
                window.module.exports.dict['Gem Color 1'] = { fr: 'Couleur bijou 1', tr: 'Mücevher rengi 1' };
                window.module.exports.dict['Gem Color 2'] = { fr: 'Couleur bijou 2', tr: 'Mücevher rengi 2' };
                window.module.exports.dict['Self Ship Tag'] = { fr: 'étiquette expédition', tr: 'self-ship etiketi' };
                let gemcolor = setInterval(() => {
                    let CrystalObject;
                    for (let i in window) {
                        try {
                            let val = window[i];
                            if ('function' == typeof val.prototype.createModel && val.prototype.createModel.toString().includes('Crystal')) {
                                CrystalObject = val;
                                clearInterval(gemcolor);
                                break;
                            }
                        } catch (e) {}
                    }

                    if (CrystalObject != null) {
                        let oldModel = CrystalObject.prototype.getModelInstance;

                        CrystalObject.prototype.getModelInstance = function () {
                            let res = oldModel.apply(this, arguments);
                            let color = window.SteamStorage.getGemColor1();
                            let specular = window.SteamStorage.getGemColor2();
                            this.material.color.set(color);
                            this.material.specular.set(specular);
                            return res;
                        };
                    }
                }, 100);
                setTimeout(function () {
                    !(function () {
                        let e, t;
                        for (let n in window)
                            try {
                                let i = window[n].prototype;
                                if (null != i)
                                    for (let o in i) {
                                        let s = i[o];
                                        if ('function' == typeof s && s.toString().match(/([^,]+)("hsla\\(180,100%,75%,\\.75\\)")/)) {
                                            let l;
                                            (e = n), (i[(t = Object.keys(i).find(e => 'function' == typeof i[e] && (l = (i[e].toString().match(/===(\\w+\\.[^,]+)\\.hue/) || [])[1])))] = Function('return ' + i[t].toString().replace(/(\\.id)/, '$1, this.selfShip = this.shipid == ' + l + '.id'))()), (i[o] = Function('return ' + s.toString().replace(/([^,]+)("hsla\\(180,100%,75%,\\.75\\)")/, "$1 this.selfShip ? 'hsla(180,100%,75%,.75)' : $2"))());
                                        }
                                    }
                            } catch (r) {}
                        let a = Object.getPrototypeOf(Object.values(Object.values(window.module.exports.settings).find(e => e && e.mode)).find(e => e && e.background)),
                            d = a.constructor,
                            c = d.prototype,
                            u = d.toString(),
                            hue = u.match(/(\\w+)\\.hue/)[1],
                            f = u.match(/(\\w+)\\.add\\(/)[1],
                            h = u.match(/chat_bubble\\.(\\w+)/)[1];
                        ((d = Function('return ' + u.replace(/}$/, ', this.welcome || (this.ship_tag = new ' + e + '(Math.floor(360 * 0)), this.' + f + '.add(this.ship_tag.' + h + '))}'))()).prototype = c),
                            (d.prototype.constructor = d),
                            (a.constructor = d),
                            (d.prototype.updateShipTag = function () {
                                if (null != this.ship_tag) {
                                    if (!this.shipKey) {
                                        this.shipKey = Object.keys(this).find(e => this[e] && this[e].ships);
                                        let e = this[this.shipKey];
                                        this.statusKey = Object.keys(e).find(t => e[t] && e[t].status);
                                    }
                                    let n = this[hue],
                                        i = this[this.shipKey][this.statusKey];
                                    this.ship_tag[t](n, n.names.get(i.status.id), i.status, i.instance);
                                    let o = this.ship_tag[h].position;
                                    (o.x = i.status.x), (o.y = i.status.y - 2 - i.type.radius), (o.z = 1), (this.ship_tag[h].visible = 'true' == localStorage.getItem('selftag') && i.status.alive && !i.status.guided);
                                }
                            });
                        let m = Object.keys(c).find(e => 'function' == typeof c[e] && c[e].toString().includes('render'));
                        d.prototype[m] = Function('return ' + d.prototype[m].toString().replace(/(\\w+\\.render)/, 'this.updateShipTag(), $1'))();
                        let g = function (...e) {
                            return window.module.exports.translate(...e);
                        };
                        for (let $ in window)
                            try {
                                let y = window[$];
                                if ('function' == typeof y.prototype.refused)
                                    for (let v in y.prototype) {
                                        let b = y.prototype[v];
                                        'function' == typeof b && b.toString().includes('new Scene') && (y.prototype[v] = Function('Scene', 't', 'return ' + b.toString())(d, g));
                                    }
                            } catch (_) {}
                    })();
                }, 5000);
                let explolight = setInterval(() => {
                    if (window.Explosions != null) {
                        clearInterval(explolight);
                        let oldExplosion = Explosions.prototype.explode,
                            oldBlast = Explosions.prototype.blast;

                        let globalVal = oldExplosion
                            .toString()
                            .match(/this\\.([0OlI1\\.]+)\\.settings\\.check/)[1]
                            .split('.');

                        Explosions.prototype.isEnabled = function () {
                            let _this = this;
                            for (let i of globalVal) _this = _this[i];
                            return _this.settings.check('explolight');
                        };

                        Explosions.prototype.explode = function () {
                            return this.isEnabled() && oldExplosion.apply(this, arguments);
                        };

                        Explosions.prototype.blast = function () {
                            return this.isEnabled() && oldBlast.apply(this, arguments);
                        };
                    }
                }, 100);
            `;
            let scriptelm = document.createElement('script');
            scriptelm.innerHTML = script;
            setTimeout(() => {
                document.head.appendChild(scriptelm);
            }, 1500);
        }
    };
    xhr.send();
}

function injectLoader() {
    const log = msg => console.log(`%c[Client] ${msg}`, 'color: #c4bf9f');
    let Client = new (class {
        log(msg) {
            console.log(`%c[Client] ${msg}`, 'color: #c4bf9f');
        }
        error(msg) {
            console.log(`%c[Client]%c[Error] ${msg}`, 'color: #ff0000');
        }
        checkgame() {
            return '/' == window.location.pathname && 'welcome' != Object.values(window.module.exports.settings).find(e => e && e.mode).mode.id && 'https://starblast.io/#' != window.location.href;
        }
    })();
    let fullstart = performance.now();
    ('use strict');
    document.open();
    document.write('');
    window.onbeforeunload = null;
    document.close();
    document.open();
    document.write(`<title>Loading...</title><style>.wrapper{position:fixed;z-index:100;top:0;left:0;width:100%;height:100%;background:#001019;display:flex;justify-content:center;align-items:center}@keyframes rotate-loading{0%{transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);-moz-transform:rotate(360deg)}}@-moz-keyframes rotate-loading{0%{transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);-moz-transform:rotate(360deg)}}@-webkit-keyframes rotate-loading{0%{transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);-moz-transform:rotate(360deg)}}@-o-keyframes rotate-loading{0%{transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);-moz-transform:rotate(360deg)}}@keyframes rotate-loading{0%{transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);-moz-transform:rotate(360deg)}}@-moz-keyframes rotate-loading{0%{transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);-moz-transform:rotate(360deg)}}@-webkit-keyframes rotate-loading{0%{transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);-moz-transform:rotate(360deg)}}@-o-keyframes rotate-loading{0%{transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);-moz-transform:rotate(360deg)}}@keyframes loading-text-opacity{0%{opacity:0}20%{opacity:0}50%{opacity:1}100%{opacity:0}}@-moz-keyframes loading-text-opacity{0%{opacity:0}20%{opacity:0}50%{opacity:1}100%{opacity:0}}@-webkit-keyframes loading-text-opacity{0%{opacity:0}20%{opacity:0}50%{opacity:1}100%{opacity:0}}@-o-keyframes loading-text-opacity{0%{opacity:0}20%{opacity:0}50%{opacity:1}100%{opacity:0}}.loading,.loading-container{height:100px;position:relative;width:100px;border-radius:100%}.loading-container{margin:40px auto}.loading{border:4px solid transparent;border-color:transparent hsla(200,72%,61%,.7) transparent hsla(200,72%,61%,.7);-moz-animation:rotate-loading 1.5s linear 0s infinite normal;-moz-transform-origin:50% 50%;-o-animation:rotate-loading 1.5s linear 0s infinite normal;-o-transform-origin:50% 50%;-webkit-animation:rotate-loading 1.5s linear 0s infinite normal;-webkit-transform-origin:50% 50%;animation:rotate-loading 1.5s linear 0s infinite normal;transform-origin:50% 50%}.loading-container:hover .loading{border-color:hsla(200,72%,61%,.7) transparent hsla(200,72%,61%,.7) transparent}.loading-container .loading,.loading-container:hover .loading{-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;-ms-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out}#loading-text{-moz-animation:loading-text-opacity 2s linear 0s infinite normal;-o-animation:loading-text-opacity 2s linear 0s infinite normal;-webkit-animation:loading-text-opacity 2s linear 0s infinite normal;animation:loading-text-opacity 2s linear 0s infinite normal;color:hsla(200,72%,61%,.7);font-family:arial;font-size:12px;font-weight:700;margin-top:45px;opacity:0;position:absolute;text-align:center;text-transform:uppercase;top:0;left:2px;width:100px}</style><div class=wrapper><div class=loading-container><div class=loading></div><div id=loading-text>loading...</div></div></div>`);
    window.onbeforeunload = null;
    document.close();
    var url = 'https://starblast.io';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = async function () {
        if (xhr.readyState === 4) {
            try {
                var src = xhr.responseText;
                if (src != undefined) {
                } else {
                    Client.log(`Src fetch failed`);
                }
                Client.log(`starting modifying...`);
                let pfstart = performance.now();
                const defreg = src.match(/default:(\w+)=t\.createLinearGradient\(0,0,0,i\),\w+\.addColorStop\(0,"#EEE"\),\w+\.addColorStop\(1,"#666"\)/);
                const titreg = src.match(/case\s*"titanium"\s*:(\w+)=t.createLinearGradient\(0,0,0,i\),[\s\S]*?;break;/);
                let settingsregex = src.match(/music:\{[^{}]*\},/);
                let settingsmatch = settingsregex[0].match(/[iI10OlL]{4,6}/g);
                let newrgs = src.match(/e\.[iI10OlL]{4,6}\.[iI10OlL]{4,6}\.beep\(4\+\.2\*math\.random\(\)/gi);
                let newnewrgs = newrgs[0].match(/[iI10OlL]{4,6}/g);
                let reegtest = src.match(/if\("select"!==(\w+\.)type\)e\+='<div\s*class="option">'\+t\(\w+\.name\)\+'<label\s*class="switch"><input\s*type="checkbox"\s*'\+\(\w+\.value\?'checked="checked"':""\)\+'\s*id="'\+(\w+)\+'""><div\s*class="slider"><\/div><\/label><\/div>';/);
                if (reegtest) {
                    try {
                        src = src.replace(reegtest[0], `if ("select" !== ${reegtest[1]}type) if ("color" === ${reegtest[1]}type) { e += '<div class="option">' + t(${reegtest[1]}name) + '<div class="range" style=\\"cursor: pointer;\\">\\n  <input id=\\'\' + ${reegtest[2]} + "' type=\\"color\\" style=\\"-webkit-appearance:none;width:130px;border:transparent;background:transparent\\">\\n<span id='" + ${reegtest[2]} + "_value'>" + ${reegtest[1]}value + "</span>\\n  </div>\\n</div>";} else {e+='<div class="option">'+t(${reegtest[1]}name)+'<label class="switch"><input type="checkbox" '+(${reegtest[1]}value?'checked="checked"':"")+' id="'+ ${reegtest[2]} +'""><div class="slider"></div></label></div>'}`);
                    } catch (error) {
                        console.error(error);
                    }
                }
                let Clientecp = `case "GG": this.icon = "https://raw.githubusercontent.com/officialtroller/starblast-things/refs/heads/main/ecp/gg.png";break;\n`;
                let Clientecp1 = `GG: "Xavi"`;
                src = src.replace(/case\s*"pmf"\s*:\s*this\.icon\s*=\s*".*?";\s*break;/, '$&' + Clientecp);
                src = src.replace(/seasonal\:"Seasonal"/i, '$&,' + Clientecp1);
                src = src.replace(/\.toUpperCase\(\)/g, '');
                src = src.replace(/text-transform:\s*uppercase;/gim, '');
                src = src.replace('Elite Commander Pass', 'Noobiest Commander Pass');
                src = src.replace('LEADERBOARD', 'Leaderboard');
                src = src.replace(/"blank"\s*!==\s*this\.custom\.badge/, '""!==this.custom.badge');
                src = src.replace(/case"star":.*?break;/g, `$&case"blank":t.fillStyle="hsla(200, 0%, 0%, 0)";break;`);
                src = src.replace(/default:t\.fillStyle="hsl\(50,100%,70%\)",t\.fillText\("S",e\/2,i\/2\)/, 'case"blank":t.fillStyle="hsla(200, 0%, 0%, 1)";break;default:t.fillStyle="hsl(50,100%,70%)",t.fillText("S",e/2,i/2)');
                src = src.replace('https://starblast.io/modsinfo.json', 'https://raw.githubusercontent.com/officialtroller/starblast-things/refs/heads/main/modsinfo.js');
                src = src.replace(/this\.hue,\.5,1/g, 'this.hue,1,1');
                src = src.replace(/(\.modal\s\.modecp\s*\{\s*[^}]*bottom:\s*)0\b/, '$1auto');
                src = src.replace('NEW!', ' ');
                src = src.replace(/\(\),this.showModal\("donate"\)/g, '(), this.showModal("donate"), window.BrowserStorage.enableScrollEvents()');
                src = src.replace('html5.api.gamedistribution.com/libs/gd/api.js', 'ads.blocked');
                src = src.replace('https://sdk.crazygames.com/crazygames-sdk-v1.js', 'https://ads.blocked');
                src = src.replace('||(this.icon="https://starblast.io/ecp/gamepedia.png")', '||(this.icon=this.icon)');
                src = src.replace('api.adinplay.com/libs/aiptag/pub/NRN/starblast.io/tag.min.js', 'ads.blocked');
                src = src.replace(
                    /for\(f=document\.queryselectorall\("\.option\s*input\[type=range\]"\),\s*i=function\(e\)\{.*?,1\)\}\)\}\}/gis,
                    `for (f = document.querySelectorAll(".option input[type=range], .option input[type=color]"), i = function(e) {
					return function(i) {
                        if(i.type === "range"){
                            if (i.id === "emopacity") {
                            i.addEventListener("input", function (s) {
                                return x = document.querySelector("#" + i.getAttribute("id") + "_value"), x.innerText = parseInt(i.value, 10), e.updateSettings(s, !0)
                            })
                        } else {
                            if (i.addEventListener("input", function (s) {
                                return x = document.querySelector("#" + i.getAttribute("id") + "_value"), x.innerText = "0" === i.value ? t("Off") : Math.round(50 * i.value) + " %", e.updateSettings(s, !0)
                            }), i.dispatchEvent(new Event("input")), "sounds" === i.id) return i.addEventListener("change", function (t) {
                                return e.${newnewrgs[0]}.${newnewrgs[1]}.beep(4 + .2 * Math.random(), 1)
                            })
                        }} else if (i.type === "color") {
                            if (i.id === "gemindeed") {
                                i.addEventListener("input", function (s) {
                                    return x = document.querySelector("#" + i.getAttribute("id") + "_value"), x.innerText = i.value, e.updateSettings(s, !0);
                                });
                                i.addEventListener("change", function (s) {
                                        i.value = window.BrowserStorage.getGem1();
                                        x = document.querySelector("#" + i.getAttribute("id") + "_value").innerText = i.value;

                                })
                                i.value = window.BrowserStorage.getGem1();
                            } else if (i.id === "gemindeed1") {
                                i.addEventListener("input", function (s) {
                                    return x = document.querySelector("#" + i.getAttribute("id") + "_value"), x.innerText = i.value, e.updateSettings(s, !0);
                                });
                                i.addEventListener("change", function (s) {
                                        i.value = window.BrowserStorage.getGem2();
                                        x = document.querySelector("#" + i.getAttribute("id") + "_value").innerText = i.value;

                                })
                                i.value = window.BrowserStorage.getGem2();
                            }
                        }
					}
				}`
                );
                src = src.replace(/shake:\{[^{}]*\},/, '$&selftag:{name:"Self Ship Tag",value:!0,skipauto:!0,filter:"default,app,mobile"},');
                src = src.replace(settingsregex, `$&emopacity:{name:"Emote Capacity",value:4,skipauto:!0,type:"range",min:1,max:5,${settingsmatch}:1,filter:"default,app,mobile"},gemindeed:{name:"Gem Color 1",value:window.BrowserStorage.getGem1(),skipauto:true,type:"color",filter:"default,app,mobile"},gemindeed1:{name:"Gem Color 2",value:window.BrowserStorage.getGem2(),skipauto:true,type:"color",filter:"default,app,mobile"},`);
                src = src.replace(titreg[0], `$&case"zinc":${titreg[1]}=t.createLinearGradient(0,0,0,i),${titreg[1]}.addColorStop(0,"#EEE"),${titreg[1]}.addColorStop(1,"#666");break;`);
                src = src.replace(defreg[0], `default:${defreg[1]}=t.createLinearGradient(0,0,0,i),${defreg[1]}.addColorStop(0,"hsl(0,100%,50%)"),${defreg[1]}.addColorStop(.5,"hsl(60,100%,50%)"),${defreg[1]}.addColorStop(.5,"hsl(120,100%,50%)"),${defreg[1]}.addColorStop(1,"hsl(180,100%,50%)")`);
                let pfend = performance.now();
                Client.log(`Modified the Game in ${(pfend - pfstart).toFixed(0)}ms`);
                Client.log('Loading Document');
                document.open();
                document.write(src);
                document.close();
                let script = `
                    let sbibt = document.createElement('script');
                    sbibt.src = 'https://cdn.jsdelivr.net/gh/officialtroller/starblast-things/stationmodels.user.js';
                    document.body.appendChild(sbibt);
                    let script = document.createElement('script');
                    script.src = 'https://cdn.jsdelivr.net/gh/officialtroller/starblast-things/weaponmodels.user.js';
                    document.body.appendChild(script);
                    if (localStorage.getItem('selftag') === null) localStorage.selftag = true;
                    function styleing() {
                        var trainingelement = document.getElementById('training');
                        var facebookIcon = document.querySelector('.social .sbg-facebook');
                        var twitterIcon = document.querySelector('.social .sbg-twitter');
                        if (twitterIcon != null) {
                            twitterIcon.remove();
                        }
                        if (facebookIcon != null) {
                            facebookIcon.remove();
                        }
                        if (trainingelement != null) {
                            trainingelement.remove();
                        }
                    }
                    var styintrvl = setInterval(styleing, 100);
                    setTimeout(() => clearInterval(styintrvl), 1000);
                    setInterval(() => {
                        window.onbeforeunload = function () {};
                    }, 1000);
                    document.addEventListener('keydown', function (e) {
                        if (e.ctrlKey && e.key === 'x') {
                            e.preventDefault();
                            e.stopPropagation();
                            e.stopImmediatePropagation();
                            window.onbeforeunload = function () {};
                            window.electronAPI.sendMessage('start-browser');
                            return false;
                        } else if (e.ctrlKey && e.key === 'e') {
                            e.preventDefault();
                            e.stopPropagation();
                            e.stopImmediatePropagation();
                            document.querySelector('.social .sbg-gears').click();
                            return false;
                        } else if (e.ctrlKey && e.key === 's') {
                            e.preventDefault();
                            e.stopPropagation();
                            e.stopImmediatePropagation();
                            window.onbeforeunload = function () {};
                            window.electronAPI.sendMessage('quit');
                            return false;
                        }
                    });
                    let gemcolor = setInterval(() => {
                        let CrystalObject;
                        for (let i in window) {
                            try {
                                let val = window[i];
                                if ('function' == typeof val.prototype.createModel && val.prototype.createModel.toString().includes('Crystal')) {
                                    CrystalObject = val;
                                    clearInterval(gemcolor);
                                    break;
                                }
                            } catch (e) {}
                        }

                        if (CrystalObject != null) {
                            let oldModel = CrystalObject.prototype.getModelInstance;

                            CrystalObject.prototype.getModelInstance = function () {
                                let res = oldModel.apply(this, arguments);
                                let color = window.BrowserStorage.getGem1();
                                let specular = window.BrowserStorage.getGem2();
                                this.material.color.set(color);
                                this.material.specular.set(specular);
                                return res;
                            };
                        }
                    }, 100);
                    let explolight = setInterval(() => {
                        if (window.Explosions != null) {
                            clearInterval(explolight);
                            let oldExplosion = Explosions.prototype.explode,
                                oldBlast = Explosions.prototype.blast;

                            let globalVal = oldExplosion
                                .toString()
                                .match(/this\\.([0OlI1\\.]+)\\.settings\\.check/)[1]
                                .split('.');

                            Explosions.prototype.isEnabled = function () {
                                let _this = this;
                                for (let i of globalVal) _this = _this[i];
                                return _this.settings.check('explolight');
                            };

                            Explosions.prototype.explode = function () {
                                return this.isEnabled() && oldExplosion.apply(this, arguments);
                            };

                            Explosions.prototype.blast = function () {
                                return this.isEnabled() && oldBlast.apply(this, arguments);
                            };
                        }
                    }, 100);
                    setTimeout(function () {
                        !(function () {
                            let e, t;
                            for (let n in window)
                                try {
                                    let i = window[n].prototype;
                                    if (null != i)
                                        for (let o in i) {
                                            let s = i[o];
                                            if ('function' == typeof s && s.toString().match(/([^,]+)("hsla\\(180,100%,75%,\\.75\\)")/)) {
                                                let l;
                                                (e = n), (i[(t = Object.keys(i).find(e => 'function' == typeof i[e] && (l = (i[e].toString().match(/===(\\w+\\.[^,]+)\\.hue/) || [])[1])))] = Function('return ' + i[t].toString().replace(/(\\.id)/, '$1, this.selfShip = this.shipid == ' + l + '.id'))()), (i[o] = Function('return ' + s.toString().replace(/([^,]+)("hsla\\(180,100%,75%,\\.75\\)")/, "$1 this.selfShip ? 'hsla(180,100%,75%,.75)' : $2"))());
                                            }
                                        }
                                } catch (r) {}
                            let a = Object.getPrototypeOf(Object.values(Object.values(window.module.exports.settings).find(e => e && e.mode)).find(e => e && e.background)),
                                d = a.constructor,
                                c = d.prototype,
                                u = d.toString(),
                                hue = u.match(/(\\w+)\\.hue/)[1],
                                f = u.match(/(\\w+)\.add\\(/)[1],
                                h = u.match(/chat_bubble\\.(\\w+)/)[1];
                            ((d = Function('return ' + u.replace(/}$/, ', this.welcome || (this.ship_tag = new ' + e + '(Math.floor(360 * 0)), this.' + f + '.add(this.ship_tag.' + h + '))}'))()).prototype = c),
                                (d.prototype.constructor = d),
                                (a.constructor = d),
                                (d.prototype.updateShipTag = function () {
                                    if (null != this.ship_tag) {
                                        if (!this.shipKey) {
                                            this.shipKey = Object.keys(this).find(e => this[e] && this[e].ships);
                                            let e = this[this.shipKey];
                                            this.statusKey = Object.keys(e).find(t => e[t] && e[t].status);
                                        }
                                        let n = this[hue],
                                            i = this[this.shipKey][this.statusKey];
                                        this.ship_tag[t](n, n.names.get(i.status.id), i.status, i.instance);
                                        let o = this.ship_tag[h].position;
                                        (o.x = i.status.x), (o.y = i.status.y - 2 - i.type.radius), (o.z = 1), (this.ship_tag[h].visible = 'true' == localStorage.getItem('selftag') && i.status.alive && !i.status.guided);
                                    }
                                });
                            let m = Object.keys(c).find(e => 'function' == typeof c[e] && c[e].toString().includes('render'));
                            d.prototype[m] = Function('return ' + d.prototype[m].toString().replace(/(\\w+\\.render)/, 'this.updateShipTag(), $1'))();
                            let g = function (...e) {
                                return window.module.exports.translate(...e);
                            };
                            for (let $ in window)
                                try {
                                    let y = window[$];
                                    if ('function' == typeof y.prototype.refused)
                                        for (let v in y.prototype) {
                                            let b = y.prototype[v];
                                            'function' == typeof b && b.toString().includes('new Scene') && (y.prototype[v] = Function('Scene', 't', 'return ' + b.toString())(d, g));
                                        }
                                } catch (_) {}
                        })();
                    }, 1100);
                    let MUIP = ModdingUIComponent.prototype,
                        hide = MUIP.hide,
                        set = ModdingMode.prototype.setUIComponent,
                        specs = ModdingUIComponent.toString()
                            .match(/,\\s*this.([^=]+?\\s*).add/)[1]
                            .split('.'),
                        getGroup = function (_this) {
                            for (let spec of specs) _this = _this[spec];
                            return _this;
                        },
                        isHidden = function (ui) {
                            return (!Array.isArray(ui.components) || ui.components.filter(i => ['round', 'box', 'player', 'text'].includes((i || {}).type)).length == 0) && !ui.clickable;
                        };

                    GenericMode.prototype.setUIComponent = ModdingMode.prototype.setUIComponent = function (ui) {
                        if (ui == null)
                            ui = {
                                visible: false,
                            };
                        if (!Array.isArray(ui.position)) ui.position = [];
                        let idealPos = [0, 0, 100, 100],
                            pos = [];
                        if (ui.visible != null && !ui.visible) pos = [0, 0, 0, 0];
                        else for (let i = 0; i < idealPos.length; ++i) pos.push(ui.position[i] == null || isNaN(ui.position[i]) ? idealPos[i] : +ui.position[i]);
                        ui.position = pos;
                        if (!((ui.visible != null && !ui.visible) || isHidden(ui)) || (this.ui_components != null && this.ui_components[ui.id])) return set.call(this, ui);
                    };

                    MUIP.interfaceHidden = function () {
                        return (this.interface_hidden = !0), hide.apply(this, arguments);
                    };

                    MUIP.hide = function () {
                        if (!this.firstHide) {
                            this.shown = this.firstHide = true;
                        }
                        let shown = this.shown,
                            result = hide.apply(this, arguments);
                        if (shown) {
                            return setTimeout(
                                function (t) {
                                    if (!t.shown) {
                                        getGroup(t).remove(t);
                                        if (t[specs[0]].mode.ui_components != null) delete t[specs[0]].mode.ui_components[t.component.id];
                                    }
                                },
                                1e3,
                                this
                            );
                        }
                        return result;
                    };

                    let key = Object.keys(MUIP).find(key => 'function' == typeof MUIP[key] && MUIP[key].toString().includes('this.shown=!0')),
                        show = MUIP[key];
                    MUIP[key] = function () {
                        if (isHidden(this.component)) return this.hide();
                        let group = getGroup(this);
                        if (!this.shown) return !group.children.includes(this) && group.add(this, this.component.position), show.call(this, arguments);
                    };
                `;
                let scripts = document.createElement('script');
                scripts.innerHTML = script;
                setTimeout(() => {
                    document.head.appendChild(scripts);
                }, 1500);
            } catch (error) {
                console.error(error);
            }
        }
    };
    xhr.send();
    let fullend = performance.now();
    Client.log(`Script executed in ${(fullend - fullstart).toFixed(0)}ms`);
}

function ECPinjectLoader() {
    const log = msg => console.log(`%c[Client] ${msg}`, 'color: #c4bf9f');
    if (window.location.pathname != '/app.html' && window.location.search === '?ecp') {
        log(`Injection not needed`);
        return;
    }
    document.open();
    document.write(`<title>Loading...</title><style>.wrapper{position:fixed;z-index:100;top:0;left:0;width:100%;height:100%;background:#001019;display:flex;justify-content:center;align-items:center}@keyframes rotate-loading{0%{transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);-moz-transform:rotate(360deg)}}@-moz-keyframes rotate-loading{0%{transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);-moz-transform:rotate(360deg)}}@-webkit-keyframes rotate-loading{0%{transform:rotate(0);-ms-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);-moz-transform:rotate(360deg)}}@-o-keyframes rotate-loading{0%{transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);-moz-transform:rotate(360deg)}}@keyframes rotate-loading{0%{transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);-moz-transform:rotate(360deg)}}@-moz-keyframes rotate-loading{0%{transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);-moz-transform:rotate(360deg)}}@-webkit-keyframes rotate-loading{0%{transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);-moz-transform:rotate(360deg)}}@-o-keyframes rotate-loading{0%{transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);-moz-transform:rotate(0)}100%{transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);-moz-transform:rotate(360deg)}}@keyframes loading-text-opacity{0%{opacity:0}20%{opacity:0}50%{opacity:1}100%{opacity:0}}@-moz-keyframes loading-text-opacity{0%{opacity:0}20%{opacity:0}50%{opacity:1}100%{opacity:0}}@-webkit-keyframes loading-text-opacity{0%{opacity:0}20%{opacity:0}50%{opacity:1}100%{opacity:0}}@-o-keyframes loading-text-opacity{0%{opacity:0}20%{opacity:0}50%{opacity:1}100%{opacity:0}}.loading,.loading-container{height:100px;position:relative;width:100px;border-radius:100%}.loading-container{margin:40px auto}.loading{border:4px solid transparent;border-color:transparent hsla(200,72%,61%,.7) transparent hsla(200,72%,61%,.7);-moz-animation:rotate-loading 1.5s linear 0s infinite normal;-moz-transform-origin:50% 50%;-o-animation:rotate-loading 1.5s linear 0s infinite normal;-o-transform-origin:50% 50%;-webkit-animation:rotate-loading 1.5s linear 0s infinite normal;-webkit-transform-origin:50% 50%;animation:rotate-loading 1.5s linear 0s infinite normal;transform-origin:50% 50%}.loading-container:hover .loading{border-color:hsla(200,72%,61%,.7) transparent hsla(200,72%,61%,.7) transparent}.loading-container .loading,.loading-container:hover .loading{-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;-ms-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out}#loading-text{-moz-animation:loading-text-opacity 2s linear 0s infinite normal;-o-animation:loading-text-opacity 2s linear 0s infinite normal;-webkit-animation:loading-text-opacity 2s linear 0s infinite normal;animation:loading-text-opacity 2s linear 0s infinite normal;color:hsla(200,72%,61%,.7);font-family:arial;font-size:12px;font-weight:700;margin-top:45px;opacity:0;position:absolute;text-align:center;text-transform:uppercase;top:0;left:2px;width:100px}</style><div class=wrapper><div class=loading-container><div class=loading></div><div id=loading-text>loading...</div></div></div>`);
    document.close();
    var url = 'https://starblast.io/app.html?ecp';
    var xhr = new XMLHttpRequest();
    log('Fetching starblast src...');
    xhr.open('GET', url);
    xhr.onreadystatechange = async function () {
        if (xhr.readyState === 4) {
            var src = xhr.responseText;
            if (src != undefined) {
                log(`Src fetched successfully`);
            } else {
                log(`Src fetch failed`);
                alert('An error occurred whilst fetching game code');
            }
            const start_time = performance.now();
            log('Patching src...');
            src = src.replace('localStorage.getItem("debug")&&(location.href="/")', 'localStorage.getItem("debug")&&(console.log("reload prevented"))');
            let reegtest = src.match(/if\("select"!==(\w+\.)type\)e\+='<div\s*class="option">'\+t\(\w+\.name\)\+'<label\s*class="switch"><input\s*type="checkbox"\s*'\+\(\w+\.value\?'checked="checked"':""\)\+'\s*id="'\+(\w+)\+'""><div\s*class="slider"><\/div><\/label><\/div>';/);
            if (reegtest) {
                try {
                    src = src.replace(reegtest[0], `if ("select" !== ${reegtest[1]}type) if ("color" === ${reegtest[1]}type) { e += '<div class="option">' + t(${reegtest[1]}name) + '<div class="range" style=\\"cursor: pointer;\\">\\n  <input id=\\'\' + ${reegtest[2]} + "' type=\\"color\\" style=\\"-webkit-appearance:none;width:130px;border:transparent;background:transparent\\">\\n<span id='" + ${reegtest[2]} + "_value'>" + ${reegtest[1]}value + "</span>\\n  </div>\\n</div>";} else {e+='<div class="option">'+t(${reegtest[1]}name)+'<label class="switch"><input type="checkbox" '+(${reegtest[1]}value?'checked="checked"':"")+' id="'+ ${reegtest[2]} +'""><div class="slider"></div></label></div>'}`);
                } catch (error) {
                    console.error(error);
                }
            }
            let newrgs = src.match(/e\.[iI10OlL]{4,6}\.[iI10OlL]{4,6}\.beep\(4\+\.2\*math\.random\(\)/gi);
            let newnewrgs = newrgs[0].match(/[iI10OlL]{4,6}/g);
            src = src.replace(/for\(f=document\.queryselectorall\("\.option\s*input\[type=range\]"\),\s*i=function\(e\)\{.*?,1\)\}\)\}\}/gis, `for (f = document.querySelectorAll(".option input[type=range], .option input[type=color]"), i = function(e) {return function(i) {if(i.type === "range"){if (i.id === "emopacity") {i.addEventListener("input", function (s) {return x = document.querySelector("#" + i.getAttribute("id") + "_value"), x.innerText = parseInt(i.value, 10), e.updateSettings(s, !0)})} else {if (i.addEventListener("input", function (s) {return x = document.querySelector("#" + i.getAttribute("id") + "_value"), x.innerText = "0" === i.value ? t("Off") : Math.round(50 * i.value) + " %", e.updateSettings(s, !0)}), i.dispatchEvent(new Event("input")), "sounds" === i.id) return i.addEventListener("change", function (t) {return e.${newnewrgs[0]}.${newnewrgs[1]}.beep(4 + .2 * Math.random(), 1)})}} else if (i.type === "color") {if (i.id === "gemcolor1") {i.addEventListener("input", function (s) {return x = document.querySelector("#" + i.getAttribute("id") + "_value"), x.innerText = i.value, e.updateSettings(s, !0);});i.addEventListener("change", function (s) {i.value = window.ECPStorage.getGemColor1();x = document.querySelector("#" + i.getAttribute("id") + "_value").innerText = i.value;});i.value = window.ECPStorage.getGemColor1();} else if (i.id === "gemcolor2") {i.addEventListener("input", function (s) {return x = document.querySelector("#" + i.getAttribute("id") + "_value"), x.innerText = i.value, e.updateSettings(s, !0);});i.addEventListener("change", function (s) {i.value = window.ECPStorage.getGemColor2();x = document.querySelector("#" + i.getAttribute("id") + "_value").innerText = i.value;});i.value = window.ECPStorage.getGemColor2();}}}}`);
            src = src.replace('null!=e&&null!=this.client_version&&(e.innerText="Client Version: "+this.client_version)', `null != e && (e.innerText = 'Client Version: StandAlone 1.1.0')`);
            const titreg = src.match(/case\s*"titanium"\s*:(\w+)=t.createLinearGradient\(0,0,0,i\),[\s\S]*?;break;/);
            const defreg = src.match(/default:(\w+)=t\.createLinearGradient\(0,0,0,i\),\w+\.addColorStop\(0,"#EEE"\),\w+\.addColorStop\(1,"#666"\)/);
            src = src.replace('https://starblast.io/modsinfo.json', 'https://raw.githubusercontent.com/officialtroller/starblast-things/refs/heads/main/modsinfo.js');
            src = src.replace(/this\.hue,\.5,1/g, 'this.hue,1,1');
            src = src.replace(/this\.hue,\.5,.5/g, 'this.hue,1,1');
            src = src.replace('||(this.icon="https://starblast.io/ecp/gamepedia.png")', '||(this.icon=this.icon)');
            src = src.replace('NEW!', ' ');
            let Clientecp = `case "GG": this.icon = "https://raw.githubusercontent.com/officialtroller/starblast-things/refs/heads/main/ecp/gg.png";break;\n`;
            let Clientecp1 = `GG: "Xavi"`;
            src = src.replace(/case\s*"pmf"\s*:\s*this\.icon\s*=\s*".*?";\s*break;/, '$&' + Clientecp);
            src = src.replace(/seasonal\:"Seasonal"/i, '$&,' + Clientecp1);
            src = src.replace(/\.toUpperCase\(\)/g, '');
            src = src.replace(/text-transform:\s*uppercase;/gim, '');
            src = src.replace(/"blank"\s*!==\s*this\.custom\.badge/, '""!==this.custom.badge');
            src = src.replace(/case"star":.*?break;/g, `$&case"blank":t.fillStyle="hsla(200, 0%, 0%, 0)";break;`);
            src = src.replace(/default:t\.fillStyle="hsl\(50,100%,70%\)",t\.fillText\("S",e\/2,i\/2\)/, 'case"blank":t.fillStyle="hsla(200, 0%, 0%, 1)";break;default:t.fillStyle="hsl(50,100%,70%)",t.fillText("S",e/2,i/2)');
            src = src.replace(/default:t.fillStyle="hsl\(200,50%,20%\)"/, 'default:t.fillStyle = "hsl(50,100%,50%)"');
            src = src.replace(/default:t\.fillStyle="hsl\(50,100%,70%\)",t\.fillText\("S",e\/2,i\/2\)/, 'case"star":t.fillStyle="hsl(50,100%,70%)",t.fillText("S",e/2,i/2);break;default:t.fillStyle="hsl(0,50%,30%)",t.fillText("8",e/2,i/2)');
            src = src.replace(titreg[0], `$&case"zinc":${titreg[1]}=t.createLinearGradient(0,0,0,i),${titreg[1]}.addColorStop(0,"#EEE"),${titreg[1]}.addColorStop(1,"#666");break;`);
            src = src.replace(defreg[0], `default:${defreg[1]}=t.createLinearGradient(0,0,0,i),${defreg[1]}.addColorStop(0,"hsl(0,100%,50%)"),${defreg[1]}.addColorStop(.5,"hsl(60,100%,50%)"),${defreg[1]}.addColorStop(.5,"hsl(120,100%,50%)"),${defreg[1]}.addColorStop(1,"hsl(180,100%,50%)")`);
            src = src.replace('classList.add("shown")', '$&, window.ECPStorage.enableScrollEvents()');
            src = src.replace(/window\.parent\.postMessage\("([^"]*)","\*"\)/gim, 'window.electronAPI.sendMessage("$1")');

            const end_time = performance.now();
            log(`Patched src successfully (${(end_time - start_time).toFixed(0)}ms)`);
            document.open();
            document.write(src);
            document.close();
            let script = `
                let sbibt = document.createElement('script');
                    sbibt.src = 'https://cdn.jsdelivr.net/gh/officialtroller/starblast-things/stationmodels.user.js';
                    document.body.appendChild(sbibt);
                    let script = document.createElement('script');
                    script.src = 'https://cdn.jsdelivr.net/gh/officialtroller/starblast-things/weaponmodels.user.js';
                    document.body.appendChild(script);
                    if (localStorage.getItem('selftag') === null) localStorage.selftag = true;
                window.module.exports.settings.parameters.selftag = { name: 'Self Ship Tag', value: !0, skipauto: !0, filter: 'default,app,mobile' };
                window.module.exports.settings.parameters.gemcolor1 = { name: 'Gem Color 1', value: window.SteamStorage.getGemColor1(), skipauto: true, type: 'color', filter: 'default,app,mobile' };
                window.module.exports.settings.parameters.gemcolor2 = { name: 'Gem Color 2', value: window.SteamStorage.getGemColor2(), skipauto: true, type: 'color', filter: 'default,app,mobile' };
                window.module.exports.dict['Gem Color 1'] = { fr: 'Couleur bijou 1', tr: 'Mücevher rengi 1' };
                window.module.exports.dict['Gem Color 2'] = { fr: 'Couleur bijou 2', tr: 'Mücevher rengi 2' };
                window.module.exports.dict['Self Ship Tag'] = { fr: 'étiquette expédition', tr: 'self-ship etiketi' };
                let gemcolor = setInterval(() => {
                    let CrystalObject;
                    for (let i in window) {
                        try {
                            let val = window[i];
                            if ('function' == typeof val.prototype.createModel && val.prototype.createModel.toString().includes('Crystal')) {
                                CrystalObject = val;
                                clearInterval(gemcolor);
                                break;
                            }
                        } catch (e) {}
                    }

                    if (CrystalObject != null) {
                        let oldModel = CrystalObject.prototype.getModelInstance;

                        CrystalObject.prototype.getModelInstance = function () {
                            let res = oldModel.apply(this, arguments);
                            let color = window.SteamStorage.getGemColor1();
                            let specular = window.SteamStorage.getGemColor2();
                            this.material.color.set(color);
                            this.material.specular.set(specular);
                            return res;
                        };
                    }
                }, 100);
                setTimeout(function () {
                    !(function () {
                        let e, t;
                        for (let n in window)
                            try {
                                let i = window[n].prototype;
                                if (null != i)
                                    for (let o in i) {
                                        let s = i[o];
                                        if ('function' == typeof s && s.toString().match(/([^,]+)("hsla\\(180,100%,75%,\\.75\\)")/)) {
                                            let l;
                                            (e = n), (i[(t = Object.keys(i).find(e => 'function' == typeof i[e] && (l = (i[e].toString().match(/===(\\w+\\.[^,]+)\\.hue/) || [])[1])))] = Function('return ' + i[t].toString().replace(/(\\.id)/, '$1, this.selfShip = this.shipid == ' + l + '.id'))()), (i[o] = Function('return ' + s.toString().replace(/([^,]+)("hsla\\(180,100%,75%,\\.75\\)")/, "$1 this.selfShip ? 'hsla(180,100%,75%,.75)' : $2"))());
                                        }
                                    }
                            } catch (r) {}
                        let a = Object.getPrototypeOf(Object.values(Object.values(window.module.exports.settings).find(e => e && e.mode)).find(e => e && e.background)),
                            d = a.constructor,
                            c = d.prototype,
                            u = d.toString(),
                            hue = u.match(/(\\w+)\\.hue/)[1],
                            f = u.match(/(\\w+)\\.add\\(/)[1],
                            h = u.match(/chat_bubble\\.(\\w+)/)[1];
                        ((d = Function('return ' + u.replace(/}$/, ', this.welcome || (this.ship_tag = new ' + e + '(Math.floor(360 * 0)), this.' + f + '.add(this.ship_tag.' + h + '))}'))()).prototype = c),
                            (d.prototype.constructor = d),
                            (a.constructor = d),
                            (d.prototype.updateShipTag = function () {
                                if (null != this.ship_tag) {
                                    if (!this.shipKey) {
                                        this.shipKey = Object.keys(this).find(e => this[e] && this[e].ships);
                                        let e = this[this.shipKey];
                                        this.statusKey = Object.keys(e).find(t => e[t] && e[t].status);
                                    }
                                    let n = this[hue],
                                        i = this[this.shipKey][this.statusKey];
                                    this.ship_tag[t](n, n.names.get(i.status.id), i.status, i.instance);
                                    let o = this.ship_tag[h].position;
                                    (o.x = i.status.x), (o.y = i.status.y - 2 - i.type.radius), (o.z = 1), (this.ship_tag[h].visible = 'true' == localStorage.getItem('selftag') && i.status.alive && !i.status.guided);
                                }
                            });
                        let m = Object.keys(c).find(e => 'function' == typeof c[e] && c[e].toString().includes('render'));
                        d.prototype[m] = Function('return ' + d.prototype[m].toString().replace(/(\\w+\\.render)/, 'this.updateShipTag(), $1'))();
                        let g = function (...e) {
                            return window.module.exports.translate(...e);
                        };
                        for (let $ in window)
                            try {
                                let y = window[$];
                                if ('function' == typeof y.prototype.refused)
                                    for (let v in y.prototype) {
                                        let b = y.prototype[v];
                                        'function' == typeof b && b.toString().includes('new Scene') && (y.prototype[v] = Function('Scene', 't', 'return ' + b.toString())(d, g));
                                    }
                            } catch (_) {}
                    })();
                }, 5000);
                let explolight = setInterval(() => {
                    if (window.Explosions != null) {
                        clearInterval(explolight);
                        let oldExplosion = Explosions.prototype.explode,
                            oldBlast = Explosions.prototype.blast;

                        let globalVal = oldExplosion
                            .toString()
                            .match(/this\\.([0OlI1\\.]+)\\.settings\\.check/)[1]
                            .split('.');

                        Explosions.prototype.isEnabled = function () {
                            let _this = this;
                            for (let i of globalVal) _this = _this[i];
                            return _this.settings.check('explolight');
                        };

                        Explosions.prototype.explode = function () {
                            return this.isEnabled() && oldExplosion.apply(this, arguments);
                        };

                        Explosions.prototype.blast = function () {
                            return this.isEnabled() && oldBlast.apply(this, arguments);
                        };
                    }
                }, 100);
            `;
            let scriptelm = document.createElement('script');
            scriptelm.innerHTML = script;
            setTimeout(() => {
                document.head.appendChild(scriptelm);
            }, 1500);
        }
    };
    xhr.send();
}

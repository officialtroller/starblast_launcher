const { app, BrowserWindow, ipcMain, shell, globalShortcut } = require('electron');
const DiscordRPC = require('discord-rpc');
const path = require('path');
const ClientID = '1398416103838978259';
const rpc = new DiscordRPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
    console.log('Discord RPC connected');
    rpc.setActivity({
        startTimestamp: Math.floor(Date.now() / 1000),
        largeImageKey: 'img',
        largeImageText: 'Starblast Launcher',
    }).catch(console.error);
});

rpc.login({ clientId: ClientID }).catch(error => console.log(`Discord RPC login error: ${error.message}`));

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
let mainWindow;

async function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        fullscreen: true,
        frame: false,
        webPreferences: {
            nodeIntegration: false,
            webSecurity: false,
            allowRunningInsecureContent: true,
            contextIsolation: true,
            nodeIntegrationInSubFrames: true,
            preload: path.join(__dirname, 'steam.js'),
        },
    });

    mainWindow.loadFile('index.html');
    rpc.setActivity({
        startTimestamp: Math.floor(Date.now() / 1000),
        largeImageKey: 'img',
        largeImageText: 'Starblast Launcher',
        details: 'on Home Page',
    }).catch(console.error);

    mainWindow.webContents.setWindowOpenHandler(({ url }) => {
        shell.openExternal(url);
        return { action: 'deny' };
    });
}

async function initApp() {
    try {
        await createWindow();
    } catch (e) {
        console.log('Something went wrong while initializing app: ', e);
    }
}

app.whenReady().then(() => {
    initApp();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit(), rpc.destroy();
});

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0 && !mainWindow) {
        createWindow();
    }
});

ipcMain.on('quit-app', () => {
    app.quit();
});

ipcMain.on('quit', () => {
    mainWindow.loadFile('index.html');
    rpc.setActivity({
        startTimestamp: Math.floor(Date.now() / 1000),
        largeImageKey: 'img',
        largeImageText: 'Starblast Launcher',
        details: 'on Home Page',
    }).catch(console.error);
});

ipcMain.on('toggle_fullscreen', () => {
    mainWindow.setFullScreen(!mainWindow.isFullScreen());
});
let InterValID = null;
ipcMain.on('start-browser', () => {
    launchClient('Browser', 'https://starblast.io/#', null);
});

ipcMain.on('start-ecp', () => {
    launchClient('Standalone', 'https://starblast.io/app.html?ecp#', /app\.html\?ecp/);
});

ipcMain.on('start-steam', () => {
    launchClient('Steam', 'https://starblast.io/app.html?steam#', /app\.html\?steam/);
});

function launchClient(clientType, url, urlReplaceRegex) {
    mainWindow.loadURL(url);
    mainWindow.webContents.once('did-finish-load', async () => {
        const TimeStamp = Math.floor(Date.now() / 1000);
        if (InterValID) clearInterval(InterValID);

        InterValID = setInterval(async () => {
            try {
                let isInGame;
                switch (clientType) {
                    case 'Browser':
                        isInGame = await mainWindow.webContents.executeJavaScript(
                            `"/" == window.location.pathname && "welcome" != Object.values(window.module.exports.settings).find(e => e && e.mode).mode.id && "https://starblast.io/#" != window.location.href`
                        );
                        break;
                    case 'Standalone':
                        isInGame = await mainWindow.webContents.executeJavaScript(
                            `"/app.html" == window.location.pathname && "welcome" != Object.values(window.module.exports.settings).find(e => e && e.mode).mode.id && "https://starblast.io/app.html?ecp#" != window.location.href`
                        );
                        break;
                    case 'Steam':
                        isInGame = await mainWindow.webContents.executeJavaScript(
                            `"/app.html" == window.location.pathname && "welcome" != Object.values(window.module.exports.settings).find(e => e && e.mode).mode.id && "https://starblast.io/app.html?steam#" != window.location.href`
                        );
                        break;
                    default:
                        break;
                }

                let state = 'On Homepage';
                let smallImageKey;
                let mode, newstate, modeId;

                if (isInGame) {
                    mode = await mainWindow.webContents.executeJavaScript(
                        `Object.values(window.module.exports.settings).find(e => e && e.mode).mode.game_info?.name||Object.values(window.module.exports.settings).find(e => e && e.mode).mode.name;`
                    );
                    newstate = await mainWindow.webContents.executeJavaScript(`Object.values(window.module.exports.settings).find(e => e && e.mode).mode.name;`);
                    modeId = await mainWindow.webContents.executeJavaScript(`Object.values(window.module.exports.settings).find(e => e && e.mode).mode.id;`);

                    const imageKeys = {
                        survival: 'survival',
                        team: 'team',
                        invasion: 'invasion',
                        deathmatch: 'pdm',
                        modding: 'modding',
                    };
                    smallImageKey = imageKeys[modeId];
                    state = `${newstate}`;
                }

                const activity = {
                    details: `in ${clientType} Client`,
                    state: mode ? 'on ' + mode : undefined,
                    largeImageKey: 'img',
                    smallImageKey: smallImageKey || undefined,
                    smallImageText: state || undefined,
                    startTimestamp: TimeStamp,
                    buttons: isInGame ? [{ label: 'Join Game!', url: mainWindow.webContents.getURL().replace(urlReplaceRegex, '') }] : undefined,
                };

                rpc.setActivity(activity).catch(console.error);
            } catch (err) {
                console.error(`[${clientType}] Rich Presence update failed:`, err);
            }
        }, 3000);
    });

    rpc.setActivity({
        startTimestamp: Math.floor(Date.now() / 1000),
        largeImageKey: 'img',
        largeImageText: 'Starblast Launcher',
        details: `in ${clientType} Client`,
    }).catch(console.error);
}

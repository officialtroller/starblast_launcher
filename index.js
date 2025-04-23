const { app, BrowserWindow, ipcMain, shell, globalShortcut } = require('electron');
const DiscordRPC = require('discord-rpc');
const path = require('path');
const ClientID = '1330980896186306680';
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

ipcMain.on('start-browser', () => {
    mainWindow.loadURL('https://starblast.io/');
    rpc.setActivity({
        startTimestamp: Math.floor(Date.now() / 1000),
        largeImageKey: 'img',
        largeImageText: 'Starblast Launcher',
        details: 'in Browser Client',
    }).catch(console.error);
});

ipcMain.on('start-ecp', () => {
    mainWindow.loadURL('https://starblast.io/app.html?ecp');
    rpc.setActivity({
        startTimestamp: Math.floor(Date.now() / 1000),
        largeImageKey: 'img',
        largeImageText: 'Starblast Launcher',
        details: 'in Standalone Client',
    }).catch(console.error);
});

ipcMain.on('start-steam', () => {
    mainWindow.loadURL('https://starblast.io/app.html?steam');
    rpc.setActivity({
        startTimestamp: Math.floor(Date.now() / 1000),
        largeImageKey: 'img',
        largeImageText: 'Starblast Launcher',
        details: 'in Steam Client',
    }).catch(console.error);
});

async function createfakewindow() {
    if (mainWindow) {
        console.log('Window already exists. Skipping creation.');
        return;
    }
    console.log('Creating new window...');
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        fullscreen: true,
        frame: false,
        webPreferences: {
            nodeIntegration: false,
            webSecurity: false,
            allowRunningInsecureContent: true,
            contextIsolation: false,
            nodeIntegrationInSubFrames: true,
            preload: path.join(__dirname, 'steam.js'),
        },
    });

    mainWindow.loadURL('https://starblast.io/app.html?steam');
    mainWindow.webContents.openDevTools();
}

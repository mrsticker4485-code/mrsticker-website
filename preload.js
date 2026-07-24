const { contextBridge } = require('electron');

// Nothing sensitive is exposed. This bridge exists so the renderer can tell
// it is running inside the desktop app, if that is ever useful.
contextBridge.exposeInMainWorld('mrSticker', {
  isDesktop: true,
  platform: process.platform
});

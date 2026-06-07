// Eagerly import all captured live-site screenshots and expose a lookup by
// project id. Returns null when a project has no screenshot (the UI then
// falls back to the project thumbnail).
const modules = import.meta.glob('../assets/screenshots/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});

const byId = {};
for (const [path, url] of Object.entries(modules)) {
  const name = path.split('/').pop().replace(/\.(jpg|jpeg|png)$/i, '');
  byId[name] = url;
}

export function getScreenshot(id) {
  return byId[String(id)] || null;
}

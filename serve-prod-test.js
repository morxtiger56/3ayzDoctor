/*******************************************************
 * ⚠️ This server is for testing production builds in a
 * development environment. It has not been checked for
 * security. Please do not use in production!
 *****************************************************/
const path = require('path');
const express = require('express');
const port = 8080;
const rootDir = path.join(__dirname, 'dist/browser/3ayz-doctor');
const locales = ['en-US', 'ar'];
const defaultLocale = 'en-US';
const server = express();
// Serve static files (HTML, CSS, etc.)
server.use(express.static(rootDir));

locales.forEach((locale) => {
  server.get(`/${locale}/*`, (req, res) => {
    res.sendFile(
      path.resolve(rootDir, locale, 'index.html')
    );
  });
});

// Redirect / to /en-CA

server.get('/', (req, res) =>
  res.redirect(`/${defaultLocale}`)
)

server.listen(port, () => {
  console.log(`App running at port ${port}…`)
  console.log("http://localhost:8080")
})

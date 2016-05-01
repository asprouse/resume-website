export default (c) => {
  return `<!doctype html>
  <html lang="en">
    <head>
      <title>${c.title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="revision" content="${c.revision}" />
      <meta name="generated" content="${c.generated}" />
      <link rel="stylesheet" href="${c.cssAsset}" />
   </head>
   <body>
     <div id="app">${c.body}</div>
     <script>
       window.__DATA__ = ${c.data};
     </script>
     <script src="${c.jsAsset}"></script>
   </body>
  </html>`;
};

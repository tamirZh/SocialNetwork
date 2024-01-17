import React from 'react';

export default function Layout({ children, initState }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com" />
        <script defer src="/app.js" />
        <script defer src="/vendor.js" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.initState=${JSON.stringify(initState)}`,
          }}
        />
        <title>SocialNetwork</title>
      </head>
      <body>
        <div id="root" className="container mx-40px px-4">{children}</div>
      </body>
    </html>
  );
}

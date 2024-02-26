import "./globals.css";

export const metadata = {
  title: "Kitsune Arkitekter",
  description: "Arkitekt Katrine Holm, Oslo. Etablert 2015",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:url" content="https://kitsunearkitekter.no/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kitsune Arkitekter" />
        <meta
          property="og:description"
          content="Arkitekt Katrine Holm, Oslo. Etablert 2015"
        />
        <meta property="og:image" content="/img/sha-1.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="sharkitekter.vercel.app" />
        <meta property="twitter:url" content="https://kitsunearkitekter.no/" />
        <meta name="twitter:title" content="Kitsune Arkitekter" />
        <meta
          name="twitter:description"
          content="Arkitekt Katrine Holm, Oslo. Etablert 2015"
        />
        <meta name="twitter:image" content="/img/sha-1.jpg" />

        <script
          defer
          data-domain="kitsunearkitekter.no"
          src="https://plausible.io/js/script.js"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}

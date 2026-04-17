import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Armen Barsehian — Frontend & WordPress Developer with 4+ years of experience. 30+ websites built. Available for remote work." />
        <meta name="keywords" content="frontend developer, wordpress developer, react developer, ukraine, remote, javascript, typescript" />
        <meta name="author" content="Armen Barsehian" />
        <meta property="og:title" content="Armen Barsehian — Frontend & WordPress Developer" />
        <meta property="og:description" content="4+ years building fast, beautiful websites. Available for remote work." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <body className="noise-overlay">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          src="https://events.framer.com/script"
          data-fid="c62121d5aa1b20ea6596243415fa4f9a5251151e596530787a169e9488f99fa4"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

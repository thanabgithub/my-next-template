import "/global-styles/0_normalize.scss";
import "/global-styles/1_typography.scss";
import "/global-styles/2_composition.scss";
import "/global-styles/3_utils.scss";
import "/global-styles/99_chrome-bug.scss";

import Head from "next/head";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          media="print"
          onload="this.onload=null;this.removeAttribute('media');"
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
        </noscript>
      </Head>
      <div className="page-wrapper">
        <Component {...pageProps} />
      </div>
      <style jsx>{`
        .page-wrapper {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
}

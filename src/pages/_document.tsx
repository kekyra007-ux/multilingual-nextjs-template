// pages/_document.tsx

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import i18nextConfig from "../../next-i18next.config";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const currentLocale = this.props.__NEXT_DATA__.query.locale;
    const locale =
      typeof currentLocale === "string"
        ? currentLocale
        : i18nextConfig.i18n.defaultLocale;

    return (
      <Html lang={locale}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#3B146F" />

          {/* Critical styles + Loader */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
                * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                }

                body {
                  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                  background-color: #3B146F;
                  color: #F6F0FF;
                  overflow-x: hidden;
                  min-height: 100vh;
                }

                #__next {
                  min-height: 100vh;
                  display: flex;
                  flex-direction: column;
                }

                /* Loader overlay */
                .page-loader {
                  position: fixed;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  background: linear-gradient(180deg, #2B0F56 0%, #16062B 100%);
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  z-index: 9999;
                  opacity: 1;
                  transition: opacity 0.3s ease-out;
                }

                .page-loader.hidden {
                  opacity: 0;
                  pointer-events: none;
                }

                .loader-logo {
                  font-size: 32px;
                  font-weight: bold;
                  background: linear-gradient(180deg, #F6F0FF 0%, #F5C84C 100%);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                  margin-bottom: 30px;
                  animation: pulse 1.5s ease-in-out infinite;
                }

                .loader-spinner {
                  width: 50px;
                  height: 50px;
                  border: 4px solid #8032f5;
                  border-top: 4px solid #F5C84C;
                  border-radius: 50%;
                  animation: spin 1s linear infinite;
                }

                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }

                @keyframes pulse {
                  0%, 100% {
                    opacity: 1;
                    transform: scale(1);
                  }
                  50% {
                    opacity: 0.8;
                    transform: scale(1.05);
                  }
                }

                /* Hide content until loaded */
                #__next > * {
                  opacity: 0;
                  animation: fadeIn 0.5s ease-in-out forwards;
                  animation-delay: 0.3s;
                }

                @keyframes fadeIn {
                  from { opacity: 0; }
                  to { opacity: 1; }
                }
              `,
            }}
          />
        </Head>
        <body>
          {/* Loader */}
          <div className="page-loader" id="page-loader">
            <div className="loader-logo">AppTemplate</div>
            <div className="loader-spinner"></div>
          </div>

          <Main />
          <NextScript />

          {/* Hide loader after page load */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    document.getElementById('page-loader').classList.add('hidden');
                  }, 300);
                });
              `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

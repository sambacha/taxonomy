
// NoPageFlicker.tsx
// The implementation is similar to that to we have seen on Vercel.com above

import Head from 'next/head';

const PRELOADER_BG = 'rgb(243, 244, 246)';

export const NO_PAGE_FLICKER_CLASSNAME = 'render';

export const hideBodyCss = `
  body::before {
    content: '';
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 99999;
    background-color: ${PRELOADER_BG};
  }

  .${NO_PAGE_FLICKER_CLASSNAME} body::before {
    display: none;
  }
`;

const noscriptCSS = `
  body::before {
    content: none
  }
`;

export function NoPageFlicker() {
  return (
    <Head>
      <style dangerouslySetInnerHTML={{ __html: hideBodyCss }} />
      <noscript>
        <style dangerouslySetInnerHTML={{ __html: noscriptCSS }} />
      </noscript>
    </Head>
  );
}
/* ============================================================
   Mi Tribu · tracking.js
   Carga condicional de analytics — agrega IDs antes de usar
   ============================================================ */

(function () {
  'use strict';

  /* --- Google Analytics (gtag.js) ----------------------------
     Para activar: define window.GA_ID = 'G-XXXXXXXXXX'
     antes de cargar este script (o en el <head>).              */
  if (window.GA_ID) {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + window.GA_ID;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', window.GA_ID);
  }

  /* --- Meta (Facebook) Pixel ---------------------------------
     Para activar: define window.FB_PIXEL_ID = '0000000000000'
     y descomenta el bloque de abajo.

  if (window.FB_PIXEL_ID) {
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', window.FB_PIXEL_ID);
    fbq('track', 'PageView');
  }
  ------------------------------------------------------------ */

  /* --- Otros proveedores -------------------------------------
     Agregar aquí: TikTok Pixel, LinkedIn Insight, Hotjar, etc. */

})();

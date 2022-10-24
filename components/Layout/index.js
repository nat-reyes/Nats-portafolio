// import CookieConsent from 'react-cookie-consent';
import dynamic from 'next/dynamic';
import Navbar from '../Navbar';
import Footer from '../Footer';

const GoogleAnalyticsConfig = dynamic(() =>
  import('../../utils/ga.js').then((mod) => mod.GoogleAnalyticsConfig)
);

function Layout({ children }) {
  return (
    <div>
      <GoogleAnalyticsConfig />
      <Navbar />
      {children}
      {/*<CookieConsent*/}
      {/*    debug={process.env.NEXT_PUBLIC_COOKIES_DEBUG === 'true'}*/}
      {/*    buttonText="Accept"*/}
      {/*    containerClasses="cookie-container"*/}
      {/*    buttonClasses="cookie-accept-button"*/}
      {/*>*/}
      {/*    This site uses cookies to provide you with a better user experience. By*/}
      {/*    using this site, you accept our terms of use.*/}
      {/*</CookieConsent>*/}

      <Footer />
    </div>
  );
}

export default Layout;

import Head from "../components/Head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Layout = ({ children, locale, locales, defaultLocale }) => (
  <div>
    <Head />
    <Navigation
      locale={locale}
      locales={locales}
      defaultLocale={defaultLocale}
    />
    {children}
    <Footer />
  </div>
);

export default Layout;

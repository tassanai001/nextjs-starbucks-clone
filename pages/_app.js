import Header from "../components/header";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

import "bootstrap/dist/css/bootstrap.css";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <Navbar />
      <body>{children}</body>
      <Footer />
    </html>
  );
};

export default Layout;

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function Layout({ children }) {
  return (
    <div>
      <header><Header /></header>
      <main>{children}</main>
      <footer><Footer /></footer>
    </div>
  );
}
export default Layout;
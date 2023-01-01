import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout({ children, home }) {
  return (
    <main>
      <Navbar />

      {children}

      <Footer home={home} />
    </main>
  );
}

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout({ home, children }) {
  return (
    <main>
      <Navbar />

      {children}

      <Footer home={home} />
    </main>
  );
}

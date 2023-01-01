import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout({ children, home }) {
  return (
    <main className="w-screen">
      <Navbar />

      {children}

      <Footer home={home} />
    </main>
  );
}

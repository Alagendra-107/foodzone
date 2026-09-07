import FoodzoneHome from "./main/page";
import MenuContainer from "./menu/page";
// import Navbar from "../components/NavBar";
import AboutContent from "./about/page";
import ContactContent from "./contacts/page";

export default function Home() {
  return (
    <section>
      {/* <Navbar /> */}
      <FoodzoneHome />
      <MenuContainer />
      <AboutContent />
      <ContactContent />
    </section>
  );
}

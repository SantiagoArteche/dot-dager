import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Welcome } from "./components/Welcome/Welcome";
import "animate.css";
import { LanguageContextProvider } from "./context/LanguageContext";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { SidebarContextProvider } from "./context/SidebarContext";

const App = () => {
  return (
    <SidebarContextProvider>
      <LanguageContextProvider>
        <div className="min-h-screen bg-gray-900 overflow-x-hidden" id="home">
          <Navbar />
          <Welcome />
          <About />
          <Contact />
          <Footer />
          <Sidebar />
        </div>
      </LanguageContextProvider>
    </SidebarContextProvider>
  );
};

export default App;

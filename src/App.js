import "./App.css";
import ThankYouProfessor from "./components/thankyouPage";
import HandwrittenNote from "./components/HandwrittenNote";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <HandwrittenNote />
      <ThankYouProfessor />
      <Footer />
    </>
  );
}

export default App;

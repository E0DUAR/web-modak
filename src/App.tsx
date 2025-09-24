import "./App.css";
import { Header, Footer } from "./ui/organisms";
import { Outer } from "./ui/templates";

function App() {
  return (
    <>
      <Header />
      
      <Outer className="container mx-auto flex h-[100vh] items-center justify-center">

        <h1 className="text-4xl font-bold text-center">
          Welcome to Modak! <br />
          Your AI-Powered Code Companion
        </h1>

      </Outer>

      <Footer />
    </>
  );
}

export default App;

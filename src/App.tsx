import "./App.css";
import { FeatureCard } from "./ui/molecules";
import { Header, Footer } from "./ui/organisms";

function App() {
  return (
    <>
      <Header />
      
      <div className="container mx-auto flex h-[100vh] items-center justify-center">
        <FeatureCard
          title="Chores & Allowance"
          description="Manage your kids' chores and pay their allowance, all in the Modak Makers app."
          imageUrl="https://www.modakmakers.com/images/chores.webp" // URL de la imagen de fondo
          gradientColor="#D91A6F" // El color rosa del gradiente
          linkUrl="/features/chores-and-allowance"
          // Aquí pasas el componente de la insignia que preparaste antes
          highlight=""
        />
      </div>

      <Footer />
    </>
  );
}

export default App;

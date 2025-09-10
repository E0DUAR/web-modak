import "./App.css";
import { FeatureCard, HighlightBadge } from "./ui/molecules";

function App() {
  return (
    <main className="flex flexDirection:'row' items-center justify-center gap-12 bg-[#f5f5f5]">
      <FeatureCard
          title="Chores & Allowance"
          description="Manage your kids' chores and pay their allowance, all in the Modak Makers app."
          imageUrl="http://localhost:5173/src/assets/img/Chores-&-Allowance.avif" // URL real de la imagen de fondo
          gradientColor="#D91A6F"
          highlight={
            <HighlightBadge
              iconUrl="http://localhost:5173/src/assets/icon/chores-avatar.svg"
              title="$20 Sent to your kid"
              subtitle="Completed"
            />
          }
        />
    </main>
  );
}

export default App;

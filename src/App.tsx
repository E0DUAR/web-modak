import "./App.css";
import { DropdownMenu } from "./ui/molecules";

const featuresMenuItems = [
  { label: "Chores & Allowance", href: "/features/chores" },
  { label: "Savings Goals", href: "/features/savings" },
  { label: "Money Management", href: "/features/management" },
];

// Array de items para el segundo menú desplegable
const companyMenuItems = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
];

function App() {
  return (
    <main className="min-h-screen flex flexDirection:'row' items-center justify-center gap-12 bg-[#f5f5f5]">

      <DropdownMenu triggerText="Why Modak" items={featuresMenuItems} />

      <DropdownMenu triggerText="Company" items={companyMenuItems} />

    </main>
  );
}

export default App;

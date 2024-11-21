import Hero from "./components/Hero";
import LegalServices from "./components/LegalServices";
import Draft from "./components/Draft";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <LegalServices />
        <Draft />
      </main>
    </div>
  );
}

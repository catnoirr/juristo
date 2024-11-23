import Hero from "./components/Hero";
import LegalServices from "./components/LegalServices";
// import Draft from "./components/Draft";
import ValueProposition from "./components/ValueProposition";
import WhatWeProvide from "./components/WhatWeProvide";
import Benefits from "./components/Benefits";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <LegalServices />
        {/* <Draft /> */}
        <ValueProposition />
        <WhatWeProvide />
        <Benefits />
      </main>
    </div>
  );
}

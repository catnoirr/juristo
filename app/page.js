import Hero from "./components/Hero";
import LegalServices from "./components/LegalServices";
// import Draft from "./components/Draft";
import ValueProposition from "./components/ValueProposition";
import WhatWeProvide from "./components/WhatWeProvide";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <LegalServices />
        {/* <Draft /> */}
        <ValueProposition />
        <WhatWeProvide />
      </main>
    </div>
  );
}

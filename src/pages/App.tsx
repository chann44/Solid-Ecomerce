import { ShirtCard } from "../components/shirt-card";
import { SiteBanner } from "../components/site-banner";

function App() {
  return (
    <div class="container">
      <SiteBanner />
      <div class="grid grid-cols-4 gap-5 py-10">
        <ShirtCard />
        <ShirtCard />
        <ShirtCard />
        <ShirtCard />
        <ShirtCard />
      </div>
    </div>
  );
}

export default App;

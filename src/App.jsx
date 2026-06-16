import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <main className="min-h-screen">
      <section>
        {/* login home page */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;

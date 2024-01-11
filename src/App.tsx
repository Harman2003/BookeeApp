import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";
import Shifts from "./pages/Shifts";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { ShiftProvider } from "./context/ShiftProvider";
import { Toaster } from "sonner";

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <Navbar />
        <div className="h-[calc(100%-64px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/shifts/*"
              element={
                <ShiftProvider>
                  <Shifts />
                </ShiftProvider>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Toaster position="top-center" expand={true} richColors/>
      </div>
    </QueryClientProvider>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Container from "./component/container";
import Dashboard from "./pages/dashboard";
import Transaksi from "./pages/transaksi";
import Pelajar from "./pages/pelajar";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<Container />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transaksi" element={<Transaksi />} />
        <Route path="/pelajar" element={<Pelajar />} />
      </Route>
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Router OK</h1>} />
      <Route path="/login" element={<h1>Login OK</h1>} />
    </Routes>
  );
}

export default App;

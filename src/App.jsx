import { Routes, Route } from "react-router-dom";
import ChildAppMain from "./ChildAppMain";
import MainAppChild2 from "./MainAppChild2";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/watch/:videoId" element={<MainAppChild2 />} />
        <Route path="/*" element={<ChildAppMain />} />
      </Routes>
    </>
  );
}

export default App;
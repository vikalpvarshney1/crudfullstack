
import Navbar from "./Components/Navbar";
import Tablebar from "./Components/Table";
import {
  Routes,
  Route
} from "react-router-dom";
import Form from "./Components/Form";
import Edit from "./Components/Edit";

function App() {
  return (
    <div >
      <Navbar />
      <Tablebar />
      {/* <Routes>
        <Route path="/edit/:id" element={<Edit />} />
      </Routes> */}

    </div>
  );
}

export default App;

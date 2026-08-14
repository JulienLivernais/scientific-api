import { useEffect } from "react";
import { getAllNotions } from "./api";

function App() {
  useEffect(() => {
    getAllNotions().then(console.log).catch(console.error);
  }, []);

  return <h1>Scientific dictionary</h1>;
}

export default App;
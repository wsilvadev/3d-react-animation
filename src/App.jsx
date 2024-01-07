import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
function App() {
  const [isLoading, setLoading] = useState(false);
  if (isLoading) {
    return (
      <>
        <Loading />
        <button className="btn" onClick={() => setLoading(!isLoading)}>
          clique para desativar o loading
        </button>
      </>
    ); // Pode substituir por um componente de loading mais elaborado
  }

  return (
    <>
      <button className="btn" onClick={() => setLoading(!isLoading)}>
        clique para ativar o loading
      </button>
    </>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const App = () => {

  useEffect(() => {

    const ws = new WebSocket("ws://localhost:8080");
    

  }, []);

  return (
    <div
    className="max-w-full min-h-screen"
    >
      <main
      className="min-h-screen"
      >
        <Outlet>
          {/* Routing Content will go here */}
        </Outlet>
      </main>
    </div>
  )
}

export default App;

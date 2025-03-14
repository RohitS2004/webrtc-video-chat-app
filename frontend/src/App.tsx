import { Outlet } from "react-router-dom";

const App = () => {
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

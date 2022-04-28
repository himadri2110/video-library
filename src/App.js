import "./App.css";
import { Toaster } from "react-hot-toast";
import { AppRoutes } from "routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{
          top: "4rem",
          fontSize: "0.9rem",
        }}
      />

      <AppRoutes />
    </div>
  );
}

export default App;

import "./App.css";
import AuthContextProvider from "./components/context/AuthContext";
import Navbar from "./components/Navbar";
import Approuter from "./router/Approuter";

function App() {
  return (
    <AuthContextProvider>
        <Approuter />
    </AuthContextProvider>
    
    
  );
}

export default App;

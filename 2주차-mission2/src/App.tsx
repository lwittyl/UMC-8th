import "./App.css";
import ContextPage from "./components/ContextPage";
import { ThemeProvider } from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <ContextPage />
    </ThemeProvider>
  );
}

export default App;

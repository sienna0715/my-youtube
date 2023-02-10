import "./App.css";
import DarkModeProvider from "./components/DarkMode";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import YoutubeApiProvider from "./context/YoutubeApiContext";

const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider className="App">
      <Header />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </DarkModeProvider>
  );
}

export default App;

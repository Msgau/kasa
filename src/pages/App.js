import RouteConfiguration from "./Home/Routes";
import { DarkModeContext } from "../components/DarkModeProvider";
import { useContext } from "react";

export default function App() {
    const {darkMode} = useContext(DarkModeContext);
    return (
      <div className={`app ${darkMode && 'dark-theme'}`}>
          <RouteConfiguration />
      </div>
    )
  }
import LanguageContext from "../context/LanguageContext";
import AuthContext from "../context/AuthContext";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

export const MainContext = () => {
  /**Aqui por medio del hook useContext, puedo acceder a la informacion  */
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  const { auth } = useContext(AuthContext);

  return (
    /** Cambia nuestro clase de css dependiendo */
    <main className={theme}>
      {/* Muestro dinamicamente mis textos si estan en ES o EN */}
      {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}
      <p>{texts.mainContent}</p>
    </main>
  );
};
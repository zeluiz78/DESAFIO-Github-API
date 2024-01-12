import { Link } from "react-router-dom";
import "./styles.css";

export default function Home() {
  return (
    <main>
      <div className="container home-ctr">
        <h1>Desafio Github API</h1>
        <p>Bootcamp Spring React - DevSuperior</p>
        <Link to="/perfil">
          <button type="button">
            Começar
          </button>
        </Link>
      </div>
    </main>
  );
}

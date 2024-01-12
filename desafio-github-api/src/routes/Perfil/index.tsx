import axios from "axios";
import { useState } from "react";
import ResultCard from "../../components/ResultCard";
import { GithubUser } from "../../models/githubUser";
import "./styles.css";

type FormData = {
  githubUser: string;
};

export default function Perfil() {
  const [githubUser, setGithubUser] = useState<GithubUser>();
  const [notFound, setNotFound] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    githubUser: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${formData.githubUser}`)
      .then((response) => {
        setGithubUser(response.data);
      })
      .catch((error) => {
        setNotFound(true);
      });
  };

  return (
    <main className="container">
      <div className="search-area-ctr">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            name="githubUser"
            value={formData.githubUser}
            className="form-control"
            placeholder="Usuário Github"
            aria-describedby="Campo de Busca de Usuário do Github"
            onChange={handleChange}
          />
          <button type="submit">Encontrar</button>
        </form>
      </div>
      <div>
        {githubUser ? (
          <ResultCard githubUser={githubUser} />
        ) : (
          notFound ?
          <h4 className="error-msg">Erro ao buscar usuário</h4>
          : <></>
        )}
      </div>
    </main>
  );
}

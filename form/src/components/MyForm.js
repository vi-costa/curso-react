import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  // 5 - controlled imputs
  // 3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //7 - limpar form
    setName("");
    setEmail("");
  };
  return (
    <div>
      {/* 1 - criacao de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <p>{name}</p>
          <input
            type="text"
            name="name"
            onChange={handleName}
            placeholder="Digite o seu nome"
            value={name}
          />
        </div>
        {/* 2 - label envolvendo input */}
        <label>
          <span>E-mail:</span>
          <p>{email}</p>
          {/* 4- Simplificação de set*/}
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o seu e-mail"
            value={email}
          ></input>
        </label>
        {/*8 -textarea */}
        <label>
          <span>Bio:</span>
          <p>{bio}</p>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
     
        {/*9 - select */}
        <label>
          <span>Função no sistema</span>
          <p>{role}</p>
          <select name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input class="btn" type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;

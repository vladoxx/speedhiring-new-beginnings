import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { UserProps } from "../../@types/user";
import { InputChange } from "../../@types/general";

import * as userService from "../../service/UserService";

import "./RegisterUser.css";

function RegisterUser() {
  let navigate = useNavigate();
  let params = useParams();

  const initialStateUser = {
    name: "",
    email: "",
    phone: "",
    address: "",
    cep: "",
    city: "",
    state: "",
    job: "",
    password: "",
    confirm_password: "",
  };

  const [user, setUser] = useState<UserProps>(initialStateUser);

  const handleInputChangeUser = (e: InputChange) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmitUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      await userService.createUser(user);

      setUser(initialStateUser);
    } else {
      await userService.updateUser(params.id, user);
    }

    navigate("/login-user"); // Após o cadastro, leva para o login
  };

  const getUser = async (id: string) => {
    const res = await userService.getOneUser(id);

    const {
      name,
      email,
      phone,
      address,
      cep,
      city,
      state,
      job,
      password,
      confirm_password,
    } = res.data;

    setUser({
      name,
      email,
      phone,
      address,
      cep,
      city,
      state,
      job,
      password,
      confirm_password,
    });
  };

  useEffect(() => {
    if (params.id) {
      getUser(params.id);
    }
  }, []);

  return (
    <div className="registerUser">
      <h3 className="registerUser__title">Cadastro do Candidato</h3>

      <form
        className="registerUser__form"
        onSubmit={handleSubmitUser}
        action="/register-user"
      >
        <input
          className="registerUser__input"
          type="text"
          name="name"
          onChange={handleInputChangeUser}
          value={user.name}
          placeholder="Nome Completo*"
          required
        />
        <input
          className="registerUser__input"
          type="email"
          name="email"
          onChange={handleInputChangeUser}
          value={user.email}
          placeholder="E-mail*"
          required
        />
        <input
          className="registerUser__input"
          type="text"
          name="address"
          onChange={handleInputChangeUser}
          value={user.address}
          placeholder="Endereço*"
          required
        />
        <input
          className="registerUser__input"
          type="number"
          name="cep"
          onChange={handleInputChangeUser}
          value={user.cep}
          placeholder="CEP*"
          required
        />
        <input
          className="registerUser__input"
          type="tel"
          name="phone"
          onChange={handleInputChangeUser}
          value={user.phone}
          placeholder="Telefone*"
          required
        />
        <input
          className="registerUser__input"
          type="text"
          name="city"
          onChange={handleInputChangeUser}
          value={user.city}
          placeholder="Cidade*"
          required
        />
        <input
          className="registerUser__input"
          type="text"
          name="state"
          onChange={handleInputChangeUser}
          value={user.state}
          placeholder="Estado"
          required
        />
        <input
          className="registerUser__input"
          type="text"
          name="job"
          onChange={handleInputChangeUser}
          value={user.job}
          placeholder="Função/Cargo*"
          required
        />
        <input
          className="registerUser__input"
          type="password"
          name="password"
          onChange={handleInputChangeUser}
          value={user.password}
          placeholder="Senha*"
          required
        />
        <input
          className="registerUser__input"
          type="password"
          name="confirm_password"
          onChange={handleInputChangeUser}
          value={user.confirm_password}
          placeholder="Confirmar a Senha*"
          required
        />

        <button className="registerUser__button" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default RegisterUser;

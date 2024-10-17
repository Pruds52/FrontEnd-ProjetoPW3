import React from "react";
import style from "./CreateUser.module.css";
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button"

const CreateGame = () => {
    return (
        <section className={style.create_user_container}>

            <div className={style.forms}>

                <h1>Cadastrar Usuário</h1>

                <Input
                    type="text"
                    name="txt_user"
                    placeHolder="Digite seu nome"
                    text="Nome:"
                />

                <Input
                    type="text"
                    name="txt_user"
                    placeHolder="Digite seu email"
                    text="Email:"
                />

                <Input
                    type="password"
                    name="txt_user"
                    placeHolder="Digite sua senha"
                    text="Senha:" />

                <Input
                    type="date"
                    name="txt_user"
                    text="Data de Nascimento:" />

                <Button
                    rotulo="Cadastrar Usuário"
                />

            </div>


        </section>
    );
};

export default CreateGame;

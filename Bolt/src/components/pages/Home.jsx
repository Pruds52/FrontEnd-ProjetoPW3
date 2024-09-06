import React from "react";

import style from "./Home.module.css"

const Home = ()=>{
    return(

        <section className={style.home_container}>
            <h1>Bem vindo ao <span>Bolt</span></h1>
            <p>A plataforma mais ágil e prática de venda de jogos!</p>
        </section>

    )
}

export default Home
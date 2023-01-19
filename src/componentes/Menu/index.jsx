import React from "react"
import home from "../../assets/icones/home-ativo.png"
import maisVistas from "../../assets/icones/mais-vistas-inativo.png"
import maisCurtidas from "../../assets/icones/mais-curtidas-inativo.png"
import novas from "../../assets/icones/novas-inativo.png"
import surpreendaMe from "../../assets/icones/surpreenda-me-inativo.png"
import style from "./Menu.module.scss"

export default function Menu () {
    return(
        <nav className={style.menu}>
            <ul className={style.menu__lista}>
                <li className={style.menu__item}>
                    <img src={home} alt="" />
                    <a href="/">Início</a>
                </li>
                <li className={style.menu__item}>
                    <img src={maisVistas} alt="" />
                    <a href="/">Mais vistas</a>
                </li>
                <li className={style.menu__item}>
                    <img src={maisCurtidas} alt="" />
                    <a href="/">Mais curtidas</a>
                </li>
                <li className={style.menu__item}>
                    <img src={novas} alt="" />
                    <a href="/">Novas</a>
                </li>
                <li className={style.menu__item}>
                    <img src={surpreendaMe} alt="" />
                    <a href="/">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}
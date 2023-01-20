import React from "react";
import style from './Tags.module.scss';

export default function Tags() {
    return(
        <div className={style.tags}>
            <p className={style.p}>Filtre por tags:</p>
            <ul className={style.tags__lista}>
                <li>Estrelas</li>
                <li>Galáxias</li>
                <li>Lua</li>
                <li>Planetas</li>
            </ul>
        </div>
    )
}
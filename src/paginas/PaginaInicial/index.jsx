import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import style from "./PaginaInicial.module.scss"
import Banner from "../../componentes/Banner";

export default function PaginaInicial(){
    return(
        <>
            <Cabecalho />
            <main className={style.main}>
                <section className={style.principal}>
                    <Menu />
                    <Banner />
                </section>
            </main>
        </>
    );
}
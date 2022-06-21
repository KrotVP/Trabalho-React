import styles from'./Home.module.css'
import styleNAV from'../../components/Layout/Navbar.module.css'


export const Home = ()=>{
return(
    <section >
    <div className={styleNAV.divd}>
    <div className={styleNAV.Nav}>
        <ul className={styleNAV.list}>
                <li className={styleNAV.item}><a href="/Login">Login</a></li>
                <li className={styleNAV.item}><a href="/pedido/lista">Pedidos</a></li>
                <li className={styleNAV.item}><a href="/categoria/editar">Categoria</a></li>
                <li className={styleNAV.item}><a href="/produtos">Produtos</a></li>
            </ul>
    </div>
    </div>    
        
        <div className={styles.home_container}>
            <h1>Bem Vindo A <span>Ideias Avancadas</span></h1>
            <p>A melhor loja de produtos de informatica </p>
            
            </div>
        <div className={styles.home_teclado}>
            <h1>
                QUEM SOMOS!
            </h1>
            <p>Criamos essa empresa para ajudar a levar os precos mais justo do Mercado brasileiro de maneira simples rapido e facil!</p>
        </div>
    </section>
    
    
)

}

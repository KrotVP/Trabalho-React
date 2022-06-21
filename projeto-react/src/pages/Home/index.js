import styles from'./Home.module.css'
import NavBar from'../../components/Layout/Navbar'


export const Home = ()=>{
return(
    <section >
       
        <div className={styles.home_1}>
        <h1>Sobre</h1>

        </div>
        <div className={styles.home_container}>
            <h1>Bem Vindo A <span>Ideias Avancadas</span></h1>
            <p>A melhor loja de produtos de informatica </p>
            <a href='/'>Criar Projeto</a>
            </div>
        <div className={styles.home_teclado}>
            <h1>
                teste
            </h1>
        </div>
    </section>
    
    
)

}

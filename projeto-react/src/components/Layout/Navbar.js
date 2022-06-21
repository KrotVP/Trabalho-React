import{Link} from'react-router-dom'

import Container from './Container'
import styles from'./Navbar.module.css'
import logo from'../Imagem/Ideias.png'

function Navbar(){
return(
    <nav class={styles.navbar}>
        <Container> 
            <div className={styles.logo}>
            <Link to="/"><img src={logo} alt="Ideias" width="100%" /></Link>
            </div>
            <ul class={styles.list}>
                <li className={styles.item}><Link to="/">Home</Link></li>
                <li className={styles.item}><Link to="/Teclados">Teclados</Link></li>
                <li className={styles.item}><Link to="/Mouses">Mouses</Link></li>
                <li className={styles.item}><Link to="/Produtos">Produtos</Link></li>
            </ul>
            
            
        </Container>
      </nav>
)
}
export default Navbar
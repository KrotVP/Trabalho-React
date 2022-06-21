import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './components/NavBar';
import Footer from './components/Footer';
import {Context} from "./context/data";
import {Login} from "./pages/Login";
import {default as NotFound} from "./pages/NotFound";
import{Home} from "./pages/Home";
import{Categoria} from "./pages/Categoria";
import {Endereco} from "./pages/Endereco";
import {FuncionarioIndividual as Funcionario} from './pages/FuncionarioIndividual';
import{ListaFuncionarios} from './pages/FuncionarioIndividual/ListaFuncionarios';
import {ListaPedido} from "./pages/ListaPedido";
import {Cliente} from "./pages/Cliente";
import {EditarEndereco} from "./pages/Endereco/EditarEndereco";


function App() {
  return(
  <>
    <Context>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Switch>
            <Route path="/login" component={Login} exact/>
            <Route path="/categoria/editar" component={Categoria} exact/>
            <Route path="/endereco" component={Endereco} exact/>
            <Route path="/endereco/editar" component={EditarEndereco} exact/>
            <Route path="/funcionario" component={Funcionario} exact/>
            <Route path="/funcionario/lista" component={ListaFuncionarios} exact/>
            <Route path="/pedido/lista" component={ListaPedido} exact/>
            <Route path="/cliente" component= {Cliente} exact /> 
      {/*<Route path="/cadastro" component={Cadastro} exact/>
      <Route path="/client" component= {Client} exact /> 
      <Route path="/produto" component= {Produto} exact/>
      <Route path="/produto/{nome}" component={ProdutoNome} exact/> 
      <Route path="/produto/editar/{nome}" component={ProdutoEdicao} exact/>
      <Route path="/produto/categoria" component={Categorias} exact/>
      
      
      <Route path="/cadastro/funcionario" component={CriacaoFuncionario} exact/>
      
      
      <Route path="/carrinho" component={Carrinho} exact/>
      */}
      <Route path="/" component={Home} exact/>
      <Route path="/*" component={NotFound} />  
        </Switch>
        <Footer />
      </BrowserRouter>
    </Context>
  </>
  )
}

export default App;

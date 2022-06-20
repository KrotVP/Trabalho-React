import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
<Context>
    <BrowserRouter>
    <ResponsiveAppBar />
    <Switch>
      <Route path="login" component={Login} exact/>
      <Route path="cadastro" component={Cadastro} exact/>
      <Route path="client" component= {Client} exact /> 
      <Route path="produto" component= {Produto} exact/>
      <Route path="produto/{nome}" component={ProdutoNome} exact/> 
      <Route path="produto/editar/{nome}" component={ProdutoEdicao} exact/>
      <Route path="categoria" component={Categorias} exact/>
      <Route path="categoria/editar" component={CategoriaEdicao} exact/>
      <Route path="funcionario" component={Funcionario} exact/>
      <Route path="cadastro/funcionario" component={CriacaoFuncionario} exact/>
      <Route path="endereco" component={Endereco} exact/>
      <Route path="funcionario/lista" component={ListaFuncionarios} exact/>
      <Route path="carrinho" component={Carrinho} exact/>
      <Route path="pedido" component={Pedidos} exact/>
      <Route path="" component={Home} exact/>
      <Route path="*" component={NotFound} />  
    </Switch>
    <Footer />
    </BrowserRouter>
  </Context>
}

export default App;

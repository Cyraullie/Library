import logo from '../assets/img/logo.png';

function BasicExample() {
  return (
    
    <div class="header">
     
        <div class="menu">
            <a class="menuButton" href="/Loan">Emprunter</a>
            <a class="menuButton" href="/Render">Rendre</a>
            <a href="/"><img class="logo" src={logo} /></a>
            <a class="menuButton" href="/AddBook">Ajouter un livre</a>
            <a class="menuButton" href="/Login">Login</a>
        </div>
    </div>
  );
}

export default BasicExample;
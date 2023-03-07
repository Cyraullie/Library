import logo from '../assets/img/logo.png';

function Header() {
  return (
    <div className="headerArea">
      <div className="menuHeader">
        <a className="menuButtonHeader" href="/Loan">Emprunter</a>
        <a className="menuButtonHeader" href="/Render">Rendre</a>
        <a href="/"><img className="logo" src={logo} /></a>
        <a className="menuButtonHeader" href="/AddBook">Ajouter un livre</a>
        <a className="menuButtonHeader" href="/Login">Login</a>
      </div>
    </div>
  );
}

export default Header;
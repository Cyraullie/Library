
function Header() {

  let logo = [];

  logo = new Image();
  logo.src =  "/gallery/logo.webp";
 
  return (
    <div className="headerArea">
      <div className="menuHeader">
        <a className="menuButtonHeader" href="/Loan">Emprunter</a>
        <a className="menuButtonHeader" href="/Render">Rendre</a>
        <a href="/"><img className="logo" height="100px" width="273px" alt="Ici appraît l'image du logo du site" src={logo.src} /></a>
        <a className="menuButtonHeader" href="/AddBook">Ajouter un livre</a>
        <a className="menuButtonHeader" href="/Login">Login</a>
      </div>
    </div>
  );
}

export default Header;
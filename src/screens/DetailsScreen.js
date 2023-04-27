import T1 from '../assets/img/TMIT1.webp';

function DetailScreen() {
    return (
      <div className='Page'>
          <form className="bookLoanArea">
              <div className="bookAreaLoanImage">
                <img  className="bookLoanImage" src={T1}></img>
              </div>
              <div className="bookLoanAreaText">
                  <div className="dataLoan">
                    <div className="bookAddTextData">
                        <h1>L'invocateur : Le Novice <b>T. 1</b></h1>
                    </div>
                        <p>Écrivain: <b>Taran Matharu</b></p>
                        <p>Éditeur: <b>Hachette</b></p>
                        <p>Propriétaire: <b>Cyril Goldenschue</b></p>
                  </div>  
                  
                  

                  <p><b>Résume : </b></p>
                    <div className="resumeLoan">
                        Orphelin, Fletcher imagine déjà le futur avec une vie assez difficile, mais dans la forge de son père adoptif, qui l'a pris sous son aile dès qu'il a été retrouvé seul, abandonné.
                    </div>
              
                  <input type="submit" className="bookButton" value="Emprunter"></input>
              </div>
          </form>
      </div>
    );
  }
  
  export default DetailScreen;
  
  
  
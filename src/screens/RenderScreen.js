import T1 from '../assets/img/TMIT1.jpg';
import T2 from '../assets/img/TMIT2.jpg';
import T3 from '../assets/img/TMIT3.jpg';

function RenderScreen() {
    return (
      <div className='Page'>
        <table className='bookTable'>
          <thead>
            <tr>
              <th className='bookCover'>Livre</th>
              <th>Informations</th>
              <th className='bookState'>état</th>
              <th className='bookCheck'>Cocher</th>
            </tr>
          </thead>
            
          <tbody>
            <tr>
              <td className='bookCover'><img className="LoanBookImage" src={T1}></img></td>
              <td>L'invocateur T. 1, Taran Matharu</td>
              <td className='bookState'>en stock</td>
              <td className='bookCheck'><input type="checkbox" /></td>
            </tr>
            <tr>
              <td className='bookCover'><img className="LoanBookImage" src={T2}></img></td>
              <td>L'invocateur T. 2, Taran Matharu</td>
              <td className='bookState'>en stock</td>
              <td className='bookCheck'><input type="checkbox" /></td>
            </tr>
            <tr>
              <td className='bookCover'><img className="LoanBookImage" src={T3}></img></td>
              <td>L'invocateur T. 3, Taran Matharu</td>
              <td className='bookState'>en stock</td>
              <td className='bookCheck'><input type="checkbox" /></td>
            </tr>
          </tbody>
        </table>

        <div className='renderButtons'>
          <a>Annuler</a>
          <a>Rendre</a>
        </div>
      </div>
    );
  }
  
  export default RenderScreen;
  
  
  
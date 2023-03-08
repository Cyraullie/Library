import T1 from '../assets/img/TMIT1.jpg';

function LoanScreen() {
    return (
      <div className='Page'>

        <table className='bookTable'>
            <thead>
                <tr>
                    <th className='bookCover'>Livre</th>
                    <th>Informations</th>
                    <th className='bookState'>état</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <td className='bookCover'><img className="LoanBookImage" src={T1}></img></td>
                    <td>L'invocateur T. 1, Taran Matharu</td>
                    <td className='bookState'>en stock</td>
                </tr>
            </tbody>
        </table>
      </div>
    );
  }
  
  export default LoanScreen;
  
  
  
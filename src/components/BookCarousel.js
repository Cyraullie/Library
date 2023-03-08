import React from 'react';
import { CCarousel, CCarouselItem } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'

import T1 from '../assets/img/TMIT1.jpg';
import T2 from '../assets/img/TMIT2.jpg';
import T3 from '../assets/img/TMIT3.jpg';

function Carousel() {

  return ( 
    <CCarousel controls interval={50000}>

      <CCarouselItem>

        <div className='bookCard' alt="slide 1">
          <div className='bookCardArea'>
            <div>
              <img className='bookImage' src={T1} />
            </div>
            <div className='bookText'>
              <h1>L'invocation : Le Novice</h1>
              <div className="InfoBook">
                  <p><b>Tome 1</b></p>
                  <p>Écrivain: <b>Taran Matharu</b></p>
                  <p>Éditeur: <b>Hachette</b></p>
                  <p>Propriétaire: <b>Cyril Goldenschue</b></p>
              </div>
              <p><b>résumé : </b></p>
              <div className="summary">
                  Orphelin, Fletcher imagine déjà le futur avec une vie assez difficile, mais dans la forge de son père adoptif, qui l'a pris sous son aile dès qu'il a été retrouvé seul, abandonné.
              </div>
              <a className="Button ButtonInSlide" href="/Details">Détails</a>
            </div>
          </div>
        </div>

      </CCarouselItem>

      <CCarouselItem>

        <div className='bookCard' alt="slide 2">
          <div className='bookCardArea'>
            <div>
              <img className='bookImage' src={T2} />
            </div>
            <div className='bookText'>
              <h1>L'invocation : Le Novice</h1>
              <div className="InfoBook">
                  <p><b>Tome 1</b></p>
                  <p>Écrivain: <b>Taran Matharu</b></p>
                  <p>Éditeur: <b>Hachette</b></p>
                  <p>Propriétaire: <b>Cyril Goldenschue</b></p>
              </div>
              <p><b>résumé : </b></p>
              <div className="summary">
                  Orphelin, Fletcher imagine déjà le futur avec une vie assez difficile, mais dans la forge de son père adoptif, qui l'a pris sous son aile dès qu'il a été retrouvé seul, abandonné.
              </div>
              <a className="Button ButtonInSlide" href="/Details">Détails</a>
            </div>
          </div>
        </div>

      </CCarouselItem>

      <CCarouselItem>

        <div className='bookCard' alt="slide 3">
          <div className='bookCardArea'>
            <div>
              <img className='bookImage' src={T3} />
            </div>
            <div className='bookText'>
              <h1>L'invocation : Le Novice</h1>
              <div className="InfoBook">
                  <p><b>Tome 1</b></p>
                  <p>Écrivain: <b>Taran Matharu</b></p>
                  <p>Éditeur: <b>Hachette</b></p>
                  <p>Propriétaire: <b>Cyril Goldenschue</b></p>
              </div>
              <p><b>résumé : </b></p>
              <div className="summary">
                  Orphelin, Fletcher imagine déjà le futur avec une vie assez difficile, mais dans la forge de son père adoptif, qui l'a pris sous son aile dès qu'il a été retrouvé seul, abandonné.
              </div>
              <a className="Button ButtonInSlide" href="/Details">Détails</a>
            </div>
          </div>
        </div>

      </CCarouselItem>

    </CCarousel>
  );
};

export default Carousel;
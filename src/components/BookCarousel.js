import React, { Component} from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'

import axios from "axios";
import env from "../env.json"

export default class BookData extends Component {
  constructor(props) {
    super(props);
    
    this.state = { BookDataState: [] }
  }

  getData = () => {
    axios.get(env.BASE_URL + "book/show")
    .then((response) => {
      this.getBookData(response.data) 
    })
    .catch(error => {
      console.log(error);
    }); 
  }
  
    getBookData(data){
        let bookArr = data;
        let bookData = [];    
          
        for(let i = 0; i < bookArr.length; i++) {
          //TODO try get widht width 
            bookData.push(
              <div className='bookCard' alt="slide 1">
                  <div className='bookCardArea'>
                      <div>
                        <img className='bookImage' height="430px" alt={"ici apparaît la couverture de "+bookArr[i].name+" T."+bookArr[i].volume} src={require("../assets/img/"+bookArr[i].img_name+".webp")} />
                      </div>
                      <div className='bookText'>
                      <h1>{bookArr[i].name} T.{bookArr[i].volume}</h1>
                      <div className="InfoBook">
                          <p>Écrivain: <b>{bookArr[i].author}</b></p>
                          <p>Éditeur: <b>{bookArr[i].editor}</b></p>
                          <p>Propriétaire: <b>{bookArr[i].user_firstname} {bookArr[i].user_lastname}</b></p>
                      </div>
                      <p><b>résumé : </b></p>
                      <div className="summary">
                          {bookArr[i].summary}
                          </div>
                      <a className="Button ButtonInSlide" href={"/Details/" + bookArr[i].id}>Détails</a>
                      </div>
                  </div>
              </div>
            )
        }

        this.setState({
            BookDataState: bookData,
        })
    }
    
    

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      this.state.BookDataState
    );
  }
};


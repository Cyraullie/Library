import React, { Component} from 'react';

import axios from "axios";
import env from "../env.json"

export default class NewBookScreen extends Component {
    constructor(props) {
        super(props);
        
        this.state = { tempFile: {}, _method: "POST", owner: 1, volume: 1 }
    }


    setFile = (e) => {
        let image = document.getElementById("bookAddImage");
        let file = e.target.files[0];
        let fileReader = new FileReader();
        
        this.state.tempFile = file;

        fileReader.readAsDataURL(file);
        fileReader.onload = function (){
            image.setAttribute("style", "background-image: url("+fileReader.result+")");
        }
    }
    //TODO mettre le compte connecté
    onPressSubmit = () => {
        let { _method, title, volume, writer, editor, owner, summary } = this.state;
        

        let img_name = this.state.tempFile.name;
        let image = new FormData();
        image.append("image", this.state.tempFile);

        console.log(image)

        let payload = { _method, title, volume, writer, editor, owner, summary, img_name };

        const axiosConfig = {
            headers: { 
                'Content-Type': 'multipart/form-data',
            }
        };

        const onSuccess = (e) => {
            console.log(e)
            axios.post(env.BASE_URL + "book/new_pic", image, axiosConfig).then((response) => {
                console.log(response);
              }).catch(onFailure)
            /*let url = window.location.href;
            window.location.href = url.substring(0, url.length - 7);*/
        };
    
        const onFailure = (error) => {
            console.log(error && error.response);
        };
        axios.post(env.BASE_URL + "book/add", payload).then(onSuccess).catch(onFailure)
    }
    
    onTitleChange = (title) => {
        this.setState({ title: title.target.value});
    }

    onVolumeChange = (volume) => {
        this.setState({ volume: volume.target.value});
    }

    onWriterChange = (writer) => {
        this.setState({ writer: writer.target.value});
    }

    onEditorChange = (editor) => {
        this.setState({ editor: editor.target.value});
    }

    onSummaryChange = (summary) => {
        this.setState({ summary: summary.target.value});
    }

    render() {
        return (
            <div className='Page'>
                <form className="bookAddArea">
                    <div className="bookAddAreaImage">
                        <label htmlFor="files" id="bookAddImage" className="bookAddImage" >Select Image</label>
                        <input id="files" className="hidden" type="file" onChange={this.setFile} accept='image/png, image/jpeg'/>
                    </div>
                    <div className="bookAddAreaText">
                        <div className="bookAddTextData">
                            <input type="text" className="bookInput data" placeholder="Title" onChange={this.onTitleChange}></input>
                            <input type="number" className="bookInput" placeholder="Volume" min={1} defaultValue={1} onChange={this.onVolumeChange}></input>
                        </div>
                        <div className="bookAddTextData">
                            <input type="text" className="bookInput data" placeholder="Writer" onChange={this.onWriterChange}></input>
                            <input type="text" className="bookInput" placeholder="Editor" onChange={this.onEditorChange}></input>
                        </div>
                        
                            <input type="text" className="bookInput" placeholder="Owner"></input>
        
                        
                        
                        <label>Resume</label>
                        <textarea className="bookInput resume" onChange={this.onSummaryChange}></textarea>
                    
                        <input type="button" className="bookButton" onClick={this.onPressSubmit.bind(this)} value="envoyer"></input>
                    </div>
                </form>
            </div>
          );
    }
  
}




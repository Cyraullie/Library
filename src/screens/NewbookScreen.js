
function NewBookScreen() {
  return (
    <div className='Page'>
        <form className="bookAddArea">
            <div className="bookAddAreaImage">
                <label htmlFor="files" className="bookAddImage">Select Image</label>
                <input id="files" className="hidden" type="file" />
            </div>
            <div className="bookAddAreaText">
                <div className="bookAddTextData">
                    <input type="text" className="bookInput data" placeholder="Title"></input>
                    <input type="text" className="bookInput" placeholder="Volume"></input>
                </div>
                <div className="bookAddTextData">
                    <input type="text" className="bookInput data" placeholder="Writer"></input>
                    <input type="text" className="bookInput" placeholder="Editor"></input>
                </div>
                    <input type="text" className="bookInput" placeholder="Owner"></input>

                
                
                <label>Resume</label>
                <input type="text"className="bookInput resume"></input>
            
                <input type="submit" className="bookButton"></input>
            </div>
        </form>
    </div>
  );
}

export default NewBookScreen;



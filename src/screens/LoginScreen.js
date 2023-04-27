


function LoginScreen() {
    return (
        <div className='Page'>
            <div className="container">
                <div id="login">
                    <div>
                        <input type="text" className="bookInput data" placeholder="Pseudo"></input>
                        <input type="password" className="bookInput" placeholder="Mot de passe"></input>
                        <input type="submit" className="lbBtn" value="Connexion"></input>
                    </div>
                </div>
                <div id="register">
                    <div>
                        <div className="registerData">
                            <input type="text" className="bookInput" placeholder="Nom"></input>
                            <input type="text" className="bookInput" placeholder="Prénom"></input>
                        </div>
                        <div className="registerData">
                            <input type="text" className="bookInput" placeholder="Pseudo"></input>
                            <input type="text" className="bookInput" placeholder="Mail"></input>
                        </div>
                        <div>
                            <input type="text" className="bookInput" placeholder="Téléphone"></input>
                        </div>
                        <div className="registerData">
                            <input type="password" className="bookInput" placeholder="Mot de passe"></input>
                            <input type="password" className="bookInput" placeholder="confirmation"></input>
                        </div>
                        <input type="submit" className="lbBtn" value="Inscription"></input>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
  
  export default LoginScreen;
  
  
  
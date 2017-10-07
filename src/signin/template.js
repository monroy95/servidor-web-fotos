var yo = require('yo-yo');
var landing = require('../landing');

var signinForm = yo `<div class="col s12 m7">
<div class="row">
    <div class="signup-box">
        <h1 class="platzigram">Platzigram</h1>
        <form class="signup-form">
        
            <div class="section">
                <a class="btn btn-fb hide-on-small-only">Iniciar Sesion con Facebook</a>
                <a class="btn btn-fb hide-on-med-and-up">Iniciar Sesion</a>
                <div class="divider">

                </div>
                <div class="section">
                    <input type="text" name="username" placeholder="Nombre Usuario">
                    <input type="password" name="password" placeholder="Contraseña">
                    <button class="btn waves-effect waves-light btn-signup" type="submit">Iniciar Sesion</button>
                </div>
            </div>
        </form>
    </div>
</div>
<div class="row">
    <div class="login-box">
        ¿No Tienes Una Cuenta? <a href="/signup">Registrar</a>
    </div>
</div>
</div`;

module.exports = landing(signinForm);
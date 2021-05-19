import React  from 'react';
import './start.scss';

const SignUp = () =>{
    return(
        <div className="sing-container">
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                            <i class="fas fa-user prefix"></i>
                            <input id="icon_prefix" type="text" class="validate"/>
                            <label for="icon_prefix">First Name</label>
                        </div>
                        <div class="input-field col s6">
                            <i class="fas fa-mobile-alt prefix"></i>
                            <input id="icon_telephone" type="tel" class="validate"/>
                            <label for="icon_telephone">Telephone</label>
                        </div>
                    </div>
                </form>
                <button>SIGN UP</button>
            </div>
        </div>
    )
}



export default SignUp;
import React  from 'react';
import './profile.scss';
const Profile = () =>{

    return(
            <div className="profile-container">   
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"></link>            
                <div className="container-profile">
                    <div className="profile-content"> 
                        <div className="icons"> 
                            <i class="fas fa-cog fa-3x"></i>
                        </div>
                        <div className="row">
                            <div className="col m8 s12 white row">                                                           
                                <div className=" col m4 s8  profile-items space-between">
                                <i class="fas fa-user"></i>
                                <span><b>BATTSETSEG</b></span>
                                </div>
                                <div className=" col m4 s8  profile-items space-between">
                                <i class="fas fa-calendar-alt"></i>
                                <span>Birthday</span>
                                </div>
                                <div className=" col m4 s8  profile-items space-between">
                                <i class="fas fa-mobile-alt"></i>
                                <span>5000-5000</span>
                                </div>
                                <div className=" col m4 s8  profile-items space-between">
                                <i class="far fa-envelope"></i>
                                <span>test@test.com</span>
                                </div>
                                <div className="col m4 s8  profile-items space-between">
                                <i class="fas fa-eye"></i>
                                <span>Passpord</span>
                                </div>
                                <div className="col m11 s12 profile-edit-name">
                                <i class="fas fa-pen"></i>
                                <span>SAVE PROFILE</span>
                                </div>
                            </div>
                            <div className="col m3 s12 profile-input-picture"> 
                                <div className="camera-icon">
                                    <i class="fas fa-camera fa-2x"></i>
                                </div>
                            </div>
                        </div>
                        <div className="row"> 
                            <div className="profile-icons">
                                <button className="message-icon"><i className="fas fa-comment-dots fa-3x" ></i></button>
                                <button className="world-icon"><i className="fas fa-globe-americas fa-3x" ></i></button>
                                <button className="profile-icon"><i className="fas fa-user fa-3x" ></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
    )
}


export default Profile;
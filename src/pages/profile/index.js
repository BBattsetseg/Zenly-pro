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
                            <div className="col m8 white row"> 
                                <div className="col m11 profile-name">
                                    <h4><b>Battsetseg</b></h4>
                                </div>
                                <div className="col m11  profile-edit-name">
                                <i class="fas fa-pen"></i>
                                <span>SET USERNAME</span>
                                </div>
                            </div>
                            <div className="col m3 profile-input-picture"> 
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
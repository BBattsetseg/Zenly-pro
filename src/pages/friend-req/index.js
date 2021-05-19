import React  from 'react';
import './friend.scss';


const FriendRequest = () =>{

    return(
            <div className="friend-container">   
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"></link>            
                <div className="container-friend">
                   <div className="row">
                       <div className="col m6">
                           <h3 className="indigo-text text-darken-4"><b>FRIENDS</b></h3>
                       </div>
                       <div className="col m6">
                           <button className="btn-small pink">+ ADD FRIENDS</button>
                       </div>

                   </div>
                   <nav className="container grey">
                        <div class="nav-wrapper">
                        <form>
                            <div class="input-field  grey">
                            <input id="search" type="search" required/>
                            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                            <i class="material-icons">close</i>
                            </div>
                        </form>
                        </div>
                    </nav>
                    <div className="row container">
                         <h5 className=" left grey-text">
                            YOU MIGHT KHOW THEM
                        </h5>
                    </div>
                    <ul class="collection container">
                        <li class="collection-item avatar">
                            <img src="https://images.unsplash.com/photo-1621293051751-6514b7f9515d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2076&q=80" alt="" class="circle"/>
                            <span class="title">Title</span>
                            <p>First Line 
                            </p>
                            <a href="#!" class="secondary-content">
                            <i class="fas fa-user-plus fa-2x pink-text"></i>
                            </a>
                        </li>
                        <li class="collection-item avatar">
                            <img src="https://images.unsplash.com/photo-1621293051751-6514b7f9515d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2076&q=80" alt="" class="circle"/>
                            <span class="title">Title</span>
                            <p>First Line 
                            </p>
                            <a href="#!" class="secondary-content">
                            <i class="fas fa-user-plus fa-2x pink-text"></i>
                            </a>
                        </li>
                        <li class="collection-item avatar">
                            <img src="https://images.unsplash.com/photo-1621293051751-6514b7f9515d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2076&q=80" alt="" class="circle"/>
                            <span class="title">Title</span>
                            <p>First Line 
                            </p>
                            <a href="#!" class="secondary-content">
                            <i class="fas fa-user-plus fa-2x pink-text"></i>
                            </a>
                        </li>
                        <li class="collection-item avatar">
                            <img src="https://images.unsplash.com/photo-1621293051751-6514b7f9515d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2076&q=80" alt="" class="circle"/>
                            <span class="title">Title</span>
                            <p>First Line 
                            </p>
                            <a href="#!" class="secondary-content">
                            <i class="fas fa-user-plus fa-2x pink-text"></i>
                            </a>
                        </li>                     
                        <li class="collection-item avatar">
                            <img src="https://images.unsplash.com/photo-1621293051751-6514b7f9515d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2076&q=80" alt="" class="circle"/>
                            <span class="title">Title</span>
                            <p>First Line 
                            </p>
                            <a href="#!" class="secondary-content">
                            <i class="fas fa-user-plus fa-2x pink-text"></i>
                            </a>
                        </li>                     
                        <li class="collection-item avatar">
                            <img src="https://images.unsplash.com/photo-1621293051751-6514b7f9515d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2076&q=80" alt="" class="circle"/>
                            <span class="title">Title</span>
                            <p>First Line 
                            </p>
                            <a href="#!" class="secondary-content">
                            <i class="fas fa-user-plus fa-2x pink-text"></i>
                            </a>
                        </li>                     
                    </ul>
                </div>
            </div>    
    )
}


export default FriendRequest;
import React, { Component } from 'react';
import axios from 'axios';
import '../../styles/Main.css';
import kakaoLogo from '../../images/kakaoLogo.PNG'


class Main extends Component
{    
    constructor(props)
    {
        super(props);
        this.state = {
           
            id :''
            , password : ''
        }
    }   

    handleClick = () => {
        console.log(this.state.id); 
        console.log(this.state);
        axios.post('http://3.35.140.126:9000/user/login', 
            this.state
          )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }
    
    render(){
        return (
            <>
            <div id="wrap">
                <div id="main">
                    <div>
                        <img src={kakaoLogo}/>
                    </div>
                    <div id = "login">
                        <div id = "login_input">
                            <input 
                                type="text" 
                                value={this.state.id}
                                onChange={this.handleChange}
                                name = "id"
                                placeholder="카카오계정"
                            />
                            <input 
                                type="password" 
                                value={this.state.passwrod}
                                onChange={this.handleChange} 
                                name = "password"
                                placeholder="비밀번호"
                            />
                        </div>
                        <div id = "login_button">
                            <button onClick = {this.handleClick}><p>로그인</p></button>
                        </div>
                        <div id="login_auto">
                            <input type="checkbox"/> <p>자동로그인</p>
                        </div>
                    </div>
                </div>
            </div>
            </>
          );
    }
}


// const Main = () => {

//     handleClick = () => {
//         console.log("Click");
//     }

//   return (
//     <>
//     <div id="wrap">
//         <div id="main">
//             <div>
//                 <img src={kakaoLogo}/>
//             </div>
//             <div id = "login">
//                 <div id = "login_input">
//                     <input type="text" placeholder="카카오계정"/>
//                     <input type="password" placeholder="비밀번호"/>
//                 </div>
//                 <div id = "login_button">
//                     <button onClick = {this.handleClick}><p>로그인</p></button>
//                 </div>
//                 <div id="login_auto">
//                     <input type="checkbox"/> <p>자동로그인</p>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </>
//   );
// };

export default Main;

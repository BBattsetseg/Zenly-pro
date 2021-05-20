import React, {useState, useRef, UseEffect, useEffect} from 'react';
import firebase, {firestore, auth} from './index';

function Fb(){
    const [input, setInput] = useState('');
    const [confirmCode, setConfirmCode] = useState('');
    const [sentCode, setSentCode]=useState(false);
    const [loading, setLoading] = useState(false);
    const recapcha = useRef();



useEffect(()=>{
    auth.languageCode ='mn';
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(recapcha.current);
}, []);

const sendConfirmCode = async ()=>{
    setLoading(true);
    const appVerifier = window.recaptchaVerifier;
    try {
        window.confirmationResult = await auth.signInWithPhoneNumber(`+976 ${input}`,appVerifier);
        setSentCode(true);

    } catch(e) {
        console.log('aldaa')
    }
}

const sendCode = async ()=>{
    try {
        let result = await auth.signInWithPhoneNumber(input,window.recaptchaVerifier);
        console.log(result)
    } catch(e){
        console.log('aldaa')
    }
}

const login = async ()=>{
    try {
        let user = await window.confirmationResult.confirm(confirmCode);
        console.log(user)
    } catch (error){
        alert('kod buruu')
    }
}

return (
    <div className="App">
        <input
            value={input}
            onChange={(event)=>setInput(event.target.value)}
            placeholder="utasnii dugaar"/>
        <div ref = {recapcha}></div>
        <button onClick={sendCode}>urgeljluuleh</button>

     
        {
            !sentCode && <button onClick={sendConfirmCode} >urgeljluuleh </button>
        }
        {
            sentCode&& (
                <>
                <input
                value={confirmCode}
                onChange={(event)=> setConfirmCode(event.target.value)}
                placeholder="batalgaajuulah code"/>
               <button onClick={login}> nevtreh</button>
                </>
            )
        }       
    </div>
)
}


    export default Fb;
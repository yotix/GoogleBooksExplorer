import React from 'react';
import ReactDOM from 'react-dom';
import Global from './components/global';
ReactDOM.render(
    <Global/>,document.getElementById("root")
);

// ES6 private methods
// const budget = () =>{
//     let balance=0;
//     let changeBal = (val)=>{
//         return balance+=val;
//     }
//     const deposit20=()=>changeBal(20);
//     const check= ()=>balance;
//     const withdraw20=()=>changeBal(-20);
//     return {
//         deposit20,check,withdraw20
//     }
// }

// let wallet = budget();
// wallet.deposit20()
// wallet.withdraw20();
// wallet.deposit20()
// wallet.deposit20()
// console.log(wallet.check());
// console.log(wallet.balance);

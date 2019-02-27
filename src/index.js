// 1、正常模式
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux'
import {counter, addGun, removeGun, addGunAsysc} from './index.redux'
import thunk from 'redux-thunk';
const store = createStore(counter, applyMiddleware(thunk))

function render(){
  ReactDOM.render(<App store={store} addGun={addGun} removeGun={removeGun} addGunAsysc={addGunAsysc}/>, document.getElementById('root'));
}
render()
store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


// // 2、练习redux
// import {createStore} from 'redux'
// // 1、新建store
// // 2、通过reducer建立
// // 3、根据老state和action 生成新的state
// function counter(state=0,action){
//   switch(action.type){
//     case '加机关枪':
//       return state + 1;
//     case '减机关枪':
//       return state - 1;
//     default:
//     return 10
//   }
// }

// // (1) 新建store
// const store = createStore(counter)

// const init = store.getState()
// console.log(init)

// function listener(){
//   const current = store.getState()
//   console.log(`现在有机关枪${current}把`)
// }
// store.subscribe(listener)
// // 派发事件 传递action
// store.dispatch({type:'加机关枪'})


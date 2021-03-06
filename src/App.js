import React from 'react'
import {connect} from 'react-redux'
import {addGun,removeGun,addGunAsysc} from './index.redux'
// import {Button,List} from 'antd-mobile'
// // 1、react组件的练习
// class App extends React.Component{
//   render(){
//     const boss = '李云龙'
//     return (
//       <div>
//         <h2>独立团，团长{boss}</h2>
//         <一营 老大="张大彪"></一营>
//         <骑兵连 老大="孙德胜">></骑兵连>
//       </div>
//     )
    
//   }
// }

// function 骑兵连(props){
//   return <h2>骑兵连连长{props.老大},冲啊！</h2>
// }

// class 一营 extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       solders:['虎子','柱子','王根生']
//     }
//     // bind this
//     // this.addSolder = this.addSolder.bind(this)
//   }
//   componentWillMount(){
//     console.log('组件马上就要加载了')
//   }
//   componentDidMount(){
//     console.log('组件加载完毕')
//   }
//   addSolder(){
//     console.log('hello add solder!')
//     this.setState({
//       solders:[...this.state.solders, '新兵蛋子' + Math.random()]
//     })
//   }
//   render(){
//     console.log('组件正在加载')
//     return (
//       <div>
//         <h2>一营，营长{this.props.老大}</h2>
//         <Button type="primary" onClick={()=> this.addSolder()}>新兵入伍</Button>
//         <List renderHeader = {() => '士兵列表'} >
//           {this.state.solders.map(v=>{
//             return (
//               <List.Item key={v}>
//                 {v}
//               </List.Item>
//             )
//           })}
//         </List>

//         {/* <ul>
//           {this.state.solders.map(v =>{
//             return <li key={v}>{v}</li>
//           })}
//         </ul> */}
//       </div>
//     )
//   }
// }

// 2、redux的练习
class App extends React.Component{
  render(){
    return (
      <div>
        <h1>现在有机枪{this.props.num}把</h1>
        <button onClick={this.props.addGun}>申请武器</button>
        <button onClick={this.props.removeGun}>上交武器</button>
        <button onClick={this.props.addGunAsysc}>拖两天在给</button>
      </div>
    )
  }
}
const mapStatetoProps = (state)=>{
  return {num: state}
}
const actionCreators = {addGun,removeGun,addGunAsysc} 
App = connect(mapStatetoProps,actionCreators)(App)
export default App
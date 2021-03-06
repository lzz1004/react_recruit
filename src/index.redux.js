const ADD_GUN = '加机关枪'
const REMOVE_GUN = '减机关枪'

// render
export function counter(state=0,action){
  switch(action.type){
    case ADD_GUN:
      return state + 1;
    case REMOVE_GUN:
      return state - 1;
    default:
    return 10
  }
}
// action creater
export function addGun(){
  return {type: ADD_GUN}
}
export function removeGun(){
  return {type: REMOVE_GUN}
}

// action creater 异步
export function addGunAsysc(){
  return dispatch =>{
    setTimeout(()=> {
      dispatch(addGun())
    },2000)
  }
}


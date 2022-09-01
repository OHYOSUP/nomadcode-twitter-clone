import {createStore} from 'redux';

let initState = {
    mode : 'read',
    welcome_content:{
        title: 'WEB',
        desc: 'Hello, WEB'
    },
    selected_content_id: 1,
    contents: [
        {id:1, title: 'HTML', desc: 'HTML is...'},
        {id:2, title: 'CSS', desc: 'CSS is...'},
        {id:3, title: 'Javascript', desc: 'Javscript is...'}


    ]
}
function reducer (state = initState, action){
    if(action.type === 'WELCOME'){
        return {...state, mode:action.mode}
        //...state는 state의 값을 복사하고
        //복제된 state의 값을 두 번째 오는 mode:action.mode의 값으로 대체한다
    } else if(action.type === 'READ'){
        return{...state, mode:'READ',selected_content_id :action.id}
    }
    return state;
}


export default createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
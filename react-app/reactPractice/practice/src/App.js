import './App.css';
import Article from './component/Article';
import Header from './component/Header';
import Nav from './component/Nav';
import {useState} from 'react'
import Create from './component/Create';
import Update from './component/Update'


function App() {

const [mode, setMode] = useState('WELCOME');
const [id, setId] = useState(null);
const [nextId, setNextId] = useState(4);
const [topics, setTopics] = useState([
  {id: 1, title: 'html', body: "html is"},
  {id: 2, title: 'css', body: "css is"},
  {id: 3, title: 'js', body: "js is"}
])


let content = null;
let contextControl = null;
if(mode === 'WELCOME'){
content = <Article title= 'Welcome' body = 'Welcome, joseph'></Article>

}else if(mode === 'READ'){
  let title, body = null;
  for(let i = 0; i<topics.length; i++){
    // console.log(topics[i].id, id)
    if(topics[i].id === id){
      title = topics[i].title;
      body = topics[i].body;
    }
  }
  content = <Article title= {title} body = {body}></Article>
  
  contextControl = <li><a href = {'/update/' +id} onClick = {event=>{
    event.preventDefault()
    setMode('UPDATE');
  }}>Update</a></li>
  
} else if (mode === 'CREATE'){
  
  content = <Create onCreate = {(_title, _body)=>{
    const newTopic = {id: nextId, title:_title, body : _body}
    const newTopics = [...topics]
    newTopics.push(newTopic)
    setTopics(newTopics);
    setMode('READ');
    setId(nextId);
    setNextId(nextId+1);
  }}></Create>

} else if(mode === 'UPDATE'){
  let title, body = null;
  for(let i = 0; i<topics.length; i++){
    // console.log(topics[i].id, id)
    if(topics[i].id === id){
      title = topics[i].title;
      body = topics[i].body;
    }
  }
  content = <Update title={title} body={body} onUpdate = {(title, body)=>{
    // console.log(title,body);
    const updatedTopic = { id: id, title:title, body,body}
    const newTopics = [...topics]
    for(let i = 0; i<newTopics.length; i++){
      if(newTopics[i].id === id){
        newTopics[i] = updatedTopic;
        break;
      }
    }
    setTopics(newTopics);
  }}></Update>


}


  return (
    <div className="App">
     <Header title = 'REACT' onChangeMode = {()=>{
      setMode('WELCOME')
     }}></Header>

     <Nav topics = {topics} onChangeMode = {(_id)=>{
    setMode('READ')
    setId(_id)
     }}></Nav>

     <Article ></Article>
     {content}
     <ul>
     <li><a href = '/create' onClick={event =>{
      event.preventDefault();
      setMode('CREATE')
     }}>Create</a></li>
     {contextControl}
     </ul>
    </div>
  );
}

export default App;
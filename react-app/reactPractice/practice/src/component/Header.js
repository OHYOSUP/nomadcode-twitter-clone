import "./Header.css"


export default function Header(props){


  return <>
    <header>
      <h1><a href= '/' onClick={function(e){
        e.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
  </>
}
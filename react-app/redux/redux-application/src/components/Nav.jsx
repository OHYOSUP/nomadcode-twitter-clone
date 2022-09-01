import React, { Component } from "react";

class Nav extends Component {
  render() {
    let tags = [];
    for(let i = 0; i< this.props.data.length; i++){
      let d = this.props.data[i];
              tags.push(<li key = {d.id}><a  data-id={d.id} onClick={function(e){
                
                this.props.onClick(e.target.dataset.id)
              }.bind(this)} href="#">{d.title}</a></li>)
              
    }
    return (
      <div>
        <nav>
          <ol>
            {tags}  
          </ol>
        </nav>
      </div>
    );
  }
}

export default Nav;

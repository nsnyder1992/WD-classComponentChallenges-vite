import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
     display: []
   }
  }

  componentDidMount(){
    this.setState({
      display: this.state.things
    })
  }

 searchFunction(e) {
   let newArray = [];
  for (let item of this.state.things){
    if (item.includes(e.target.value)) {
      newArray.push(item)
    }
  }

  this.setState({display: newArray})
 }

 render() {
  return(
    <div>
       <Input placeholder='Search Here' onChange={e => this.searchFunction(e)} />
       <h3>Results:</h3>
       {this.state.display.map((item, key) => {
         return <p key={key}>{item}</p>
       })}
     </div>
  )
     
  }
 }
 
export default SearchIndex;
import React, {Component} from 'react';
import {Button} from 'reactstrap';

export default class ToDoItem extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div style={{margin: 5}}>
                <h6>{this.props.value.name}</h6>
                {this.props.value.isDone ? <p style={{color: 'green'}}>Done!</p> : <Button onClick={e => this.props.updateToDo(e, this.props.index, true)}>Done</Button>}
                <hr/>
            </div>
            
        )
    }
} 
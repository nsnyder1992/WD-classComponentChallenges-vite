import React, {Component} from 'react';
import {Input, Button} from 'reactstrap';

import ToDoItem from './ToDoItem';

export default class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            toDos : {},
            name: '',
            counter: 0,
        }

        this.addToDo = this.addToDo.bind(this);
        this.updateToDo = this.updateToDo.bind(this);
    }

    handleChange (e) {
        this.setState({
            name: e.target.value
        })
    }

    addToDo (e) {
        e.preventDefault();
        let tempToDos = this.state.toDos;

        tempToDos[this.state.counter] = {
            name: this.state.name,
            isDone: false,
        }

        this.setState({
            toDos : tempToDos,
            name: '',
            counter: this.state.counter + 1,
        })
    }

    updateToDo(e, index, isDone){

        let tempToDos = this.state.toDos;
        console.log(tempToDos, index);
        
        tempToDos[index].isDone = isDone;
console.log(tempToDos)
        this.setState({
            toDos: tempToDos
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.addToDo(e)} >
                    <Input placeholder='Search Here' onChange={e => this.handleChange(e)}/>
                    <Button type="submit">Add To Do</Button>
                </form>
                {Object.keys(this.state.toDos).map((key) => {
                    return <ToDoItem key={key} index={key} value={this.state.toDos[key]} updateToDo={this.updateToDo}/>
                })}
            </div>
        )
    }


}
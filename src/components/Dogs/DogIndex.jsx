import React, { Component } from 'react';

export default class DogIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogImage: '',
            error: '',
        }
        this.getImage = this.getImage.bind(this);
    }

    componentDidMount() {
        this.getImage();
    }

    getImage() {
        this.setState({error: ''})
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(json => {
                console.log(json)
                this.setState({dogImage: json.message})
            })
            .catch(err => {
                console.log(err);
                this.setState({error: 'Something went wrong :('})
            })
    }

    render() {
        return (
            <div>
                <img src={this.state.dogImage} alt="..."/>
                <button onClick={this.getImage}>Get Another Image!</button>
                {this.state.error ? <p>{this.state.error}</p> : null}
            </div>
        )
    }
} 
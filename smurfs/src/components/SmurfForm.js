import React from 'react';

class SmurfForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: ''
            
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
       e.preventDefault();
       this.props.addSmurf(this.state)

       this.setState({
            name: '',
            age: '',
            height: ''
       })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="name" value={this.state.name}
                    onChange={this.handleChange} placeholder="name"/>
                    <input name="age" value={this.state.age}
                    onChange={this.handleChange} placeholder="age"/>
                    <input name="height" value={this.state.height}
                    onChange={this.handleChange} placeholder="height"/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default SmurfForm;
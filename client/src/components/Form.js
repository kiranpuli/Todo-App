import React, { Component } from 'react'
import { addItems } from '../actions/itemActions'
import { connect } from 'react-redux'

export class Form extends Component {
    handleSubmit=(e)=>{
        e.preventDefault()
        const item={
            name:e.target.name.value
        }
        this.props.addItems(item)
        this.props.history.push("/")
    }
    
    render() {
        return (
            <form className="container text-center p-5 shadow" onSubmit={this.handleSubmit}>
                <h1>Add new Item</h1>
                <input type="text" name="name"className="form-control" required placeholder="Item"/>
                <br/>
                <input type="submit" className="btn btn-success"/>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
	return {
        addItems: item => {
			dispatch(addItems(item));
        }
	};
};

export default connect(null,mapDispatchToProps)(Form)

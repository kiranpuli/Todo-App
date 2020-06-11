import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getItems,addItems,delItems } from '../actions/itemActions'

export class List extends Component {
    componentDidMount(){
        this.props.getItems()
    }
    handleDel(id){
        this.props.delItems(id)
        this.props.history.push("/")
    }
    render() {
        const allItems = this.props.items.items.map((i)=>{
            const id=i._id
            return(
            <li className="list-group-item lead" key={id}>
            <span className="btn btn-sm btn-danger mr-3" onClick={this.handleDel.bind(this,id)}>&times;</span>   {i.name}
            </li>
            )
        })
        return (
            
            <div className="container mt-5">
                <ul className="list-group">
                    {allItems}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
	return {
		items: state.items
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getItems: () => {
			dispatch(getItems());
        },
        addItems: item => {
			dispatch(addItems(item));
        },
        delItems: id => {
			dispatch(delItems(id));
		}
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(List)

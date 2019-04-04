import React, {Component} from 'react'

class EditAndCreate extends Component {
    
    render() {
        return(
            <div className="navBar">
            <button className="preview" onClick={this.props.previous}>Previous</button>
            <button className="edit" onClick={this.props.editEmployee}>Edit</button>
            <button className="delete" onClick={this.props.deleteUser}>Delete</button>
            <button className="New" onClick={this.props.newEmployee}>New</button>
            <button className="Next" onClick={this.props.next}>Next</button>
            </div>
        )
    }
}
export default EditAndCreate
import React, {Component} from 'react'

class NewEmployee extends Component {
   
    

    render() {
        return(
            <div className="newForm">
            <input className='FirstName' placeholder='First Name'type="text" onChange={(e) => this.props.handleInput(e.target.value,'userFirstName')}></input>
            <input className='LastName' placeholder='Last Name'type="text" onChange={(e) => this.props.handleInput(e.target.value,'userLastName')}></input>
            <input className='City' placeholder='City'type="text" onChange={(e) => this.props.handleInput(e.target.value,'userCity')}></input>
            <input className='Country' placeholder='Country'type="text" onChange={(e) => this.props.handleInput(e.target.value,'userCountry')}></input>
            <input type="text" placeholder='Job Title' className="JobTitle" onChange={(e) => this.props.handleInput(e.target.value,'userTitle')}></input>
            <input type="text" placeholder='Company' className="company" onChange={(e) => this.props.handleInput(e.target.value,'userCompany')}></input>
            <input type="text" placeholder='Favorite Movies'className="Movies" onChange={(e) => this.props.handleInput(e.target.value,'userMovies')}></input>
            </div>
        )
    }
}
export default NewEmployee
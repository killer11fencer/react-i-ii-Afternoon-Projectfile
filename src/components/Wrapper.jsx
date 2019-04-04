import React, {Component} from 'react'
import EditAndCreate from './EditAndCreate'
import DisplayInformation from './DisplayInformation'
import data from '../data'
import NewEmployee from './NewEmployee'

class Wrapper extends Component {
    constructor() {
        super();
        this.state = {
            employees: [...data],
            index: 0,
            userFirstName:'',
            userLastName:'',
            userCity:'',
            userCountry:'',
            userTitle: '',
            userCompany:'',
            userMovie:'',
           
        }
    }
    next = () => {
        if(this.state.index  < this.state.employees.length - 1) {
        this.setState({index: this.state.index + 1})
    }}
    previous = () => {
        if(this.state.index > 0) {
        this.setState({index: this.state.index - 1})
    }}
    
    handleInput = (val,field) => {
        this.setState({[field]: val})
    }
    newEmployee = ()=> {
        let newEmp = {
        id: this.state.employees.length + 1,
        name:{first: this.state.userFirstName,
        last: this.state.userLastName},
        city: this.state.userCity,
        country:this.state.userCountry,
        employer:this.state.userCompany,
        title:this.state.userTitle,
        favoriteMovies: [this.state.userMovie]};
        this.setState({employees:[...this.state.employees,newEmp],
                     index: this.state.employees.length 
                    })
    }
    // editEmployee = () => {
    //     let editEmp = {
    //         name:{first: this.state.userFirstName,
    //         last: this.state.userLastName},
    //         city: this.state.userCity,
    //         country:this.state.userCountry,
    //         employer:this.state.userCompany,
    //         title:this.state.userTitle,
    //         favoriteMovies: [this.state.userMovie]};
    //     let updatedUser = [editEmp];
    //     let updatedArray = this.state.employees.slice();
    //     updatedArray.splice(this.state.index,1,updatedUser)
    //         this.setState({employees: updatedArray
                         
    //                     })

    // }
    deleteUser = () => {
        let updatedArray = this.state.employees.slice()
        updatedArray.splice(this.state.index,1)
        this.setState({employees: updatedArray, index: 0,})
    }
   
    render () {
        let next = this.next;
        let previous = this.previous;
        let handleInput= this.handleInput;
        let newEmployee = this.newEmployee;
        let deleteUser = this.deleteUser;
        let editEmployee = this.editEmployee;
        return (
            <div className="wrapper">
            
            <span className="navDisplay"> {this.state.index + 1} / {this.state.employees.length}</span>
            <DisplayInformation index={this.state.index} array={this.state.employees}/>
            
            <div className="navbar">
            <EditAndCreate next={next} previous={previous} editEmployee={editEmployee} deleteUser={deleteUser} newEmployee={newEmployee}/>
            <NewEmployee handleInput={handleInput}/>
            </div>
            </div>
        )
    }
}
export default Wrapper
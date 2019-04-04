import React, { Component } from 'react'

class DisplayInformation extends Component {
    render() {
        
        let display = this.props.array.map((elem, index) => {
           
            return  <div className="Display">
                <h2 className="name" key={index}>{`${elem.name.first} ${elem.name.last}`}</h2>
                <div className="from">From: {`${elem.city}, ${elem.country}`}</div>
                <div className='title'>Job Title: {elem.title}</div>
                <div className='Company'>Company: {elem.employer}</div>
                <ol className='Movies'>Favorite Movies: {       
                elem.favoriteMovies.map((elem,index)=>{
                    return <li key={index}>{elem}</li>})    
                }
                
                </ol>
            </div>
        })

        return (
            <div>{display[this.props.index]}</div>
        )
    }
}
export default DisplayInformation
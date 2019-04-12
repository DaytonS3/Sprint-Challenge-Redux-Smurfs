import React from 'react';
import './App.css';

class Smurfs extends React.Component {





    render(){
        return(
            <div className="SmurfsContainer">
            
                {this.props.smurfs.map(smurf => {
                    console.log(this.props)
                    return (
                        <div key={smurf.name} className="smurfs" >
                       <i onClick={() => this.props.delete(smurf.id)} className="fas fa-ban" ></i>
                         <h1>{smurf.name}</h1>
                         <h2>{smurf.age}</h2>
                         <h2>{smurf.height}</h2>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Smurfs;
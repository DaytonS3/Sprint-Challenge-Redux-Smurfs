import React from 'react';

class Smurfs extends React.Component {
    render(){
        console.log(this.props)
        return(
            <div className="SmurfsContainer">
            
                {this.props.smurfs.map(smurf => {
                    return (
                        <div className="smurfs">
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
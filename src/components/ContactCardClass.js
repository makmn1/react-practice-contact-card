import React from 'react';


export default class ConactCardClass extends React.Component {
    constructor(props) {
        super()
        this.name = props.name
        this.mobileNumber = props.mobileNumber
        this.workNumber = props.workNumber
        this.email = props.email
    }

    render() {
        return (

            <div className="contactCard">
                <h2 style={{fontSize: "50px"}}>{this.name}</h2>
                <h2>Mobile <br /> {this.mobileNumber}</h2>
                {this.workNumber ? <h2>Work<br />{this.workNumber}</h2> :<h2>Work<br />CLASSIFIED</h2>}
                <h2>Email {this.email}</h2>

            </div>

        )
    }

}

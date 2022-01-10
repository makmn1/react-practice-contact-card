import React from 'react'

export default function ContactCardFunction(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <h2>Mobile: {props.mobileNumber}</h2>
            {props.workNumber ? <h2>Work: {props.workNumber}</h2> : <h2>Work: Classified</h2>}
            <h2>Email: {props.email}</h2>
        </div>
    )
}


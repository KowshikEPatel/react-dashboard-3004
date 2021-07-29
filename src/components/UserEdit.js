import React from 'react'

export default function UserEdit(props) {
    
    return (
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">User Edit {props.match.params.id}</h1>
        </div>
    )
}

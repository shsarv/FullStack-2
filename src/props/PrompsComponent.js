import React from 'react'

export default function PrompsComponent(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    )
}

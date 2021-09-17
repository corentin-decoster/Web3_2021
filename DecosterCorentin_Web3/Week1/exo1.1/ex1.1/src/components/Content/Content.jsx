import React from 'react'

const Content = (props) => {
    return (
        <div>
            <p>
                {props.part} {props.exercice}
            </p>
        </div>
    )
}

export default Content
import React from 'react'
import Link from 'next/link'
const getBG = props => ({backgroundImage: `url(${props.headerImage || null})`})
const LayoutCard = props => (
    <div className="layout-card" style={getBG(props)}>
        <div>
            <div className="flex-spacer"></div>
            <div className="card-metadata">
                <span>{new Array(Math.floor(props.price + 1)).join('$')} • {new Array(Math.floor(props.rating + 1)).join('*')} ({props.rating})</span>
                <h2>{props.name}</h2>
                <span>{props.location} • {props.type}</span>
            </div>
        </div>
    </div>
)

export default LayoutCard

import React from 'react'
import Link from 'next/link'
import LayoutCard from './layoutCard'

const CardSet = props => (
    <div className="card-set">
        {
            props.cards.map(a => <LayoutCard {...a} key={'Cardset' + a.name + a.type} />)
        }
    </div>
)

export default CardSet

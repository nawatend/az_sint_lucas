import React from 'react'
import { Link } from 'react-router-dom'
export default function PoleItem({ title, path }) {
    return (

        <div className="pole__item">
            <Link to={path}>
                <img src={`/svgs/home/${title}.svg`} alt={title} />
            </Link>
        </div>
    )
}

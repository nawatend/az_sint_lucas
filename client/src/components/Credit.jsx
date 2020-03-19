import React from 'react'

export default function Credit() {
    return (
        <div className="credit">
            <div className="credit__icon">
                <img src={`${process.env.PUBLIC_URL}/svgs/credit/credit_icon.svg`} alt="Credit Icon" />
            </div>
        </div>
    )
}

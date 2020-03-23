import React from 'react'

export default function Credit() {
    return (
        <div className="credit">
            <div className="credit__icon">
                <img src={`${process.env.PUBLIC_URL}/svgs/credit/credit_icon.svg`} alt="Credit Icon" />
                <div className="credit__detail">
                    <img src={`${process.env.PUBLIC_URL}/svgs/credit/credits.svg`} alt="Credit Detail" />
                </div>
            </div>

        </div>
    )
}

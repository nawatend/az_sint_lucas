import React, { useEffect, useState } from 'react';
import PersonLayout from '../../layouts/personBase';
import { useParams } from "react-router-dom";


const PersonDetailPage = ({ match }) => {

    let { person } = useParams()
    useEffect(() => {
        console.log(person)
    }, [match, person])

    return (
        <div className="page">
            Person Detail => {person}
            <div className="person__content">
                <div className="content__person">
                    <div className="person__image"></div>
                    <div className="person__title"></div>
                    <div className="person__text"></div>
                </div>
            </div>

        </div >
    )
}
export default PersonLayout(PersonDetailPage);
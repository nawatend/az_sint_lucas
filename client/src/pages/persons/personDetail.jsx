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

            <div className="person__content__detail">
                <div className="content__person__detail">
                    <div className="person__detail__image" style={{ backgroundImage: `url(/images/doctors/test2.jpg)` }}>
                    </div>
                    <div className="person__detail__text">
                        Person Detail => {person} Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Quam odio consectetur, distinctio illo quo architecto laboriosam a quas quaerat facilis minus
                         vitae labore. Ex maiores aperiam ducimus amet? Impedit, assumenda!
                            </div>
                    <div className="person__detail__title">ttt</div>

                    <div className="person__detail__mind">
                        <img src="/svgs/person/thinking.svg" alt="Thinking bubble" />
                        <div className="mind__terms">
                            <img src="/svgs/person/mind_terms.svg" alt="Thinking bubble main" />
                            <div className="mind__terms--text">
                                Text Text  Text Text  Text Text  Text Text   Text Text   Te Text Text   Text Text   Text Text   Text Text   Text Text  xt Text   Text Text   Text Text  Tex  Text Text  Text Text  Text Text  Text Text  Text Text  Text T ext  Text Text
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
export default PersonLayout(PersonDetailPage);
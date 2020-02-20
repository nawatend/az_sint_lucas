import React, { useEffect, useState } from 'react';
import PersonLayout from '../../layouts/personBase';
import { useParams } from "react-router-dom";
import TagCloud from 'react-tag-cloud'

const PersonDetailPage = ({ match }) => {


    let terms = ['lachen', 'hello', 'spannend', 'Noodle', 'opbsadsadeeun', 'kinding']
    let { person } = useParams()


    const [isLandscape, setIsLandscape] = useState(true)

    let checkScreen = (media) => {
        if (media.matches) {
            setIsLandscape(true)
        } else {
            setIsLandscape(false)
        }
    }

    useEffect(() => {
        let media = window.matchMedia("(orientation: landscape)")
        checkScreen(media)
        media.addListener(checkScreen)
    }, [isLandscape])

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
                        Quam  odio consectetur, distinctio illo quoodio consectetur, distinctio illo quo odio
                         consectetur, distinctio illo quoodio consectetur, distinctio illo quoodio consectetur,
                          distinctio illo quoodio consectetur, distinctio illo quo architecto laboriosam a quas
                           quaerat facilis minus

                            </div>
                    <div className="person__detail__title">Dokter Man</div>

                    <div className="person__detail__mind">
                        <img src="/svgs/person/thinking.svg" alt="Thinking bubble" />

                    </div>
                    <div className="mind__terms" >
                        <img src="/svgs/person/mind_terms.svg" alt="Thinking bubble main" />
                        <div className="mind__terms--text">
                            <TagCloud
                                style={{
                                    fontFamily: 'Laca',
                                    fontWeight: 'bold',

                                    color: 'ee7358',
                                    padding: 4,
                                    width: '100%',
                                    height: '100%'
                                }}>

                                {terms.map((term, i) => (
                                    <div key={terms + i} className={(i % 2 === 0) ? "cloud__word--l" : "cloud__word--s"}>{term}</div>
                                ))}

                            </TagCloud>
                        </div>
                    </div>
                </div>
            </div>
            {!isLandscape ? (<div className="rotate__device"><img src="/svgs/rotate_device2.svg" alt="" /></div>) : ""}
        </div >
    )
}
export default PersonLayout(PersonDetailPage);
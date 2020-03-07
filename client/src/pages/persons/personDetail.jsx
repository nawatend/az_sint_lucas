import React, { useEffect, useState } from 'react';
import PersonLayout from '../../layouts/personBase';
import { useParams } from "react-router-dom";
import TagCloud from 'react-tag-cloud'

import Loading from '../../components/Loading'

//firebase
import { db, storage } from '../../utils/firebase'


const PersonDetailPage = ({ match }) => {


    let terms = ['lachen', 'hello', 'spannend', 'Noodle', 'opbsadsadeeun', 'kinding']
    let { person, id } = useParams()

    let imagesNames = {
        fotodokter: "photo_doctor_image",
        kinderdokter: "kid_doctor_image",
        ziekenhuisclowns: "clown_image",
        slaapdokter: "sleep_doctor_image",
        verpleegkundige: "nurse_image",
        spelbegeleider: "game_leader_image",
        kiderpsycholoog: "kid_psychology_image"
    }


    const personRef = db.ref(`/who_is_who/${id}`)
    const personImageRef = storage.ref().child(`images/${imagesNames[person]}.jpg`)

    const [isLandscape, setIsLandscape] = useState(true)
    const [imageUrl, setImageUrl] = useState("")
    const [personInfo, setPersonInfo] = useState({
        'audio': "test.mp3",
        'description': "Geen Description",
        'id': 0,
        'image': "unnamed.jpg",
        'title': "testdokter",
    })
    const [loading, setLoading] = useState(true)

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


        const getPersonImage = async () => {
            personImageRef.getDownloadURL().then(function (url) {

                setImageUrl(url)

            }).catch(function (error) {
                // Handle any errors
            });
        }

        const getPersonsInfo = () => {
            personRef.once('value', (snapshots) => {

                let data = snapshots.val()
                return data
            }).then((data) => {
                setPersonInfo(data.val())
                setLoading(false)
            });
        }




        if (loading) {
            getPersonImage().then(() => {
                getPersonsInfo()
            })

        }


    }, [loading, personImageRef, personRef])

    useEffect(() => {
        console.log(person)
    }, [match, person])


    if (loading) {
        return (<Loading />)
    } else {
        return (
            <div className="page">

                <div className="person__content__detail">
                    <div className="content__person__detail">
                        <div className="person__detail__image" style={{ backgroundImage: `url(${imageUrl})` }}>
                        </div>
                        <div className="person__detail__text">
                            {personInfo.description}
                        </div>
                        <div className="person__detail__title">{person}</div>

                        <div className="person__detail__mind">
                            <img src={`${process.env.PUBLIC_URL}/svgs/person/thinking.svg`} alt="Thinking bubble" />

                        </div>
                        <div className="mind__terms" >
                            <img src={`${process.env.PUBLIC_URL}/svgs/person/mind_terms.svg`} alt="Thinking bubble main" />
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
                {!isLandscape ? (<div className="rotate__device"><img src={`${process.env.PUBLIC_URL}/svgs/rotate_device2.svg`} alt="" /></div>) : ""}
            </div >
        )
    }
}
export default PersonLayout(PersonDetailPage);
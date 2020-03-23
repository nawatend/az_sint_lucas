import React, { useEffect, useState } from 'react';
import PersonLayout from '../../layouts/personBase';
import { useParams } from "react-router-dom";
import TagCloud from 'react-tag-cloud'

import Loading from '../../components/Loading'

//firebase
import { db, storage } from '../../utils/firebase'


const PersonDetailPage = ({ match }) => {

    let { person, id } = useParams()

    //key based on url params, value is based on filename in firebase
    let imagesFileName = {
        fotodokter: "photo_doctor_image",
        kinderdokter: "kid_doctor_image",
        ziekenhuisclowns: "clown_image",
        slaapdokter: "sleep_doctor_image",
        verpleegkundige: "nurse_image",
        spelbegeleider: "game_leader_image",
        kinderpsycholoog: "kid_psychology_image"
    }

    const personRef = db.ref(`/who_is_who/${id}`)
    const personImageRef = storage.ref().child(`images/persons/${imagesFileName[person]}.jpg`)
    const [isLandscape, setIsLandscape] = useState(true)
    const [imageUrl, setImageUrl] = useState("")
    const [personInfo, setPersonInfo] = useState({
        'audio': "test4.mp3",
        'audio-tags': "test4.mp3",
        'description': "Geen Description",
        'id': 0,
        'image': "unnamed.jpg",
        'title': "testdokter",
        'tags': "tag1,tag2"
    })
    const [tags, setTags] = useState([])
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
                setTags(data.val().tags.split(','))
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

    let playSound = (e) => {

        let currentSound = document.getElementById(`audio__${e.target.dataset.audio}`)
        if (currentSound) {
            currentSound.play()
        }
    }


    if (loading) {
        return (<Loading />)
    } else {
        return (
            <div className="page">

                <div className="person__content__detail">
                    <div className="content__person__detail">
                        <audio id={`audio__${personInfo.audio}`}
                            autoPlay
                            src={`https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/audios%2F${personInfo.audio}?alt=media&token=19366607-6109-4d6c-9582-324b20c35627`}
                            type="audio/mpeg" >
                        </audio>

                        {/* audio for tags */}
                        <audio id={`audio__${personInfo["audio-tags"]}`}
                            src={`https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/audios%2F${personInfo["audio-tags"]}?alt=media&token=19366607-6109-4d6c-9582-324b20c35627`}
                            type="audio/mpeg" >
                        </audio>

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
                                    onMouseEnter={(e) => playSound(e)} onTouchStart={(e) => playSound(e)} data-audio={personInfo["audio-tags"]}
                                    style={{
                                        fontFamily: 'Laca',
                                        fontWeight: 'bold',

                                        color: 'ee7358',
                                        padding: 4,
                                        width: '100%',
                                        height: '100%'
                                    }}>

                                    {tags.map((tag, i) => (
                                        <div key={tags + i} className={(i % 2 === 0) ? "cloud__word--l" : "cloud__word--s"}>{tag}</div>
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
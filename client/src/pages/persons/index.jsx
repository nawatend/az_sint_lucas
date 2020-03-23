import React, { useEffect, useState } from 'react';
import NavigationDetail from '../../components/navigation/NavigationDetail'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading'
import { checkSound } from '../../utils/SoundControl'

//firebase
import { db } from '../../utils/firebase'

let PersonsPage = () => {

    let audios = ["who"]
    let personsRef = db.ref('/who_is_who')
    let persons = []

    const [isLandscape, setIsLandscape] = useState(true)
    const [personsInfo, setPersonsInfo] = useState([])
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

        const getPersonsInfo = () => {
            personsRef.once('value', (snapshots) => {
                let data = snapshots.val()
                data.forEach(element => {
                    persons.push(element)
                })
            }).then(() => {
                setPersonsInfo(persons)
                setLoading(false)
            });
        }

        if (loading) {
            getPersonsInfo()
        }
    }, [loading, persons, personsRef])

    let playSound = (e) => {

        let currentSound = document.getElementById(`audio__${e.target.dataset.audio}`)
        if (currentSound && localStorage.getItem("sound") === 'true') {
            currentSound.play()
        }
    }

    useEffect(() => {
        checkSound()
    }, [])

    if (loading) {
        return (<Loading />)
    } else {
        return (
            <div className="background__main" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/svgs/backgrounds/bg_grass.svg)` }}>
                <NavigationDetail path="/wieiswie" iconName="who" />
                <audio id={`audio__${audios[0]}`}
                    autoPlay
                    src={`https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/audios%2F${audios[0]}.mp3?alt=media&token=19366607-6109-4d6c-9582-324b20c35627`}
                    type="audio/mpeg" ></audio>
                <main className="page">
                    <div className="persons__content">

                        {personsInfo.map(person => (
                            <Link onMouseEnter={(e) => playSound(e)} onTouchStart={(e) => playSound(e)} data-audio={person.audio} to={`/wieiswie/${person.id}/${person.title}`} key={person.id} className="content__person">
                                <audio id={`audio__${person.audio}`}
                                    src={`https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/audios%2F${person.audio}?alt=media&token=19366607-6109-4d6c-9582-324b20c35627`}
                                    type="audio/mpeg" ></audio>

                                <div data-audio={person.audio} className="person__title">{person.title}</div>
                                <div data-audio={person.audio} className="person__image" style={{ backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/images%2Fpersons%2F${person.image}?alt=media&token=19366607-6109-4d6c-9582-324b20c35627)` }}></div>
                            </Link>
                        ))}
                    </div>
                </main>
                {!isLandscape ? (<div className="rotate__device"><img src={`${process.env.PUBLIC_URL}/svgs/rotate_device2.svg`} alt="" /></div>) : ""}
            </div>
        )
    }
}

export default PersonsPage;
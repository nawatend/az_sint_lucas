import React, { useEffect, useState } from 'react';
import NavigationDetail from '../../components/navigation/NavigationDetail'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading'


//firebase
import { db, storage } from '../../utils/firebase'

let PersonsPage = () => {

    let audios = ["who"]
    let personsRef = db.ref('/who_is_who')
    let persons = []

    const [isLandscape, setIsLandscape] = useState(true)
    const [personsInfo, setPersonsInfo] = useState([])
    const [loading, setLoading] = useState(true)
    const [personsImage, setPersonsImage] = useState([])

    let imagesFileName = {
        fotodokter: "photo_doctor_image",
        kinderdokter: "kid_doctor_image",
        ziekenhuisclowns: "clown_image",
        slaapdokter: "sleep_doctor_image",
        verpleegkundige: "nurse_image",
        spelbegeleider: "game_leader_image",
        kiderpsycholoog: "kid_psychology_image"
    }


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

    }, [loading, persons, personsImage, personsRef])

    if (loading) {
        return (<Loading />)
    } else {
        return (
            <div className="background__main" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/svgs/backgrounds/bg_grass.svg)` }}>
                <NavigationDetail path="/wieiswie" iconName="who" />
                <audio id={`audio__${audios[0]}`} autoPlay src={`https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/audios%2F${audios[0]}.mp3?alt=media&token=19366607-6109-4d6c-9582-324b20c35627`} type="audio/mpeg" ></audio>

                <main className="page">
                    <div className="persons__content">

                        {personsInfo.map(person => (
                            <Link to={`/wieiswie/${person.id}/${person.title}`} key={person.id} className="content__person">
                                <div className="person__title">{person.title}</div>
                                <div className="person__image" style={{ backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/az-sint-lucas-gent.appspot.com/o/images%2Fpersons%2F${person.image}?alt=media&token=19366607-6109-4d6c-9582-324b20c35627)` }}></div>
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
import React, { useEffect, useState } from 'react';
import NavigationDetail from '../../components/navigation/NavigationDetail'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading'


//firebase
import { db } from '../../utils/firebase'

let PersonsPage = () => {


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
                    console.log(element)
                    persons.push(element)
                })

                setLoading(false)
            }).then(() => {
                setPersonsInfo(persons)
            });
        }


        getPersonsInfo()



    }, [loading, persons, personsRef])

    if (loading) {
        return (<Loading />)
    } else {
        return (
            <div className="background__main" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/svgs/backgrounds/bg_grass.svg)` }}>
                <NavigationDetail path="/wieiswie" iconName="persons" />
                <main className="page">
                    <div className="persons__content">
                        {/* MAX 4 Persons */}
                        {personsInfo.map(person => (
                            <Link to={`/wieiswie/${person.id}/${person.title}`} key={person.id} className="content__person">
                                <div className="person__title">{person.title}</div>
                                <div className="person__image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/doctors/test.png)` }}></div>
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
import React, { useEffect, useState } from 'react';
import NavigationDetail from '../../components/navigation/NavigationDetail'
import { Link } from 'react-router-dom'

let PersonsPage = () => {


    let persons = [
        { title: "Nawa Fotodokter", id: "90773323" }
        , { title: "Slaapdokter Naw", id: "90773322" }
        , { title: "Doc Intensief", id: "90012701" }
        , { title: "Dokter Kid", id: "90016638" }
    ]

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

    
    return (
        <div className="background__main" style={{ backgroundImage: `url(/svgs/backgrounds/bg_grass.svg)` }}>
            <NavigationDetail path="/wieiswie" iconName="persons" />
            <main className="page">
                <div className="persons__content">
                    {/* MAX 4 Persons */}
                    {persons.map(person => (
                        <Link to={`/wieiswie/${person.id}`} key={person.id} className="content__person">
                            <div className="person__title">{person.title}</div>
                            <div className="person__image" style={{ backgroundImage: `url(/images/doctors/test.png)` }}></div>
                        </Link>
                    ))}
                </div>
            </main>
            {!isLandscape ? (<div className="rotate__device"><img src="/svgs/rotate_device.svg" alt="" /></div>) : ""}
        </div>
    );
}

export default PersonsPage;
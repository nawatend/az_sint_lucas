import React, { useEffect, useState } from 'react';
import NavItem from '../components/navigation/NavItem'

let Error404Page = () => {

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
    }, [])


    return (
        <div className="background__main" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/svgs/error404/error404.svg)` }}>
            <main className="page">
                <div className="return__home">
                    <div className="return__home--text">
                        Oeps, Pagina bestaat niet!
                    </div>
                    <NavItem path="/" iconName="home" />
                </div>
            </main>
            {!isLandscape ? (<div className="rotate__device"><img src={`${process.env.PUBLIC_URL}/svgs/rotate_device2.svg`} alt="" /></div>) : ""}
        </div>
    )

}

export default Error404Page;
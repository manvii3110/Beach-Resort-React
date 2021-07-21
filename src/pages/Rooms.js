import React from 'react'
import Banner from '../components/Banner'
import {Link } from 'react-router-dom'
import Hero from '../components/Hero'

const Rooms = () => {
    return (
        <Hero hero="roomsHero">
        <Banner title="our rooms">
        <Link to="/rooms" className="btn-primary">
        return home
        </Link>
        </Banner>
        </Hero>
    )
}
export default Rooms;

import React from 'react'
import Banner from '../components/Banner'
import {Link } from 'react-router-dom'
import Hero from '../components/Hero'
import RoomContainer from "../components/RoomContainer";

const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero">
        <Banner title="our rooms">
        <Link to="/" className="btn-primary">
        return home
        </Link>
        </Banner>
        </Hero>
        <RoomContainer/>
        </>
    )
}
export default Rooms;

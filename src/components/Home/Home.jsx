import React from 'react'
import Style from './Home.module.css'
import { useState , useEffect} from 'react'
import Slider from './Slider/Slider'
import Trending from './Trending-Section/Trending'
import TopRated from './TopRated-Section/TopRated'
import Upcoming from './Upcoming-Section/Upcoming'
export default function Home() {

  return <>
  <div className="relative w-full top-0 end-0 start-0">
  <Slider/>
  <Trending/>
  <TopRated/>
  <Upcoming/>
  </div>
  </>
}

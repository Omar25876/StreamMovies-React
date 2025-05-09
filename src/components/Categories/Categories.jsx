import React from 'react'
import Style from './Categories.module.css'
import { useState , useEffect} from 'react'
import AiringToday from './Airing-Today/AiringToday'
import Popular from './Popular/Popular'
import TopRated from './TopRated/TopRatedTv'
export default function Categories() {
  return <>
  <AiringToday/>
  <Popular/>
  <TopRated/>
  </>
}

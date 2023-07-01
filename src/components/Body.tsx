import { useEffect, useState } from "react";
import Lyrics from "./Lyrics";
import GuessButton from "./GuessButton";
import NewButton from "./NewButton";
import { ListFormat } from "typescript";

const Body = ()=> {
   const [lyrics , setLyrics] = useState<Array<string>>([])
   const [song, setSong] = useState<Array<Array<string>>>([]) 
   const [allSongs, setAllSongs] = useState<any>("")
   const [artist , setArtist] = useState<string>("")


    useEffect(()=>{
        chooseRandomArtist()
    },[])

    useEffect(()=>{
        getArtistData()
    },[artist])

    useEffect(()=>{
        chooseRandomSong()
    },[allSongs])

    useEffect(()=>{
        chooseRandomStanza()
    }, [song])

    const chooseRandomArtist = ()=> {
        let rand = Math.random()
        if (rand > 0.5){setArtist("Dylan")}
        else {setArtist("Swift")}
    }

    const getArtistData = ()=> {
        if (artist == "Dylan"){
            getDataDylan()} 
        else if (artist == "Swift"){
            getDataSwift() 
        }
    }

    const getDataDylan= ()=>{
        fetch("DylanSongs.json").then(res => res.json()).then(res => setAllSongs(res))
    }

    const getDataSwift= ()=>{
        fetch("SwiftSongs.json").then(res => res.json()).then(res => setAllSongs(res))
    }

    const chooseRandomSong= ()=>{
        if(allSongs){
            let chosenSong = allSongs[Math.floor(Math.random()*allSongs.length)]
            console.log(chosenSong.lyrics)
            if (chosenSong.lyrics.length !== 0){
            setSong(chosenSong.lyrics)} else{chooseRandomSong()}
            } 
    }

    const chooseRandomStanza= ()=>{
        let chosenStanza:Array<string> = song[Math.floor(Math.random()*song.length)]
        setLyrics(chosenStanza)
    }

    return (    
    <div className="content-body">
    <h1>Is it Tay Tay or Bobby D?</h1>
    <Lyrics lyrics={lyrics} />
    <div className="button-flex">
    <GuessButton imagePath="SwiftFace.jpg" buttonName="Taylor Swift"/>
    <GuessButton imagePath="DylanFace.jpg" buttonName="Bob Dylan"/>
    </div>
    <NewButton buttonName="Get New Lyrics" />
    </div>
    )
}

export default Body;
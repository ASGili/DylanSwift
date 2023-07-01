import { useEffect, useState } from "react";
import Lyrics from "./Lyrics";
import GuessButton from "./GuessButton";
import NewLyricsButton from "./NewLyricsButton";
import Scorer from "./Scorer";
import { ListFormat } from "typescript";

const Body = ()=> {
   const [lyrics , setLyrics] = useState<Array<string>>([])
   const [song, setSong] = useState<Array<Array<string>>>([]) 
   const [allSongs, setAllSongs] = useState<any>("")
   const [artist , setArtist] = useState<string>("")
   const [score, setScore] = useState<number>(0)
   const [turns, setTurns] = useState<number>(0)


    useEffect(()=>{
        chooseRandomArtist()
    },[])

    useEffect(()=>{
        getAllSongsByArtist()
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

    const getAllSongsByArtist = ()=> {
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
            if (chosenSong.lyrics.length !== 0){
            setSong(chosenSong.lyrics)} else{chooseRandomSong()}
            } 
    }

    const chooseRandomStanza= ()=>{
        let chosenStanza:Array<string> = song[Math.floor(Math.random()*song.length)]
        setLyrics(chosenStanza)
    }


    const getNewLyrics = ()=>{
        setTurns(turns+1)
        chooseRandomArtist()
        getAllSongsByArtist()
        chooseRandomSong()
        chooseRandomStanza()
    }

    const makeGuess = (event:React.MouseEvent) => {
        if(event.currentTarget.textContent == artist){
            setScore(score + 1)
            getNewLyrics()
        }else{
            console.log("WRONG!")
            getNewLyrics()
        }
    }



    return (    
    <div className="content-body">
    <h1 className="headline">Is it Tay Tay or Bobby D?</h1>
    <Lyrics lyrics={lyrics} />
    <div className="button-flex">
    <GuessButton makeGuess={makeGuess} imagePath="SwiftFace.jpg" buttonName="Swift"/>
    <GuessButton makeGuess={makeGuess} imagePath="DylanFace.jpg" buttonName="Dylan"/>
    </div>
    <NewLyricsButton getNewLyrics={getNewLyrics} buttonName="Get New Lyrics" />
    <Scorer score={score} turns={turns}/>
    </div>
    )
}

export default Body;
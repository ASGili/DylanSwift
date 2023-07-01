import { useEffect, useState } from "react";
import Lyrics from "./Lyrics";
import GuessButton from "./GuessButton";
import NewButton from "./NewButton";
import { ListFormat } from "typescript";

const Body = ()=> {
   const [lyrics , setLyrics] = useState<string>("")
   const [artist , setArtist] = useState<string>("")
   const [data, setData] = useState<any>([])


    useEffect(()=>{
        let rand = Math.random()
        if (rand > 0.5){setArtist("Dylan")}
        else {setArtist("Swift")}
    },[])

    useEffect(()=>{
        getData()
    },[])

    const getData= ()=>{
        fetch("DylanSongs.json").then(res => res.json()).then(res => setData(res))
    }

    return (    
    <div className="content-body">
    <h2>Is it Tay Tay or Bobby D?</h2>
    <Lyrics lyrics={lyrics} />
    <GuessButton imagePath="SwiftFace.jpg" buttonName="Taylor Swift"/>
    <GuessButton imagePath="DylanFace.jpg" buttonName="Bob Dylan"/>
    <NewButton buttonName="Get New Lyrics" />
    </div>
    )
}

export default Body;
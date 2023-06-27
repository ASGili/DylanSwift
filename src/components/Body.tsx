import { useState } from "react";
import Lyrics from "./Lyrics";

const Body = ()=> {
    let lyrics, setLyrics

    [lyrics, setLyrics] = useState<String>("")

    return (      
    <>
    <h2>Is it Tay Tay or Bobby D?</h2>
    <Lyrics lyrics={lyrics} />
    </>
    )
}

export default Body;
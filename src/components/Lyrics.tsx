import { useEffect, useState } from "react";

interface Lyrics{
    lyrics: Array<string>;
}

const Lyrics:React.FC<Lyrics> = ({lyrics})=> {

    const [lyricsBlock, setLyricsBlock] = useState<Array<any>>([])

    useEffect(() => {
        if (lyrics) {
            setLyricsBlock(lyrics.map((line,index) => <p key={index.toString()}>{line}</p>));
        }
    }, [lyrics]);

    
    return (   
    <blockquote className="lyrics-quote">   
        <section className="quote-block">{lyricsBlock}</section>
    </blockquote>
    )
}

export default Lyrics;
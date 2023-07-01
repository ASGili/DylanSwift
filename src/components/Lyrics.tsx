interface Lyrics{
    lyrics: string;
}

const Lyrics:React.FC<Lyrics> = ({lyrics})=> {

    return (      
    <blockquote>
    <p>{lyrics}</p>
    </blockquote>
    )
}

export default Lyrics;
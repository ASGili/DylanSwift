interface Lyrics{
    lyrics: String;
}

const Lyrics:React.FC<Lyrics> = ({lyrics})=> {

    return (      
    <>
    <p>{lyrics}</p>
    </>
    )
}

export default Lyrics;
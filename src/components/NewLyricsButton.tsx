interface NewLyricsButton{
    buttonName: string;
    getNewLyrics: React.MouseEventHandler<HTMLElement>;
}

const NewLyricsButton:React.FC<NewLyricsButton> = ({buttonName, getNewLyrics})=>{

    return(
        <button onClick={getNewLyrics} className="guess-button">
            <p>{buttonName}</p>
        </button>
    )
}
export default NewLyricsButton
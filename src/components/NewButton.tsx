interface NewButton{
    buttonName: string;
    getNewLyrics: React.MouseEventHandler<HTMLElement>;
}

const NewButton:React.FC<NewButton> = ({buttonName, getNewLyrics})=>{

    return(
        <button onClick={getNewLyrics} className="guess-button">
            <p>{buttonName}</p>
        </button>
    )
}
export default NewButton
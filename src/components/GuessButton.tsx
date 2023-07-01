interface GuessButton{
    buttonName: string;
    imagePath: string;
    makeGuess: React.MouseEventHandler;
}

const GuessButton:React.FC<GuessButton> = ({buttonName, imagePath, makeGuess})=>{

    return(
        <button onClick={makeGuess} className="guess-button">
            <img className="button-image" src={imagePath} />
            <p>{buttonName}</p>
        </button>
    )
}
export default GuessButton
interface GuessButton{
    buttonName: string;
    imagePath: string;
}

const GuessButton:React.FC<GuessButton> = ({buttonName, imagePath})=>{

    return(
        <button className="guess-button">
            <img className="button-image" src={imagePath} />
            <p>{buttonName}</p>
        </button>
    )
}
export default GuessButton
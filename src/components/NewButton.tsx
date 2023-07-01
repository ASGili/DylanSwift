interface NewButton{
    buttonName: string;
}

const NewButton:React.FC<NewButton> = ({buttonName})=>{

    return(
        <button className="guess-button">
            <p>{buttonName}</p>
        </button>
    )
}
export default NewButton
interface score{
    score:number;
    turns:number;
}

const Scorer:React.FC<score> = ({score, turns})=> {



    return(
      <div className="button-flex">
      <section className="scorer-text">Your score: {score}</section>
      <section className="scorer-text">Number of turns: {turns}</section>
      </div>  
    )
}

export default Scorer
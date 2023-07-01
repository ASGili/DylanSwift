interface score{
    score:number;
    skips:number;
}

const Scorer:React.FC<score> = ({score, skips})=> {



    return(
      <div className="button-flex">
      <section className="scorer-text">Your score: {score}</section>
      <section className="scorer-text">Number of skips: {skips}</section>
      </div>  
    )
}

export default Scorer
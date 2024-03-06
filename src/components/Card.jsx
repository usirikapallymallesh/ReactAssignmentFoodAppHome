
import './Card.css';
import icon from './../assets/card-icon.avif'
function Card(props) {
    // console.log(props.desc);
    return (
        <>
            <div className="card-div">
                <div className="card-text">
                    <p>
                    {props.desc}
                    </p>
                   
                </div>
                <div className="card-img">
                    <div className='card-icon'>
                        <img src= {icon} alt="" height={50} width={50}/>
                    </div>
                    <div  className='card-icon-text'>
                        <h2>Gladis Lennon</h2>
                        <p>Head of SEO</p>
                    </div>
                </div>
                
            </div>
        </>
    )
    
}

export default Card;
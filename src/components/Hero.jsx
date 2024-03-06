import './Hero.css';

function Hero(params) {
   return (
    <>
    <div className="hero">
        <div className="hero-text">
            <h1 className='color-black'>Let us find your</h1>
            <h1 className='color-red'>Forever Food.</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
            <div className="buttons">
                <button>search Now</button>
                <button>know more</button>
            </div>
        </div>
        <div className="hero-img">
            <img src={params.img} alt="GeekFoods"/>
        </div>
    </div>
    </>
   )
}
export default Hero;
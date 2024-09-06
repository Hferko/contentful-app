import hero from './assets/hero.svg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-center">
                <div className="hero-title">
                    <h1>CMS Ferkónak</h1>
                    <p>A számítógép azért dolgozik olyan gyorsan, mert nem gondolkozik.</p>
                </div>
                <div className="img-container">
                    <img src={hero} alt="hero" className='img'/>
                </div>
            </div>
        </section>
    )
}
export default Hero;
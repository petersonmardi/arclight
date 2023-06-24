import './App.css';
import Navbar from './Components/Navbar';
import Map from './Images/Map.svg';
import Button from './Components/Button';
import Play from './Images/Play.svg';
import StarIcon from './Components/StarIcon';
import Logo from './Components/Logo';
import User from './Components/User';

function App() {
  return (
    <div className="App">
      
      <header className='header-background'>
        <div className='header'>
        <div className='header-hero-section'>

          <div className='navbar-wrapper'>
            <Navbar />
          </div>

          <div className='header-hero'>

            <div className='hero-card--leftSide'>
                  <div className='card'>
                    <div className='card-text'>
                      <h1 className='card-leftside--title'>Affiliate tracking software shouldn't cost an harm and a leg.</h1>
                      <p className='card-leftside--description'>Keep track of all your affiliate marketing campaigns in once place, 
                      and analyze how well they are doing. Best part? It doesn’t cost an arm and a leg.</p>
                    </div>

                    <div className='buttonCTAs'>
                      <Button 
                        buttonClass='mainCTA'  
                        text='Get started'
                        itsFree="- it's free" />

                      <button className='secondCTA'>
                        <img 
                          src={Play}
                          alt='Play' />
                          <div className='button-play--text'>How it works</div>
                      </button>
                    </div>
                  </div>
              
          
                  <div className='ratings'>
                    <div className='starIcon'>
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                    <span className='fiveOverFive'>5/5 ·</span>
                    <strong className='alternative'>Alternative To reviews</strong>
                  </div>
          </div>

            <div className='hero-map'>
              <img 
              src={Map}
              alt='map' />

              <div className='userWrapper'>
                <div className='user1'>
                  <User 
                    userImage='user01'
                    altImage='Sarah'
                    name='Sarah'
                    country='Belgium' />
                </div>
                <div className='user2'>
                  <User 
                    userImage='user02'
                    altImage='Isabella'
                    name='Isabella'
                    country='United States' />
                </div>
                <div className='user3'>
                  <User 
                    userImage='user03'
                    altImage='David'
                    name='David'
                    country='United States' />
                </div>
              </div>
            </div>
          </div>
        
          <div className="header-hero--logo">
            <Logo 
              logo='Shopify'
              brand='Shopify' />

            <Logo 
              logo='Paypal'
              brand='Paypal' />
            
            <Logo 
              logo='Samsung'
              brand='Samsung' />
            
            <Logo 
              logo='Lenovo'
              brand='Lenovo' />
            
            <Logo 
              logo='Google'
              brand='Google' />

            <Logo 
              logo='Slack'
              brand='Slack' />
          </div>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;

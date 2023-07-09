import './App.css';
import Navbar from './Components/Navbar';
import Map from './Images/Map.svg';
import Button from './Components/Button';
import Play from './Images/Play.svg';
import StarIcon from './Components/StarIcon';
import Logo from './Components/Logo';
import User from './Components/User';
import Dashboard from './Components/Dashboard';
import DashboardImage from './Images/Dashboard.png';
import ForStartups from './Components/ForStartups';
import ForEnterprises from './Components/ForEnterprises';
import Pricing from './Components/Pricing';
import Data from './data/business.json';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='App'>
      <header className='background'>
        <div className='header-hero-section'>
          
          <Navbar />
          
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
                    <div className='ratings-text'>
                      <span className='fiveOverFive'>5/5 ·</span>
                      <strong className='alternative'>Alternative To reviews</strong>
                    </div>
                  </div>
            </div>

            <div className='hero-map'>
              <img
              className='mapImage'
              src={Map}
              alt='Map' />

              <div className='users'>
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
      </header>

      {/* Dashboard */}

      <section className='powerful-dashboard--wrapper'>
        <img
          className='powerful-dashboard-image'
          src={DashboardImage}
          alt='DashboardImage' />

        <div className='powerful-dashboard'>
          <Dashboard />
        </div>
      </section>

      <section className='background background-business'>
        <div className='business'>
          <div className='business-wrapper'>
            <ForStartups />
          </div>
          <div className='business-wrapper'>
            <ForEnterprises />
          </div>
        </div>
        <div className='business-pricing'>
          <Pricing
            isMiddle={false}
            category={Data.data[3].category}
            title={Data.data[3].title}
            subtitle={Data.data[3].subtitle}
            item01={Data.data[3].item01}
            item02={Data.data[3].item02}
            item03={Data.data[3].item03}
            item04={Data.data[3].item04} />

          <Pricing
            isMiddle={true}
            category={Data.data[4].category}
            title={Data.data[4].title}
            subtitle={Data.data[4].subtitle}
            item01={Data.data[4].item01}
            item02={Data.data[4].item02}
            item03={Data.data[4].item03}
            item04={Data.data[4].item04} />
          
          <Pricing
            isMiddle={false}
            category={Data.data[5].category}
            title={Data.data[5].title}
            subtitle={Data.data[5].subtitle}
            item01={Data.data[5].item01}
            item02={Data.data[5].item02}
            item03={Data.data[5].item03}
            item04={Data.data[5].item04} />
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;

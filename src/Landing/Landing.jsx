import { Link } from 'react-router-dom';
import Logo from '../../src/assets/Logo 1.png'
import landingImage from "../../src/assets/Landing.png";
import './Landing.css'
const Landing = () => {

  return (
      <div className='container-page w-100 h100'>
        <nav className="landing-logo mx-2">
      <img src={Logo} alt="logo"  width="180px"  />
        </nav>
        {/* info */}
        <div className='landing-info row justify-content-around my-5 w-100'>
          <div className= 'info col-lg-5 col-md-5 col-sm-12 my-5'>
          <h1 className="landing-heading">
            Job <span>Tracking</span> App
          </h1>
          <p>
          Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up fixie raclette taxidermy craft beer. Brunch bitters synth, VHS crucifix heirloom meggings bicycle rights.
          </p>
             <Link to='/register' className='btn btn-hero'>
           <button className='btnn-hero btnn'>
          {/* <Link to='/login' className='btn btn-hero'>
            Login
          </Link> */}
            Login/Register
          </button>
          </Link>
          </div><div className=" col-lg-5 col-md-5 col-sm-12">
          <img src={landingImage} alt="landing"   className="main-img img-fluid h-75 d-flex justify-content-center" />
          </div>
          </div>
      </div>
  
  );
};

export default Landing;
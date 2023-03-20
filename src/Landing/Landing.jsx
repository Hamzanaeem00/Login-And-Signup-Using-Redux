import { Link, Route } from 'react-router-dom';
import Signup from '../Signup/Signup';
const Landing = () => {
  return (

      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>

          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>

        <Route exact path = '/register'>
            <Signup />
        </Route>
      </div>
  
  );
};

export default Landing;
import { Link } from 'react-router-dom';
const Landing = () => {
  return (

      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <Link to='/login' className='btn btn-hero'>
            Login
          </Link>
          <Link to='/register' className='btn btn-hero'>
            /Register
          </Link>
        </div>
      </div>
  
  );
};

export default Landing;
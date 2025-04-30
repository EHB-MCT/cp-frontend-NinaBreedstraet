import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
        <Link to="/Home">Home</Link>
        <Link to="/LandingsPagina">LandingsPagina</Link>
    </nav>
  );
};

export default Navigation;
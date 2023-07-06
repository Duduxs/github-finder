import { useNavigate } from 'react-router-dom';
import './styles.scss';

export const Header = () => {

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/home')
    }

    return (<header className="header">
        <h2 className='header-title' onClick={navigateToHome}>Github Finder 🔎</h2>
    </header>
    )
}

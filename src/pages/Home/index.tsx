import { NavLink } from 'react-router-dom';
import { Button } from '../../core/components/Button';
import './styles.scss'

export const Home = () => (
    <div className="main">
        <h1 className='title'>Busca de usuários com o Github Finder</h1>

        <div className='text'>
            <p>
                Bem-vindos ao projeto Github Finder.
            </p>
            <br />
            <p>
                Esse projeto/desafio foi proposto para ser feito durante o bootcamp da DevSuperior.
            </p>
            <br />
            <p>
                Segui um protótipo público de telas <a href='https://www.figma.com/file/NzeGEIb5oSAGtbu2BfvhDS/BDS-Cap3?type=design&node-id=0-4&mode=design&t=M9Au4I9lebEa3NvD-0' target='_blank' rel="noreferrer">desse Figma</a> para implementá-lo. Espero que gostem.
            </p>
        </div>
        <NavLink to="/search"><Button value='Começar' /></NavLink>
    </div>
);
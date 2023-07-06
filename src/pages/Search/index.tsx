import { Button } from '../../core/components/Button';
import { Line } from './components/Line';
import enterpriseLogo from 'core/assets/imgs/companhia.png'
import websiteLogo from 'core/assets/imgs/world.png'
import addressLogo from 'core/assets/imgs/address.png'
import calendarLogo from 'core/assets/imgs/calendar.png'
import './styles.scss';
import { Chip } from './components/Chip';

export const Search = () => (
    <div>
        <div className="search-data-wrapper">
            <div className="search-data-content">
                <h1>Encontre um perfil do Github</h1>
                <input placeholder='Usuário do Github'></input>
                <Button value='Encontrar' />
            </div>
        </div>

        <div className="github-result-data-wrapper">
            <div className="github-result-left">
                <div className="github-result-image">
                    <img src="https://avatars.githubusercontent.com/u/53549133?v=4" alt="" />
                </div>
                <div className="github-result-btn-see-profile">
                    <Button value='Ver Perfil' />
                </div>
            </div>
            <div className="github-result-right">
                <div className="information-chips">
                    <Chip title='Repositórios públicos' value='62' />
                    <Chip title='Seguidores' value='127' />
                    <Chip title='Seguindo' value='416' />
                </div>
                <div className="information-panel">
                    <h1>Informações</h1>
                    <Line logo={enterpriseLogo} logoAlternativeText='Logo da empresa' title='Empresa' value='@ZupIT' />
                    <Line logo={websiteLogo} logoAlternativeText='Website/Blog do usuário' title='Website/Blog' value='https://thewashington.dev' />
                    <Line logo={addressLogo} logoAlternativeText='Localidade do usuário' title='Localidade' value='Uberlândia' />
                    <Line logo={calendarLogo} logoAlternativeText='Data de criação da conta do usuário' title='Membro desde' value='19/10/2013' />
                </div>
            </div>

        </div>

    </div>

)
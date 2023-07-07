import addressLogo from 'core/assets/imgs/address.png';
import calendarLogo from 'core/assets/imgs/calendar.png';
import enterpriseLogo from 'core/assets/imgs/companhia.png';
import websiteLogo from 'core/assets/imgs/world.png';
import { GithubResponse } from 'core/types/types';
import { FormatDate } from 'core/utils/formatter';
import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import { Button } from '../../core/components/Button';
import { Chip } from './components/Chip';
import { Line } from './components/Line';
import ChipLoader from './components/Loaders/Chip';
import ImageLoader from './components/Loaders/Image';
import LineLoader from './components/Loaders/Line';
import './styles.scss';

enum PageStatus {
    NOT_READY,
    LOADING,
    COMPLETED
}

export const Search = () => {

    const [pageStatus, setPageStatus] = useState<PageStatus>(PageStatus.NOT_READY);
    const [username, setUsername] = useState('')
    const [profile, setProfile] = useState<GithubResponse>()

    const onChangeUsername = (data: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(data.target.value)
    }

    const onFormSubmit = (data: React.FormEvent<HTMLFormElement>) => {
        data.preventDefault();
        setPageStatus(PageStatus.LOADING)

        makeRequest(username)
            .then((result) => {
                setProfile(result.data)
                setPageStatus(PageStatus.COMPLETED)
            })
            .catch(() => {
                alert("Usuário não encontrado!")
                setPageStatus(PageStatus.NOT_READY)
            })

    }

    return (
        <div>
            <div className="search-data-wrapper">
                <div className="search-data-content">
                    <h1>Encontre um perfil do Github</h1>
                    <form onSubmit={onFormSubmit}>
                        <input
                            value={username}
                            onChange={onChangeUsername}
                            placeholder='Usuário do Github'></input>
                        <Button value='Encontrar' />
                    </form>
                </div>
            </div>

            {pageStatus !== PageStatus.NOT_READY && (
                <div className="github-result-data-wrapper">
                    <div className="github-result-left">
                        {pageStatus === PageStatus.LOADING ? <ImageLoader /> : (
                            <>
                                <div className="github-result-image">
                                    <img src={profile!!.avatar_url} alt="Github user pic" />
                                </div>
                                <div className="github-result-btn-see-profile">
                                    <a href={profile!!.html_url} target='_blank' rel="noreferrer"><Button value='Ver Perfil' /></a>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="github-result-right">
                        {pageStatus === PageStatus.LOADING ? (
                            <>
                                <ChipLoader />
                                <LineLoader />
                            </>
                        ) : (
                            <>
                                <div className="information-chips">
                                    <Chip title='Repositórios públicos' value={profile!!.public_repos.toString()} />
                                    <Chip title='Seguidores' value={profile!!.followers.toString()} />
                                    <Chip title='Seguindo' value={profile!!.following.toString()} />
                                </div>
                                <div className="information-panel">
                                    <h1>Informações</h1>
                                    <Line logo={enterpriseLogo} logoAlternativeText='Logo da empresa' title='Empresa' value={profile!!.company} />
                                    <Line logo={websiteLogo} logoAlternativeText='Website/Blog do usuário' title='Website/Blog' value={profile!!.blog} />
                                    <Line logo={addressLogo} logoAlternativeText='Localidade do usuário' title='Localidade' value={profile!!.location} />
                                    <Line logo={calendarLogo} logoAlternativeText='Data de criação da conta do usuário' title='Membro desde' value={FormatDate(profile!!.created_at)} />
                                </div>
                            </>
                        )}

                    </div>
                </div>
            )}


        </div>
    )

}
import './styles.scss';

type Props = {
    logo: string
    logoAlternativeText: string
    title: string
    value: string
}

export const Line = ({ logo, logoAlternativeText, title, value }: Props) => (
    <div className="line-wrapper">
        <img src={logo} alt={logoAlternativeText} />
        <p className='title'>{title}:</p><p className='value'>{value}</p>
    </div>
)
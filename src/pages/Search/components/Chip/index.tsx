import './styles.scss'

type Props = {
    title: string
    value: string
}

export const Chip = ({ title, value }: Props) => (
    <div className='chip-wrapper'>
        <p>{title}: {value}</p>
    </div>
)
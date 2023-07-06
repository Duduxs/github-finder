import './styles.scss'

type Props = {
    value: string
}

export const Button = ({ value }: Props) => (
    <button >{value}</button>
)


import ContentLoader from "react-content-loader"
import './styles.scss'

const ChipLoader = () => (
  <ContentLoader
    className="chip-loader"
    speed={1}
    width={600}
    height={84}
    viewBox="0 0 600 84"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="30" rx="5" ry="5" width="167" height="28" />
    <rect x="180" y="30" rx="5" ry="5" width="120" height="28" />
    <rect x="320" y="30" rx="5" ry="5" width="120" height="28" />
  </ContentLoader>
)

export default ChipLoader


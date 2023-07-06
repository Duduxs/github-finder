import ContentLoader from "react-content-loader"
import './styles.scss'

const LineLoader = () => (
  <ContentLoader 
    className="line-loader"
    speed={1}
    width={872}
    height={270}
    viewBox="0 0 872 270"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="9" y="-50" rx="6" ry="6" width="872" height="270" />
  </ContentLoader>
)

export default LineLoader


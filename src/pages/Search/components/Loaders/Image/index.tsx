import ContentLoader from "react-content-loader"
import './styles.scss'

const ImageLoader = () => (
    <ContentLoader
        className="img-loader"
        speed={1}
        width={280}
        height={284}
        viewBox="0 0 280 284"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="178" y="340" rx="0" ry="0" width="2" height="1" />
        <rect x="146" y="394" rx="0" ry="0" width="2" height="1" />
        <rect x="134" y="366" rx="0" ry="0" width="11" height="1" />
        <rect x="3" y="0" rx="50" ry="50" width="280" height="284" />
    </ContentLoader>
)

export default ImageLoader


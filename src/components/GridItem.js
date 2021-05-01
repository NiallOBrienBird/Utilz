import imgs from '../resourses/imgs/imgs';
import Tilt  from 'react-parallax-tilt';
import Link from 'react-delay-link'

export function GridItem({title, img, url, description, onSelect}) {
    return(
        <Tilt tiltMaxAngleX={12}  tiltMaxAngleY={12} scale={1.01}>
            <Link to={url} delay={600} clickAction={onSelect}>
                <div className="item-container">
                    <img src={imgs[img]} alt="img"/> 
                    <div className="text">
                        <div className="title">{title}</div>
                        <div className="description">{description}</div>
                    </div>
                </div>
            </Link>
        </ Tilt>
    )
}

export default GridItem
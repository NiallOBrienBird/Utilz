import imgs from '../resourses/imgs/imgs';
import Tilt  from 'react-parallax-tilt';

export function GridItem({title, img, url, description, onSelect}) {
    return(
        <Tilt tiltMaxAngleX={12}  tiltMaxAngleY={12} scale={1.01}>
            <div className="item-container" onClick={() => onSelect(url)}>
                <img src={imgs[img]} alt="img"/> 
                <div className="text">
                    <div className="title">{title}</div>
                    <div className="description">{description}</div>
                </div>
            </div>
        </ Tilt>
    )
}

export default GridItem
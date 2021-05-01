import GridItem from "./GridItem"
import { useState } from 'react'


export function GridSelector({ tiles }) {
    const [hidden, setHidden] = useState('')

    function select(url) {
        setHidden('hidden')
        console.log(url)
        setTimeout(() => window.location.assign(`${url}`), 600)
    }
    

    return(
    <div className={`grid-select ${hidden}`}>
        {tiles.map(tile => <GridItem    title={tile.title}
                                        description={tile.description}
                                        img={tile.img}
                                        url={tile.url}
                                        key={tile.id}
                                        onSelect= {select}
                                        />)}
    </div>)
}

export default GridSelector
import GridItem from "./GridItem"
import { useState } from 'react'


export function GridSelector({ tiles, hide }) {
    const [hidden, setHidden] = useState('')

    function select() {
        setHidden("hidden")
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
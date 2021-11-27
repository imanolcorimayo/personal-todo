import React from 'react'

import styles from './Body.module.css'

// Components 
import Filters from './Filters/Filters'
import Cards from './Cards/Cards'

export default function Body() {
    return (
        <div className={ styles.divPrincipal }>
            <Filters className={ styles.filters }></Filters>
            <Cards></Cards>
        </div>
    )
}

import React from 'react'

import styles from './styles/Body.module.css'

// Components 
import Filters from './Filters'
import Cards from './Cards'

export default function Body() {
    return (
        <div className={ styles.divPrincipal }>
            <Filters className={ styles.filters }></Filters>
            <Cards></Cards>
        </div>
    )
}

import React from 'react'
import Style from './style.module.scss'


const Content: React.FC = ({children}) => {
    return (
        <div className={Style.Container}>
           {children}
        </div>
    )
}

export default Content;
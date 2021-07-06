import React from 'react'
import Style from './style.module.scss'
import Aside from '../Aside'
import Content from '../Content'
import MainHeader from '../MainHeader'

const Grid: React.FC = () => {
    return (
        <div className= {Style.Grid}>
        <MainHeader />
        <Content/>
        <Aside/>
        </div>
    )
}

export default Grid;
import React from 'react'
import Style from './style.module.scss'
import Aside from '../Aside'
import Content from '../Content'
import MainHeader from '../MainHeader'

const Layout: React.FC = ({children}) => {
    return (
        <div className= {Style.Grid}>
            <MainHeader />
            <Content> {children} </Content>
            <Aside/>
        </div>
    )
}

export default Layout;
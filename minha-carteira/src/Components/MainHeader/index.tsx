import React, {useMemo} from 'react'
import Style from './style.module.scss'
import emojis from '../../utils/emojis'


const MainHeader: React.FC = () => {

   const emoji = useMemo(()=>{
       const indice = Math.floor(Math.random()*emojis.length)
       return emojis[indice];
   },[]);
   
    return (
     
        <div className={Style.Container}>
             <h1 >Toogle</h1>

            <div className={Style.Profile}>
                <div className={Style.Welcome}>Olá, {emoji}</div>
                <div className={Style.Username}>Jeimisson Barbosa</div>
            </div>

        </div>
        
    )
}

export default MainHeader;
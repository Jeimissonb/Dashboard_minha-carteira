import React from 'react'
import Style from './style.module.scss'
import ContentHeader from '../../Components/ContentHeader'
import SelectInput from '../../SelectInput'

const List: React.FC = () => {
    const options = [
        {value: 'Jeimisson', lable: 'Jeimisson'},
        {value: 'Cibele', lable: 'Cibele'},
        {value: 'Brena', lable: 'Brena'}
    ];
    return (
        <div className={Style.Container}>
            <ContentHeader title="Saídas" lineColor="#fff">
                <SelectInput options={options} />
            </ContentHeader>
                
        </div>
    )
}

export default List;
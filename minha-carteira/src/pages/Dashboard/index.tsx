import React from "react";
import Style from './style.module.scss'
import ContentHeader  from '../../Components/ContentHeader'
import SelectInput from "../../SelectInput";


const Dashboard: React.FC = () => {

   const options = [
        {value: 'Jeimisson', lable: 'Jeimisson'},
        {value: 'Cibele', lable: 'Cibele'},
        {value: 'Brena', lable: 'Brena'}
    ]
    return (
        <div className={Style.Container}>
            <ContentHeader title="Dashboard" lineColor="#fff">
                <SelectInput options={options} />
            </ContentHeader>
            
        </div>
    )
}

export default Dashboard;
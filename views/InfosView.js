import React from 'react';
import InfoSectionView from './InfoSectionView';

class InfosView extends React.Component{
    render(){
        return <div><h1 className='heading-color'>In Detail</h1>
        {this.createSection()}</div>
    }
    createSection(){
        return this.props.model.map(section=><div><InfoSectionView model={section}/><br></br></div>)
    }
}

export default InfosView;
import React from 'react';
import LinkInfoView from './LinkInfoView';

class InfoSectionView extends React.Component{
    render(){
        return <div><h2 className='heading-color'>{this.props.model.title}</h2>
        {this.createSection()}</div>
    }

    createSection(){
        return this.props.model.infos.map(info=><div><LinkInfoView linkInfo={info}/><br></br></div>)
    }
}

export default InfoSectionView;
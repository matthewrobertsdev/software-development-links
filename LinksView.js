import React from 'react';
import LinksSectionView from './LinksSectionView';

class LinksView extends React.Component{
    render(){
        return <div><h1 className='heading-color'>The Summary</h1>
        {this.createSection()}</div>
    }
    createSection(){
        return this.props.model.map(sectionModel=><LinksSectionView model={sectionModel}/>)
    }
}

export default LinksView;
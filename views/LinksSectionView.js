import React from 'react';
import LinkButton from './LinkButton';

class LinkSectionView extends React.Component{
    render(){
        return <div><h2 className='heading-color h3-size'>{this.props.model.title}</h2>
        {this.createSection()}</div>
    }

    createSection(){
        return this.props.model.links.map(link=><LinkButton link={link}/>)
    }
}

export default LinkSectionView;
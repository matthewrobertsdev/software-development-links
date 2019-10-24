import React from 'react';

class LinkButton extends React.Component{
    render(){
        return(<a href={this.props.link.url} className='link-button'>
        {this.props.link.title}</a>);
    }
}

export default LinkButton;
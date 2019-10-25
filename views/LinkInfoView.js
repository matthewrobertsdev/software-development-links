import React from 'react';
import LinkButton from './LinkButton'

class LinkInfoView extends React.Component {
    render() {
        return (<div><LinkButton link={this.props.linkInfo.linkModel}/>
            <span className='text-on-background'>{this.props.linkInfo.info}</span></div>);
    }
}

export default LinkInfoView;


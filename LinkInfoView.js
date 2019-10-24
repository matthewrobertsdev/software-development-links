import React from 'react';
import LinkButton from './LinkButton'

class LinkInfoView extends React.Component {
    render() {
        return (<div><p className='text-on-background'>{this.props.linkInfo.info}</p>
            <LinkButton link={this.props.linkInfo.linkModel} /></div>);
    }
}

export default LinkInfoView;


import React from 'react';
import './app.css';
import {infoSectionArray} from '../model/InfoSectionModels';
import LinkBreak from './LinkBreak';
import {linksSectionArray} from '../model/LinkSectionModels';
import LinksView from './LinksView'
import InfosView from './InfosView';

function App() {
  return (
    <div className="App">
        <h1 className='heading-color'>Software Development Links: An Incomplete List</h1>
        <LinksView model={linksSectionArray}/>
        <LinkBreak/>
        <InfosView model={infoSectionArray}/>
        <LinkBreak/>
    </div>
  );
}

export default App;

//<span className='text-on-background'>Java's docs for their api's can best be found on the oracle website through a search engine</span>

import React from 'react';
import './app.css';
import {appleDocsInfo, swiftLanguageInfo, rayWenderlichInfo} from '../model/LinkInfoModels'
import LinkBreak from './LinkBreak';
import LinkInfoView from './LinkInfoView';
import linksSectionArray from '../model/LinkSectionArray';
import LinksView from './LinksView'

function App() {
  return (
    <div className="App">
        <h1 className='heading-color'>Software Development Links: An Incomplete List</h1>
        <LinksView model={linksSectionArray}/>
        <LinkBreak/>
        <h1 className='heading-color'>In Detail</h1>
        <h2 className='heading-color'>Apple and Swift</h2>
        <LinkInfoView linkInfo={appleDocsInfo}/><LinkInfoView linkInfo={swiftLanguageInfo}/>
        <LinkBreak/>
        <h2 className='heading-color'>Mobile Development</h2>
        <LinkInfoView linkInfo={rayWenderlichInfo}/>
        <LinkBreak/>
    </div>
  );
}

export default App;

//<span className='text-on-background'>Java's docs for their api's can best be found on the oracle website through a search engine</span>

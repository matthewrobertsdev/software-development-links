import React from 'react';
import './app.css';
import {appleDocsLink, swiftLanguageLink, rayWenderlichLink, androidDocsLink, w3SchoolLink, 
mdnDocs, freeCodeCampLink, reactTutorialLink, geeksForGeeksLink, createReactAppLink,
oracleJavaTutorialsLink, oracleJavaLanguageLink, mySQLReferenceLink, mySQLDownloadsLink,
githubLink, stackOverflowLink, pythonLink, python3DocsLink, python3TutorialLink, 
python3LibraryLink} from './Links';
import LinkButton from './LinkButton';
import LinkBreak from './LinkBreak';

function App() {
  return (
    <div className="App">
        <h1 className='heading-color'>Software Development Links</h1>
        <h3 className='heading-color'>Apple and Swift</h3>
        <LinkButton link={appleDocsLink}/><LinkButton link={swiftLanguageLink}/>
        <h3 className='heading-color'>Mobile Development</h3>
        <LinkButton link={rayWenderlichLink}/>
        <LinkBreak/><LinkButton link={androidDocsLink}/>
        <LinkBreak/><LinkButton link={w3SchoolLink}/><LinkButton link={mdnDocs}/><LinkButton link={freeCodeCampLink}/>
        <LinkBreak/><LinkButton link={reactTutorialLink}/><LinkButton link={createReactAppLink}/>
        <LinkBreak/><LinkButton link={geeksForGeeksLink}/>
        <LinkBreak/><LinkButton link={oracleJavaTutorialsLink}/><LinkButton link={oracleJavaLanguageLink}/>
        <LinkBreak/><LinkButton link={mySQLReferenceLink}/><LinkButton link={mySQLDownloadsLink}/>
        <LinkBreak/><LinkButton link={githubLink}/><LinkButton link={stackOverflowLink}/>
        <LinkBreak/><LinkButton link={pythonLink}/><LinkButton link={python3DocsLink}/>
        <LinkButton link={python3TutorialLink}/><LinkButton link={python3LibraryLink}/>
        <LinkBreak/>
    </div>
  );
}

export default App;

//<span className='text-on-background'>Java's docs for their api's can best be found on the oracle website through a search engine</span>

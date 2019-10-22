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
        <h3 className='heading-color'>Android Development</h3>
        <LinkButton link={androidDocsLink}/>
        <h3 className='heading-color'>Web Development</h3>
        <LinkButton link={w3SchoolLink}/><LinkButton link={mdnDocs}/><LinkButton link={freeCodeCampLink}/>
        <h3 className='heading-color'>React Web Framework</h3>
        <LinkButton link={reactTutorialLink}/><LinkButton link={createReactAppLink}/>
        <h3 className='heading-color'>All Purpose Coding</h3>
        <LinkButton link={geeksForGeeksLink}/>
        <h3 className='heading-color'>Java</h3>
        <LinkButton link={oracleJavaTutorialsLink}/><LinkButton link={oracleJavaLanguageLink}/>
        <h3 className='heading-color'>MySQL Database</h3>
        <LinkButton link={mySQLReferenceLink}/><LinkButton link={mySQLDownloadsLink}/>
        <h3 className='heading-color'>Github and Stack Overflow</h3>
        <LinkButton link={githubLink}/><LinkButton link={stackOverflowLink}/>
        <h3 className='heading-color'>Python</h3>
        <LinkButton link={pythonLink}/><LinkButton link={python3DocsLink}/>
        <LinkButton link={python3TutorialLink}/><LinkButton link={python3LibraryLink}/>
        <LinkBreak/>
    </div>
  );
}

export default App;

//<span className='text-on-background'>Java's docs for their api's can best be found on the oracle website through a search engine</span>

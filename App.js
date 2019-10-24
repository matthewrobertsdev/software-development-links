import React from 'react';
import './app.css';
import {appleDocsLink, swiftLanguageLink, rayWenderlichLink, androidDocsLink, w3SchoolLink, 
mdnDocs, freeCodeCampLink, reactTutorialLink, geeksForGeeksLink, createReactAppLink,
oracleJavaTutorialsLink, oracleJavaLanguageLink, mySQLReferenceLink, mySQLDownloadsLink,
githubLink, stackOverflowLink, pythonLink, python3DocsLink, python3TutorialLink, 
python3LibraryLink} from './Links';
import {appleDocsInfo, swiftLanguageInfo, rayWenderlichInfo} from './LinkInfos'
import LinkButton from './LinkButton';
import LinkBreak from './LinkBreak';
import LinkInfoView from './LinkInfoView';

function App() {
  return (
    <div className="App">
        <h1 className='heading-color'>Software Development Links: An Incomplete List</h1>
        <h1 className='heading-color'>The Summary</h1>
        <h2 className='heading-color h3-size'>Apple and Swift</h2>
        <LinkButton link={appleDocsLink}/><LinkButton link={swiftLanguageLink}/>
        <h2 className='heading-color h3-size'>Mobile Development</h2>
        <LinkButton link={rayWenderlichLink}/>
        <h2 className='heading-color h3-size'>Android Development</h2>
        <LinkButton link={androidDocsLink}/>
        <h2 className='heading-color h3-size'>Web Development</h2>
        <LinkButton link={w3SchoolLink}/><LinkButton link={mdnDocs}/><LinkButton link={freeCodeCampLink}/>
        <h2 className='heading-color h3-size'>React Web Framework</h2>
        <LinkButton link={reactTutorialLink}/><LinkButton link={createReactAppLink}/>
        <h2 className='heading-color h3-size'>All Purpose Coding</h2>
        <LinkButton link={geeksForGeeksLink}/>
        <h2 className='heading-color h3-size'>Java</h2>
        <LinkButton link={oracleJavaTutorialsLink}/><LinkButton link={oracleJavaLanguageLink}/>
        <h2 className='heading-color h3-size'>MySQL Database</h2>
        <LinkButton link={mySQLReferenceLink}/><LinkButton link={mySQLDownloadsLink}/>
        <h2 className='heading-color h3-size'>Github and Stack Overflow</h2>
        <LinkButton link={githubLink}/><LinkButton link={stackOverflowLink}/>
        <h2 className='heading-color h3-size'>Python</h2>
        <LinkButton link={pythonLink}/><LinkButton link={python3DocsLink}/>
        <LinkButton link={python3TutorialLink}/><LinkButton link={python3LibraryLink}/>
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

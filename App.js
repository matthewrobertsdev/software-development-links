import React from 'react';
import './app.css';
import {appleDocsLink} from './Links';
import LinkButton from './LinkButton';

function App() {
  return (
    <div className="App">
      
        <br></br><br></br><br></br>
        <LinkButton link={appleDocsLink}/>
        <a href='https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html' className='link-button'>
        Swift Language Documentation</a>
        <br></br><br></br><br></br>
        <a href='https://www.raywenderlich.com' className='link-button'>
        RayWenderlich.com</a>
        <br></br><br></br><br></br>
        <a href='https://developer.android.com' className='link-button'>
        Android Developers</a>
        <br></br><br></br><br></br>
        <a href='https://www.w3schools.com/' className='link-button'>
        w3schools</a>
        <a href='https://developer.mozilla.org/en-US/' className='link-button'>
        Mozilla Developer Network Documentation</a>
        <a href='https://www.freecodecamp.org' className='link-button'>
        Free Code Camp</a>
        <br></br><br></br><br></br>
        <a href='https://reactjs.org/tutorial/tutorial.html' className='link-button'>
        React JS Tutorial</a>
        <a href='https://github.com/facebook/create-react-app' className='link-button'>
        Create React App</a>
        <br></br><br></br><br></br>
        <a href='https://www.geeksforgeeks.org' className='link-button'>
        Geeks for Geeks</a>
        <br></br><br></br><br></br>
        <a href='https://docs.oracle.com/javase/tutorial/index.html' className='link-button'>
        Oracle's Java Learning Tutorials</a>
        <br></br><br></br><br></br>
        <a href='https://docs.oracle.com/javase/tutorial/java/index.html' className='link-button'>
        Oracle's Learning the Java Language Tutorials</a>
        <br></br><br></br><br></br>
        <a href='https://dev.mysql.com/doc/refman/8.0/en/' className='link-button'>
        MySQL reference manual</a>
        <a href='https://dev.mysql.com/downloads/' className='link-button'>
        MySQL downloads</a>
        <br></br><br></br><br></br>
        <a href='https://github.com/' className='link-button'>
        Github</a>
        <a href='https://stackoverflow.com' className='link-button'>
        Stack Overflow</a>
        <br></br><br></br><br></br>
        <a href='https://www.python.org' className='link-button'>
        Python</a>
        <a href='https://docs.python.org/3/' className='link-button'>
        Python 3 Docs</a>
        <a href='https://docs.python.org/3/tutorial/index.html' className='link-button'>
        Python 3 Tutorial</a>
        <a href='https://docs.python.org/3/library/index.html' className='link-button'>
        Python 3 Standard Library</a>
        <br></br><br></br><br></br>
    </div>
  );
}

export default App;

//<span className='text-on-background'>Java's docs for their api's can best be found on the oracle website through a search engine</span>

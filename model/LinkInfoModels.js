import {
    appleDocsLink, swiftLanguageLink, appleInterfaceLink, appStoreLink,
    rayWenderlichLink, androidDocsLink, w3SchoolLink,
    mdnDocsLink, freeCodeCampLink, reactTutorialLink, geeksForGeeksLink, createReactAppLink,
    oracleJavaTutorialsLink, oracleJavaLanguageLink, mySQLReferenceLink, mySQLDownloadsLink,
    githubLink, stackOverflowLink, pythonLink, python3DocsLink, python3TutorialLink,
    python3LibraryLink
} from './LinkModels';

class LinkInfoModel {
    linkModel
    info
    constructor(linkModel, info) {
        this.linkModel = linkModel;
        this.info = info
    }
}
export default LinkInfoModel;

export const appleDocsInfo = new LinkInfoModel(appleDocsLink,
    'Apple\'s docs for all things Apple.');
export const swiftLanguageInfo = new LinkInfoModel(swiftLanguageLink,
    'Swift is used by developers for writing apps for Apple devices.  It is open source.  '
    + 'This tutorial can be read cover to cover or gone through less thoroughly.');
export const appleInterfaceInfo = new LinkInfoModel(appleInterfaceLink,
    'Apple requests that developers of software for Apple\'s devices adhere to these '+
    'guideleines for the user interface.');
export const appStoreInfo = new LinkInfoModel(appStoreLink,
    'Apple\'s requirements for apps on their app stores.');
export const rayWenderlichInfo = new LinkInfoModel(rayWenderlichLink,
    'Great tutorials for developing for iOS or Android.');
export const androidInfo = new LinkInfoModel(androidDocsLink,
    'Android Documentation for Developers');
export const w3SchoolsInfo = new LinkInfoModel(w3SchoolLink,
    'Simple guides to web development concepts.');
export const mdnDocsInfo = new LinkInfoModel(mdnDocsLink,
    'Comprehensive documentation for html, css, and javascript.');
export const fccInfo = new LinkInfoModel(freeCodeCampLink,
    'Great exercise based learning and practice for web development.');
export const reactTutorialInfo = new LinkInfoModel(reactTutorialLink,
    'Introduction to JSX and React with this tutorial.');
export const createReactAppInfo = new LinkInfoModel(createReactAppLink,
    'Github page for Create React App, a development tool for making apps with React easy.');
export const stackOverflowInfo = new LinkInfoModel(stackOverflowLink,
    'Questions and anwers about coding, with voting on questions and answers and stored ' +
    'questions and answers from the past.');
export const geaksForGeeksInfo = new LinkInfoModel(geeksForGeeksLink,
    'Useful overviews of such topics as individual data structures.');
export const javaTutorialInfo = new LinkInfoModel(oracleJavaTutorialsLink,
    'Link to overview of Java tutorials by Oracle.  Individual API\'s are more easily ' +
    'accessible by search engine.');
export const javaLanguageInfo = new LinkInfoModel(oracleJavaLanguageLink,
    'Tutorial on the Java computer language that can help get you coding.');
export const mySQLReferenceInfo = new LinkInfoModel(mySQLReferenceLink,
    'Documentation on MySQL and using MySQL that contains a tutorial that ' +
    'teaches you the commands for working with a MySQL database.');
export const mySQLDownloadsInfo = new LinkInfoModel(mySQLDownloadsLink,
    'You can download MySQL (the MySQL server) and other software such as the MySQL ' +
    'Workbench GUI.');
export const githubInfo = new LinkInfoModel(githubLink,
    'A website for storing code repositories under the Git version control system.');
export const python3Info = new LinkInfoModel(pythonLink,
    'Python.org is the home page of Python.');
export const python3DocsInfo = new LinkInfoModel(python3DocsLink,
    'Home of the python 3 official documentation.');
export const python3TutorialInfo = new LinkInfoModel(python3TutorialLink,
    'The tutorial on the python language.  It can be read cover to cover or less ' +
    'throughly, but some topics expect you to have read previous topics.');
export const python3LibraryInfo = new LinkInfoModel(python3LibraryLink,
    'The documentation for the Python 3 library, which has all of the built-in language features.');
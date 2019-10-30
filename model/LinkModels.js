class LinkModel{
    url
    title
    constructor(url, title){
        this.url=url
        this.title=title
    }
}
export default LinkModel;

export const appleDocsLink = new LinkModel('https://developer.apple.com/documentation/',
    'Apple Docs');
export const swiftLanguageLink = new LinkModel('https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html',
    'Swift Docs');
export const appleInterfaceLink=new LinkModel('https://developer.apple.com/design/human-interface-guidelines/',
    'Apple Human Interface')
export const appStoreLink=new LinkModel('https://developer.apple.com/app-store/review/guidelines/#performance',
    'App Store Info')
export const rayWenderlichLink = new LinkModel('https://www.raywenderlich.com',
    'RayWenderlich.com');
export const androidDocsLink = new LinkModel('https://developer.android.com',
    'Android Docs');
export const w3SchoolLink = new LinkModel('https://www.w3schools.com/',
    'w3schools');
export const mdnDocsLink = new LinkModel('https://developer.mozilla.org/en-US/',
    'Mozilla Docs');
export const freeCodeCampLink = new LinkModel('https://www.freecodecamp.org',
    'Free Code Camp');
export const reactTutorialLink = new LinkModel('https://reactjs.org/tutorial/tutorial.html',
    'React JS Tutorial');
export const createReactAppLink = new LinkModel('https://github.com/facebook/create-react-app',
    'Create React App');
export const geeksForGeeksLink = new LinkModel('https://www.geeksforgeeks.org',
    'Geeks for Geeks');
export const oracleJavaTutorialsLink = new LinkModel('https://docs.oracle.com/javase/tutorial/index.html',
    'Oracle\'s Java Tutorials');
export const oracleJavaLanguageLink = new LinkModel('https://docs.oracle.com/javase/tutorial/java/index.html',
    'Java Language');
export const mySQLReferenceLink = new LinkModel('https://dev.mysql.com/doc/refman/8.0/en/',
    'MySQL Docs');
export const mySQLDownloadsLink = new LinkModel('https://dev.mysql.com/downloads/',
    'MySQL Downloads');
export const githubLink = new LinkModel('https://github.com/',
    'Github');
export const stackOverflowLink = new LinkModel('https://stackoverflow.com',
    'Stack Overflow');
export const pythonLink = new LinkModel('https://www.python.org',
    'Python');
export const python3DocsLink = new LinkModel('https://docs.python.org/3/',
    'Python 3 Docs');
export const python3TutorialLink = new LinkModel('https://docs.python.org/3/tutorial/index.html',
    'Python 3 Tutorial');
export const python3LibraryLink = new LinkModel('https://docs.python.org/3/library/index.html',
    'Python 3 Library');

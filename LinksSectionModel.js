import {
    appleDocsLink, swiftLanguageLink, rayWenderlichLink, androidDocsLink, w3SchoolLink,
    mdnDocs, freeCodeCampLink, reactTutorialLink, geeksForGeeksLink, createReactAppLink,
    oracleJavaTutorialsLink, oracleJavaLanguageLink, mySQLReferenceLink, mySQLDownloadsLink,
    githubLink, stackOverflowLink, pythonLink, python3DocsLink, python3TutorialLink,
    python3LibraryLink
} from './LinkModels';

class LinksSectionModel {
    title
    links = []
    constructor(title, links) {
        this.title = title;
        this.links = links;
    }
}
export default LinksSectionModel;

export const appleAndSwiftInfo = new LinksSectionModel('Apple and Swift', [appleDocsLink, swiftLanguageLink]);

export const mobileInfo = new LinksSectionModel('Mobile Development', [rayWenderlichLink])

export const androidInfo = new LinksSectionModel('Android Development', [androidDocsLink])

export const webInfo = new LinksSectionModel('Web Development', [w3SchoolLink, mdnDocs, freeCodeCampLink])

export const reactInfo = new LinksSectionModel('React Web Framework', [reactTutorialLink, createReactAppLink])

export const allPurposeInfo = new LinksSectionModel('All Purpose Coding', [stackOverflowLink, geeksForGeeksLink])

export const javaInfo = new LinksSectionModel('Java', [oracleJavaTutorialsLink, oracleJavaLanguageLink])

export const mySQLInfo = new LinksSectionModel('MySQL Database', [mySQLReferenceLink, mySQLDownloadsLink])

export const githubInfo = new LinksSectionModel('Github', [githubLink])

export const pythonInfo = new LinksSectionModel('Python', [pythonLink, python3DocsLink,
    python3TutorialLink, python3LibraryLink])
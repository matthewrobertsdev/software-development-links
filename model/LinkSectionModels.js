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

export const appleAndSwiftModel = new LinksSectionModel('Apple and Swift', [appleDocsLink, swiftLanguageLink]);

export const mobileModel = new LinksSectionModel('Mobile Development', [rayWenderlichLink])

export const androidModel = new LinksSectionModel('Android Development', [androidDocsLink])

export const webModel = new LinksSectionModel('Web Development', [w3SchoolLink, mdnDocs, freeCodeCampLink])

export const reactModel = new LinksSectionModel('React Web Framework', [reactTutorialLink, createReactAppLink])

export const allPurposeModel = new LinksSectionModel('All Purpose Coding', [stackOverflowLink, geeksForGeeksLink])

export const javaModel = new LinksSectionModel('Java', [oracleJavaTutorialsLink, oracleJavaLanguageLink])

export const mySQLModel = new LinksSectionModel('MySQL Database', [mySQLReferenceLink, mySQLDownloadsLink])

export const githubModel = new LinksSectionModel('Github', [githubLink])

export const pythonModel = new LinksSectionModel('Python', [pythonLink, python3DocsLink,
    python3TutorialLink, python3LibraryLink])
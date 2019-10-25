import {
    appleDocsLink, swiftLanguageLink, rayWenderlichLink, androidDocsLink, w3SchoolLink,
    mdnDocs, freeCodeCampLink, reactTutorialLink, geeksForGeeksLink, createReactAppLink,
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

export const rayWenderlichInfo = new LinkInfoModel(rayWenderlichLink,
    'Great tutorials for developing for iOS or Android.');
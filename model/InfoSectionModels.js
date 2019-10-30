import {appleDocsInfo, swiftLanguageInfo, appleInterfaceInfo, appStoreInfo,
    rayWenderlichInfo, androidInfo,
    w3SchoolsInfo, mdnDocsInfo, fccInfo, reactTutorialInfo, createReactAppInfo,
    stackOverflowInfo, geaksForGeeksInfo, javaTutorialInfo, javaLanguageInfo,
    mySQLReferenceInfo, mySQLDownloadsInfo, githubInfo, python3Info, python3DocsInfo, 
    python3TutorialInfo, python3LibraryInfo
} from './LinkInfoModels';

class InfoSectionModel {
    title
    infos = []
    constructor(title, infos) {
        this.title = title;
        this.infos = infos;
    }
}
export default InfoSectionModel;

export const appleAndSwiftInfo=new InfoSectionModel('Apple and Swift', [appleDocsInfo, swiftLanguageInfo,
    appleInterfaceInfo, appStoreInfo]);
export const mobileInfo=new InfoSectionModel('Mobile Development', [rayWenderlichInfo]);
export const androidSectionInfo=new InfoSectionModel('Android Development', [androidInfo]);
export const webInfo=new InfoSectionModel('Web Development', [w3SchoolsInfo, mdnDocsInfo, fccInfo]);
export const reactInfo=new InfoSectionModel('React', [reactTutorialInfo, createReactAppInfo]);
export const allPurposeInfo=new InfoSectionModel('All Purpose Info', [stackOverflowInfo, geaksForGeeksInfo]);
export const javaInfo=new InfoSectionModel('Java', [javaTutorialInfo, javaLanguageInfo]);
export const mySQLInfo=new InfoSectionModel('MySQL', [mySQLReferenceInfo, mySQLDownloadsInfo]);
export const sourceControlInfo=new InfoSectionModel('Github', [githubInfo]);
export const pythonInfo=new InfoSectionModel('Python', [python3Info, python3DocsInfo, python3TutorialInfo,
    python3LibraryInfo]);
export const infoSectionArray=[appleAndSwiftInfo, mobileInfo, androidSectionInfo, webInfo, reactInfo,
    allPurposeInfo, javaInfo, mySQLInfo, sourceControlInfo, pythonInfo];
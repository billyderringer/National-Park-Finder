import React, {Component} from 'react';
import Filters from "./filters";
import ResultsContainer from './resultsContainer';
import '../loader.css'

let flex = {
    mainFlex: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    contentFlex: {
        flex: 1,
        display: 'flex',
        overflow: 'auto'
    },
    boxFlex: {
        display: 'flex',
        minHeight: 'min-content',
    },
    colFlex: {
        height: '40vh'
    }
}

let thumbnails = {
    states: [{
        AL: {
            parks: [
                {
                    'bicr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop1_1/5CB98FCB-1DD8-B71B-0BBCEFAF744A95BA.jpg?width=150mode=crop&quality=90'}
                    }
                },
                {
                    'frri': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/57AD71FF-1DD8-B71B-0B7DA69E398FFDCC.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'hobe': {
                        images: {url: 'https://www.nps.gov/hobe/learn/images/Ft-Rucker_20170921-2.jpg?width=150'}
                    }
                },
                {
                    'liri': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/BF7538BA-1DD8-B71B-0B9E1050C72B900D.JPG?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'mush': {
                        images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/B55F2937-1DD8-B71C-07E6412730871CB3.jpg'}
                    }
                },
                {
                    'natt': {
                        images: {url: 'https://www.nps.gov/natr/planyourvisit/images/Riding_the_NATT_200x285.jpg?width=150'}
                    }
                },
                {
                    'natr': {
                        images: {url: 'https://drive.google.com/uc?id=10MKxjVbEtVR2k4pvA_Qo6XKaWoLHTwoT'}
                    }
                },
                {
                    'ruca': {
                        images: {url: 'https://www.nps.gov/common/uploads/akr/park/ruca/87D90EFD-1DD8-B71C-0728B473E7318167/87D90EFD-1DD8-B71C-0728B473E7318167.jpg?width=150'}
                    }
                },
                {
                    'semo': {
                        images: {url: 'https://www.nps.gov/common/uploads/stories/images/nri/20160404/articles/D2D85D6B-1DD8-B71B-0B6DA800594AE200/D2D85D6B-1DD8-B71B-0B6DA800594AE200.jpg?width=150'}
                    }
                },
                {
                    'trte': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/5CB488EB-155D-451F-67AFDFC9DEBE3052/Thumb/XLarge?'}
                    }
                },
                {
                    'tuai': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/D5D382F9-1DD8-B71B-0BD119966CF5648F.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'tuin': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/074F06D8-1DD8-B71B-0B461E3882FF1377.jpg?width=150&quality=90&mode=crop'}
                    }
                }
            ]
        },
        AK: {
            parks: [
                {
                    'alag': {
                        images: {url: 'https://drive.google.com/uc?id=1GTfFOmcMu6QRwIBEEsu0zNjwfIOi_mHA'}
                    }
                },
                {
                    'anch': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'aleu': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'ania': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'bela': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'cakr': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'dena': {
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'gaar': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'glba': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'inup': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop1_1/C2A500E0-1DD8-B71B-0BB496B34A45EA70.jpg?width=150&mode=crop&quality=90'}
                    }
                },
                {
                    'katm': {
                        images: {url: 'https://www.nps.gov/common/uploads/structured_data/3C7A32DB-1DD8-B71B-0B37F66E9D0832AF.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'kefj': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/CD22352B-1DD8-B71B-0BC867B506B4AF1C.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'klgo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/77491BBF-1DD8-B71B-0BDFAFFAA560A56F.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'kova': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6CF4FA58-1DD8-B71B-0BEBB8C9680A2589.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'lacl': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'noat': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'sitk': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }
                },
                {
                    'valr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'wrst': {
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }
                },
                {
                    'yuch': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }
                }
            ]
        },
        AZ: {
            parks: [
                {
                    'cach': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/CACH-Antelope_House_26c8c41e1b75402c961e29fa1504511f.jpg/800px-CACH-Antelope_House_26c8c41e1b75402c961e29fa1504511f.jpg'}
                    }
                },
                {
                    'cagr': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'chir': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'coro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'fobo': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'glca': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'grca': {
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'pima': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'hutr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'juba': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop1_1/C2A500E0-1DD8-B71B-0BB496B34A45EA70.jpg?width=150&mode=crop&quality=90'}
                    }
                },
                {
                    'lake': {
                        images: {url: 'https://www.nps.gov/common/uploads/structured_data/3C7A32DB-1DD8-B71B-0B37F66E9D0832AF.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'moca': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/CD22352B-1DD8-B71B-0BC867B506B4AF1C.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'nava': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/77491BBF-1DD8-B71B-0BDFAFFAA560A56F.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'olsp': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6CF4FA58-1DD8-B71B-0BEBB8C9680A2589.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'orpi': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'para': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'pefo': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }
                },
                {
                    'pisp': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'sagu': {
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }
                },
                {
                    'sucr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'tont': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'tuma': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'tuzi': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }
                },
                {
                    'waca': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'wupa': {
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }
                },
                {
                    'yucr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }
                }
            ]
        },
        AR: {
            parks: [
                {
                    'arpo': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'buff': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'fosm': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'hosp': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'chsc': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'peri': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'wicl': {
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'trte': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        CA: {
            parks: [
                {
                    'alca': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'cabr': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'cali': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'camo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'cech': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'chis': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'deva': {
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'depo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'euon': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'fopo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop1_1/C2A500E0-1DD8-B71B-0BB496B34A45EA70.jpg?width=150&mode=crop&quality=90'}
                    }
                },
                {
                    'goga': {
                        images: {url: 'https://www.nps.gov/common/uploads/structured_data/3C7A32DB-1DD8-B71B-0B37F66E9D0832AF.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'jomu': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/CD22352B-1DD8-B71B-0BC867B506B4AF1C.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'jotr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/77491BBF-1DD8-B71B-0BDFAFFAA560A56F.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'juba': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6CF4FA58-1DD8-B71B-0BEBB8C9680A2589.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'lavo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'labe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'manz': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }
                },
                {
                    'moja': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'muwo': {
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }
                },
                {
                    'olsp': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'pinn': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'pore': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'poex': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }
                },
                {
                    'poch': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'prsf': {
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }
                },
                {
                    'redw': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'rori': {
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }
                },
                {
                    'safr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'samo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'seki': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'tule': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }
                },
                {
                    'whis': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'valr': {
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }
                },
                {
                    'yose': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }
                }
            ]
        },
        CO: {
            parks: [
                {
                    'beol': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'blca': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'cala': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'cali': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'colm': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'cure': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'dino': {
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'flfo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'grsa': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'hove': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop1_1/C2A500E0-1DD8-B71B-0BB496B34A45EA70.jpg?width=150&mode=crop&quality=90'}
                    }
                },
                {
                    'meve': {
                        images: {url: 'https://www.nps.gov/common/uploads/structured_data/3C7A32DB-1DD8-B71B-0B37F66E9D0832AF.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'olsp': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/CD22352B-1DD8-B71B-0BC867B506B4AF1C.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'poex': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/77491BBF-1DD8-B71B-0BDFAFFAA560A56F.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'romo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6CF4FA58-1DD8-B71B-0BEBB8C9680A2589.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'sand': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'safe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'yuho': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }
                }
            ]
        },
        CT: {
            parks: [
                {
                    'appa': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'colt': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'neen': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'qush': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'wefa': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                }
            ]
        },
        DE: {
            parks: [
                {
                    'cajo': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'frst': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                }
            ]
        },
        FL: {
            parks: [
                {
                    'bicy': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'bisc': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'cana': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'casa': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'deso': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'drto': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'ever': {
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'foma': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'guis': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'guge': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop1_1/C2A500E0-1DD8-B71B-0BB496B34A45EA70.jpg?width=150&mode=crop&quality=90'}
                    }
                },
                {
                    'timu': {
                        images: {url: 'https://www.nps.gov/common/uploads/structured_data/3C7A32DB-1DD8-B71B-0B37F66E9D0832AF.jpg?width=150&quality=90&mode=crop'}
                    }
                }
            ]
        },
        GA: {
            parks: [
                {
                    'ande': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'appa': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'armo': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'auca': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'chat': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'chch': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'cuis': {
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'fofr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'fopu': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'guge': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop1_1/C2A500E0-1DD8-B71B-0BB496B34A45EA70.jpg?width=150&mode=crop&quality=90'}
                    }
                },
                {
                    'jica': {
                        images: {url: 'https://www.nps.gov/common/uploads/structured_data/3C7A32DB-1DD8-B71B-0B37F66E9D0832AF.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'kemo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/CD22352B-1DD8-B71B-0BC867B506B4AF1C.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'malu': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/77491BBF-1DD8-B71B-0BDFAFFAA560A56F.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'ocmu': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6CF4FA58-1DD8-B71B-0BEBB8C9680A2589.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'trte': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }
                }
            ]
        },
        HI: {
            parks: [
                {
                    'alka': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'hale': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'havo': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'hono': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'kala': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'kaho': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'puho': {
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'puhe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'valr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }
                }
            ]
        },
        ID: {
            parks: [
                {
                    'cali': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'ciro': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'crmo': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'hafo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'iafl': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'miin': {
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'nepe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'oreg': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'yell': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }
                }
            ]
        },
        IL: {
            parks: [
                {
                    'lecl': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'liho': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'mopi': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'pull': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'trte': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                }
            ]
        },
        IN: {
            parks: [
                {
                    'gero': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'indu': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'libo': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                }
            ]
        },
        IA: {
            parks: [
                {
                    'efmo': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'heho': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'mopi': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        KS: {
            parks: [
                {
                    'brvb': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'cali': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'fols': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'fosc': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'nico': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'oreg': {
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'poex': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'safe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'tapr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }
                }
            ]
        },
        KY: {
            parks: [
                {
                    'abli': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'biso': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'cuga': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'fodo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'maca': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'trte': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                }
            ]
        },
        LA: {
            parks: [
                {
                    'attr': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'cari': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'crha': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'elte': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'jela': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'jazz': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'popo': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'vick': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                }
            ]
        },
        ME: {
            parks: [
                {
                    'acad': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'appa': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'kaww': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'maac': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'roca': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'sacr': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                }
            ]
        },
        MD: {
            parks: [
                {
                    'anti': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'appa': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'asis': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'balt': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'bawa': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'cajo': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'cato': {
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'choh': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'cbpo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'cbgn': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop1_1/C2A500E0-1DD8-B71B-0BB496B34A45EA70.jpg?width=150&mode=crop&quality=90'}
                    }
                },
                {
                    'cwdw': {
                        images: {url: 'https://www.nps.gov/common/uploads/structured_data/3C7A32DB-1DD8-B71B-0B37F66E9D0832AF.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'clba': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/CD22352B-1DD8-B71B-0BC867B506B4AF1C.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'fofo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/77491BBF-1DD8-B71B-0BDFAFFAA560A56F.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'fomc': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6CF4FA58-1DD8-B71B-0BEBB8C9680A2589.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'fowa': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'gwmp': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'glec': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }
                },
                {
                    'gree': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'hamp': {
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }
                },
                {
                    'haha': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'hafe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'hatu': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'jthg': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }
                },
                {
                    'mono': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'oxhi': {
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }
                },
                {
                    'pisc': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'pohe': {
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }
                },
                {
                    'stsp': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'thst': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }
                }
            ]
        },
        MA: {
            parks: [
                {
                    'adam': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'appa': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'blrv': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'boaf': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'boha': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'bost': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'caco': {
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'esse': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'frla': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'jofi': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop1_1/C2A500E0-1DD8-B71B-0BB496B34A45EA70.jpg?width=150&mode=crop&quality=90'}
                    }
                },
                {
                    'blac': {
                        images: {url: 'https://www.nps.gov/common/uploads/structured_data/3C7A32DB-1DD8-B71B-0B37F66E9D0832AF.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'long': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/CD22352B-1DD8-B71B-0BC867B506B4AF1C.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'lowe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/77491BBF-1DD8-B71B-0BDFAFFAA560A56F.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'mima': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6CF4FA58-1DD8-B71B-0BEBB8C9680A2589.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'nebe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'neen': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'sama': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }
                },
                {
                    'sair': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'spar': {
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }
                },
                {
                    'qush': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }
                }
            ]
        },
        MI: {
            parks: [
                {
                    'isro': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'kewe': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'auto': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'noco': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'piro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'rira': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'slbe': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                }
            ]
        },
        MN: {
            parks: [
                {
                    'grpo': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'miss': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'noco': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'pipe': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'sacn': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'voya': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                }
            ]
        },
        MS: {
            parks: [
                {
                    'brcr': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'guis': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'mide': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'migu': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'mihi': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'natc': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'natt': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'natr': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'shil': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'tupe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'vick': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                }
            ]
        },
        MO: {
            parks: [
                {
                    'cali': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'jeff': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'gwca': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'hstr': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'oreg': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'ozar': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'poex': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'safe': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'trte': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'ulsg': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'wicr': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                }
            ]
        },
        MT: {
            parks: [
                {
                    'biho': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'bica': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'fous': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'glac': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'grko': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'iafl': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'libi': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'nepe': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'yell': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        NE: {
            parks: [
                {
                    'agfo': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'cali': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'home': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'mnrr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'mopi': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'niob': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'oreg': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'poex': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'scbl': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        NV: {
            parks: [
                {
                    'cali': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'deva': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'grba': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'lake': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'olsp': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'poex': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'tusk': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                }
            ]
        },
        NH: {
            parks: [
                {
                    'appa': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'saga': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                }
            ]
        },
        NJ: {
            parks: [
                {
                    'appa': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'xrds': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'dela': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'dewa': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'elis': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'gate': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'greg': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'lode': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'morr': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'neje': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'pine': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'pagr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'edis': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                }
            ]
        },
        NM: {
            parks: [
                {
                    'azru': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'band': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'cavo': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'cave': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'chcu': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'elca': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'elma': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'elmo': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'foun': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'gicl': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'mapr': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'norg': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'olsp': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'peco': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'petr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'sapu': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'safe': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'vall': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'whsa': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                }
            ]
        },
        NY: {
            parks: [
                {
                    'afbg': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'appa': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'cajo': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'cacl': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'chva': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'cbpo': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'cbgn': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'elro': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'elis': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'erie': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'feha': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'fiis': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'fost': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'gate': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'gegr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'gois': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'hagr': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'hart': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'hofr': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'hurv': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'loea': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'mava': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'npnh': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'nifa': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'noco': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'sahi': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'sapa': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'sara': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'stli': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'ston': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'thrb': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'thri': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'thco': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'upde': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'vama': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'wori': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        NC: {
            parks: [
                {
                    'appa': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'blrn': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'blri': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'caha': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'calo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'carl': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'fora': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'grsm': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'guco': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'guge': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'mocr': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'ovvi': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'trte': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'wrbr': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                }
            ]
        },
        ND: {
            parks: [
                {
                    'fous': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'knri': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'noco': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'thro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        OH: {
            parks: [
                {
                    'chyo': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'cuva': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'dabe': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'daav': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'fati': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'fila': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'hocu': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'jaga': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'avia': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'noco': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'pevi': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'wiho': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        OK: {
            parks: [
                {
                    'chic': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'fosm': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'okci': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'safe': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'trte': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'waba': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                }
            ]
        },
        OR: {
            parks: [
                {
                    'cali': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'crla': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'fova': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'iafl': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'joda': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'lewi': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'nepe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'orca': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'oreg': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                }
            ]
        },
        PA: {
            parks: [
                {
                    'alpo': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'appa': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'cajo': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'cbpo': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'cbgn': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'dele': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'dela': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'dewa': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'edal': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'eise': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'frst': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'flni': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'fone': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'frhi': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'gett': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'glde': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'hofu': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'inde': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'jofl': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'jthg': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'lode': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'noco': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'oire': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'pohe': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'rist': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'scrv': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'stea': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'thko': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'upde': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'vafo': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                }
            ]
        },
        RI: {
            parks: [
                {
                    'blrv': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'blac': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'rowi': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'tosy': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        SC: {
            parks: [
                {
                    'chpi': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'cong': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'cowp': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'fosu': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'guge': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'kimo': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'nisi': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'ovvi': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'reer': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'soca': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        SD: {
            parks: [
                {
                    'badl': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'jeca': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'mimi': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'mnrr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'moru': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'wica': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                }
            ]
        },
        TN: {
            parks: [
                {
                    'anjo': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'appa': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'biso': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'chch': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'cuga': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'fodo': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'grsm': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'mapr': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'natt': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'natr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'obed': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'ovvi': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'shil': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'stri': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'tecw': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'trte': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        TX: {
            parks: [
                {
                    'alfl': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'amis': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'bibe': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'bith': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'cham': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'elte': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'elca': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'foda': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'gumo': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'lamr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'lyjo': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'pais': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'paal': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'rigr': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'saan': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'waco': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        UT: {
            parks: [
                {
                    'arch': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'brca': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'cali': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'cany': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'care': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'cebr': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'dino': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'glca': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'gosp': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'hove': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'mopi': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'nabr': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'olsp': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'poex': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'rabr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'tica': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'zion': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        VT: {
            parks: [
                {
                    'appa': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'chva': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'mabi': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                }
            ]
        },
        VA: {
            parks: [
                {
                    'appa': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'apco': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'arho': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'asis': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'blri': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'bowa': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'came': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'cajo': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'cebe': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'cbpo': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'cbgn': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'cwdw': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'clmo': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'colo': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'cuga': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'fomr': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'frsp': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'gewa': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'gwmp': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'grfa': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'grsp': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'hafe': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'jame': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'jthg': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'mawa': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'mana': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'ovvi': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'pete': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'pohe': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'prwi': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'rich': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'shen': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'shvb': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'stsp': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'wotr': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'york': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        WA: {
            parks: [
                {
                    'ebla': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'fova': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'iafl': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'klse': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'laro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'lewi': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'mapr': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'miin': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'mora': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'nepe': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'noca': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'olym': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'oreg': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'sajh': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'whmi': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'wing': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        WV: {
            parks: [
                {
                    'appa': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'blue': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'choh': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'cbpo': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'cbgn': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'coal': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'gari': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'hafe': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'jthg': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'neri': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'whee': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                }
            ]
        },
        WI: {
            parks: [
                {
                    'apis': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'iatr': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'noco': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'sacn': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                }
            ]
        },
        WY: {
            parks: [
                {
                    'bica': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'cali': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'deto': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'fola': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'fobu': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'grte': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'mopi': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'oreg': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'poex': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'yell': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        GU: {
            parks: [
                {
                    'wapa': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                }
            ]
        },
        PR: {
            parks: [
                {
                    'saju': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                }
            ]
        },
        VI: {
            parks: [
                {
                    'buis': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'chri': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'sari': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'vicr': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'viis': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                }
            ]
        }
    }]
}

class Content extends Component {

    liftLocationChange({target}) {
        this.props.handleChangeLocation(target.value)
    }

    render() {
        return (
            <div className="col-12" style={{
                backgroundColor: this.props.style.colors.opaqueBlack,
                padding: '20px 5px 5px 20px', marginBottom: '10px'
            }}>
                <div className="row">
                    <div className="col-3" style={{
                        display: 'flex',
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Filters flex={flex} onChange={this.liftLocationChange.bind(this)}
                                 handleChangeLocation={this.props.handleChangeLocation}
                                 location={this.props.location}
                                 style={this.props.style}/>
                    </div>
                    <div className="col-9">
                        <h2 style={{
                            color: this.props.style.colors.white,
                            fontSize: '1em',
                            margin: '50px 20px 30px 0',
                            float: 'right'
                        }}>

                            {this.props.serverData.parks && this.props.serverData.parks.length} Results Found</h2>

                        < ResultsContainer thumbnail={thumbnails.states[0]} location={this.props.location}
                                           parks={this.props.serverData.parks} style={this.props.style}/>
                    </div>
                </div>
            </div>
        );
    };
}

export default Content;
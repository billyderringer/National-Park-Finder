import React, {Component} from 'react';
import Filters from "./filters";
import ResultsContainer from './resultsContainer';

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
        AL: {parks:[
                {'bicr':{
                        images: {url:'https://www.nps.gov/common/uploads/grid_builder/akr/crop1_1/5CB98FCB-1DD8-B71B-0BBCEFAF744A95BA.jpg?width=150mode=crop&quality=90'}
                    }},
                {'frri':{
                        images: {url:'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/57AD71FF-1DD8-B71B-0B7DA69E398FFDCC.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'hobe':{
                        images: {url: 'https://www.nps.gov/hobe/learn/images/Ft-Rucker_20170921-2.jpg?width=150'}
                    }},
                {'liri':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/BF7538BA-1DD8-B71B-0B9E1050C72B900D.JPG?width=150&quality=90&mode=crop'}
                    }},
                {'mush':{
                        images: {url: 'https://www.nps.gov/customcf/apps/CMS_HandF/ParkSearchPics/B55F2937-1DD8-B71C-07E6412730871CB3.jpg'}
                    }},
                {'natt':{
                        images: {url: 'https://www.nps.gov/natr/planyourvisit/images/Riding_the_NATT_200x285.jpg?width=150'}
                    }},
                {'natr':{
                        images: {url: 'https://drive.google.com/uc?id=10MKxjVbEtVR2k4pvA_Qo6XKaWoLHTwoT'}
                    }},
                {'ruca':{
                        images: {url: 'https://www.nps.gov/common/uploads/akr/park/ruca/87D90EFD-1DD8-B71C-0728B473E7318167/87D90EFD-1DD8-B71C-0728B473E7318167.jpg?width=150'}
                    }},
                {'semo':{
                        images: {url: 'https://www.nps.gov/common/uploads/stories/images/nri/20160404/articles/D2D85D6B-1DD8-B71B-0B6DA800594AE200/D2D85D6B-1DD8-B71B-0B6DA800594AE200.jpg?width=150'}
                    }},
                {'trte':{
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/5CB488EB-155D-451F-67AFDFC9DEBE3052/Thumb/XLarge?'}
                    }},
                {'tuai':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/D5D382F9-1DD8-B71B-0BD119966CF5648F.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'tuin': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/074F06D8-1DD8-B71B-0B461E3882FF1377.jpg?width=150&quality=90&mode=crop'}
                    }}
            ]},
        AK: {parks:[
                {'alag':{
                        images: {url:'https://drive.google.com/uc?id=1GTfFOmcMu6QRwIBEEsu0zNjwfIOi_mHA'}
                    }},
                {'anch':{
                        images: {url:'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }},
                {'aleu':{
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }},
                {'ania':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'bela':{
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }},
                {'cakr':{
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }},
                {'dena':{
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }},
                {'gaar':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'glba':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }},
                {'inup':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop1_1/C2A500E0-1DD8-B71B-0BB496B34A45EA70.jpg?width=150&mode=crop&quality=90'}
                    }},
                {'katm':{
                        images: {url: 'https://www.nps.gov/common/uploads/structured_data/3C7A32DB-1DD8-B71B-0B37F66E9D0832AF.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'kefj': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/CD22352B-1DD8-B71B-0BC867B506B4AF1C.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'klgo':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/77491BBF-1DD8-B71B-0BDFAFFAA560A56F.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'kova':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6CF4FA58-1DD8-B71B-0BEBB8C9680A2589.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'lacl': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'noat':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'sitk':{
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }},
                {'valr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'wrst':{
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }},
                {'yuch':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }}
            ]},
        AZ: {parks:[
                {'cach':{
                        images: {url:'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }},
                {'cagr':{
                        images: {url:'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }},
                {'chir':{
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }},
                {'coro':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'fobo':{
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }},
                {'glca':{
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }},
                {'grca':{
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }},
                {'pima':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'hutr':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }},
                {'juba':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop1_1/C2A500E0-1DD8-B71B-0BB496B34A45EA70.jpg?width=150&mode=crop&quality=90'}
                    }},
                {'lake':{
                        images: {url: 'https://www.nps.gov/common/uploads/structured_data/3C7A32DB-1DD8-B71B-0B37F66E9D0832AF.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'moca': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/CD22352B-1DD8-B71B-0BC867B506B4AF1C.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'nava':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/77491BBF-1DD8-B71B-0BDFAFFAA560A56F.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'olsp':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6CF4FA58-1DD8-B71B-0BEBB8C9680A2589.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'orpi': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'para':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'pefo':{
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }},
                {'pisp': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'sagu':{
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }},
                {'sucr':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'tont': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'tuma':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'tuzi':{
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }},
                {'waca': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'wupa':{
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }},
                {'yucr':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }}
            ]},
        AR: {parks:[
                {'arpo':{
                        images: {url:'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }},
                {'buff':{
                        images: {url:'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }},
                {'fosm':{
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }},
                {'hosp':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'chsc':{
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }},
                {'peri':{
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }},
                {'wicl':{
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }},
                {'trte':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }}
            ]},
        CA: {parks:[
                {'alca':{
                        images: {url:'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }},
                {'cabr':{
                        images: {url:'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }},
                {'cali':{
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }},
                {'camo':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'cech':{
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }},
                {'chis':{
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }},
                {'deva':{
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }},
                {'depo':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'euon':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }},
                {'fopo':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop1_1/C2A500E0-1DD8-B71B-0BB496B34A45EA70.jpg?width=150&mode=crop&quality=90'}
                    }},
                {'goga':{
                        images: {url: 'https://www.nps.gov/common/uploads/structured_data/3C7A32DB-1DD8-B71B-0B37F66E9D0832AF.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'jomu': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/CD22352B-1DD8-B71B-0BC867B506B4AF1C.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'jotr':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/77491BBF-1DD8-B71B-0BDFAFFAA560A56F.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'juba':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6CF4FA58-1DD8-B71B-0BEBB8C9680A2589.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'lavo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'labe':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'manz':{
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }},
                {'moja': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'muwo':{
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }},
                {'olsp':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'pinn': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'pore':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'poex':{
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }},
                {'poch': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'prsf':{
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }},
                {'redw':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'rori':{
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }},
                {'safr':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'samo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'seki':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'tule':{
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }},
                {'whis': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'valr':{
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }},
                {'yose':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }}
            ]},
        CO: {parks:[
                {'beol':{
                        images: {url:'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }},
                {'blca':{
                        images: {url:'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }},
                {'cala':{
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }},
                {'cali':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'colm':{
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }},
                {'cure':{
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }},
                {'dino':{
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }},
                {'flfo':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'grsa':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }},
                {'hove':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop1_1/C2A500E0-1DD8-B71B-0BB496B34A45EA70.jpg?width=150&mode=crop&quality=90'}
                    }},
                {'meve':{
                        images: {url: 'https://www.nps.gov/common/uploads/structured_data/3C7A32DB-1DD8-B71B-0B37F66E9D0832AF.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'olsp': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/CD22352B-1DD8-B71B-0BC867B506B4AF1C.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'poex':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/77491BBF-1DD8-B71B-0BDFAFFAA560A56F.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'romo':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6CF4FA58-1DD8-B71B-0BEBB8C9680A2589.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'sand': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'safe':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'yuho':{
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }}
            ]},
        CT: {parks:[
                {'appa':{
                        images: {url:'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }},
                {'colt':{
                        images: {url:'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }},
                {'neen':{
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }},
                {'qush':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'waro':{
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }},
                {'wefa':{
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }}
            ]},
        DE: {parks:[
                {'cajo':{
                        images: {url:'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }},
                {'frst':{
                        images: {url:'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }},
                {'waro':{
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }}
            ]},
        FL: {parks:[
                {'bicy':{
                        images: {url:'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }},
                {'bisc':{
                        images: {url:'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }},
                {'cana':{
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }},
                {'casa':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'deso':{
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }},
                {'drto':{
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }},
                {'ever':{
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }},
                {'foma':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'guis':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }},
                {'guge':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop1_1/C2A500E0-1DD8-B71B-0BB496B34A45EA70.jpg?width=150&mode=crop&quality=90'}
                    }},
                {'timu':{
                        images: {url: 'https://www.nps.gov/common/uploads/structured_data/3C7A32DB-1DD8-B71B-0B37F66E9D0832AF.jpg?width=150&quality=90&mode=crop'}
                    }}
            ]},
        GA: {parks:[
                {'ande':{
                        images: {url:'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }},
                {'appa':{
                        images: {url:'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }},
                {'armo':{
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }},
                {'auca':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'chat':{
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }},
                {'chch':{
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }},
                {'cuis':{
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }},
                {'fofr':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'fopu':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }},
                {'guge':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop1_1/C2A500E0-1DD8-B71B-0BB496B34A45EA70.jpg?width=150&mode=crop&quality=90'}
                    }},
                {'jica':{
                        images: {url: 'https://www.nps.gov/common/uploads/structured_data/3C7A32DB-1DD8-B71B-0B37F66E9D0832AF.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'kemo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/CD22352B-1DD8-B71B-0BC867B506B4AF1C.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'malu':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/77491BBF-1DD8-B71B-0BDFAFFAA560A56F.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'ocmu':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6CF4FA58-1DD8-B71B-0BEBB8C9680A2589.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'trte': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }}
            ]},
        HI: {parks:[
                {'alka':{
                        images: {url:'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }},
                {'hale':{
                        images: {url:'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }},
                {'havo':{
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }},
                {'hono':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'kala':{
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }},
                {'kaho':{
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }},
                {'puho':{
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }},
                {'puhe':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'valr':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }}
            ]},
        ID: {parks:[
                {'cali':{
                        images: {url:'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }},
                {'ciro':{
                        images: {url:'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }},
                {'crmo':{
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }},
                {'hafo':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'iafl':{
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }},
                {'lecl':{
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }},
                {'miin':{
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }},
                {'nepe':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'oreg':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }},
                {'yell':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }}
            ]},
        IL: {parks:[
                {'lecl':{
                        images: {url:'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }},
                {'liho':{
                        images: {url:'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }},
                {'mopi':{
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }},
                {'pull':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'trte':{
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }}
            ]},
        IN: {parks:[
                {'gero':{
                        images: {url:'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }},
                {'indu':{
                        images: {url:'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }},
                {'libo':{
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }}
            ]},
        IA: {parks:[
                {'efmo':{
                        images: {url:'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }},
                {'heho':{
                        images: {url:'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }},
                {'lecl':{
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }},
                {'mopi':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }}
            ]},
        KS: {parks:[
                {'brvb':{
                        images: {url:'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }},
                {'cali':{
                        images: {url:'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }},
                {'fols':{
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }},
                {'fosc':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'lecl':{
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }},
                {'nico':{
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }},
                {'oreg':{
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }},
                {'poex':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'safe':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }},
                {'tapr':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }}
            ]},
        KY: {parks:[
                {'abli':{
                        images: {url:'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }},
                {'biso':{
                        images: {url:'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }},
                {'cuga':{
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }},
                {'fodo':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'maca':{
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }},
                {'trte':{
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }}
            ]},
        LA: {parks:[
                {'attr':{
                        images: {url:'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }},
                {'cari':{
                        images: {url:'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }},
                {'crha':{
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }},
                {'elte':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'jela':{
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }},
                {'jazz':{
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }},
                {'popo':{
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }},
                {'vick':{
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }}
            ]},
        ME: {parks:[
                {'acad':{
                        images: {url:'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }},
                {'appa':{
                        images: {url:'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }},
                {'kaww':{
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }},
                {'maac':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'roca':{
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }},
                {'sacr':{
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }}
            ]},
        MD: {parks:[
                {'anti':{
                        images: {url:'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }},
                {'appa':{
                        images: {url:'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }},
                {'asis':{
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }},
                {'balt':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'bawa':{
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }},
                {'cajo':{
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }},
                {'cato':{
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }},
                {'choh':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'cbpo':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }},
                {'cbgn':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop1_1/C2A500E0-1DD8-B71B-0BB496B34A45EA70.jpg?width=150&mode=crop&quality=90'}
                    }},
                {'cwdw':{
                        images: {url: 'https://www.nps.gov/common/uploads/structured_data/3C7A32DB-1DD8-B71B-0B37F66E9D0832AF.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'clba': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/CD22352B-1DD8-B71B-0BC867B506B4AF1C.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'fofo':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/77491BBF-1DD8-B71B-0BDFAFFAA560A56F.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'fomc':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6CF4FA58-1DD8-B71B-0BEBB8C9680A2589.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'fowa': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'gwmp':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'glec':{
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }},
                {'gree': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'hamp':{
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }},
                {'haha':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'hafe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'hatu':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'jthg':{
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }},
                {'mono': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'oxhi':{
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }},
                {'pisc':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'pohe':{
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }},
                {'stsp':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'thst': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'waro':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }}
            ]},
        MA: {parks:[
                {'adam':{
                        images: {url:'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }},
                {'appa':{
                        images: {url:'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }},
                {'blrv':{
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }},
                {'boaf':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'boha':{
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }},
                {'bost':{
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }},
                {'caco':{
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }},
                {'esse':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'frla':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }},
                {'jofi':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop1_1/C2A500E0-1DD8-B71B-0BB496B34A45EA70.jpg?width=150&mode=crop&quality=90'}
                    }},
                {'blac':{
                        images: {url: 'https://www.nps.gov/common/uploads/structured_data/3C7A32DB-1DD8-B71B-0B37F66E9D0832AF.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'long': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/CD22352B-1DD8-B71B-0BC867B506B4AF1C.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'lowe':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/77491BBF-1DD8-B71B-0BDFAFFAA560A56F.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'mima':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6CF4FA58-1DD8-B71B-0BEBB8C9680A2589.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'nebe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'neen':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'sama':{
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }},
                {'sair': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'spar':{
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }},
                {'qush':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }},
                {'waro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }}
            ]},
        MI: {parks:[
                {'isro':{
                        images: {url:'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }},
                {'kewe':{
                        images: {url:'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }},
                {'auto':{
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }},
                {'noco':{
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }},
                {'piro':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'rira':{
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }},
                {'slbe':{
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }}
            ]},
        MN: {parks:[
                {'grpo':{
                        images: {url:'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }},
                {'miss':{
                        images: {url:'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }},
                {'noco':{
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }},
                {'pipe':{
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }},
                {'sacn':{
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }},
                {'voya':{
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }}
            ]}
}]}

class Content extends Component {
    constructor() {
        super();
        this.state = {
            serverData: {
                parks: [],
                thumbnail: ''
            },
            location: 'AL',
            data:false
        }

    }

    componentDidMount(){
        this.fetchData(this.state.location,this.state.location)
        console.log('didMount')
    }

    fetchData(data,location) {
        fetch('https://developer.nps.gov/api/v1/parks?stateCode=' + data + '&api_key=5EB2wQMEMBCeQWwKEw6PXxXQJaxfojCMarMIHbD7').then(res =>
            res.json()).then(dataRes => {
            this.setState({
                serverData: {parks: dataRes.data}, data:true,location:location
            })
        })

    }


    changeLocation(location) {
        const loc = location
        this.fetchData(loc,location)

        console.log(this.state.serverData.parks + ' :changeLocation')
    }

    render() {
        return (
            <div className="col-8 offset-2" style={{
                backgroundColor: this.props.style.colors.opaqueBlack,
                padding: '20px 5px 5px 20px', marginBottom: '10px'
            }}>{this.state.data ?
                <div className="row">
                    <div className="col-3">
                        <Filters flex={flex} handleChangeLocation={this.changeLocation.bind(this)}
                                 location={this.state.location} style={this.props.style}/>
                    </div>
                    <div className="col-9">
                        <h2 style={{
                            color: this.props.style.colors.white,
                            fontSize: '1em',
                            margin: '50px 20px 30px 0',
                            float: 'right'
                        }}>

                            {this.state.serverData.parks && this.state.serverData.parks.length} Results Found</h2>

                            < ResultsContainer thumbnail={thumbnails.states[0]} location={this.state.location}
                                               parks={this.state.serverData.parks} style={this.props.style}/>
                        {console.log(this.state.location + ' :afterRender')}
                    </div>
                </div>: <div>Hello</div>}
            </div>
        );
    };
}

export default Content;
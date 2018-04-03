import React, {Component} from 'react';
import Filters from "./Filters";
import ResultsContainer from './ResultsContainer';
import splash from '../assets/denali.jpg'
import '../loader.css'

let usStates = [
    {code: 'AL',name: 'Alabama'},
    {code: 'AK',name: 'Alaska'},
    {code: 'AZ',name: 'Arizona'},
    {code: 'AR',name: 'Arkansas'},
    {code: 'CA',name: 'California'},
    {code: 'CO',name: 'Colorado'},
    {code: 'CT',name: 'Connecticut'},
    {code: 'DE',name: 'Delaware'},
    {code: 'FL',name: 'Florida'},
    {code: 'GA',name: 'Georgia'},
    {code: 'HI',name: 'Hawaii'},
    {code: 'ID',name: 'Idaho'},
    {code: 'IL',name: 'Illinois'},
    {code: 'IN',name: 'Indiana'},
    {code: 'IA',name: 'Iowa'},
    {code: 'KS',name: 'Kansas'},
    {code: 'KY',name: 'Kentucky'},
    {code: 'LA',name: 'Louisiana'},
    {code: 'ME',name: 'Maine'},
    {code: 'MD',name: 'Maryland'},
    {code: 'MA',name: 'Massachusetts'},
    {code: 'MI',name: 'Michigan'},
    {code: 'MN',name: 'Minnesota'},
    {code: 'MS',name: 'Mississippi'},
    {code: 'MO',name: 'Missouri'},
    {code: 'MT',name: 'Montana'},
    {code: 'NE',name: 'Nebraska'},
    {code: 'NV',name: 'Nevada'},
    {code: 'NH',name: 'New Hampshire'},
    {code: 'NJ',name: 'New Jersey'},
    {code: 'NM',name: 'New Mexico'},
    {code: 'NY',name: 'New York'},
    {code: 'NC',name: 'North Carolina'},
    {code: 'ND',name: 'North Dakota'},
    {code: 'OH',name: 'Ohio'},
    {code: 'OK',name: 'Oklahoma'},
    {code: 'OR',name: 'Oregon'},
    {code: 'PA',name: 'Pennsylvania'},
    {code: 'RI',name: 'Rhode Island'},
    {code: 'SC',name: 'South Carolina'},
    {code: 'SD',name: 'South Dakota'},
    {code: 'TN',name: 'Tennessee'},
    {code: 'TX',name: 'Texas'},
    {code: 'UT',name: 'Utah'},
    {code: 'VT',name: 'Vermont'},
    {code: 'VA',name: 'Virginia'},
    {code: 'WA',name: 'Washington'},
    {code: 'WV',name: 'West Virginia'},
    {code: 'WI',name: 'Wisconsin'},
    {code: 'WY',name: 'Wyoming'},
    {code: 'GU',name: 'Guam'},
    {code: 'PR',name: 'Puerto Rico'},
    {code: 'VI',name: 'Virgin Islands'}
]

//**Future feature - move all multiple states to variables
let trailOfTears = 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Cherokee_Heritage_Center_-_Trail_of_Tears_Schild_1.jpg';
let natchezTraceTrail = 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FD49899A-1DD8-B71B-0BD128907FBB8C3A.jpg?width=950&quality=90&mode=crop';

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
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/57AD71FF-1DD8-B71B-0B7DA69E398FFDCC.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'hobe': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Horseshoe_Bend_NMP_DSC_0343_%285586613766%29.jpg/1024px-Horseshoe_Bend_NMP_DSC_0343_%285586613766%29.jpg'}
                    }
                },
                {
                    'liri': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/BF3DC57F-1DD8-B71B-0B5B3A3CCE02CD16.JPG?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'mush': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/4B5C706B-1DD8-B71B-0B42233718681484.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'natt': {
                        images: {url: natchezTraceTrail}
                    }
                },
                {
                    'natr': {
                        images: {url: 'https://drive.google.com/uc?id=10MKxjVbEtVR2k4pvA_Qo6XKaWoLHTwoT'}
                    }
                },
                {
                    'ruca': {
                        images: {url: 'https://www.nps.gov/common/uploads/teachers/assets/images/akr/park/ruca/2BC27F26-1DD8-B71C-0754461796E9CD4F/2BC27F26-1DD8-B71C-0754461796E9CD4F.jpg'}
                    }
                },
                {
                    'semo': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/347BFE79-1DD8-B71C-07B1C74A08223ABB/proxy/hires/'}
                    }
                },
                {
                    'trte': {
                        images: {url: trailOfTears}
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
                        images: {url: 'https://c1.staticflickr.com/5/4566/38263427842_18f49aaa5f_b.jpg'}
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
                        images: {url: 'https://www.nps.gov/katm/blogs/images/814_070506_01-688-px.jpg'}
                    }
                },
                {
                    'kefj': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Kenai_Fjords_National_Park_3.jpg/1024px-Kenai_Fjords_National_Park_3.jpg'}
                    }
                },
                {
                    'klgo': {
                        images: {url: 'https://www.nps.gov/common/uploads/stories/images/nri/20160713/articles/0211A8E0-1DD8-B71B-0B6C83D7D2164269/0211A8E0-1DD8-B71B-0B6C83D7D2164269.JPG'}
                    }
                },
                {
                    'kova': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6CF4FA58-1DD8-B71B-0BEBB8C9680A2589.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'lacl': {
                        images: {url: 'https://www.nps.gov/lacl/planyourvisit/images/Plan-Your-Visit-Index-Page_-1200w_-Kayak-on-Upper-Twin_4.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'noat': {
                        images: {url: 'https://www.nps.gov/noat/learn/photosmultimedia/images/photos-and-multimedia-noatak-national-preserve.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'sitk': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }
                },
                {
                    'valr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=200&quality=90&mode=crop'}
                    }
                },
                {
                    'wrst': {
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }
                },
                {
                    'yuch': {
                        images: {url: 'https://www.nps.gov/yuch/planyourvisit/images/Charley-River-Aerial-1-688x.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
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
                        images: {url: 'https://c1.staticflickr.com/5/4677/28139489659_ffd6e223ef_b.jpg'}
                    }
                },
                {
                    'chir': {
                        images: {url: 'https://www.nps.gov/chir/learn/nature/images/20141001_0079.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'coro': {
                        images: {url: 'https://www.nps.gov/coro/planyourvisit/images/PicnicArea.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'fobo': {
                        images: {url: 'https://c1.staticflickr.com/8/7037/6889272989_e023b15818_b.jpg'}
                    }
                },
                {
                    'glca': {
                        images: {url: 'https://www.nps.gov/glca/learn/news/images/GLCA-Iconic-Horseshoe-Bend-on-the-Colorado-River-in-Glen-Canyon-NRA.jpg'}
                    }
                },
                {
                    'grca': {
                        images: {url: 'https://www.nps.gov/orgs/1563/images/GRCA_NPS.jpg'}
                    }
                },
                {
                    'pima': {
                        images: {url: 'https://c1.staticflickr.com/6/5017/5446227123_70fab45c7d_b.jpg'}
                    }
                },
                {
                    'hutr': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Hubbell_Trading_Post_01.jpg/1024px-Hubbell_Trading_Post_01.jpg'}
                    }
                },
                {
                    'juba': {
                        images: {url: 'https://www.nps.gov/juba/learn/historyculture/images/Tumaca-cori-National-Historical-Park.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'lake': {
                        images: {url: 'https://www.nps.gov/common/uploads/stories/images/nri/20161205/articles/28906D76-1DD8-B71B-0B7F39D20AFB9357/28906D76-1DD8-B71B-0B7F39D20AFB9357.jpg'}
                    }
                },
                {
                    'moca': {
                        images: {url: 'https://c2.staticflickr.com/4/3459/3356706138_505b411aa5_b.jpg'}
                    }
                },
                {
                    'nava': {
                        images: {url: 'https://c1.staticflickr.com/9/8300/7860621352_56747ce843_b.jpg'}
                    }
                },
                {
                    'olsp': {
                        images: {url: 'https://c1.staticflickr.com/5/4429/36692061386_74427d316d_b.jpg'}
                    }
                },
                {
                    'orpi': {
                        images: {url: 'https://www.nps.gov/orpi/learn/nature/images/Scenery,_organ_pipes_and_mountaintop.JPG?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'para': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Shivwits_Plateau%2C_Grand_Canyon-Parashant_National_Monument%2C_Arizona_%286780630813%29.jpg/640px-Shivwits_Plateau%2C_Grand_Canyon-Parashant_National_Monument%2C_Arizona_%286780630813%29.jpg'}
                    }
                },
                {
                    'pefo': {
                        images: {url: 'https://www.nps.gov/subjects/geology/images/PEFO_Jasper_Forest_NPS_Photo_AdrewV_Kearns_1.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'pisp': {
                        images: {url: 'https://www.nps.gov/pisp/planyourvisit/images/Fort-and-garden-resize.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'sagu': {
                        images: {url: 'https://www.nps.gov/sagu/planyourvisit/images/Bolyard_NorthFromNearlyRinconPk100_0289_1.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'sucr': {
                        images: {url: 'https://www.nps.gov/sucr/learn/photosmultimedia/images/BannerTop-of-SUCR-with-deposit-688x265_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'tont': {
                        images: {url: 'https://c1.staticflickr.com/8/7427/8718380241_1dce4c9988_b.jpg'}
                    }
                },
                {
                    'tuma': {
                        images: {url: 'https://www.nps.gov/tuma/learn/historyculture/images/3cTuma.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'tuzi': {
                        images: {url: 'https://www.nps.gov/tuzi/images/20101230-Case-Griffing-Tuzigoot-Snow-73_1.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'waca': {
                        images: {url: 'https://www.nps.gov/common/uploads/teachers/assets/images/imr/park/waca/EEA3CEA7-155D-451F-67C271BDA7311C73/EEA3CEA7-155D-451F-67C271BDA7311C73.jpg'}
                    }
                },
                {
                    'wupa': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Wupatki_National_Monument_WUPA2359.jpg/800px-Wupatki_National_Monument_WUPA2359.jpg'}
                    }
                },
                {
                    'yucr': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Yuma_Territorial_Prison.JPG/1024px-Yuma_Territorial_Prison.JPG'}
                    }
                }
            ]
        },
        AR: {
            parks: [
                {
                    'arpo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/ARKANSAS_POST_NATIONAL_MEMORIAL.jpg/1024px-ARKANSAS_POST_NATIONAL_MEMORIAL.jpg'}
                    }
                },
                {
                    'buff': {
                        images: {url: 'https://www.nps.gov/buff/learn/news/images/terra-pic-steel-creek_1.jpg'}
                    }
                },
                {
                    'fosm': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Fort_Smith_National_Historic_Site_Parade_Grounds.jpg/640px-Fort_Smith_National_Historic_Site_Parade_Grounds.jpg'}
                    }
                },
                {
                    'hosp': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Hot_Springs_National_Park_007.jpg/1024px-Hot_Springs_National_Park_007.jpg'}
                    }
                },
                {
                    'chsc': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Little_Rock_Central_High_School.jpg/1024px-Little_Rock_Central_High_School.jpg'}
                    }
                },
                {
                    'peri': {
                        images: {url: 'https://www.nps.gov/peri/planyourvisit/images/Virginia-s-web-photos-017.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'wicl': {
                        images: {url: 'https://ridb.recreation.gov/images/82183.jpg'}
                    }
                },
                {
                    'trte': {
                        images: {url: trailOfTears}
                    }
                }
            ]
        },
        CA: {
            parks: [
                {
                    'alca': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/en/0/01/Alcatraz_Island_at_Sunset.jpg'}
                    }
                },
                {
                    'cabr': {
                        images: {url: 'https://www.nps.gov/cabr/learn/nature/images/Tidepools%2020140313%20DEZ.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'cali': {
                        images: {url: 'https://ridb.recreation.gov/images/80246.jpg'}
                    }
                },
                {
                    'camo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Castle_Mountains_and_Joshua_Trees.jpg/1024px-Castle_Mountains_and_Joshua_Trees.jpg'}
                    }
                },
                {
                    'cech': {
                        images: {url: 'https://www.nps.gov/articles/images/CECH_Grave-Fountain_1.JPG?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'chis': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Channel_Islands_10.jpg'}
                    }
                },
                {
                    'deva': {
                        images: {url: 'https://www.nps.gov/deva/planyourvisit/images/Artists-Drive-North-Hill-01.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'depo': {
                        images: {url: 'https://www.nps.gov/articles/images/gri-photo-depo.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'euon': {
                        images: {url: 'https://www.nps.gov/subjects/culturallandscapes/images/960_EUON-orchard-and-Tao-House-March-2016.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'fopo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Fort_Point_National_Historic_Site_and_Golden_Gate_Bridge.jpg/1024px-Fort_Point_National_Historic_Site_and_Golden_Gate_Bridge.jpg'}
                    }
                },
                {
                    'goga': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/GoldenGateBridge_BakerBeach_MC.jpg/1024px-GoldenGateBridge_BakerBeach_MC.jpg'}
                    }
                },
                {
                    'jomu': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Martinez%2C_CA_USA_-_John_Muir_National_Historic_Site_-_panoramio.jpg/1024px-Martinez%2C_CA_USA_-_John_Muir_National_Historic_Site_-_panoramio.jpg'}
                    }
                },
                {
                    'jotr': {
                        images: {url: 'https://www.nps.gov/common/uploads/structured_data/3C87A0A9-1DD8-B71B-0B005528BDF99D1D.jpg?width=800&height=800&mode=crop&quality=90'}
                    }
                },
                {
                    'juba': {
                        images: {url: 'https://c1.staticflickr.com/5/4390/36343078640_0722732d28_b.jpg'}
                    }
                },
                {
                    'lavo': {
                        images: {url: 'https://www.nps.gov/orgs/1563/images/LAVO_NPS_1.jpg'}
                    }
                },
                {
                    'labe': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Labe_Cave_collapse_trench.JPG'}
                    }
                },
                {
                    'manz': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Manzanar_shrine.jpg/981px-Manzanar_shrine.jpg'}
                    }
                },
                {
                    'moja': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/MNP_Hole_in_Rock.jpg'}
                    }
                },
                {
                    'muwo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Muir_Woods_National_Monument.jpg/1024px-Muir_Woods_National_Monument.jpg'}
                    }
                },
                {
                    'olsp': {
                        images: {url: 'https://c1.staticflickr.com/5/4429/36692061386_74427d316d_b.jpg'}
                    }
                },
                {
                    'pinn': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Pinnacles_NM_10.jpg'}
                    }
                },
                {
                    'pore': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Point_Reyes_National_Seashore_PORE4292.jpg/1024px-Point_Reyes_National_Seashore_PORE4292.jpg'}
                    }
                },
                {
                    'poex': {
                        images: {url: 'https://ridb.recreation.gov/images/82168.jpg'}
                    }
                },
                {
                    'poch': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Port_Chicago_Naval_Magazine_National_Memorial_POCH_0010.jpg/1020px-Port_Chicago_Naval_Magazine_National_Memorial_POCH_0010.jpg'}
                    }
                },
                {
                    'prsf': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Battery_Boutelle%2C_the_Presidio_of_San_Francisco.JPG/1024px-Battery_Boutelle%2C_the_Presidio_of_San_Francisco.JPG'}
                    }
                },
                {
                    'redw': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Redwood_National_Park_REDW9376.jpg/1024px-Redwood_National_Park_REDW9376.jpg'}
                    }
                },
                {
                    'rori': {
                        images: {url: 'https://www.nps.gov/rori/planyourvisit/images/Memorial_5.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'safr': {
                        images: {url: 'https://www.nps.gov/safr/learn/images/aerial_688_344px.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'samo': {
                        images: {url: 'https://www.nps.gov/samo/learn/news/images/Malibu-Creek-Acquisition-landscape-NPS-photo.JPG'}
                    }
                },
                {
                    'seki': {
                        images: {url: 'https://www.nps.gov/seki/learn/nature/images/FoxtailPineNPS_r.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'tule': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Tule_Lake_camp_main.jpg/1280px-Tule_Lake_camp_main.jpg'}
                    }
                },
                {
                    'whis': {
                        images: {url: 'https://c1.staticflickr.com/1/81/218965142_37b0f8f8fe_z.jpg?zz=1p'}
                    }
                },
                {
                    'valr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=200&quality=90&mode=crop'}
                    }
                },
                {
                    'yose': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Half_dome_at_sunset_in_Yosemite_National_Park._NPS-Damon_Joyce_%2818657742316%29.jpg/1024px-Half_dome_at_sunset_in_Yosemite_National_Park._NPS-Damon_Joyce_%2818657742316%29.jpg'}
                    }
                }
            ]
        },
        CO: {
            parks: [
                {
                    'beol': {
                        images: {url: 'https://www.nps.gov/articles/images/gri-photo-beol.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'blca': {
                        images: {url: 'https://c1.staticflickr.com/5/4556/26911336939_751b402e66_b.jpg'}
                    }
                },
                {
                    'cala': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Cache_la_Poudre_River_in_Poudre_Canyon_shallow_Area.JPG/640px-Cache_la_Poudre_River_in_Poudre_Canyon_shallow_Area.JPG'}
                    }
                },
                {
                    'cali': {
                        images: {url: 'https://ridb.recreation.gov/images/80246.jpg'}
                    }
                },
                {
                    'colm': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Rim_Rock_Drive_Colorado_National_Monument_Overlook.jpg/1024px-Rim_Rock_Drive_Colorado_National_Monument_Overlook.jpg'}
                    }
                },
                {
                    'cure': {
                        images: {url: 'https://ridb.recreation.gov/images/80661.jpg'}
                    }
                },
                {
                    'dino': {
                        images: {url: 'https://ridb.recreation.gov/images/80832.jpg'}
                    }
                },
                {
                    'flfo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Florissant_Fossil_Beds_National_Monument_PA272516.jpg/1024px-Florissant_Fossil_Beds_National_Monument_PA272516.jpg'}
                    }
                },
                {
                    'grsa': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Great_Sand_Dunes_National_Park_-_panoramio_%281%29.jpg'}
                    }
                },
                {
                    'hove': {
                        images: {url: 'https://www.nps.gov/common/uploads/stories/images/nri/20161202/articles/8D6FD35E-1DD8-B71B-0B23EF61C353EC93/8D6FD35E-1DD8-B71B-0B23EF61C353EC93.jpg'}
                    }
                },
                {
                    'meve': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Mesa_Verde_National_Park%2C_Cliff_Palace.jpg/800px-Mesa_Verde_National_Park%2C_Cliff_Palace.jpg'}
                    }
                },
                {
                    'olsp': {
                        images: {url: 'https://c1.staticflickr.com/5/4429/36692061386_74427d316d_b.jpg'}
                    }
                },
                {
                    'poex': {
                        images: {url: 'https://ridb.recreation.gov/images/82168.jpg'}
                    }
                },
                {
                    'romo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rocky_Mountain_National_Park_in_September_2011_-_Glacier_Gorge_from_Bear_Lake.JPG/1024px-Rocky_Mountain_National_Park_in_September_2011_-_Glacier_Gorge_from_Bear_Lake.JPG'}
                    }
                },
                {
                    'sand': {
                        images: {url: 'https://ridb.recreation.gov/images/82337.jpg'}
                    }
                },
                {
                    'safe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/imr/crop16_9/5A51E5F1-1DD8-B71B-0B1742C03F90801A.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'yuho': {
                        images: {url: 'https://www.nps.gov/yuho/learn/nature/images/yuho_cattails-with-mesa-behind_md_960.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                }
            ]
        },
        CT: {
            parks: [
                {
                    'appa': {
                        images: {url: 'https://science.nature.nps.gov/im/units/netn/assets/images/East%20MT_SDF.JPG'}
                    }
                },
                {
                    'colt': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Good_Shepherd_Parish_House_Hartford_CT.JPG/640px-Good_Shepherd_Parish_House_Hartford_CT.JPG'}
                    }
                },
                {
                    'neen': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/4FB5EB24-1DD8-B71B-0B761A2EC456D27D.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'qush': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/76FCD872-1DD8-B71B-0B3067681A42674E.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/8F96B982-1DD8-B71B-0B7907531084E975.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'wefa': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Weir_Farm_National_Historic_Site_-_studios.jpg/800px-Weir_Farm_National_Historic_Site_-_studios.jpg'}
                    }
                }
            ]
        },
        DE: {
            parks: [
                {
                    'cajo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/B33B9F02-1DD8-B71B-0B699BA0628152F2.JPG?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'frst': {
                        images: {url: 'https://www.nps.gov/common/uploads/stories/images/nri/20160502/articles/79DD07C3-1DD8-B71B-0BEA6A790BA0A815/79DD07C3-1DD8-B71B-0BEA6A790BA0A815.JPG'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/8F96B982-1DD8-B71B-0B7907531084E975.jpg?width=950&quality=90&mode=crop'}
                    }
                }
            ]
        },
        FL: {
            parks: [
                {
                    'bicy': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Big_Cypress_National_Preserve.jpg/1024px-Big_Cypress_National_Preserve.jpg'}
                    }
                },
                {
                    'bisc': {
                        images: {url: 'https://www.nps.gov/bisc/learn/nature/images/turtle-swimming_1.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'cana': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/CanaveralNationalSeashore1.jpg/640px-CanaveralNationalSeashore1.jpg'}
                    }
                },
                {
                    'casa': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Castillo_de_San_Marcos_National_Monument.JPG/640px-Castillo_de_San_Marcos_National_Monument.JPG'}
                    }
                },
                {
                    'deso': {
                        images: {url: 'https://www.nps.gov/deso/learn/news/images/Gumbo-Limbo-tree-at-DESO-for-web.jpg'}
                    }
                },
                {
                    'drto': {
                        images: {url: 'https://c1.staticflickr.com/3/2908/13966421530_fb95260d2b_b.jpg'}
                    }
                },
                {
                    'ever': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Gfp-florida-everglades-national-park-alligators-floating.jpg/1024px-Gfp-florida-everglades-national-park-alligators-floating.jpg'}
                    }
                },
                {
                    'foma': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Ft_Matanzas_2008.JPG/640px-Ft_Matanzas_2008.JPG'}
                    }
                },
                {
                    'guis': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Gulf_Islands_NS.jpg'}
                    }
                },
                {
                    'guge': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3FBCE71F-1DD8-B71B-0BA0D66EBB68BC88.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'timu': {
                        images: {url: 'https://www.nps.gov/common/uploads/teachers/assets/images/akr/park/timu/3074F52E-1DD8-B71C-07756C968C27412F/3074F52E-1DD8-B71C-07756C968C27412F.jpg'}
                    }
                }
            ]
        },
        GA: {
            parks: [
                {
                    'ande': {
                        images: {url: 'https://ridb.recreation.gov/images/80548.jpg'}
                    }
                },
                {
                    'appa': {
                        images: {url: 'https://science.nature.nps.gov/im/units/netn/assets/images/East%20MT_SDF.JPG'}
                    }
                },
                {
                    'armo': {
                        images: {url: 'https://www.nps.gov/common/uploads/banner_image/akr/homepage/125093E7-1DD8-B71B-0B3DAC0A86F71DB2.jpg'}
                    }
                },
                {
                    'auca': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Savannah_River_Augusta_Canal_Riverwatch_Pkwy.jpg/800px-Savannah_River_Augusta_Canal_Riverwatch_Pkwy.jpg'}
                    }
                },
                {
                    'chat': {
                        images: {url: 'https://www.nps.gov/rlc/ogbfrec/images/chatriver3.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'chch': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Chickamauga_and_Chattanooga_National_Military_Park_35640891205.jpg/1024px-Chickamauga_and_Chattanooga_National_Military_Park_35640891205.jpg'}
                    }
                },
                {
                    'cuis': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/50F8D148-1DD8-B71B-0BE76BD99679DF9A.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'fofr': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Fort_Frederica_National_Monument_%2864%29.jpg/1024px-Fort_Frederica_National_Monument_%2864%29.jpg'}
                    }
                },
                {
                    'fopu': {
                        images: {url: 'https://ridb.recreation.gov/images/82896.jpg'}
                    }
                },
                {
                    'guge': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3FBCE71F-1DD8-B71B-0BA0D66EBB68BC88.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'jica': {
                        images: {url: 'https://www.nps.gov/common/uploads/banner_image/akr/homepage/A9392F75-1DD8-B71B-0B76D328B0FF24F4.jpg?width=2400&height=700&mode=crop&quality=90'}
                    }
                },
                {
                    'kemo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5D7825D5-1DD8-B71B-0B8FF7F0B312AED7.jpg?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'malu': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/657DCEA3-1DD8-B71B-0B9200567CF68182.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'ocmu': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/12C248FC-1DD8-B71B-0BC1808F8185BCD5.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'trte': {
                        images: {url: trailOfTears}
                    }
                }
            ]
        },
        HI: {
            parks: [
                {
                    'alka': {
                        images: {url: 'https://www.nps.gov/common/uploads/photogallery/pwr/park/alka/00BDD487-C316-B1AF-398C1DAEA53FFC57/00BDD487-C316-B1AF-398C1DAEA53FFC57-large.JPG'}
                    }
                },
                {
                    'hale': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Haleakala_National_Park_03.jpg/1024px-Haleakala_National_Park_03.jpg'}
                    }
                },
                {
                    'havo': {
                        images: {url: 'https://www.nps.gov/havo/planyourvisit/images/20170831_surface_flow.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'hono': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/EB51E872-1DD8-B71B-0B463374AE35E985.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'kala': {
                        images: {url: 'https://www.nps.gov/kala/learn/images/Kalawao_Sunrise_web_1.jpg'}
                    }
                },
                {
                    'kaho': {
                        images: {url: 'https://c1.staticflickr.com/8/7647/26820498502_6eaa308757_b.jpg'}
                    }
                },
                {
                    'puho': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Pu%27uhonua_o_Honaunau_National_Historical_Park%2C_Honaunau%2C_Hawaii_%2812%29_%284529067475%29.jpg/640px-Pu%27uhonua_o_Honaunau_National_Historical_Park%2C_Honaunau%2C_Hawaii_%2812%29_%284529067475%29.jpg'}
                    }
                },
                {
                    'puhe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/18F8E1EF-1DD8-B71B-0B9EF98DD469D5A9.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'valr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=200&quality=90&mode=crop'}
                    }
                }
            ]
        },
        ID: {
            parks: [
                {
                    'cali': {
                        images: {url: 'https://ridb.recreation.gov/images/80246.jpg'}
                    }
                },
                {
                    'ciro': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Morning_Glory_Spire%2C_City_of_Rocks_NR.jpg/1024px-Morning_Glory_Spire%2C_City_of_Rocks_NR.jpg'}
                    }
                },
                {
                    'crmo': {
                        images: {url: 'https://c1.staticflickr.com/8/7601/16400385443_ccd2b2abf2_b.jpg'}
                    }
                },
                {
                    'hafo': {
                        images: {url: 'https://www.nps.gov/common/uploads/stories/images/nri/20161020/articles/EAA33DE0-1DD8-B71B-0B671ECDABBD1635/EAA33DE0-1DD8-B71B-0B671ECDABBD1635.jpg'}
                    }
                },
                {
                    'iafl': {
                        images: {url: 'https://www.nps.gov/laro/learn/nature/images/dryfalls.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://c1.staticflickr.com/5/4430/36572261342_54377de201_b.jpg'}
                    }
                },
                {
                    'miin': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/A6EC2301-1DD8-B71B-0B9A51F3CABF84AB.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'nepe': {
                        images: {url: 'https://www.nps.gov/nepe/learn/historyculture/images/Coyote-s-Fishnet_cropped.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'oreg': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Oregon_National_Historic_Trail_in_Wyoming_%2815800827938%29.jpg/635px-Oregon_National_Historic_Trail_in_Wyoming_%2815800827938%29.jpg'}
                    }
                },
                {
                    'yell': {
                        images: {url: 'https://c1.staticflickr.com/3/2941/15266522767_f84d221308_b.jpg'}
                    }
                }
            ]
        },
        IL: {
            parks: [
                {
                    'lecl': {
                        images: {url: 'https://c1.staticflickr.com/5/4430/36572261342_54377de201_b.jpg'}
                    }
                },
                {
                    'liho': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Lincoln_Home_1.jpg/1024px-Lincoln_Home_1.jpg'}
                    }
                },
                {
                    'mopi': {
                        images: {url: 'https://ridb.recreation.gov/images/81833.jpg'}
                    }
                },
                {
                    'pull': {
                        images: {url: 'https://c1.staticflickr.com/5/4307/35909386626_3aa83f208d_b.jpg'}
                    }
                },
                {
                    'trte': {
                        images: {url: trailOfTears}
                    }
                }
            ]
        },
        IN: {
            parks: [
                {
                    'gero': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/George_Rogers_Clark_National_Historical_Park_1.jpg/1024px-George_Rogers_Clark_National_Historical_Park_1.jpg'}
                    }
                },
                {
                    'indu': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Gfp-indiana-dunes-national-lakeshore-lakeshore.jpg/1024px-Gfp-indiana-dunes-national-lakeshore-lakeshore.jpg'}
                    }
                },
                {
                    'libo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Lincoln_Boyhood_National_Memorial_LIBO4422.jpg/1024px-Lincoln_Boyhood_National_Memorial_LIBO4422.jpg'}
                    }
                }
            ]
        },
        IA: {
            parks: [
                {
                    'efmo': {
                        images: {url: 'https://www.nps.gov/orgs/1563/images/EFMO_NPS_photo_1.jpg'}
                    }
                },
                {
                    'heho': {
                        images: {url: 'https://www.nps.gov/heho/learn/historyculture/images/heho_friends_meetinghouse.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://c1.staticflickr.com/5/4430/36572261342_54377de201_b.jpg'}
                    }
                },
                {
                    'mopi': {
                        images: {url: 'https://ridb.recreation.gov/images/81833.jpg'}
                    }
                }
            ]
        },
        KS: {
            parks: [
                {
                    'brvb': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Monroe_School_Brown_v._Board_of_Education_IMG_5326.jpg/640px-Monroe_School_Brown_v._Board_of_Education_IMG_5326.jpg'}
                    }
                },
                {
                    'cali': {
                        images: {url: 'https://ridb.recreation.gov/images/80246.jpg'}
                    }
                },
                {
                    'fols': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Santa_Fe_Trail_Wagon_at_the_Fort_Larned_Historic_Site.jpg/1024px-Santa_Fe_Trail_Wagon_at_the_Fort_Larned_Historic_Site.jpg'}
                    }
                },
                {
                    'fosc': {
                        images: {url: 'https://ridb.recreation.gov/images/81005.jpg'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://c1.staticflickr.com/5/4430/36572261342_54377de201_b.jpg'}
                    }
                },
                {
                    'nico': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Nicodemus_National_Historic_Site_AMECHU-1.jpg/640px-Nicodemus_National_Historic_Site_AMECHU-1.jpg'}
                    }
                },
                {
                    'oreg': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Oregon_National_Historic_Trail_in_Wyoming_%2815800827938%29.jpg/635px-Oregon_National_Historic_Trail_in_Wyoming_%2815800827938%29.jpg'}
                    }
                },
                {
                    'poex': {
                        images: {url: 'https://ridb.recreation.gov/images/82168.jpg'}
                    }
                },
                {
                    'safe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/imr/crop16_9/5A51E5F1-1DD8-B71B-0B1742C03F90801A.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'tapr': {
                        images: {url: 'https://c1.staticflickr.com/6/5674/23160584795_09d8cafa59_b.jpg'}
                    }
                }
            ]
        },
        KY: {
            parks: [
                {
                    'abli': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Abraham_Lincoln_Birthplace_National_Historical_Park_ABLI4421.jpg/1024px-Abraham_Lincoln_Birthplace_National_Historical_Park_ABLI4421.jpg'}
                    }
                },
                {
                    'biso': {
                        images: {url: 'https://www.nps.gov/common/uploads/stories/images/nri/20161020/articles/E93D92F9-1DD8-B71B-0B20733E1CD3521C/E93D92F9-1DD8-B71B-0B20733E1CD3521C.jpg'}
                    }
                },
                {
                    'cuga': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C48EF8C0-1DD8-B71B-0B1CCA8A575B0FC0.jpg?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'fodo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/4D864C4D-1DD8-B71B-0B0A61067B208560.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'maca': {
                        images: {url: 'https://www.nps.gov/common/uploads/stories/images/nri/20161018/articles/81A29272-1DD8-B71B-0B59F61D969414CF/81A29272-1DD8-B71B-0B59F61D969414CF.jpg'}
                    }
                },
                {
                    'trte': {
                        images: {url: trailOfTears}
                    }
                }
            ]
        },
        LA: {
            parks: [
                {
                    'attr': {
                        images: {url: 'https://www.nps.gov/common/uploads/banner_image/akr/homepage/4476B039-1DD8-B71B-0BE95B682A3E8D31.jpg'}
                    }
                },
                {
                    'cari': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/054B4CBE-1DD8-B71B-0B4ECAC54AD7EE44.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'crha': {
                        images: {url: 'https://www.nps.gov/common/uploads/banner_image/akr/homepage/BB5F3C7E-1DD8-B71B-0BD342527BF7D880.jpg'}
                    }
                },
                {
                    'elte': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/imr/crop16_9/579FB6BB-1DD8-B71B-0B6B1DAC907E0DB5.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'jela': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/CAEE2A00-1DD8-B71B-0BC014AA0D1D9B03.jpg?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'jazz': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/CB490723-1DD8-B71B-0B46F52194599E59.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'popo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Mound_A_at_Poverty_Point.jpg/640px-Mound_A_at_Poverty_Point.jpg'}
                    }
                },
                {
                    'vick': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Vicksburg_National_Military_Park.jpg/640px-Vicksburg_National_Military_Park.jpg'}
                    }
                }
            ]
        },
        ME: {
            parks: [
                {
                    'acad': {
                        images: {url: 'https://www.nps.gov/acad/planyourvisit/images/Kent_Bass-Harbor.jpg'}
                    }
                },
                {
                    'appa': {
                        images: {url: 'https://science.nature.nps.gov/im/units/netn/assets/images/East%20MT_SDF.JPG'}
                    }
                },
                {
                    'kaww': {
                        images: {url: 'https://c1.staticflickr.com/9/8382/29189786752_1095752304_b.jpg'}
                    }
                },
                {
                    'maac': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/1C397EBE-155D-451F-678E46805DA48EB4/proxy/hires/'}
                    }
                },
                {
                    'roca': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/CE79CC35-1DD8-B71B-0B16B1ACC82FA7BD.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'sacr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/265ACB51-1DD8-B71B-0BCDBE4BE3A30431.jpg?width=307&quality=90&mode=crop'}
                    }
                }
            ]
        },
        MD: {
            parks: [
                {
                    'anti': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Antietam_National_Battlefield_Memorial_-_memorial_%28Bloodylane%29_17.JPG/640px-Antietam_National_Battlefield_Memorial_-_memorial_%28Bloodylane%29_17.JPG'}
                    }
                },
                {
                    'appa': {
                        images: {url: 'https://science.nature.nps.gov/im/units/netn/assets/images/East%20MT_SDF.JPG'}
                    }
                },
                {
                    'asis': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Wild_ponies_on_Assateague_Island_National_Seashore_by_Bonnie_Gruenberg.jpg/1024px-Wild_ponies_on_Assateague_Island_National_Seashore_by_Bonnie_Gruenberg.jpg'}
                    }
                },
                {
                    'balt': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/31E2A3B2-1DD8-B71B-0B72C3C9A8246EBA.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'bawa': {
                        images: {url: 'https://ridb.recreation.gov/images/80645.jpg'}
                    }
                },
                {
                    'cajo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/B33B9F02-1DD8-B71B-0B699BA0628152F2.JPG?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'cato': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ncr/crop16_9/8CF12F81-1DD8-B71B-0BD378C6E2E81133.JPG?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'choh': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/78EDA4E3-1DD8-B71B-0B3A5CCE6AF82EEB/proxy/hires/'}
                    }
                },
                {
                    'cbpo': {
                        images: {url: 'https://c1.staticflickr.com/5/4091/5098396960_eaca250aa5_b.jpg'}
                    }
                },
                {
                    'cbgn': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/AB5DD0B4-1DD8-B71B-0B5942401DD0B7D1.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'cwdw': {
                        images: {url: 'https://www.nps.gov/common/uploads/banner_image/ncr/homepage/222BF6B8-1DD8-B71B-0B3D86CE9D4123C2.jpg'}
                    }
                },
                {
                    'clba': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ncr/crop16_9/66D9D481-1DD8-B71B-0B9F5F30DB11398E.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'fofo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ncr/crop16_9/F89191FF-1DD8-B71B-0BBF7484BA87EBE1.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'fomc': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/09A9EFF2-1DD8-B71B-0BD12D872591C092.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'fowa': {
                        images: {url: 'https://www.nps.gov/common/uploads/banner_image/ncr/homepage/5162A9E7-1DD8-B71B-0BAA3221115AE13C.jpg'}
                    }
                },
                {
                    'gwmp': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ncr/crop16_9/C6DECA25-1DD8-B71B-0BF3692898D6F971.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'glec': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ncr/crop16_9/6B631FA6-1DD8-B71B-0B282108581B0801.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'gree': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ncr/crop16_9/12E01D55-1DD8-B71B-0B25D929EA605272.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'hamp': {
                        images: {url: 'https://www.nps.gov/common/uploads/banner_image/ner/homepage/25E4AF16-1DD8-B71B-0B7874C995F36BDE.JPG'}
                    }
                },
                {
                    'haha': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ncr/crop16_9/978B3051-1DD8-B71B-0B0F10088A74687B.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'hafe': {
                        images: {url: 'https://www.nps.gov/hafe/learn/news/images/for-web-MillsH_HAFE_LoudonHeights_20141017_07Edit-JPEG.JPG'}
                    }
                },
                {
                    'hatu': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/822F674C-1DD8-B71B-0B9CF4B0B0F0969D.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'jthg': {
                        images: {url: 'https://c1.staticflickr.com/1/689/21469871958_b1d9b42f07_b.jpg'}
                    }
                },
                {
                    'mono': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ncr/crop16_9/DEFC4502-1DD8-B71B-0B46E64DF0033DB9.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'oxhi': {
                        images: {url: 'https://www.nps.gov/common/uploads/stories/images/nri/20161118/articles/B4800A20-1DD8-B71B-0B7C192971F84877/B4800A20-1DD8-B71B-0B7C192971F84877.jpg'}
                    }
                },
                {
                    'pisc': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Piscataway_park.jpg'}
                    }
                },
                {
                    'pohe': {
                        images: {url: 'https://c1.staticflickr.com/8/7487/27579412244_de8ea643b0_b.jpg'}
                    }
                },
                {
                    'stsp': {
                        images: {url: 'https://www.nps.gov/common/uploads/places/images/nri/20140923/siteadmin/6906BEC1-F10B-A7B1-C20ACFB1C7016293/6906BEC1-F10B-A7B1-C20ACFB1C7016293.jpg'}
                    }
                },
                {
                    'thst': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Thomas_Stone_National_Historic_Site_2009_2.jpg/640px-Thomas_Stone_National_Historic_Site_2009_2.jpg'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/8F96B982-1DD8-B71B-0B7907531084E975.jpg?width=950&quality=90&mode=crop'}
                    }
                }
            ]
        },
        MA: {
            parks: [
                {
                    'adam': {
                        images: {url: 'https://ridb.recreation.gov/images/80447.jpg'}
                    }
                },
                {
                    'appa': {
                        images: {url: 'https://science.nature.nps.gov/im/units/netn/assets/images/East%20MT_SDF.JPG'}
                    }
                },
                {
                    'blrv': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/SlaterMill.JPG'}
                    }
                },
                {
                    'boaf': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/F9966F2B-1DD8-B71B-0BBA87B613A8E77C.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'boha': {
                        images: {url: 'https://www.nps.gov/common/uploads/stories/images/nri/20161021/articles/0CF2B504-1DD8-B71B-0B0873137A7EE970/0CF2B504-1DD8-B71B-0B0873137A7EE970.jpg'}
                    }
                },
                {
                    'bost': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/F9966F2B-1DD8-B71B-0BBA87B613A8E77C.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'caco': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Cape_Cod_National_Seashore_near_Wellfleet%2C_MA_%284751531063%29.jpg/1024px-Cape_Cod_National_Seashore_near_Wellfleet%2C_MA_%284751531063%29.jpg'}
                    }
                },
                {
                    'esse': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/FE6F7C1F-1DD8-B71B-0BF976A12C5BB75C.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'frla': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Frederick_Law_Olmsted_National_Historical_Site%2C_August_2005.JPG/1005px-Frederick_Law_Olmsted_National_Historical_Site%2C_August_2005.JPG'}
                    }
                },
                {
                    'jofi': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/A9F14560-1DD8-B71B-0B965325CDDA5399.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'blac': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/B95E3C31-1DD8-B71B-0B79633091402BF0.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'long': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/WIKI_-_WASH_HSE.jpg/1024px-WIKI_-_WASH_HSE.jpg'}
                    }
                },
                {
                    'lowe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/C815BBE7-1DD8-B71B-0B5C3C06FCEEA91F.jpg?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'mima': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/DD80C8BA-1DD8-B71B-0B2F51BB0E0345F4.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'nebe': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/New_Bedford_Whaling_National_Historical_Dover_St_2006.jpg/1024px-New_Bedford_Whaling_National_Historical_Dover_St_2006.jpg'}
                    }
                },
                {
                    'neen': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/4FB5EB24-1DD8-B71B-0B761A2EC456D27D.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'sama': {
                        images: {url: 'https://www.nps.gov/common/uploads/places/images/nri/20140902/siteadmin/26401C55-A317-B92A-4A219603101379C0/26401C55-A317-B92A-4A219603101379C0.jpg'}
                    }
                },
                {
                    'sair': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/F4188B35-1DD8-B71B-0B1D0A1D59FBDD37.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'spar': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/5960AA6C-1DD8-B71B-0BC981A162F2D83F.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'qush': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/76FCD872-1DD8-B71B-0B3067681A42674E.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/8F96B982-1DD8-B71B-0B7907531084E975.jpg?width=950&quality=90&mode=crop'}
                    }
                }
            ]
        },
        MI: {
            parks: [
                {
                    'isro': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Rock_Harbor_Lighthouse_at_Isle_Royale_National_park.jpg/1024px-Rock_Harbor_Lighthouse_at_Isle_Royale_National_park.jpg'}
                    }
                },
                {
                    'kewe': {
                        images: {url: 'https://www.nps.gov/kewe/planyourvisit/images/Ontonagon-Lighthouse-view-2_1.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'auto': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/mwr/crop16_9/2843EBF5-1DD8-B71B-0B236681AE3BF79E.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'noco': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/North_Country_National_Scenic_Trail.jpg/1024px-North_Country_National_Scenic_Trail.jpg'}
                    }
                },
                {
                    'piro': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Gfp-michigan-pictured-rocks-national-lakeshore-bay-around-of-miners-castle.jpg/1024px-Gfp-michigan-pictured-rocks-national-lakeshore-bay-around-of-miners-castle.jpg'}
                    }
                },
                {
                    'rira': {
                        images: {url: 'https://ridb.recreation.gov/images/82244.jpg'}
                    }
                },
                {
                    'slbe': {
                        images: {url: 'https://c1.staticflickr.com/2/1081/4727264327_88982f1e13_b.jpg'}
                    }
                }
            ]
        },
        MN: {
            parks: [
                {
                    'grpo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Grand_Portage_National_Monument_from_Mount_Rose.jpg/640px-Grand_Portage_National_Monument_from_Mount_Rose.jpg'}
                    }
                },
                {
                    'miss': {
                        images: {url: 'https://ridb.recreation.gov/images/81804.jpg'}
                    }
                },
                {
                    'noco': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/North_Country_National_Scenic_Trail.jpg/1024px-North_Country_National_Scenic_Trail.jpg'}
                    }
                },
                {
                    'pipe': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/The_Oracle_%28Rock_formation_in_Pipestone_National_Monument%29.jpg/337px-The_Oracle_%28Rock_formation_in_Pipestone_National_Monument%29.jpg'}
                    }
                },
                {
                    'sacn': {
                        images: {url: 'https://ridb.recreation.gov/images/82283.jpg'}
                    }
                },
                {
                    'voya': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Voyageurs_National_Park.jpg'}
                    }
                }
            ]
        },
        MS: {
            parks: [
                {
                    'brcr': {
                        images: {url: 'https://www.nps.gov/brcr/planyourvisit/images/BRCR-6-20-06-010-for-web.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'guis': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Gulf_Islands_NS.jpg'}
                    }
                },
                {
                    'mide': {
                        images: {url: 'https://toxics.usgs.gov/photo_gallery/photos/hypoxia/missdelta_etm_2001288_lrg_crop_m.jpg'}
                    }
                },
                {
                    'migu': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/79E57940-1DD8-B71B-0B1B85148176C364.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'mihi': {
                        images: {url: 'https://www.nps.gov/common/uploads/banner_image/akr/homepage/846B5999-1DD8-B71B-0B6085ACE2FFA6FF.jpg'}
                    }
                },
                {
                    'natc': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/D6119991-1DD8-B71B-0BBD280042C2CB66.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'natt': {
                        images: {url: natchezTraceTrail}
                    }
                },
                {
                    'natr': {
                        images: {url: 'https://drive.google.com/uc?id=10MKxjVbEtVR2k4pvA_Qo6XKaWoLHTwoT'}
                    }
                },
                {
                    'shil': {
                        images: {url: 'https://www.nps.gov/shil/learn/news/images/cemetery-wall-and-flag-NPS-Photo-Mekow.jpg'}
                    }
                },
                {
                    'tupe': {
                        images: {url: 'https://ridb.recreation.gov/images/82491.jpg'}
                    }
                },
                {
                    'vick': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Vicksburg_National_Military_Park.jpg/640px-Vicksburg_National_Military_Park.jpg'}
                    }
                }
            ]
        },
        MO: {
            parks: [
                {
                    'cali': {
                        images: {url: 'https://ridb.recreation.gov/images/80246.jpg'}
                    }
                },
                {
                    'jeff': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Jefferson_National_Expansion_Memorial_1.jpg/640px-Jefferson_National_Expansion_Memorial_1.jpg'}
                    }
                },
                {
                    'gwca': {
                        images: {url: 'https://ridb.recreation.gov/images/81096.jpg'}
                    }
                },
                {
                    'hstr': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Historic_Marker_P5300329_Harry_Truman_house.JPG/640px-Historic_Marker_P5300329_Harry_Truman_house.JPG'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://c1.staticflickr.com/5/4430/36572261342_54377de201_b.jpg'}
                    }
                },
                {
                    'oreg': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Oregon_National_Historic_Trail_in_Wyoming_%2815800827938%29.jpg/635px-Oregon_National_Historic_Trail_in_Wyoming_%2815800827938%29.jpg'}
                    }
                },
                {
                    'ozar': {
                        images: {url: 'https://www.nps.gov/ozar/planyourvisit/images/2-rivers-2.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'poex': {
                        images: {url: 'https://ridb.recreation.gov/images/82168.jpg'}
                    }
                },
                {
                    'safe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/imr/crop16_9/5A51E5F1-1DD8-B71B-0B1742C03F90801A.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'trte': {
                        images: {url: trailOfTears}
                    }
                },
                {
                    'ulsg': {
                        images: {url: 'https://www.nps.gov/vick/learn/historyculture/images/grant-statue.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'wicr': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/House_of_the_Ray_family_at_Wilson%27s_Creek_National_Battlefield_in_SW_Missouri.jpg/1024px-House_of_the_Ray_family_at_Wilson%27s_Creek_National_Battlefield_in_SW_Missouri.jpg'}
                    }
                }
            ]
        },
        MT: {
            parks: [
                {
                    'biho': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Big-hole-national-battlefield-06022012-rogermpeterson-112_%287351660662%29.jpg/1024px-Big-hole-national-battlefield-06022012-rogermpeterson-112_%287351660662%29.jpg'}
                    }
                },
                {
                    'bica': {
                        images: {url: 'https://www.nps.gov/bica/planyourvisit/images/Top_5_South_District.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'fous': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Fort_Union_Trading_Post_NHS.JPG/640px-Fort_Union_Trading_Post_NHS.JPG'}
                    }
                },
                {
                    'glac': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/2015-06-19_Glacier_National_Park_%28U.S.%29_8625.jpg/1024px-2015-06-19_Glacier_National_Park_%28U.S.%29_8625.jpg'}
                    }
                },
                {
                    'grko': {
                        images: {url: 'https://www.nps.gov/grko/planyourvisit/images/Mt-Deer-Lodge-Bridge.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'iafl': {
                        images: {url: 'https://www.nps.gov/laro/learn/nature/images/dryfalls.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://c1.staticflickr.com/5/4430/36572261342_54377de201_b.jpg'}
                    }
                },
                {
                    'libi': {
                        images: {url: 'https://www.nps.gov/libi/planyourvisit/images/cemetery2_3.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'nepe': {
                        images: {url: 'https://www.nps.gov/nepe/learn/historyculture/images/Coyote-s-Fishnet_cropped.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'yell': {
                        images: {url: 'https://c1.staticflickr.com/3/2941/15266522767_f84d221308_b.jpg'}
                    }
                }
            ]
        },
        NE: {
            parks: [
                {
                    'agfo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Agate_Fossil_Beds_National_Monument_5.jpg/640px-Agate_Fossil_Beds_National_Monument_5.jpg'}
                    }
                },
                {
                    'cali': {
                        images: {url: 'https://ridb.recreation.gov/images/80246.jpg'}
                    }
                },
                {
                    'home': {
                        images: {url: 'https://www.nps.gov/home/learn/nature/images/Picture-005.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://c1.staticflickr.com/5/4430/36572261342_54377de201_b.jpg'}
                    }
                },
                {
                    'mnrr': {
                        images: {url: 'https://www.nps.gov/mnrr/learn/photosmultimedia/images/Fly-the-MNRR-webpage_2.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'mopi': {
                        images: {url: 'https://ridb.recreation.gov/images/81833.jpg'}
                    }
                },
                {
                    'niob': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Niobrara_National_Scenic_River_Bluffs.jpg/640px-Niobrara_National_Scenic_River_Bluffs.jpg'}
                    }
                },
                {
                    'oreg': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Oregon_National_Historic_Trail_in_Wyoming_%2815800827938%29.jpg/635px-Oregon_National_Historic_Trail_in_Wyoming_%2815800827938%29.jpg'}
                    }
                },
                {
                    'poex': {
                        images: {url: 'https://ridb.recreation.gov/images/82168.jpg'}
                    }
                },
                {
                    'scbl': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Scotts_Bluff_National_Monument_%28Nebraska%29_-_Eagle_Rock_16-9-2014_17-56-19.JPG/1024px-Scotts_Bluff_National_Monument_%28Nebraska%29_-_Eagle_Rock_16-9-2014_17-56-19.JPG'}
                    }
                }
            ]
        },
        NV: {
            parks: [
                {
                    'cali': {
                        images: {url: 'https://ridb.recreation.gov/images/80246.jpg'}
                    }
                },
                {
                    'deva': {
                        images: {url: 'https://c1.staticflickr.com/2/1695/26116317146_e9de3c4a7e_b.jpg'}
                    }
                },
                {
                    'grba': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Stella_Lake_Great_Basin.jpg'}
                    }
                },
                {
                    'lake': {
                        images: {url: 'https://www.nps.gov/common/uploads/stories/images/nri/20161205/articles/28906D76-1DD8-B71B-0B7F39D20AFB9357/28906D76-1DD8-B71B-0B7F39D20AFB9357.jpg'}
                    }
                },
                {
                    'olsp': {
                        images: {url: 'https://c1.staticflickr.com/5/4429/36692061386_74427d316d_b.jpg'}
                    }
                },
                {
                    'poex': {
                        images: {url: 'https://ridb.recreation.gov/images/82168.jpg'}
                    }
                },
                {
                    'tusk': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Tule_Springs_Fossil_Beds_National_Monument.jpg/1024px-Tule_Springs_Fossil_Beds_National_Monument.jpg'}
                    }
                }
            ]
        },
        NH: {
            parks: [
                {
                    'appa': {
                        images: {url: 'https://science.nature.nps.gov/im/units/netn/assets/images/East%20MT_SDF.JPG'}
                    }
                },
                {
                    'saga': {
                        images: {url: 'https://www.nps.gov/saga/learn/news/images/Shaw-Memorial-NB-hq.gif'}
                    }
                }
            ]
        },
        NJ: {
            parks: [
                {
                    'appa': {
                        images: {url: 'https://science.nature.nps.gov/im/units/netn/assets/images/East%20MT_SDF.JPG'}
                    }
                },
                {
                    'xrds': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/313DF2F9-1DD8-B71B-0BE3927BB890F8BE.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'dela': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/nri/crop1_1/B76E43B8-1DD8-B71B-0B62C602B5B66C78.jpg?width=640&quality=90&mode=crop'}
                    }
                },
                {
                    'dewa': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Delaware_Water_Gap_cliffs.jpg'}
                    }
                },
                {
                    'elis': {
                        images: {url: 'https://www.nps.gov/common/uploads/places/images/nri/20140902/siteadmin/28B468DA-A430-E361-953360F18D9853C5/28B468DA-A430-E361-953360F18D9853C5.jpg'}
                    }
                },
                {
                    'gate': {
                        images: {url: 'https://www.nps.gov/gate/learn/news/images/battery-weed.jpg'}
                    }
                },
                {
                    'greg': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Great_Egg_Harbor_River_shore.jpg/1024px-Great_Egg_Harbor_River_shore.jpg'}
                    }
                },
                {
                    'lode': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/2009-08-17_View_north_up_the_Delaware_River_from_the_Reading_Railroad_Bridge_between_Ewing%2C_New_Jersey_and_Lower_Makefield_Township%2C_Pennsylvania.jpg/640px-2009-08-17_View_north_up_the_Delaware_River_from_the_Reading_Railroad_Bridge_between_Ewing%2C_New_Jersey_and_Lower_Makefield_Township%2C_Pennsylvania.jpg'}
                    }
                },
                {
                    'morr': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Morristown_National_Historical_MORR3176.jpg/1024px-Morristown_National_Historical_MORR3176.jpg'}
                    }
                },
                {
                    'neje': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/2009-11-04_20-View_north_from_the_top_of_the_Apple_Pie_Hill_fire_tower.jpg'}
                    }
                },
                {
                    'pine': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/5FD52266-1DD8-B71B-0B30D414E542B2B0.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'pagr': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Paterson_Great_Falls.jpg/640px-Paterson_Great_Falls.jpg'}
                    }
                },
                {
                    'edis': {
                        images: {url: 'https://www.nps.gov/images/Blog1-ThomasEdNP1_1.jpg'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/8F96B982-1DD8-B71B-0B7907531084E975.jpg?width=950&quality=90&mode=crop'}
                    }
                }
            ]
        },
        NM: {
            parks: [
                {
                    'azru': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Aztec_Ruins_National_Monument_by_RO.JPG/1024px-Aztec_Ruins_National_Monument_by_RO.JPG'}
                    }
                },
                {
                    'band': {
                        images: {url: 'https://www.nps.gov/band/planyourvisit/images/painted-cave.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'cavo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Capulin_1980_tde00005.jpg/589px-Capulin_1980_tde00005.jpg'}
                    }
                },
                {
                    'cave': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Carlsbad_Caverns_National_Park_P1012863.jpg/1024px-Carlsbad_Caverns_National_Park_P1012863.jpg'}
                    }
                },
                {
                    'chcu': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/PUEBLO_BONITO_-_Chaco_Culture_National_Historical_Park_%2C_New_Mexico%2C_US_-_panoramio_%287%29.jpg/800px-PUEBLO_BONITO_-_Chaco_Culture_National_Historical_Park_%2C_New_Mexico%2C_US_-_panoramio_%287%29.jpg'}
                    }
                },
                {
                    'elca': {
                        images: {url: 'https://c1.staticflickr.com/5/4337/36695139496_59f9eee9cc_b.jpg'}
                    }
                },
                {
                    'elma': {
                        images: {url: 'https://c1.staticflickr.com/9/8353/28505428864_5fc920b628_b.jpg'}
                    }
                },
                {
                    'elmo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/El_Morro_National_Monument_02.jpg/800px-El_Morro_National_Monument_02.jpg'}
                    }
                },
                {
                    'foun': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Fort_Union_National_Monument_Fort_Union_1300.jpg/640px-Fort_Union_National_Monument_Fort_Union_1300.jpg'}
                    }
                },
                {
                    'gicl': {
                        images: {url: 'https://ridb.recreation.gov/images/81107.jpg'}
                    }
                },
                {
                    'mapr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6D0FFEC0-1DD8-B71B-0B635C4D22121B63.jpg?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'norg': {
                        images: {url: 'https://c1.staticflickr.com/6/5832/19948702443_d2f0e3ae11_b.jpg'}
                    }
                },
                {
                    'olsp': {
                        images: {url: 'https://c1.staticflickr.com/5/4429/36692061386_74427d316d_b.jpg'}
                    }
                },
                {
                    'peco': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Pecos_National_Historical_Park.jpg/1024px-Pecos_National_Historical_Park.jpg'}
                    }
                },
                {
                    'petr': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Petroglyph_National_Monument_008_by_Samat_Jain.jpg/1024px-Petroglyph_National_Monument_008_by_Samat_Jain.jpg'}
                    }
                },
                {
                    'sapu': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Salinas_Pueblo_Missions_National_Monument_ruins.jpg'}
                    }
                },
                {
                    'safe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/imr/crop16_9/5A51E5F1-1DD8-B71B-0B1742C03F90801A.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'vall': {
                        images: {url: 'https://www.nps.gov/orgs/1207/images/VALL_ValleGrande.jpg'}
                    }
                },
                {
                    'whsa': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/White_Sands_National_Monument_-_New_Mexico_-_dawn_in_the_desert_-_%2818097579702%29.jpg/1024px-White_Sands_National_Monument_-_New_Mexico_-_dawn_in_the_desert_-_%2818097579702%29.jpg'}
                    }
                }
            ]
        },
        NY: {
            parks: [
                {
                    'afbg': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/African_Burial_Ground_National_Monument_winter_1.jpg/640px-African_Burial_Ground_National_Monument_winter_1.jpg'}
                    }
                },
                {
                    'appa': {
                        images: {url: 'https://science.nature.nps.gov/im/units/netn/assets/images/East%20MT_SDF.JPG'}
                    }
                },
                {
                    'cajo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/B33B9F02-1DD8-B71B-0B699BA0628152F2.JPG?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'cacl': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Castle_Clinton_National_Monument%2C_Battery_Park%2C_Manhattan%2C_New_York_%287237097294%29.jpg/640px-Castle_Clinton_National_Monument%2C_Battery_Park%2C_Manhattan%2C_New_York_%287237097294%29.jpg'}
                    }
                },
                {
                    'chva': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Champlain_Valley_Fairgrounds_Entrance.JPG/640px-Champlain_Valley_Fairgrounds_Entrance.JPG'}
                    }
                },
                {
                    'cbpo': {
                        images: {url: 'https://c1.staticflickr.com/5/4091/5098396960_eaca250aa5_b.jpg'}
                    }
                },
                {
                    'cbgn': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/AB5DD0B4-1DD8-B71B-0B5942401DD0B7D1.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'elro': {
                        images: {url: 'https://c1.staticflickr.com/9/8039/29798917231_4e336ed6e7_b.jpg'}
                    }
                },
                {
                    'elis': {
                        images: {url: 'https://www.nps.gov/common/uploads/places/images/nri/20140902/siteadmin/28B468DA-A430-E361-953360F18D9853C5/28B468DA-A430-E361-953360F18D9853C5.jpg'}
                    }
                },
                {
                    'erie': {
                        images: {url: 'https://www.nps.gov/articles/images/WCC4.JPG?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'feha': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Federal_Hall_National_Memorial_FEHA3187.jpg/1024px-Federal_Hall_National_Memorial_FEHA3187.jpg'}
                    }
                },
                {
                    'fiis': {
                        images: {url: 'https://www.nps.gov/fiis/planyourvisit/images/IMG_6809-1.JPG?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'fost': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Fort_Stanwix_National_Park.jpg/1024px-Fort_Stanwix_National_Park.jpg'}
                    }
                },
                {
                    'gate': {
                        images: {url: 'https://www.nps.gov/gate/learn/news/images/battery-weed.jpg'}
                    }
                },
                {
                    'gegr': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/General_Grant_National_Memorial%2C_10.15.17.jpg/1024px-General_Grant_National_Memorial%2C_10.15.17.jpg'}
                    }
                },
                {
                    'gois': {
                        images: {url: 'https://ridb.recreation.gov/images/81169.jpg'}
                    }
                },
                {
                    'hagr': {
                        images: {url: 'https://www.nps.gov/npnh/learn/news/images/HAGR_April2010_update.jpg'}
                    }
                },
                {
                    'hart': {
                        images: {url: 'https://www.nps.gov/orgs/1207/images/HART_Landscape.png'}
                    }
                },
                {
                    'hofr': {
                        images: {url: 'https://c1.staticflickr.com/1/303/31335016600_cb679c826d_b.jpg'}
                    }
                },
                {
                    'hurv': {
                        images: {url: 'https://c1.staticflickr.com/9/8217/29271305384_e020d50f67_b.jpg'}
                    }
                },
                {
                    'loea': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Tenement_Museum_Orchard_%26_Houston_corner_shop_jeh.jpg/853px-Tenement_Museum_Orchard_%26_Houston_corner_shop_jeh.jpg'}
                    }
                },
                {
                    'mava': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Martin_Van_Buren_National_Historic_Site_MAVA0006.jpg/1024px-Martin_Van_Buren_National_Historic_Site_MAVA0006.jpg'}
                    }
                },
                {
                    'npnh': {
                        images: {url: 'https://www.nps.gov/gate/planyourvisit/images/BatteryWeed_WS.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'nifa': {
                        images: {url: 'https://c1.staticflickr.com/5/4084/4980927493_38dc298025_b.jpg'}
                    }
                },
                {
                    'noco': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/North_Country_National_Scenic_Trail.jpg/1024px-North_Country_National_Scenic_Trail.jpg'}
                    }
                },
                {
                    'sahi': {
                        images: {url: 'https://c2.staticflickr.com/4/3029/2553549279_0a32a9e88d_z.jpg?zz=1'}
                    }
                },
                {
                    'sapa': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Saint_Paul%27s_Church_National_Historic_Site_SAPA5009.jpg/1024px-Saint_Paul%27s_Church_National_Historic_Site_SAPA5009.jpg'}
                    }
                },
                {
                    'sara': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Saratoga_National_Historical_Park_August_2005_03.jpg/1024px-Saratoga_National_Historical_Park_August_2005_03.jpg'}
                    }
                },
                {
                    'stli': {
                        images: {url: 'http://res.freestockphotos.biz/pictures/11/11584-view-of-the-statue-of-liberty-monument-on-liberty-island-at-dusk-pv.jpg'}
                    }
                },
                {
                    'ston': {
                        images: {url: 'https://www.nps.gov/orgs/1207/images/STON_Park.JPG'}
                    }
                },
                {
                    'thrb': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Roosevelt_4.jpg/1024px-Roosevelt_4.jpg'}
                    }
                },
                {
                    'thri': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Theodore_Roosevelt_Monument%2C_with_inaugural_site_in_the_background.jpg/640px-Theodore_Roosevelt_Monument%2C_with_inaugural_site_in_the_background.jpg'}
                    }
                },
                {
                    'thco': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Thomas-cole-house.jpg'}
                    }
                },
                {
                    'upde': {
                        images: {url: 'https://ridb.recreation.gov/images/82513.jpg'}
                    }
                },
                {
                    'vama': {
                        images: {url: 'https://ridb.recreation.gov/images/82529.jpg'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/8F96B982-1DD8-B71B-0B7907531084E975.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'wori': {
                        images: {url: 'https://ridb.recreation.gov/images/82631.jpg'}
                    }
                }
            ]
        },
        NC: {
            parks: [
                {
                    'appa': {
                        images: {url: 'https://science.nature.nps.gov/im/units/netn/assets/images/East%20MT_SDF.JPG'}
                    }
                },
                {
                    'blrn': {
                        images: {url: 'https://c1.staticflickr.com/6/5322/8923646737_6a41313374_b.jpg'}
                    }
                },
                {
                    'blri': {
                        images: {url: 'https://c1.staticflickr.com/3/2041/1715794688_b9d5c9fa6d_b.jpg'}
                    }
                },
                {
                    'caha': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Cape_Hatteras_National_Seashore_ramp_30-03.jpg/640px-Cape_Hatteras_National_Seashore_ramp_30-03.jpg'}
                    }
                },
                {
                    'calo': {
                        images: {url: 'https://www.nps.gov/rlc/ogbfrec/images/calocc1.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'carl': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Carl_Sandburg_house%2C_Flat_Rock%2C_NC_IMG_4847.JPG/640px-Carl_Sandburg_house%2C_Flat_Rock%2C_NC_IMG_4847.JPG'}
                    }
                },
                {
                    'fora': {
                        images: {url: 'https://ridb.recreation.gov/images/81003.jpg'}
                    }
                },
                {
                    'grsm': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Smoky_Mountains%2C_in_Great_Smoky_Mountains_National_Park.jpg/640px-The_Smoky_Mountains%2C_in_Great_Smoky_Mountains_National_Park.jpg'}
                    }
                },
                {
                    'guco': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Signers_Monument_Guilford_Courthouse_National_Military_Park.JPG/640px-Signers_Monument_Guilford_Courthouse_National_Military_Park.JPG'}
                    }
                },
                {
                    'guge': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3FBCE71F-1DD8-B71B-0BA0D66EBB68BC88.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'mocr': {
                        images: {url: 'https://www.nps.gov/mocr/learn/historyculture/images/IMG_6170.JPG?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'ovvi': {
                        images: {url: 'https://ridb.recreation.gov/images/82056.jpg'}
                    }
                },
                {
                    'trte': {
                        images: {url: trailOfTears}
                    }
                },
                {
                    'wrbr': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wright_Brothers_National_Memorial.jpg/1024px-Wright_Brothers_National_Memorial.jpg'}
                    }
                }
            ]
        },
        ND: {
            parks: [
                {
                    'fous': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Fort_Union_Trading_Post_NHS.JPG/640px-Fort_Union_Trading_Post_NHS.JPG'}
                    }
                },
                {
                    'knri': {
                        images: {url: 'https://ridb.recreation.gov/images/81620.jpg'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://c1.staticflickr.com/5/4430/36572261342_54377de201_b.jpg'}
                    }
                },
                {
                    'noco': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/North_Country_National_Scenic_Trail.jpg/1024px-North_Country_National_Scenic_Trail.jpg'}
                    }
                },
                {
                    'thro': {
                        images: {url: 'https://c1.staticflickr.com/5/4469/37099170214_1bf43c2e75_b.jpg'}
                    }
                }
            ]
        },
        OH: {
            parks: [
                {
                    'chyo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Colonel_Charles_Young_House%2C_front.jpg/1024px-Colonel_Charles_Young_House%2C_front.jpg'}
                    }
                },
                {
                    'cuva': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Cuyahoga_Valley_National_Park_18.jpg/1024px-Cuyahoga_Valley_National_Park_18.jpg'}
                    }
                },
                {
                    'dabe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/mwr/crop16_9/FF6F621C-1DD8-B71B-0BE06E79C7161A44.JPG?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'daav': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/mwr/crop16_9/1515B8E9-1DD8-B71B-0B4E73D1BEFE5477.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'fati': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Fallen_Timbers_Battlefield.jpg/640px-Fallen_Timbers_Battlefield.jpg'}
                    }
                },
                {
                    'fila': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/First_Ladies_National_Historic_Site_1.jpg/640px-First_Ladies_National_Historic_Site_1.jpg'}
                    }
                },
                {
                    'hocu': {
                        images: {url: 'https://www.nps.gov/articles/images/Hopewell-Culture-NHP-Mound-City-Group-Dawn-NPS-Tom-Engberg.JPG?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'jaga': {
                        images: {url: 'https://c1.staticflickr.com/9/8755/29552083810_abf360e66f_b.jpg'}
                    }
                },
                {
                    'avia': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/81665391-1DD8-B71B-0B059F77128838CD.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'noco': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/North_Country_National_Scenic_Trail.jpg/1024px-North_Country_National_Scenic_Trail.jpg'}
                    }
                },
                {
                    'pevi': {
                        images: {url: 'https://www.nps.gov/common/uploads/places/images/nri/20140708/siteadmin/EC848E9E-EDBD-1604-B13F7BEA1CCF0A93/EC848E9E-EDBD-1604-B13F7BEA1CCF0A93.jpg'}
                    }
                },
                {
                    'wiho': {
                        images: {url: 'https://c1.staticflickr.com/4/3937/33750102615_a21663a78a_b.jpg'}
                    }
                }
            ]
        },
        OK: {
            parks: [
                {
                    'chic': {
                        images: {url: 'https://c1.staticflickr.com/5/4056/4532287292_3c4afdb126_b.jpg'}
                    }
                },
                {
                    'fosm': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Fort_Smith_National_Historic_Site_Parade_Grounds.jpg/640px-Fort_Smith_National_Historic_Site_Parade_Grounds.jpg'}
                    }
                },
                {
                    'okci': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Oklahoma_City_National_Memorial_4886.jpg/1024px-Oklahoma_City_National_Memorial_4886.jpg'}
                    }
                },
                {
                    'safe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/imr/crop16_9/5A51E5F1-1DD8-B71B-0B1742C03F90801A.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'trte': {
                        images: {url: trailOfTears}
                    }
                },
                {
                    'waba': {
                        images: {url: 'https://www.nps.gov/waba/learn/management/images/battlefield-panoramic-in-fall.JPG?maxwidth=650&autorotate=false'}
                    }
                }
            ]
        },
        OR: {
            parks: [
                {
                    'cali': {
                        images: {url: 'https://ridb.recreation.gov/images/80246.jpg'}
                    }
                },
                {
                    'crla': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Crater_Lake_National_Park_Oregon.jpg/1024px-Crater_Lake_National_Park_Oregon.jpg'}
                    }
                },
                {
                    'fova': {
                        images: {url: 'https://www.nps.gov/fova/learn/news/images/Fort-Vancouver-Garden.jpg'}
                    }
                },
                {
                    'iafl': {
                        images: {url: 'https://www.nps.gov/laro/learn/nature/images/dryfalls.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'joda': {
                        images: {url: 'https://c1.staticflickr.com/2/1536/25164637684_e67b03e339_b.jpg'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://c1.staticflickr.com/5/4430/36572261342_54377de201_b.jpg'}
                    }
                },
                {
                    'lewi': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Lewis_and_Clark_National_Historical_Park_%28Fort_Clatsop_FOCL1525.jpg/1024px-Lewis_and_Clark_National_Historical_Park_%28Fort_Clatsop_FOCL1525.jpg'}
                    }
                },
                {
                    'nepe': {
                        images: {url: 'https://www.nps.gov/nepe/learn/historyculture/images/Coyote-s-Fishnet_cropped.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'orca': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Oregon_Caves_p1080458_1024.jpg/640px-Oregon_Caves_p1080458_1024.jpg'}
                    }
                },
                {
                    'oreg': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Oregon_National_Historic_Trail_in_Wyoming_%2815800827938%29.jpg/635px-Oregon_National_Historic_Trail_in_Wyoming_%2815800827938%29.jpg'}
                    }
                }
            ]
        },
        PA: {
            parks: [
                {
                    'alpo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Allegheny_Portage_Railroad_National_Historic_Site_ALPO0279.jpg/1024px-Allegheny_Portage_Railroad_National_Historic_Site_ALPO0279.jpg'}
                    }
                },
                {
                    'appa': {
                        images: {url: 'https://science.nature.nps.gov/im/units/netn/assets/images/East%20MT_SDF.JPG'}
                    }
                },
                {
                    'cajo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/B33B9F02-1DD8-B71B-0B699BA0628152F2.JPG?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'cbpo': {
                        images: {url: 'https://c1.staticflickr.com/5/4091/5098396960_eaca250aa5_b.jpg'}
                    }
                },
                {
                    'cbgn': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/AB5DD0B4-1DD8-B71B-0B5942401DD0B7D1.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'dele': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Delaware_Canal_State_Park-Pennsylvania.jpg/1024px-Delaware_Canal_State_Park-Pennsylvania.jpg'}
                    }
                },
                {
                    'dela': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/nri/crop1_1/B76E43B8-1DD8-B71B-0B62C602B5B66C78.jpg?width=640&quality=90&mode=crop'}
                    }
                },
                {
                    'dewa': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Delaware_Water_Gap_cliffs.jpg'}
                    }
                },
                {
                    'edal': {
                        images: {url: 'https://www.nps.gov/edal/planyourvisit/images/EDAL-Basement-688_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'eise': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Eisenhower_Farm_in_Gettysburg.JPG/1024px-Eisenhower_Farm_in_Gettysburg.JPG'}
                    }
                },
                {
                    'frst': {
                        images: {url: 'https://www.nps.gov/common/uploads/stories/images/nri/20160502/articles/79DD07C3-1DD8-B71B-0BEA6A790BA0A815/79DD07C3-1DD8-B71B-0BEA6A790BA0A815.JPG'}
                    }
                },
                {
                    'flni': {
                        images: {url: 'https://www.nps.gov/flni/learn/news/images/Flight-Path-Overlook-from-the-Ground.jpg'}
                    }
                },
                {
                    'fone': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Fort_Necessity_National_Battlefield_-_panoramio.jpg/1024px-Fort_Necessity_National_Battlefield_-_panoramio.jpg'}
                    }
                },
                {
                    'frhi': {
                        images: {url: 'https://www.nps.gov/common/uploads/places/images/nri/20140902/siteadmin/2E47680D-B5DF-B85F-13D739A30D3A4239/2E47680D-B5DF-B85F-13D739A30D3A4239.jpg'}
                    }
                },
                {
                    'gett': {
                        images: {url: 'https://www.nps.gov/gett/planyourvisit/images/IMG_6169-web.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'glde': {
                        images: {url: 'https://www.nps.gov/glde/getinvolved/images/gloriadeicemetary688.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'hofu': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Hopewell_Furnace_National_Historic_Site_-_Pennsylvania_%285655000841%29.jpg/800px-Hopewell_Furnace_National_Historic_Site_-_Pennsylvania_%285655000841%29.jpg'}
                    }
                },
                {
                    'inde': {
                        images: {url: 'https://www.nps.gov/inde/planyourvisit/images/Hall-and-Wings-960-X-480_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'jofl': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JOHNSTOWN_FLOOD_NATIONAL_MEMORIAL.jpg/1024px-JOHNSTOWN_FLOOD_NATIONAL_MEMORIAL.jpg'}
                    }
                },
                {
                    'jthg': {
                        images: {url: 'https://c1.staticflickr.com/1/689/21469871958_b1d9b42f07_b.jpg'}
                    }
                },
                {
                    'lode': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/2009-08-17_View_north_up_the_Delaware_River_from_the_Reading_Railroad_Bridge_between_Ewing%2C_New_Jersey_and_Lower_Makefield_Township%2C_Pennsylvania.jpg/640px-2009-08-17_View_north_up_the_Delaware_River_from_the_Reading_Railroad_Bridge_between_Ewing%2C_New_Jersey_and_Lower_Makefield_Township%2C_Pennsylvania.jpg'}
                    }
                },
                {
                    'noco': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/North_Country_National_Scenic_Trail.jpg/1024px-North_Country_National_Scenic_Trail.jpg'}
                    }
                },
                {
                    'oire': {
                        images: {url: 'https://www.nps.gov/common/uploads/banner_image/ner/homepage/3DF81BA7-1DD8-B71B-0B4B6A2C79C18EE4.jpg?width=2400&height=700&mode=crop&quality=90'}
                    }
                },
                {
                    'pohe': {
                        images: {url: 'https://c1.staticflickr.com/8/7487/27579412244_de8ea643b0_b.jpg'}
                    }
                },
                {
                    'rist': {
                        images: {url: 'https://www.nps.gov/common/uploads/banner_image/ner/homepage/60E35238-1DD8-B71B-0B9C262F1F271934.jpg?width=2400&height=700&mode=crop&quality=90'}
                    }
                },
                {
                    'scrv': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/68534926-1DD8-B71B-0BD61EB113F36D8A.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'stea': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Steamtown_National_Historic_Site_020.jpg/640px-Steamtown_National_Historic_Site_020.jpg'}
                    }
                },
                {
                    'thko': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Thaddeus_Kosciuszko_sculpture%2C_Public_Garden%2C_Boston%2C_MA_-_IMG_5481.JPG/576px-Thaddeus_Kosciuszko_sculpture%2C_Public_Garden%2C_Boston%2C_MA_-_IMG_5481.JPG'}
                    }
                },
                {
                    'upde': {
                        images: {url: 'https://ridb.recreation.gov/images/82513.jpg'}
                    }
                },
                {
                    'vafo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Valley_Forge_National_Historical_Park%2C_Log_Cabins.JPG/640px-Valley_Forge_National_Historical_Park%2C_Log_Cabins.JPG'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/8F96B982-1DD8-B71B-0B7907531084E975.jpg?width=950&quality=90&mode=crop'}
                    }
                }
            ]
        },
        RI: {
            parks: [
                {
                    'blrv': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/SlaterMill.JPG'}
                    }
                },
                {
                    'blac': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/B95E3C31-1DD8-B71B-0B79633091402BF0.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'rowi': {
                        images: {url: 'https://ridb.recreation.gov/images/82255.jpg'}
                    }
                },
                {
                    'tosy': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Touro_Synagogue_National_Historic_Site_TOSY1085.jpg/1024px-Touro_Synagogue_National_Historic_Site_TOSY1085.jpg'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/8F96B982-1DD8-B71B-0B7907531084E975.jpg?width=950&quality=90&mode=crop'}
                    }
                }
            ]
        },
        SC: {
            parks: [
                {
                    'chpi': {
                        images: {url: 'https://www.nps.gov/chpi/planyourvisit/images/SNEE04.JPG?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'cong': {
                        images: {url: 'https://www.nps.gov/cong/planyourvisit/images/State-Champ-Bald-Cypress.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'cowp': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Welcome_to_Cowpens_National_Battlefield%2C_South_Carolina_%285811059944%29.jpg/640px-Welcome_to_Cowpens_National_Battlefield%2C_South_Carolina_%285811059944%29.jpg'}
                    }
                },
                {
                    'fosu': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/FORT_SUMTER_NATIONAL_MONUMENT.jpg/1024px-FORT_SUMTER_NATIONAL_MONUMENT.jpg'}
                    }
                },
                {
                    'guge': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3FBCE71F-1DD8-B71B-0BA0D66EBB68BC88.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'kimo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kings_Mountain_National_Military_Park_-_South_Carolina_%288558886876%29_%282%29.jpg/640px-Kings_Mountain_National_Military_Park_-_South_Carolina_%288558886876%29_%282%29.jpg'}
                    }
                },
                {
                    'nisi': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Ninety_Six_stockade_fort_SC2.jpg/1024px-Ninety_Six_stockade_fort_SC2.jpg'}
                    }
                },
                {
                    'ovvi': {
                        images: {url: 'https://ridb.recreation.gov/images/82056.jpg'}
                    }
                },
                {
                    'reer': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/924EBDC2-1DD8-B71B-0B701BF45A328F64.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'soca': {
                        images: {url: 'https://ridb.recreation.gov/images/82396.jpg'}
                    }
                }
            ]
        },
        SD: {
            parks: [
                {
                    'badl': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Badlands_National_Park.jpg'}
                    }
                },
                {
                    'jeca': {
                        images: {url: 'https://ridb.recreation.gov/images/81510.jpg'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://c1.staticflickr.com/5/4430/36572261342_54377de201_b.jpg'}
                    }
                },
                {
                    'mimi': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Minuteman_Missile_National_Historic_Site_silo.jpg/1024px-Minuteman_Missile_National_Historic_Site_silo.jpg'}
                    }
                },
                {
                    'mnrr': {
                        images: {url: 'https://www.nps.gov/mnrr/learn/photosmultimedia/images/Fly-the-MNRR-webpage_2.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'moru': {
                        images: {url: 'https://www.nps.gov/common/uploads/place/nri/20170201/places/D6367F17-1DD8-B71B-0BB3701ACA276A9F/D6367F17-1DD8-B71B-0BB3701ACA276A9F.jpg'}
                    }
                },
                {
                    'wica': {
                        images: {url: 'https://www.nps.gov/wica/learn/news/images/Buffalo-Jump-at-Wind-Cave-Med-Res-no-line.jpg?maxwidth=650&autorotate=false'}
                    }
                }
            ]
        },
        TN: {
            parks: [
                {
                    'anjo': {
                        images: {url: 'https://ridb.recreation.gov/images/80556.jpg'}
                    }
                },
                {
                    'appa': {
                        images: {url: 'https://science.nature.nps.gov/im/units/netn/assets/images/East%20MT_SDF.JPG'}
                    }
                },
                {
                    'biso': {
                        images: {url: 'https://www.nps.gov/common/uploads/stories/images/nri/20161020/articles/E93D92F9-1DD8-B71B-0B20733E1CD3521C/E93D92F9-1DD8-B71B-0B20733E1CD3521C.jpg'}
                    }
                },
                {
                    'chch': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Chickamauga_and_Chattanooga_National_Military_Park_35640891205.jpg/1024px-Chickamauga_and_Chattanooga_National_Military_Park_35640891205.jpg'}
                    }
                },
                {
                    'cuga': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C48EF8C0-1DD8-B71B-0B1CCA8A575B0FC0.jpg?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'fodo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/4D864C4D-1DD8-B71B-0B0A61067B208560.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'grsm': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Smoky_Mountains%2C_in_Great_Smoky_Mountains_National_Park.jpg/640px-The_Smoky_Mountains%2C_in_Great_Smoky_Mountains_National_Park.jpg'}
                    }
                },
                {
                    'mapr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6D0FFEC0-1DD8-B71B-0B635C4D22121B63.jpg?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'natt': {
                        images: {url: natchezTraceTrail}
                    }
                },
                {
                    'natr': {
                        images: {url: 'https://drive.google.com/uc?id=10MKxjVbEtVR2k4pvA_Qo6XKaWoLHTwoT'}
                    }
                },
                {
                    'obed': {
                        images: {url: 'https://ridb.recreation.gov/images/81996.jpg'}
                    }
                },
                {
                    'ovvi': {
                        images: {url: 'https://ridb.recreation.gov/images/82056.jpg'}
                    }
                },
                {
                    'shil': {
                        images: {url: 'https://www.nps.gov/shil/learn/news/images/cemetery-wall-and-flag-NPS-Photo-Mekow.jpg'}
                    }
                },
                {
                    'stri': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Stones_River_National_Battlefield_Murfreesboro_TN_2013-12-27_029.jpg/800px-Stones_River_National_Battlefield_Murfreesboro_TN_2013-12-27_029.jpg'}
                    }
                },
                {
                    'tecw': {
                        images: {url: 'https://ridb.recreation.gov/images/82424.jpg'}
                    }
                },
                {
                    'trte': {
                        images: {url: trailOfTears}
                    }
                }
            ]
        },
        TX: {
            parks: [
                {
                    'alfl': {
                        images: {url: 'https://c1.staticflickr.com/2/1716/25877869026_f02bd9167c_b.jpg'}
                    }
                },
                {
                    'amis': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/imr/crop16_9/4F7EA0D2-1DD8-B71B-0BC8D967C3037D71.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'bibe': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Gfp-texas-big-bend-national-park-mountains-by-the-lodge.jpg/1024px-Gfp-texas-big-bend-national-park-mountains-by-the-lodge.jpg'}
                    }
                },
                {
                    'bith': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Trees_at_Big_Thicket_National_Preserve.jpg/1024px-Trees_at_Big_Thicket_National_Preserve.jpg'}
                    }
                },
                {
                    'cham': {
                        images: {url: 'https://www.nps.gov/common/uploads/stories/images/nri/20160831/articles/CB0FD325-1DD8-B71B-0BBC34AC2B844D44/CB0FD325-1DD8-B71B-0BBC34AC2B844D44.jpg'}
                    }
                },
                {
                    'elte': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/imr/crop16_9/579FB6BB-1DD8-B71B-0B6B1DAC907E0DB5.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'elca': {
                        images: {url: 'https://c1.staticflickr.com/5/4337/36695139496_59f9eee9cc_b.jpg'}
                    }
                },
                {
                    'foda': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Fort_Davis_National_Historic_Site%2C_Texas_07.JPG/800px-Fort_Davis_National_Historic_Site%2C_Texas_07.JPG'}
                    }
                },
                {
                    'gumo': {
                        images: {url: 'https://c1.staticflickr.com/5/4572/37710649384_dab55ec2db_b.jpg'}
                    }
                },
                {
                    'lamr': {
                        images: {url: 'https://ridb.recreation.gov/images/81643.jpg?1516838400054'}
                    }
                },
                {
                    'lyjo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Lyndon_B._Johnson_National_Historical_Park_LYJO1975.jpg/1024px-Lyndon_B._Johnson_National_Historical_Park_LYJO1975.jpg'}
                    }
                },
                {
                    'pais': {
                        images: {url: 'https://www.nps.gov/pais/planyourvisit/images/pelicans.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'paal': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Palo_Alto_Battlefield_NHP.JPG/1024px-Palo_Alto_Battlefield_NHP.JPG'}
                    }
                },
                {
                    'rigr': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/-conservationlands15_Social_Media_Takeover%2C_Jan_15th%2C_Rio_Grande_Wild_and_Scenic_River_in_New_Mexico_%2816287782645%29.jpg/1024px--conservationlands15_Social_Media_Takeover%2C_Jan_15th%2C_Rio_Grande_Wild_and_Scenic_River_in_New_Mexico_%2816287782645%29.jpg'}
                    }
                },
                {
                    'saan': {
                        images: {url: 'https://ridb.recreation.gov/images/82317.jpg'}
                    }
                },
                {
                    'waco': {
                        images: {url: 'https://ridb.recreation.gov/images/82553.jpg'}
                    }
                }
            ]
        },
        UT: {
            parks: [
                {
                    'arch': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Skyline_Arch_at_Arches_National_Park-Unburnsky.jpg/1024px-Skyline_Arch_at_Arches_National_Park-Unburnsky.jpg'}
                    }
                },
                {
                    'brca': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Hoodoos_from_the_Peekaboo_Loop_Trail_-_Bryce_Canyon_National_Park.jpg'}
                    }
                },
                {
                    'cali': {
                        images: {url: 'https://ridb.recreation.gov/images/80246.jpg'}
                    }
                },
                {
                    'cany': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Mesa_Arch_Canyonlands_National_Park.jpg'}
                    }
                },
                {
                    'care': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Cassidy_Arch%2C_Capitol_Reef_National_Park.JPG/640px-Cassidy_Arch%2C_Capitol_Reef_National_Park.JPG'}
                    }
                },
                {
                    'cebr': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Cedar_Breaks_National_Monument.JPG/1024px-Cedar_Breaks_National_Monument.JPG'}
                    }
                },
                {
                    'dino': {
                        images: {url: 'https://ridb.recreation.gov/images/80832.jpg'}
                    }
                },
                {
                    'glca': {
                        images: {url: 'https://www.nps.gov/glca/learn/news/images/GLCA-Iconic-Horseshoe-Bend-on-the-Colorado-River-in-Glen-Canyon-NRA.jpg'}
                    }
                },
                {
                    'gosp': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/A_meeting_of_the_engines_at_the_Golden_Spike_National_Historic_Site%2C_Utah_%28angled_view%29.jpg/999px-A_meeting_of_the_engines_at_the_Golden_Spike_National_Historic_Site%2C_Utah_%28angled_view%29.jpg'}
                    }
                },
                {
                    'hove': {
                        images: {url: 'https://www.nps.gov/common/uploads/stories/images/nri/20161202/articles/8D6FD35E-1DD8-B71B-0B23EF61C353EC93/8D6FD35E-1DD8-B71B-0B23EF61C353EC93.jpg'}
                    }
                },
                {
                    'mopi': {
                        images: {url: 'https://ridb.recreation.gov/images/81833.jpg'}
                    }
                },
                {
                    'nabr': {
                        images: {url: 'https://www.nps.gov/nabr/learn/nature/images/960-pix-owachomo.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'olsp': {
                        images: {url: 'https://c1.staticflickr.com/5/4429/36692061386_74427d316d_b.jpg'}
                    }
                },
                {
                    'poex': {
                        images: {url: 'https://ridb.recreation.gov/images/82168.jpg'}
                    }
                },
                {
                    'rabr': {
                        images: {url: 'https://c1.staticflickr.com/1/800/40906391281_b72159ed11_b.jpg'}
                    }
                },
                {
                    'tica': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Heart_of_the_Cave_-_Timpanogos_Cave_National_Monument_-_Mount_Timpanogos_of_the_Wasatch_Mountains%2C_in_Utah_County%2C_Utah_-_16_June_2012.jpg/640px-Heart_of_the_Cave_-_Timpanogos_Cave_National_Monument_-_Mount_Timpanogos_of_the_Wasatch_Mountains%2C_in_Utah_County%2C_Utah_-_16_June_2012.jpg'}
                    }
                },
                {
                    'zion': {
                        images: {url: 'https://ridb.recreation.gov/images/82797.jpg'}
                    }
                }
            ]
        },
        VT: {
            parks: [
                {
                    'appa': {
                        images: {url: 'https://science.nature.nps.gov/im/units/netn/assets/images/East%20MT_SDF.JPG'}
                    }
                },
                {
                    'chva': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Champlain_Valley_Fairgrounds_Entrance.JPG/640px-Champlain_Valley_Fairgrounds_Entrance.JPG'}
                    }
                },
                {
                    'mabi': {
                        images: {url: 'https://c1.staticflickr.com/1/20/69165512_d8702e969b_z.jpg?zz=1'}
                    }
                }
            ]
        },
        VA: {
            parks: [
                {
                    'appa': {
                        images: {url: 'https://science.nature.nps.gov/im/units/netn/assets/images/East%20MT_SDF.JPG'}
                    }
                },
                {
                    'apco': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Appomattox_Court_House_Historical_Park.jpg/640px-Appomattox_Court_House_Historical_Park.jpg'}
                    }
                },
                {
                    'arho': {
                        images: {url: 'https://www.nps.gov/thingstodo/images/19351022583_10b5016a3d_o.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'asis': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Wild_ponies_on_Assateague_Island_National_Seashore_by_Bonnie_Gruenberg.jpg/1024px-Wild_ponies_on_Assateague_Island_National_Seashore_by_Bonnie_Gruenberg.jpg'}
                    }
                },
                {
                    'blri': {
                        images: {url: 'https://c1.staticflickr.com/3/2041/1715794688_b9d5c9fa6d_b.jpg'}
                    }
                },
                {
                    'bowa': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Booker_T_Washington_National_Monument_Franklin_County_Virginia.JPG/640px-Booker_T_Washington_National_Monument_Franklin_County_Virginia.JPG'}
                    }
                },
                {
                    'came': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Fort_Story_lighthouses.jpg/1024px-Fort_Story_lighthouses.jpg'}
                    }
                },
                {
                    'cajo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/B33B9F02-1DD8-B71B-0B699BA0628152F2.JPG?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'cebe': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Cedar_Creek_fence.jpg/1024px-Cedar_Creek_fence.jpg'}
                    }
                },
                {
                    'cbpo': {
                        images: {url: 'https://c1.staticflickr.com/5/4091/5098396960_eaca250aa5_b.jpg'}
                    }
                },
                {
                    'cbgn': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/AB5DD0B4-1DD8-B71B-0B5942401DD0B7D1.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'cwdw': {
                        images: {url: 'https://www.nps.gov/common/uploads/banner_image/ncr/homepage/222BF6B8-1DD8-B71B-0B3D86CE9D4123C2.jpg'}
                    }
                },
                {
                    'clmo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Claude_Moore_Colonial_Farm_Park_P1010530_%28506728151%29.jpg/800px-Claude_Moore_Colonial_Farm_Park_P1010530_%28506728151%29.jpg'}
                    }
                },
                {
                    'colo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ambler_House%2C_New_Towne%2C_Colonial_National_Historical_Park%2C_Jamestown%2C_Virginia_%2814425752925%29.jpg/640px-Ambler_House%2C_New_Towne%2C_Colonial_National_Historical_Park%2C_Jamestown%2C_Virginia_%2814425752925%29.jpg'}
                    }
                },
                {
                    'cuga': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C48EF8C0-1DD8-B71B-0B1CCA8A575B0FC0.jpg?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'fomr': {
                        images: {url: 'https://ridb.recreation.gov/images/80981.jpg'}
                    }
                },
                {
                    'frsp': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Sunken_Road_Restored_2004_Section_in_Fredericksburg_and_Spotsylvania_National_Military_Park.jpg/640px-Sunken_Road_Restored_2004_Section_in_Fredericksburg_and_Spotsylvania_National_Military_Park.jpg'}
                    }
                },
                {
                    'gewa': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/George_Washington_Birthplace_National_Monument%2C_Virginia_5_%282522009779%29.jpg/1024px-George_Washington_Birthplace_National_Monument%2C_Virginia_5_%282522009779%29.jpg'}
                    }
                },
                {
                    'gwmp': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ncr/crop16_9/C6DECA25-1DD8-B71B-0BF3692898D6F971.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'grfa': {
                        images: {url: 'https://www.nps.gov/grfa/learn/nature/images/small_falls.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'grsp': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Green_Springs_from_west_bank_looking_east_2010.05.10.jpg/1024px-Green_Springs_from_west_bank_looking_east_2010.05.10.jpg'}
                    }
                },
                {
                    'hafe': {
                        images: {url: 'https://www.nps.gov/hafe/learn/news/images/for-web-MillsH_HAFE_LoudonHeights_20141017_07Edit-JPEG.JPG'}
                    }
                },
                {
                    'jame': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Historic_Jamestowne%2C_Colonial_National_Historical_Park%2C_Jamestown%2C_Virginia_%2814239013038%29.jpg/640px-Historic_Jamestowne%2C_Colonial_National_Historical_Park%2C_Jamestown%2C_Virginia_%2814239013038%29.jpg'}
                    }
                },
                {
                    'jthg': {
                        images: {url: 'https://c1.staticflickr.com/1/689/21469871958_b1d9b42f07_b.jpg'}
                    }
                },
                {
                    'mawa': {
                        images: {url: 'https://www.nps.gov/mawa/planyourvisit/images/exterior-image-of-row-for-hours_1.JPG?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'mana': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Stonewall_Jackson_monument%2C_Manassas%2C_VA_IMG_4325.JPG/640px-Stonewall_Jackson_monument%2C_Manassas%2C_VA_IMG_4325.JPG'}
                    }
                },
                {
                    'ovvi': {
                        images: {url: 'https://ridb.recreation.gov/images/82056.jpg'}
                    }
                },
                {
                    'pete': {
                        images: {url: 'https://c2.staticflickr.com/4/3213/2729330513_475eb337c3.jpg'}
                    }
                },
                {
                    'pohe': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'prwi': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Prince_William_Forest_Park_South_Valley_Trail-16.jpg'}
                    }
                },
                {
                    'rich': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Malvern_Hill%2C_Civil_War_Battlefield%2C_RIchmond_National_Battlefield_-_Stierch.jpg/640px-Malvern_Hill%2C_Civil_War_Battlefield%2C_RIchmond_National_Battlefield_-_Stierch.jpg'}
                    }
                },
                {
                    'shen': {
                        images: {url: 'https://c1.staticflickr.com/4/3710/9600060812_4614bc4e68_b.jpg'}
                    }
                },
                {
                    'shvb': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/New_Market_Battlefield_2014.jpg/1024px-New_Market_Battlefield_2014.jpg'}
                    }
                },
                {
                    'stsp': {
                        images: {url: 'https://www.nps.gov/common/uploads/places/images/nri/20140923/siteadmin/6906BEC1-F10B-A7B1-C20ACFB1C7016293/6906BEC1-F10B-A7B1-C20ACFB1C7016293.jpg'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/8F96B982-1DD8-B71B-0B7907531084E975.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'wotr': {
                        images: {url: 'https://www.nps.gov/wotr/planyourvisit/images/meadow-1_247062_2.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'york': {
                        images: {url: 'https://www.nps.gov/york/planyourvisit/images/cannon-R.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                }
            ]
        },
        WA: {
            parks: [
                {
                    'ebla': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Ferry_House_at_Ebey%27s_Landing_National_Historical_Reserve.jpg/1024px-Ferry_House_at_Ebey%27s_Landing_National_Historical_Reserve.jpg'}
                    }
                },
                {
                    'fova': {
                        images: {url: 'https://www.nps.gov/fova/learn/news/images/Fort-Vancouver-Garden.jpg'}
                    }
                },
                {
                    'iafl': {
                        images: {url: 'https://www.nps.gov/laro/learn/nature/images/dryfalls.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'klse': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/4/46/ChilkootPass_steps.jpg'}
                    }
                },
                {
                    'laro': {
                        images: {url: 'https://ridb.recreation.gov/images/81662.jpg'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://c1.staticflickr.com/5/4430/36572261342_54377de201_b.jpg'}
                    }
                },
                {
                    'lewi': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Lewis_and_Clark_National_Historical_Park_%28Fort_Clatsop_FOCL1525.jpg/1024px-Lewis_and_Clark_National_Historical_Park_%28Fort_Clatsop_FOCL1525.jpg'}
                    }
                },
                {
                    'mapr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6D0FFEC0-1DD8-B71B-0B635C4D22121B63.jpg?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'miin': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/A6EC2301-1DD8-B71B-0B9A51F3CABF84AB.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'mora': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Governors_Ridge_seen_from_Highway_410_in_Mount_Rainier_National_Park.jpg/640px-Governors_Ridge_seen_from_Highway_410_in_Mount_Rainier_National_Park.jpg'}
                    }
                },
                {
                    'nepe': {
                        images: {url: 'https://www.nps.gov/nepe/learn/historyculture/images/Coyote-s-Fishnet_cropped.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'noca': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Cascade_pass.jpg'}
                    }
                },
                {
                    'olym': {
                        images: {url: 'https://www.nps.gov/olym/planyourvisit/images/Mountains_Snow_BBaccus_web4.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'oreg': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Oregon_National_Historic_Trail_in_Wyoming_%2815800827938%29.jpg/635px-Oregon_National_Historic_Trail_in_Wyoming_%2815800827938%29.jpg'}
                    }
                },
                {
                    'sajh': {
                        images: {url: 'https://ridb.recreation.gov/images/82329.jpg'}
                    }
                },
                {
                    'whmi': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/The_Oregon_Trail_at_the_Whitman_Mission_in_Walla_Walla%2C_WA.jpg/1024px-The_Oregon_Trail_at_the_Whitman_Mission_in_Walla_Walla%2C_WA.jpg'}
                    }
                },
                {
                    'wing': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Wing_Luke_Museum_-_looking_down_01.jpg/640px-Wing_Luke_Museum_-_looking_down_01.jpg'}
                    }
                }
            ]
        },
        WV: {
            parks: [
                {
                    'appa': {
                        images: {url: 'https://science.nature.nps.gov/im/units/netn/assets/images/East%20MT_SDF.JPG'}
                    }
                },
                {
                    'blue': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Bluestone_National_Scenic_River.jpg/1024px-Bluestone_National_Scenic_River.jpg'}
                    }
                },
                {
                    'choh': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/78EDA4E3-1DD8-B71B-0B3A5CCE6AF82EEB/proxy/hires/'}
                    }
                },
                {
                    'cbpo': {
                        images: {url: 'https://c1.staticflickr.com/5/4091/5098396960_eaca250aa5_b.jpg'}
                    }
                },
                {
                    'cbgn': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/AB5DD0B4-1DD8-B71B-0B5942401DD0B7D1.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'coal': {
                        images: {url: 'https://www.nps.gov/common/uploads/banner_image/ner/homepage/679C4472-1DD8-B71B-0B30782C5F8ECFE9.jpg?width=2400&height=700&mode=crop&quality=90'}
                    }
                },
                {
                    'gari': {
                        images: {url: 'https://ridb.recreation.gov/images/81070.jpg'}
                    }
                },
                {
                    'hafe': {
                        images: {url: 'https://www.nps.gov/hafe/learn/news/images/for-web-MillsH_HAFE_LoudonHeights_20141017_07Edit-JPEG.JPG'}
                    }
                },
                {
                    'jthg': {
                        images: {url: 'https://c1.staticflickr.com/1/689/21469871958_b1d9b42f07_b.jpg'}
                    }
                },
                {
                    'neri': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/New_River_Gorge_National_River.jpg/1024px-New_River_Gorge_National_River.jpg'}
                    }
                },
                {
                    'whee': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/340E6A22-1DD8-B71B-0B95A2C011E897DA.jpg?width=950&quality=90&mode=crop'}
                    }
                }
            ]
        },
        WI: {
            parks: [
                {
                    'apis': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Raspberry_Island_Apostle_Islands_National_Lakeshore.jpg/1024px-Raspberry_Island_Apostle_Islands_National_Lakeshore.jpg'}
                    }
                },
                {
                    'iatr': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ice_Age_National_Scenic_Trail_-_panoramio_%286%29.jpg/640px-Ice_Age_National_Scenic_Trail_-_panoramio_%286%29.jpg'}
                    }
                },
                {
                    'noco': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/North_Country_National_Scenic_Trail.jpg/1024px-North_Country_National_Scenic_Trail.jpg'}
                    }
                },
                {
                    'sacn': {
                        images: {url: 'https://ridb.recreation.gov/images/82283.jpg'}
                    }
                }
            ]
        },
        WY: {
            parks: [
                {
                    'bica': {
                        images: {url: 'https://www.nps.gov/bica/planyourvisit/images/Top_5_South_District.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'cali': {
                        images: {url: 'https://ridb.recreation.gov/images/80246.jpg'}
                    }
                },
                {
                    'deto': {
                        images: {url: 'https://images.pexels.com/photos/189425/pexels-photo-189425.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}
                    }
                },
                {
                    'fola': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Fort_Laramie_National_Historic_Site_Old_Bedlam_16-9-2014_13-37-40.JPG/1024px-Fort_Laramie_National_Historic_Site_Old_Bedlam_16-9-2014_13-37-40.JPG'}
                    }
                },
                {
                    'fobu': {
                        images: {url: 'https://ridb.recreation.gov/images/81046.jpg'}
                    }
                },
                {
                    'grte': {
                        images: {url: 'https://c1.staticflickr.com/7/6025/5906609315_c5131a3ea7_b.jpg'}
                    }
                },
                {
                    'mopi': {
                        images: {url: 'https://ridb.recreation.gov/images/81833.jpg'}
                    }
                },
                {
                    'oreg': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Oregon_National_Historic_Trail_in_Wyoming_%2815800827938%29.jpg/635px-Oregon_National_Historic_Trail_in_Wyoming_%2815800827938%29.jpg'}
                    }
                },
                {
                    'poex': {
                        images: {url: 'https://ridb.recreation.gov/images/82168.jpg'}
                    }
                },
                {
                    'yell': {
                        images: {url: 'https://c1.staticflickr.com/3/2941/15266522767_f84d221308_b.jpg'}
                    }
                }
            ]
        },
        GU: {
            parks: [
                {
                    'wapa': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Artillery_-_War_in_the_Pacific_National_Historical_Park_%28Ga%27an_Point%29_-_DSC00882.JPG/640px-Artillery_-_War_in_the_Pacific_National_Historical_Park_%28Ga%27an_Point%29_-_DSC00882.JPG'}
                    }
                }
            ]
        },
        PR: {
            parks: [
                {
                    'saju': {
                        images: {url: 'https://www.nps.gov/orgs/1207/images/san_juan_nhs_pr_nps_photo_6.jpg'}
                    }
                }
            ]
        },
        VI: {
            parks: [
                {
                    'buis': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Buck_Island_Reef_National_Monument_firecoral_jackfish.jpg'}
                    }
                },
                {
                    'chri': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/CHRISTIANSTED_NATIONAL_HISTORIC_SITE.jpg/1024px-CHRISTIANSTED_NATIONAL_HISTORIC_SITE.jpg'}
                    }
                },
                {
                    'sari': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Salt-River-Bay-1.jpg/1024px-Salt-River-Bay-1.jpg'}
                    }
                },
                {
                    'vicr': {
                        images: {url: 'https://www.nps.gov/orgs/1207/images/Trunk-Beach.jpg'}
                    }
                },
                {
                    'viis': {
                        images: {url: 'https://c1.staticflickr.com/1/657/20979411432_3743404182_b.jpg'}
                    }
                }
            ]
        }
    }]
}

class Content extends Component {

    liftLocationChange({target}) {
        this.props.handleChangeLocation(target.value)
        this.props.handleChangeState(target.label)
    }

    render() {
        return (
                <div className="row">
                    <div className="col-12">
                        <div className="row text-center">
                            <div className="col-12">
                                <h2
                                    style={{color:this.props.style.colors.darkGrey,
                                        fontSize: '1.2em',
                                        margin: '20px 0 0'}}>
                                    {this.props.serverData.parks &&
                                    this.props.usState}
                                </h2>
                            </div>
                            <div className="col-12">
                                <h2
                                    style={{
                                        color: this.props.style.colors.darkGrey,
                                        fontSize: '.8em',
                                        marginBottom: '20px'
                                    }}>
                                    {this.props.serverData.parks &&
                                    this.props.serverData.parks.length} Results Found
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 offset-1"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background:"linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.8)), "
                            + "url("
                            + splash
                            +")0% 0% / auto auto no-repeat",
                            backgroundSize:'100% 100%',
                            backgroundRepeat:'no-repeat',
                            backgroundPosition:'center bottom'
                    }}>
                        <Filters onChange={this.liftLocationChange.bind(this)}
                                 handleChangeLocation={this.props.handleChangeLocation}
                                 handleChangeState={this.props.handleChangeState}
                                 selectorData={usStates}
                                 location={this.props.location}
                                 style={this.props.style}/>
                    </div>
                    <div className="col-7">
                        < ResultsContainer
                            thumbnail={thumbnails.states[0]}
                            location={this.props.location}
                            parks={this.props.serverData.parks}
                            style={this.props.style}/>
                    </div>
                </div>
        );
    };
}

export default Content;
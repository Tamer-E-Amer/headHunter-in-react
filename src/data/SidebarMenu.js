/**
 * @description JS file that holds the side bar menu items for Employers, Candidates and System Admins
 */

const employerSideBarMenu = [
    {
        id:1,
        color   :"#9f9a9a",
        text    :"Post a job",
        link    :"/postJob",
    },
    {
        id:2,
        color   :"#cf1919",
        text    :"Edit company Profile",
        link    :"/companyProfile",
    },
    {
        id:3,
        color   :"#2d2626",
        text    :"Read Messages",
        link    :"/messages",
    },
    {
        id:4,
        color   :"#FEED00",
        text    :"Contact Alps.East",
        link    :"/contactAlpsEast",
    },
    

];

const candidateSideBarMenu= [
    {
        id:1,
        color   :"#9f9a9a",
        text    :"My Applications",
        link    :"",
    },
    {
        id:2,
        color   :"#cf1919",
        text    :"Edit My Profile",
        link    :"/candidateProfile/987861654797447979797f9sd79f7sd9",
    },
    {
        id:3,
        color   :"#2d2626",
        text    :"Read Messages",
        link    :"/messages",
    },
    {
        id:4,
        color   :"#FEED00",
        text    :"Contact Alps.East",
        link    :"/contactAlpsEast",
    },
    

];
export {employerSideBarMenu, candidateSideBarMenu};
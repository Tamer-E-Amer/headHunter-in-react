/**
 * @description this is a JS file contains the data of alps-east home page that should be extracted dynamiclaly in the page components
 */
// Importing Icons

//userType component Icons
import { MdBusinessCenter } from "react-icons/md"; // employer user type
import {FaUsers} from 'react-icons/fa'; // candidate user type

//CategoryCard component Icons
import { FaGraduationCap }          from "react-icons/fa"; // job count for students
import { GrPersonalComputer }       from "react-icons/gr"; // job count for IT
import { FaHospitalAlt }            from "react-icons/fa"; // job count for Medicine
import { MdEngineering }            from "react-icons/md"; // job count for Engineering

const homePageDate ={
    "service":{
        "userTypes":[
            {
                "id":1,
                "type"              :"employer",
                "Icon"              :<MdBusinessCenter size={45} color="#fff"/>,
                "componentText"     :"If you are an Employer, you can register the site completely for free and then select one of our planes that matches your needs with very competitive fees. ",
                "backgroundColor"   :"red",
            },
            {
                "id":2,
                "type"              :"candidate",
                "Icon"              :<FaUsers size={45} color ="#fff"/>,
                "componentText"     :"If you are an Candidate, you can register the site completely  for free. the next step is just you search your dream Job , then fill the Application and send CV.",
                "backgroundColor"   :"gray",
            },
            
        ],
        "jobCategoryData":[
            {
                "id":1,
                "category"          :"Students",
                "positions"         :150,
                "companies"         :28,
                "Icon"              :<FaGraduationCap size={45} color="FaGraduationCap"/>,
            },
            {
                "id":2,
                "category"          :"IT",
                "positions"         :238,
                "companies"         :86,
                "Icon"              :<GrPersonalComputer size={45} color="FaGraduationCap"/>,
            },
            {
                "id":3,
                "category"          :"Medicine",
                "positions"         :180,
                "companies"         :15,
                "Icon"              :<FaHospitalAlt size={45} color="FaGraduationCap"/>,
            },
            {
                "id":4,
                "category"          :"Engineering",
                "positions"         :168,
                "companies"         :65,
                "Icon"              :<MdEngineering size={45} color="FaGraduationCap"/>,
            },
        ],
    },
    "statistics":{
        "candidates":1800,
    },
    "aboutUs":[
        {
            "pId"                   :1,
            "p"                     :"We are Alps.East, an online Web portal to connect the most talented   candidates around the world and the companies / Employers in Austria, Switzerland and Germany"

        },
        {
            "pId"                   :2,
            "p"                     :"You can find more than 600 job position for more than 70 companies in different fields."

        },
        {
            "pId"                   :3,
            "p"                     :"This Portal is founded by Mr. Adam Tarab. He lived in Austria more than 25 years ago. Mr. Adam Hopes the talented eastern youth can work in the large companies in Austria, Switzerland or Germany, because these countries have very big shortage in certain fields such as IT, Medicine and Engineering and they need qualified employees outside the EU, hence great chances that eastern youth can take."

        },
        {
            "pId":4,
            "p":"Alps.east will connect these qualified Youth and the large companies in these countries. we want also to say, we will your agent here. do not wory about some certain procedures that you should follow in order to have the Visa, renting an apartment and so on."

        },
    ],
    "footer":{
        "navigation":[
            {
                "id":1,
                "linkName":"Home",
                "url":"/",
            },
            {
                "id":2,
                "linkName":"Service",
                "url":"#service",
            },
            {
                "id":3,
                "linkName":"About",
                "url":"#about",
            },
            {
                "id":4,
                "linkName":"Contact Us",
                "url":"contact Us",
            },
        ],
        "externalLinks":[
            {
                "id":1,
                "linkName":"External link 1",
                "url":"#",
            },
            {
                "id":2,
                "linkName":"External link 2",
                "url":"#",
            },
            {
                "id":3,
                "linkName":"External link 3",
                "url":"#",
            },
            {
                "id":4,
                "linkName":"External link 4",
                "url":"#",
            },
            {
                "id":5,
                "linkName":"External link 5",
                "url":"#",
            },
        ],
        "copyrights":"Copy Rights are reserved 2022 - Tamer Amer"
    }
    
    
}
export default homePageDate;
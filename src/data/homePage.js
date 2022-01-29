import { MdBusinessCenter } from "react-icons/md";
import {FaUsers} from 'react-icons/fa';
const homePageDate ={
    "service":{
        "userTypes":[
            {
                "id":1,
                "type"              :"employer",
                "Icon": <MdBusinessCenter size={45} color="#fff"/>,
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
            
        ]
    }
}
export default homePageDate;
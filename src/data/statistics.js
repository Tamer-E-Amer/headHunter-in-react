/**
 * @description this is a helper file to calculate the sum of the opening positions and the sum of employers that provides these positions
 */

import serviceData from './homePage';

const jobCategoryData = serviceData.service.jobCategoryData;

 /**
* @description this function is used to sum of the opening positions in the jobCategoryData array using reduce method
*/
export const positionCount = jobCategoryData.reduce((a,b)=>({
    positions:a.positions + b.positions
}));


/**
* @description this function is used to sum of the companies in the jobCategoryData array using reduce method
*/
export const companiesCount = jobCategoryData.reduce((a,b)=>({
    companies:a.companies + b.companies,
}))


/**
 * @description this is axios request methods in order to not write them more and more in any request
 */
import axios from 'axios';

const BASE_URL  = "http://localhost:5000/api/";
const TOKEN     ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjg4OGIwYmNmZWZmNzVkMjcyZWE3ZiIsImlzQWRtaW4iOnRydWUsInVzZXJUeXBlIjoic2l0ZVRlYW0iLCJpYXQiOjE2NDY4MjM2OTQsImV4cCI6MTY0NzA4Mjg5NH0.-X_Kw8eQ1lR6C2RLuyP4Dh8uRiDpMtDLVuhDwkbDF8U";

// public request - wihtout login
export const publicRequest = axios.create({
    baseURL : BASE_URL,
})

// request that requires login
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header  :{token:`Bearer ${TOKEN}`},
})
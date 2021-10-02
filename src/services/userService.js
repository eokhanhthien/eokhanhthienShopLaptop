import axios from "../axios";

const getAllUsers  = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`)
}

const GetAllLaptops  = (startIndex,endIndex,sort) => {
    return axios.get(`/api/get-laptop?page=${startIndex}&limit=${endIndex}&sort=${sort}`)
}

const FindAllLaptop  = (input) => {
    return axios.get(`/api/filter-laptop?filter=${input}`)
}

export { getAllUsers , GetAllLaptops,FindAllLaptop }
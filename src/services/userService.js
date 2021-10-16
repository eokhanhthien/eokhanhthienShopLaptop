import axios from "../axios";

const getAllUsers  = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`)
}

const GetAllLaptops  = (startIndex,endIndex,sort,tenhang) => {
    return axios.get(`/api/get-laptop?page=${startIndex}&limit=${endIndex}&sort=${sort}&tenhang=${tenhang}`)
}

const FindAllLaptop  = (input) => {
    return axios.get(`/api/filter-laptop?filter=${input}`)
}

export { getAllUsers , GetAllLaptops,FindAllLaptop }
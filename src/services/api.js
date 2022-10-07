import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
})

const getAllExercises = async () => {
    return await axiosInstance.get('');
}

const getBodyParts = async () => {
    return await axiosInstance.get('/bodyPartList');
}

const getTargetList = async () => {
    return await axiosInstance.get('/targetList');
}

const getEquipmentList = async () => {
    return await axiosInstance.get('/equipmentList');
}

export { getAllExercises, getBodyParts, getTargetList, getEquipmentList }
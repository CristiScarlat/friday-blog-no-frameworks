import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
        'X-RapidAPI-Key': '0a4f552ee7msha809798f0387267p1f6839jsnef0c27a56717',
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
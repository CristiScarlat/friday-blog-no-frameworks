import './index.css';
import { nav } from './components/header/header';
import filters from './components/filters/filters';
import { getAllExercises, getBodyParts, getTargetList, getEquipmentList  } from './services/api';
import paginatedList from './components/paginatedList/paginatedList';


let filtersData = [];
let exercises = [];

const root = document.getElementById('root');
root.append(nav)

const buildFilters = () => {
    const filterContainer = filters(filtersData);
    root.appendChild(filterContainer);
}

const buildExercisesList = () => {
    const cardsList = paginatedList(exercises, 2);
    root.appendChild(cardsList);
}

window.onload = async () => {
    const storedData = localStorage.getItem('filtersData');
    if(storedData)filtersData = JSON.parse(storedData);
    if(filtersData.length === 0){
        try {
            const res = await Promise.allSettled([getBodyParts(), getTargetList(), getEquipmentList()]);
            res.forEach(data => {
                if(data.status === 'fulfilled')filtersData.push(data.value.data);
            })
            if(filtersData.length === 3)localStorage.setItem('filtersData', JSON.stringify(filtersData));
        } catch (error) {
            console.log(error)
        }
    }
    buildFilters()

    const storedExercise = localStorage.getItem('allExercises');
    if(storedExercise)exercises = JSON.parse(storedExercise);
    if(exercises.length === 0){
        try {
            const res = await getAllExercises();
            if(res.status === 200){
                exercises = res.data;
                localStorage.setItem('allExercises', JSON.stringify(res.data));
            }
        } catch (error) {
            console.log(error)
        }
    }

    buildExercisesList();
}

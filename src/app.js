import { nav, button } from './components/header';
import { getAllExercises } from './services/api';

const root = document.getElementById('root');
root.append(nav);

window.onload = async () => {
    try{
        const res = await getAllExercises();
        console.log(res)
    } catch(error){
        console.log(error)
    }

}

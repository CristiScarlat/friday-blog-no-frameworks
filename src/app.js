import { nav, button } from './components/header';
import { getAllExercises } from './services/api';

const root = document.getElementById('root');
root.append(nav);
button.innerText = "Click me"
button.className = "test-button"
root.append(button)



window.onload = async () => {
    try{
        const res = await getAllExercises();
        console.log(res)
    } catch(error){
        console.log(error)
    }

}

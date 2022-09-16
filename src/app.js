import { nav, button } from './components/header';
import { getAllExercises } from './services/api';

const root = document.getElementById('root');
root.append(nav);
button.innerText = "Click me"
root.append(button)

console.dir(button)


window.onload = async () => {
    try{
        const res = await getAllExercises();
        console.log(res)
    } catch(error){
        console.log(error)
    }

}

import './card.css';

const card = (data) => {
    const container = document.createElement('div');
    container.className = "card-container";
    const name = document.createElement('h2');
    name.innerText = data.name;
    container.appendChild(name);
    const img = document.createElement('img');
    img.src = data.gifUrl;
    img.alt = "exercise animation";
    container.appendChild(img);
    const info = document.createElement('div');
    const bodyPart = document.createElement('p');
    bodyPart.innerText = data.bodyPart;
    const equipment = document.createElement('p');
    equipment.innerText = data.equipment;
    const target = document.createElement('p');
    target.innerText = data.target;
    info.appendChild(bodyPart);
    info.appendChild(equipment);
    info.appendChild(target);
    container.appendChild(info);
    return container;
}

export default card;
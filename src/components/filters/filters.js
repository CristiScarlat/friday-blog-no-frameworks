import './filters.css';

const listNames = ['Body parts', 'Target muscles', 'Equipment'];
const filterType = ['bodyPart', 'target', 'equipment'];

const filters = (data, onChange) => {
    const container = document.createElement('div');
    container.className = "filters-container";
    data.forEach((list, index) => {
        const select = document.createElement('select');
        select.onchange = (e) => {
            onChange(filterType[index], e.target.value)
        }
        const opt = document.createElement('option');
        opt.value = null;
        opt.selected = true;
        opt.disabled = true;
        opt.innerText = listNames[index]
        select.appendChild(opt);
        list.forEach(item => {
            const opt = document.createElement('option');
            opt.value = item;
            opt.innerText = item;
            select.appendChild(opt);
        })
        container.appendChild(select);
    })
    return container;
}

export default filters;
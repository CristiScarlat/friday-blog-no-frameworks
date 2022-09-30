import { slicedArray } from '../../services/utils';
import card from '../card/card';
import "./paginatedList.css";

const paginatedList = (list, pageQty) => {
    let pageNo = 0;

    const container = document.createElement("div");
    const listContainer = document.createElement("div");
    listContainer.className = "paginated-list"
    const controls = document.createElement("div");
    controls.className = "paginated-controls"
    const prevBtn = document.createElement("button");
    prevBtn.innerText = "<<";
    prevBtn.onclick = () => {
        pageNo--;
        populateListContainer();
    }
    const nextBtn = document.createElement("button");
    nextBtn.innerText = ">>";
    nextBtn.onclick = () => {
        pageNo++;
        populateListContainer();
    }
    const pageNoDisplay = document.createElement("div");
    pageNoDisplay.innerText = pageNo + 1;
    controls.append(prevBtn, pageNoDisplay, nextBtn);
    
    function populateListContainer() {
        prevBtn.disabled = pageNo === 0;
        nextBtn.disabled = pageNo === list.length - 1;
        pageNoDisplay.innerText = `${pageNo+1}/${Math.floor(list.length/pageQty)}`
        const page = slicedArray(list, pageQty, pageNo);
        listContainer.innerHTML = null;
        page.forEach((item) => {
            const cardElem = card(item);
            listContainer.appendChild(cardElem);
        })
    }

    populateListContainer();
    container.append(listContainer, controls);
    return container;
}

export default paginatedList;
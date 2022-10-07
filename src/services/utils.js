export const slicedArray = (array, pageQty, pageNo) => {
    return array.slice(pageNo*pageQty, (pageNo*pageQty)+pageQty);
}

export const filterList = (list, filterTerms) => {
    const tempf = Object.keys(filterTerms).filter(k => filterTerms[k] !== null);
    let tempList = list;
    
    tempf.forEach(k => tempList = tempList.filter(obj => obj[k] === filterTerms[k]));
    
    return tempList;
}
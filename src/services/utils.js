export const slicedArray = (array, pageQty, pageNo) => {
    return array.slice(pageNo*pageQty, (pageNo*pageQty)+pageQty);
}
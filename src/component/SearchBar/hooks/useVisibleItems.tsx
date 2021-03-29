const useVisibleItems = (
    expand: boolean,
    col: number,
    searchItemKeys: string[],
    initRowNum: number,
) => {
    if (expand) {
        return searchItemKeys;
    } else {
        // col === 1
        let res = searchItemKeys.slice(0, 24 * initRowNum);
        if (col > 12) {
            res = searchItemKeys.slice(0, 1 * initRowNum);
        } else if (col > 8 && col <= 12) {
            res = searchItemKeys.slice(0, 2 * initRowNum);
        } else if (col > 6 && col <= 8) {
            res = searchItemKeys.slice(0, 3 * initRowNum);
        } else if (col > 4 && col <= 6) {
            res = searchItemKeys.slice(0, 4 * initRowNum);
        } else if (col === 4) {
            res = searchItemKeys.slice(0, 6 * initRowNum);
        } else if (col === 3) {
            res = searchItemKeys.slice(0, 8 * initRowNum);
        } else if (col === 2) {
            res = searchItemKeys.slice(0, 12 * initRowNum);
        }
        return res;
    }
};

export default useVisibleItems;

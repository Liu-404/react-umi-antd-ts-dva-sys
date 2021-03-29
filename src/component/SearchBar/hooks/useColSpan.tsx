const useColSpan = (colSpan: number | undefined, searchBoxWidth: number) => {
    if (colSpan && colSpan > 0) {
        return colSpan;
    } else {
        if (searchBoxWidth <= 600 && searchBoxWidth > 400) {
            return 12;
        } else if (searchBoxWidth <= 400) {
            return 24;
        } else {
            return 8;
        }
    }
};

export default useColSpan;

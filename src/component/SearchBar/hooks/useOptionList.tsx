const useOptionList = (
    options: any,
    optionText: string | undefined,
    optionValue: string | undefined,
) => {
    if (options instanceof Array) {
        if (optionText || optionValue) {
            const list = options.map((option) => {
                return {
                    value: option[optionValue ? optionValue : 'value'],
                    text: option[optionText ? optionText : 'text'],
                };
            });
            console.log(1, list);
            return list;
        } else {
            console.log(1, options);
            return options;
        }
    } else if (options instanceof Object) {
        let list = [];
        for (const key in options) {
            const item = {
                value: optionValue ? options[key][optionValue] : key,
                text: optionText ? options[key][optionText] : options[key],
            };
            list.push(item);
        }
        console.log(1, list);

        return list;
    }
    return [];
};

export default useOptionList;

import { SEARCH_OPTION_TYPE } from '@/utils/constants/compConstant';

const useOptionList = (optionType: number | undefined, options: any) => {
    if (!optionType || optionType === SEARCH_OPTION_TYPE.ARRAY) {
        return options;
    } else if (optionType === SEARCH_OPTION_TYPE.OBJECT) {
        let list = [];
        for (const key of options) {
            const item = { value: key, text: options[key] };
            list.push(item);
        }
        return list;
    }
    return [];
};

export default useOptionList;

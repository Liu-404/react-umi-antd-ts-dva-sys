import ContentPanel from '@/component/ContentPanel';
import SearchBar from '@/component/SearchBar';
import { DEVICE_SEARCH_PARAMS } from './constant';

const contentPanelStyle = {
    marginBottom: '20px',
};

const formParams = {
    initialValues: {
        code: '222',
    },
};

const Device = () => {
    const handleSearch = (val: any) => {
        // TODO: 获取 搜索栏表单内容
        console.log(val);
    };

    return (
        <div>
            <ContentPanel contentPanelStyle={contentPanelStyle}>
                <SearchBar
                    searchItems={DEVICE_SEARCH_PARAMS}
                    isOpenExpand
                    onSearch={handleSearch}
                    formParams={formParams}
                />
            </ContentPanel>
            <ContentPanel></ContentPanel>
        </div>
    );
};

export default Device;

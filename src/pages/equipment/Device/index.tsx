import ContentPanel from '@/component/ContentPanel';
import SearchBar from '@/component/SearchBar';
import { DEVICE_SEARCH_PARAMS } from './constant';
import moment from 'moment';

const contentPanelStyle = {
    marginBottom: '20px',
};

const Device = () => {
    const handleSearch = (val: any) => {
        // TODO: 获取 搜索栏表单内容
        console.log(val);
        console.log(val.E.format());
    };

    return (
        <div>
            <ContentPanel contentPanelStyle={contentPanelStyle}>
                <SearchBar
                    searchItems={DEVICE_SEARCH_PARAMS}
                    isOpenExpand
                    onSearch={handleSearch}
                />
            </ContentPanel>
            <ContentPanel></ContentPanel>
        </div>
    );
};

export default Device;

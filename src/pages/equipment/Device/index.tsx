import ContentPanel from '@/component/ContentPanel';
import SearchBar from '@/component/SearchBar';

const searchItems = {
    name: {
        type: 'input',
        label: '名字',
        placeholder: '请输入名字查询',
    },
    status: {
        type: 'select',
        label: '状态',
        placeholder: '请选择状态查询',
        options: [
            {
                value: 0,
                text: '关',
            },
            {
                value: 1,
                text: '开',
            },
        ],
    },
    age: {
        type: 'input',
        label: '年龄',
        placeholder: '请输入年龄查询',
    },
    a: {
        type: 'input',
        label: '名字是',
        placeholder: '请输入名字查询',
    },
};

const Device = () => {
    const handleSearch = (val: {}) => {
        console.log(val);
    };

    return (
        <div>
            <ContentPanel>
                <SearchBar
                    searchItems={searchItems}
                    isOpenExpand
                    onSearch={handleSearch}
                />
            </ContentPanel>
        </div>
    );
};

export default Device;

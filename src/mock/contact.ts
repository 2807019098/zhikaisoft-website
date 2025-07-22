export interface ContactItem {
    id: string;
    title: string;
    desc: string;
    icon: string;
}

export const contact: ContactItem[] = [
    {
        id: '1',
        title: '地址',
        desc: '上海市浦东新区纳贤路800号3楼（邮编：201203）',
        icon: 'location',
    },
    {
        id: '2',
        title: '电话',
        desc: '021-3821-7490',
        icon: 'phone',
    },
    {
        id: '3',
        title: '邮箱',
        desc: 'info@by1983.com',
        icon: 'mail',
    },
]; 
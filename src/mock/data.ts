export interface DataItem {
    id: string;
    title: string;
    desc: string;
    image: string;
}

export const data: DataItem[] = [
    {
        id: '1',
        title: '大数据分析',
        desc: '基于6亿+人群数据库，助力企业精准营销。',
        image: '/mock/data1.jpg',
    },
    {
        id: '2',
        title: '智慧场景',
        desc: '多场景智慧营销，提升用户转化。',
        image: '/mock/data2.jpg',
    },
    {
        id: '3',
        title: '数据可视化',
        desc: '多维度数据可视化，洞察业务增长。',
        image: '/mock/data3.jpg',
    },
]; 
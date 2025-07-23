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

export const heroBanners = [
    {
        img: "https://picsum.photos/seed/hero1/1920/600",
        title: "引领未来的软件创新",
        desc: "专注于高端定制开发，助力企业数字化转型，赋能业务增长",
    },
    {
        img: "https://picsum.photos/seed/hero2/1920/600",
        title: "数字化驱动企业升级",
        desc: "为一流品牌提供创意与技术服务，创新不止步",
    },
    {
        img: "https://picsum.photos/seed/hero3/1920/600",
        title: "定制开发，赋能未来",
        desc: "卓越交互体验，助力企业高效增长",
    },
]; 
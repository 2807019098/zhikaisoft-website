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
    // {
    //     img: "https://picsum.photos/seed/hero1/1920/600",
    //     title: "引领未来的软件创新",
    //     desc: "专注于高端定制开发，助力企业数字化转型，赋能业务增长",
    // },
    // {
    //     img: "https://picsum.photos/seed/hero2/1920/600",
    //     title: "数字化驱动企业升级",
    //     desc: "为一流品牌提供创意与技术服务，创新不止步",
    // },
    // {
    //     img: "https://picsum.photos/seed/hero3/1920/600",
    //     title: "定制开发，赋能未来",
    //     desc: "卓越交互体验，助力企业高效增长",
    // },
    {
        img: "/images/index/banner-bj1.png",
        title: "引领未来的软件创新",
        desc: "专注高端定制开发，从需求调研到落地交付全链路服务，助力企业数字化转型破局"
    },
    {
        img: "/images/index/banner-bj2.jpg",
        title: "数字化驱动企业升级",
        desc: "为头部品牌提供「创意+技术」双轮驱动服务，用定制方案解决业务增长核心痛点"
    },
    {
        img: "/images/index/banner-bj3.jpg",
        title: "定制开发·适配企业全场景",
        desc: "覆盖电商、政务、医疗等多领域解决方案，让软件精准匹配企业业务流程"
    },
    {
        img: "/images/index/banner-bj4.png",
        title: "交互体验·定义软件新标杆",
        desc: "以用户为中心的UI/UX设计，兼顾操作便捷性与视觉美感，提升用户留存率"
    },
    {
        img: "/images/index/banner-bj5.png",
        title: "长期赋能·伴企业共成长",
        desc: "提供上线后运维、迭代升级服务，让软件持续适配企业发展新需求"
    }
]; 
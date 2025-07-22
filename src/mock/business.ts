export interface BusinessItem {
    id: string;
    title: string;
    desc: string;
    image: string;
}

export const business: BusinessItem[] = [
    {
        id: '1',
        title: '品牌事业部',
        desc: '专注品牌数字化建设与传播。',
        image: '/mock/business1.jpg',
    },
    {
        id: '2',
        title: '互动事业部',
        desc: '创新互动体验，提升用户参与度。',
        image: '/mock/business2.jpg',
    },
    {
        id: '3',
        title: '数据事业部',
        desc: '数据驱动业务增长，赋能企业决策。',
        image: '/mock/business3.jpg',
    },
]; 
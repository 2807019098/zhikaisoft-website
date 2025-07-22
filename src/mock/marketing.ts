export interface MarketingItem {
    id: string;
    title: string;
    desc: string;
    image: string;
}

export const marketing: MarketingItem[] = [
    {
        id: '1',
        title: 'H5营销',
        desc: '创意H5互动，提升品牌传播力。',
        image: '/mock/marketing1.jpg',
    },
    {
        id: '2',
        title: '社会化营销',
        desc: '整合社交平台资源，助力品牌裂变。',
        image: '/mock/marketing2.jpg',
    },
    {
        id: '3',
        title: '数字全案',
        desc: '全链路数字营销解决方案。',
        image: '/mock/marketing3.jpg',
    },
    {
        id: '4',
        title: '媒介投放',
        desc: '精准媒介投放，提升转化率。',
        image: '/mock/marketing4.jpg',
    },
]; 
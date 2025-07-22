export interface InteractiveItem {
    id: string;
    title: string;
    desc: string;
    image: string;
    category: string;
}

export const interactive: InteractiveItem[] = [
    {
        id: '1',
        title: '高端企业官网',
        desc: '定制化网站建设，提升品牌形象。',
        image: '/mock/interactive1.jpg',
        category: 'web',
    },
    {
        id: '2',
        title: '品牌营销型网站',
        desc: '助力企业数字化营销转型。',
        image: '/mock/interactive2.jpg',
        category: 'web',
    },
    {
        id: '3',
        title: 'iOS/Android APP开发',
        desc: '原生/混合APP开发，满足多场景需求。',
        image: '/mock/interactive3.jpg',
        category: 'app',
    },
    {
        id: '4',
        title: '小程序开发',
        desc: '微信/支付宝/抖音小程序全生态开发。',
        image: '/mock/interactive4.jpg',
        category: 'wechat',
    },
    {
        id: '5',
        title: '公众号开发',
        desc: '企业微信、服务号、订阅号开发。',
        image: '/mock/interactive5.jpg',
        category: 'wechat',
    },
    {
        id: '6',
        title: '企业管理系统',
        desc: 'CRM、ERP、OA等定制系统开发。',
        image: '/mock/interactive6.jpg',
        category: 'system',
    },
    {
        id: '7',
        title: '行业解决方案',
        desc: '医疗、教育、地产等行业系统开发。',
        image: '/mock/interactive7.jpg',
        category: 'system',
    },
]; 
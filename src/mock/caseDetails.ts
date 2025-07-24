export interface CaseDetail {
    id: string;
    title: string;
    summary: string;
    services: string[];
    description: string;
    cover: string;
    images: string[];
}

export const caseDetails: CaseDetail[] = [
    {
        id: '1',
        title: '达能—职场小白逆袭记',
        summary: '达能—职场小白逆袭记',
        services: ['用户体验', '移动平台开发', '前端开发', '后台开发', '交互设计', '用户界面设计'],
        description: '',
        cover: '/images/banner/a08d1382-0b89-4ea2-9ea6-0ec45c97611a.jpg',
        images: [
            '/images/detail/6379159746167903666940842.jpg'
        ]
    },
    {
        id: '2',
        title: '麦德龙METRO',
        summary: '麦德龙METRO',
        services: ['移动平台开发', '前端开发', '交互设计', '用户界面设计'],
        description: '作为全球自助式批发业务的领导者，1996年，麦德龙在上海开设了它在中国的第一家现购自运批发商场，给中国带来了全新的商业理念。麦德龙是中国第一批获得中央政府批准、允许在中国主要城市建立连锁商场的外资商业巨头。',
        cover: '/images/banner/8106f749-7b94-4ede-9575-2b6633b49720.jpg',
        images: [
            '/images/detail/6365240301362089975585729.jpg'
        ]
    },
    {
        id: '3',
        title: '森瑶企业官网',
        summary: '森瑶企业数字化转型案例，助力业务升级。',
        services: ['系统开发', '前端开发', '交互设计'],
        description: '森瑶企业官网聚焦数字化转型，整合企业资源，提升业务效率。网站设计简洁大气，突出企业实力与服务优势，助力企业品牌升级。',
        cover: 'https://picsum.photos/seed/senyao/1200/400',
        images: [
            'https://picsum.photos/seed/senyao1/600/400',
            'https://picsum.photos/seed/senyao2/600/400'
        ]
    }
]; 
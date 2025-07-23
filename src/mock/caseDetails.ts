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
        title: '源东品牌官网',
        summary: '为源东品牌打造高端企业官网，提升品牌形象。',
        services: ['用户体验', '前端开发', '后台开发', '交互设计', '用户界面设计'],
        description: '源东品牌官网项目，旨在通过高端定制化设计，全面提升品牌形象，增强用户信任感。项目涵盖品牌故事、产品展示、互动体验等多模块，采用响应式设计，兼容多终端访问。',
        cover: 'https://picsum.photos/seed/yuandong/1200/400',
        images: [
            'https://picsum.photos/seed/yuandong1/600/400',
            'https://picsum.photos/seed/yuandong2/600/400',
            'https://picsum.photos/seed/yuandong3/600/400'
        ]
    },
    {
        id: '2',
        title: '加藤德官网',
        summary: '加藤德全球品牌官网，极致交互体验。',
        services: ['移动平台开发', '前端开发', '交互设计', '用户界面设计'],
        description: '加藤德官网以极致的交互体验为核心，结合品牌调性，打造国际化视觉风格。项目包含品牌介绍、产品中心、新闻动态等板块，提升品牌全球影响力。',
        cover: 'https://picsum.photos/seed/jiatengde/1200/400',
        images: [
            'https://picsum.photos/seed/jiatengde1/600/400',
            'https://picsum.photos/seed/jiatengde2/600/400'
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
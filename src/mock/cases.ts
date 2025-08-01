export enum CaseType {
    Website = 1,          // 网站建设
    Ecommerce = 2,        // 电商平台
    BackendSystem = 3,    // 后台管理系统
    MobileApp = 4,        // 移动端应用
    DataVisualization = 5,// 数据可视化
    Other = 6             // 其他
}

export enum TechTag {
    Frontend = 101,       // Web前端
    SystemDev = 102,      // 系统开发
    DesktopApp = 103,     // 窗体应用
    MiniProgram = 104,    // 小程序开发
    NativeApp = 105,      // 原生App
    HybridApp = 106,      // 套壳App
    ApiDev = 107,         // 接口开发
    Auth = 108            // 身份认证
}

export interface CaseItem {
    id: string;
    title: string;
    image: string;
    link: string;
    type: CaseType;       // 主分类，int存储
    tags: TechTag[];      // 技术标签，int数组存储
}

export const cases: CaseItem[] = [
    {
        id: "1",
        title: "达能—职场小白逆袭记",
        image: "/images/case/99754aa9-f845-444e-929d-2d0eee1fe7cd.jpg",
        link: "/cases/1",
        type: CaseType.Website,
        tags: [TechTag.Frontend]
    },
    {
        id: "2",
        title: "麦德龙METRO",
        image: "/images/case/38aeb9e4-551a-47e2-bb62-cefd0806b715.jpg",
        link: "/cases/2",
        type: CaseType.Website,
        tags: [TechTag.Frontend]
    },
    {
        id: "3",
        title: "微信小程序商城",
        image: "https://picsum.photos/seed/case3/400/300",
        link: "/cases/3",
        type: CaseType.Ecommerce,
        tags: [TechTag.MiniProgram, TechTag.SystemDev]
    },
    {
        id: "4",
        title: "移动端APP开发",
        image: "https://picsum.photos/seed/case4/400/300",
        link: "/cases/4",
        type: CaseType.MobileApp,
        tags: [TechTag.NativeApp, TechTag.SystemDev]
    },
    {
        id: "5",
        title: "企业管理系统",
        image: "https://picsum.photos/seed/case5/400/300",
        link: "/cases/5",
        type: CaseType.BackendSystem,
        tags: [TechTag.SystemDev]
    },
    {
        id: "6",
        title: "H5营销活动页面",
        image: "https://picsum.photos/seed/case6/400/300",
        link: "/cases/6",
        type: CaseType.Website,
        tags: [TechTag.Frontend]
    },
    {
        id: "7",
        title: "电商网站建设",
        image: "https://picsum.photos/seed/case7/400/300",
        link: "/cases/7",
        type: CaseType.Ecommerce,
        tags: [TechTag.SystemDev, TechTag.Frontend]
    },
    {
        id: "8",
        title: "微信公众号开发",
        image: "https://picsum.photos/seed/case8/400/300",
        link: "/cases/8",
        type: CaseType.Ecommerce,
        tags: [TechTag.MiniProgram, TechTag.SystemDev]
    },
    {
        id: "9",
        title: "iOS原生应用",
        image: "https://picsum.photos/seed/case9/400/300",
        link: "/cases/9",
        type: CaseType.MobileApp,
        tags: [TechTag.NativeApp, TechTag.SystemDev]
    },
    {
        id: "10",
        title: "CRM客户管理系统",
        image: "https://picsum.photos/seed/case10/400/300",
        link: "/cases/10",
        type: CaseType.BackendSystem,
        tags: [TechTag.SystemDev]
    },
    {
        id: "11",
        title: "H5游戏开发",
        image: "https://picsum.photos/seed/case11/400/300",
        link: "/cases/11",
        type: CaseType.Website,
        tags: [TechTag.Frontend]
    },
    {
        id: "12",
        title: "企业官网建设",
        image: "https://picsum.photos/seed/case12/400/300",
        link: "/cases/12",
        type: CaseType.Website,
        tags: [TechTag.Frontend]
    },
    {
        id: "13",
        title: "微信小程序点餐",
        image: "https://picsum.photos/seed/case13/400/300",
        link: "/cases/13",
        type: CaseType.Ecommerce,
        tags: [TechTag.MiniProgram, TechTag.SystemDev]
    },
    {
        id: "14",
        title: "Android应用开发",
        image: "https://picsum.photos/seed/case14/400/300",
        link: "/cases/14",
        type: CaseType.MobileApp,
        tags: [TechTag.NativeApp, TechTag.SystemDev]
    },
    {
        id: "15",
        title: "ERP企业资源规划",
        image: "https://picsum.photos/seed/case15/400/300",
        link: "/cases/15",
        type: CaseType.BackendSystem,
        tags: [TechTag.SystemDev]
    }
]; 
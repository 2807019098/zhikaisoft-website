export enum CaseType {
    H5 = 1,
    Website = 2,
    Wechat = 3,
    App = 4,
    System = 5
}

export interface CaseItem {
    id: string;
    title: string;
    image: string;
    link: string;
    type: CaseType;
}

export const cases: CaseItem[] = [
    {
        id: "1",
        title: "达能—职场小白逆袭记",
        image: "/images/case/99754aa9-f845-444e-929d-2d0eee1fe7cd.jpg",
        link: "/cases/1",
        type: CaseType.H5
    },
    {
        id: "2",
        title: "麦德龙METRO",
        image: "/images/case/38aeb9e4-551a-47e2-bb62-cefd0806b715.jpg",
        link: "/cases/2",
        type: CaseType.Website
    },
    {
        id: "3",
        title: "微信小程序商城",
        image: "https://picsum.photos/seed/case3/400/300",
        link: "/cases/3",
        type: CaseType.Wechat
    },
    {
        id: "4",
        title: "移动端APP开发",
        image: "https://picsum.photos/seed/case4/400/300",
        link: "/cases/4",
        type: CaseType.App
    },
    {
        id: "5",
        title: "企业管理系统",
        image: "https://picsum.photos/seed/case5/400/300",
        link: "/cases/5",
        type: CaseType.System
    },
    {
        id: "6",
        title: "H5营销活动页面",
        image: "https://picsum.photos/seed/case6/400/300",
        link: "/cases/6",
        type: CaseType.H5
    },
    {
        id: "7",
        title: "电商网站建设",
        image: "https://picsum.photos/seed/case7/400/300",
        link: "/cases/7",
        type: CaseType.Website
    },
    {
        id: "8",
        title: "微信公众号开发",
        image: "https://picsum.photos/seed/case8/400/300",
        link: "/cases/8",
        type: CaseType.Wechat
    },
    {
        id: "9",
        title: "iOS原生应用",
        image: "https://picsum.photos/seed/case9/400/300",
        link: "/cases/9",
        type: CaseType.App
    },
    {
        id: "10",
        title: "CRM客户管理系统",
        image: "https://picsum.photos/seed/case10/400/300",
        link: "/cases/10",
        type: CaseType.System
    },
    {
        id: "11",
        title: "H5游戏开发",
        image: "https://picsum.photos/seed/case11/400/300",
        link: "/cases/11",
        type: CaseType.H5
    },
    {
        id: "12",
        title: "企业官网建设",
        image: "https://picsum.photos/seed/case12/400/300",
        link: "/cases/12",
        type: CaseType.Website
    },
    {
        id: "13",
        title: "微信小程序点餐",
        image: "https://picsum.photos/seed/case13/400/300",
        link: "/cases/13",
        type: CaseType.Wechat
    },
    {
        id: "14",
        title: "Android应用开发",
        image: "https://picsum.photos/seed/case14/400/300",
        link: "/cases/14",
        type: CaseType.App
    },
    {
        id: "15",
        title: "ERP企业资源规划",
        image: "https://picsum.photos/seed/case15/400/300",
        link: "/cases/15",
        type: CaseType.System
    }
]; 
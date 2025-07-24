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
    }
]; 
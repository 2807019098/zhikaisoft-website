export interface JoinItem {
    id: string;
    title: string;
    desc: string;
    image: string;
}

export const join: JoinItem[] = [
    {
        id: '1',
        title: '前端开发工程师',
        desc: '负责Web前端开发，React/Vue优先。',
        image: '/mock/join1.jpg',
    },
    {
        id: '2',
        title: 'UI设计师',
        desc: '负责产品界面设计，具备创新能力。',
        image: '/mock/join2.jpg',
    },
    {
        id: '3',
        title: '项目经理',
        desc: '负责项目统筹与团队管理，有相关经验者优先。',
        image: '/mock/join3.jpg',
    },
]; 
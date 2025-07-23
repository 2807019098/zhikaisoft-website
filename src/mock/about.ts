export interface AboutItem {
    id: string;
    title: string;
    desc: string;
    image: string;
}

export const about: AboutItem[] = [
    {
        id: '1',
        title: '公司简介',
        desc: '智开互动，专注数字创新与品牌升级，致力于为企业提供全链路数字化解决方案。',
        image: '/mock/about1.jpg',
    },
    {
        id: '2',
        title: '企业文化',
        desc: '以创新为驱动，追求卓越，团队协作，共创未来。',
        image: '/mock/about2.jpg',
    },
    {
        id: '3',
        title: '发展历程',
        desc: '十余年行业深耕，服务数百家知名企业。',
        image: '/mock/about3.jpg',
    },
    {
        id: '4',
        title: '未来愿景',
        desc: '成为中国数字创新领域的引领者。',
        image: '/mock/about4.jpg',
    },
]; 
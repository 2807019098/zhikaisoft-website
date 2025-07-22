export interface NewsItem {
    id: string;
    title: string;
    desc: string;
    date: string;
    image: string;
    link: string;
}

export const news: NewsItem[] = [
    {
        id: '1',
        title: '贝聿互动签约全球婴儿推车高端品牌——Silver Cross',
        desc: '贝聿互动签约全球婴儿推车高端品牌Silver Cross，助力品牌数字化升级。',
        date: '2024-05-01',
        image: '/mock/news1.jpg',
        link: 'https://www.by1983.com/news/silvercross',
    },
    {
        id: '2',
        title: '贝聿互动签约全球家具奢侈品牌——Baker',
        desc: '贝聿互动签约全球家具奢侈品牌Baker，创新驱动行业发展。',
        date: '2024-04-15',
        image: '/mock/news2.jpg',
        link: 'https://www.by1983.com/news/baker',
    },
    {
        id: '3',
        title: '贝聿互动签约嘉北郊野公园',
        desc: '贝聿互动助力嘉北郊野公园数字化转型，提升智慧景区体验。',
        date: '2024-03-28',
        image: '/mock/news3.jpg',
        link: 'https://www.by1983.com/news/jiabei',
    },
]; 
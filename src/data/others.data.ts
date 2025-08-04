import type { Card2Type } from '../type';
import aboutUsImage from '../assets/images/about-us-image.jpeg';
import ourMissionImage from '../assets/images/our-mission-image.jpeg';

// partners
import customersSvg from '../assets/svg/customers.svg';
import restaurantsSvg from '../assets/svg/restaurants.svg';
import ridersSvg from '../assets/svg/riders.svg';

// company
import company1 from '../assets/svg/company1.svg';
import company2 from '../assets/svg/company2.svg';
import company3 from '../assets/svg/company3.svg';
import company4 from '../assets/svg/company4.svg';

export const aboutUs: Card2Type = {
    title: 'ABOUT US',
    subtitle: 'Our company started back in 2016',
    description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.',
    image: aboutUsImage,
};

export const ourMission: Card2Type = {
    title: 'OUR MISSION',
    subtitle: 'Our mission is to disrupt the food industry',
    description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    image: ourMissionImage,
};

export const experienceData = [
    {
        id: '1',
        title: '2016',
        subtitle: 'Deliver X was founded',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.',
    },
    {
        id: '2',
        title: '2018',
        subtitle: 'Raised Series A at $50M valuation',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.',
    },
    {
        id: '3',
        title: '2019',
        subtitle: 'Raised Series B at $600M valuation',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.',
        last: true,
    },
    {
        id: '4',
        title: '2022',
        subtitle: 'Raised Series C at $3B valuation',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.',
    },
];

export const partnerData = [
    {
        id: '1',
        image: customersSvg,
        title: 'Customers',
        description:
            'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.',
    },
    {
        id: '2',
        image: restaurantsSvg,
        title: 'Restaurants',
        description:
            'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.',
    },
    {
        id: '3',
        image: ridersSvg,
        title: 'Riders',
        description:
            'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.',
    },
];

export const companyData = [
    {
        id: '1',
        image: company1,
        title: 'Deliver X raises $26M in series B funding for growth',
        href: '#',
        date: 'January 22, 2023',
    },
    {
        id: '2',
        image: company2,
        title: 'Deliver X claims to be the #1 player in the delivery industry',
        href: '#',
        date: 'Nov 15, 2022',
    },
    {
        id: '3',
        image: company3,
        title: 'Introducing curbside ordering with Deliver X',
        href: '#',
        date: 'Sep 18, 2022',
    },
    {
        id: '4',
        image: company4,
        title: 'Introducing the Square POS integration with Deliver X',
        href: '#',
        date: 'Mar 12, 2022',
    },
];

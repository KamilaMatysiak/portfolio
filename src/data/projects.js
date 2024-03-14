import estate from './img/realEstate.png';
import dt from './img/deathTracker.png';
import coboru from './img/coboru.png';
import rtg from './img/rtgMedix.png';
import aedile from './img/aedile.png';
import gnNews from './img/gnNews.png';

export const projects = [
    {
        path: '/real-estate',
        image: estate,
        category: ['UI design', 'React'],
        realized: false,
        title: 'Real Estate Agency Design with Administration Panel',
        codeLink: false,
        demoLink: 'https://www.figma.com/proto/d6sqy0TlHKUTvlGzuRHUtl/Estate-Agency?node-id=39%3A460&scaling=scale-down&page-id=0%3A1&starting-point-node-id=39%3A460&show-proto-sidebar=1'
    },

    {
        path: 'disabled',
        image: gnNews,
        category: ['React'],
        realized: false,
        title: 'News Service with React/Redux',
        codeLink: 'https://github.com/KamilaMatysiak/gnNews',
        demoLink: 'https://kamilamatysiak.github.io/gnNews/'
    },

    {
        path: 'disabled',
        image: aedile,
        category: ['React'],
        realized: false,
        title: 'Landing page promoting a Discord Bot',
        codeLink: 'https://github.com/KamilaMatysiak/bot-promotion-page/tree/master/aedile',
        demoLink: 'https://damage-calculator.you2.pl/aedile/'
    },

    {
        path: '/death-tracker',
        image: dt,
        category: ['UI design'],
        realized: false,
        title: 'Mobile Game Design with Map and Step Counter',
        codeLink: false,
        demoLink: 'https://www.figma.com/proto/p8aiecf6gk5QjtlM6J3PMO/DeathTracker?node-id=1007%3A6888&scaling=scale-down&page-id=1001%3A326&starting-point-node-id=1007%3A6888'
    },

    {
        path: 'disabled',
        image: rtg,
        category: ['UI design', 'HTML&CSS'],
        title: 'RTG Medix - commercial website',
        codeLink: false,
        demoLink: 'https://rtg-medix.pl'
    },

    {
        path: 'disabled',
        image: coboru,
        category: ['UI design', 'HTML&CSS'],
        title: 'COBORU website redesign and implementation',
        codeLink: '',
        demoLink: 'https://www.coboru.gov.pl/#'
    },
]
import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '#',
  },
  
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '#',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '#',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '#',
    status: {
      text: 'WIN',
      color: 'warning',
    },
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: '#',
  },
  {
    label: 'Team Battle',
    icon: 'TeamBattleIcon',
    href: '#',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: '#',
      },
      {
        label: 'Task Center',
        href: '#',
      },
      {
        label: 'Your Profile',
        href: '#',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: '#',
      },
      {
        label: 'Tokens',
        href: '#',
      },
      {
        label: 'Pairs',
        href: '#',
      },
      {
        label: 'Accounts',
        href: '#',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '#',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: '#',
      },
      {
        label: 'Voting',
        href: '#',
      },
      {
        label: 'Github',
        href: '#',
      },
      {
        label: 'Docs',
        href: '#',
      },
      {
        label: 'Blog',
        href: '#',
      },
      {
        label: 'Merch',
        href: '#',
      },
    ],
  },
]

export default config

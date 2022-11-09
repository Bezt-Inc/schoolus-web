import { menuT } from 'types/menu'
import { TbNotes } from 'react-icons/tb'
import { TfiHome } from 'react-icons/tfi'
import { GiProgression } from 'react-icons/gi'
import { BiStats } from 'react-icons/bi'
import { AiOutlineCheckSquare } from 'react-icons/ai'
import { SiGotomeeting } from 'react-icons/si'
import { IoSettingsOutline } from 'react-icons/io5'

export const sidebarMenu: menuT = [
  {
    Icon: TbNotes,
    name: 'Materials',
    routerUrl: '/materials',
    key: 'materials',
  },
  { Icon: TfiHome, name: 'Classes', routerUrl: '/classes', key: 'classes' },
  {
    Icon: GiProgression,
    name: 'Progress',
    routerUrl: '/progress',
    key: 'progress',
  },
  {
    Icon: BiStats,
    name: 'Statistics',
    routerUrl: '/statistics',
    key: 'statistics',
  },
  {
    Icon: AiOutlineCheckSquare,
    name: 'Testing',
    routerUrl: '/testing',
    key: 'testing',
  },
  {
    Icon: SiGotomeeting,
    name: 'Meetings',
    routerUrl: '/meetings',
    key: 'meetings',
  },
  {
    Icon: IoSettingsOutline,
    name: 'Settings',
    routerUrl: '/settings',
    key: 'settings',
  },
]

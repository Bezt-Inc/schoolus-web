import { sidebarMenu } from 'config/menu'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { menuItemT } from 'types/menu'

type useSchoolusNavigationT = () => {
  activeMenuItem: menuItemT | undefined
}

const useSchoolusNavigation: useSchoolusNavigationT = () => {
  const { pathname } = useLocation()

  const activeMenuItem = useMemo(
    () => sidebarMenu.find(item => pathname === item.routerUrl),
    [pathname],
  )

  return {
    activeMenuItem,
  }
}

export default useSchoolusNavigation

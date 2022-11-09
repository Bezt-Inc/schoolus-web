import { IconType } from 'react-icons'

export type menuT = menuItemT[]

export interface menuItemT {
  Icon: IconType
  name: string
  key: string
  count?: number
  routerUrl?: string
  onClick?: AnyFunction
}

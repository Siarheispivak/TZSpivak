import { ComponentProps } from 'react'


import s from './avatar.module.scss'
import {DevAva} from "@/shared/assets/images";

export type AvatarProps = {
  name?: string
  size?: ComponentProps<'img'>['width']
  src?: ComponentProps<'img'>['src']
}
export const Avatar = ({ name, size = 20, src }: AvatarProps) => {
  return (
    <img
      alt={`${name}'avatar'`}
      className={s.avatar}
      height={size}
      src={src ?? DevAva}
      width={size}
    />
  )
}

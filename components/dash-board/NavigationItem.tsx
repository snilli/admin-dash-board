import clsx from 'clsx'
import {FC} from 'react'
import IonIcon from '@reacticons/ionicons'

export interface NavigationItemProps {
    title: string
    iconClass: string
    href: string
}

const NavigationItem: FC<NavigationItemProps> = (props): JSX.Element => {
    return (
        <li>
            <a href={props.href}>
                <span className={clsx('icon')}><IonIcon name={props.iconClass as any}/></span>
                <span className={clsx('title')}>{props.title}</span>
            </a>
        </li>
    )
}

export default NavigationItem

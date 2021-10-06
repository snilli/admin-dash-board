import clsx from 'clsx'
import {FC} from 'react'

export interface NavigationProps {
    children: JSX.Element | JSX.Element[]
}

const Navigation: FC<NavigationProps> = (props) => {
    return (
        <div className={clsx('navigation')}>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}

export default Navigation

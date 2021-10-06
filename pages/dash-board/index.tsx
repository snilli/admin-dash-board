import style from './DashBoard.module.css'
import NavigationItem, {NavigationItemProps} from '../../components/dash-board/NavigationItem'
import Navigation from '../../components/dash-board/Navigation'

const Index = (): JSX.Element => {
    const navigate: NavigationItemProps[] = [
        {
            title: 'Brand Name',
            iconClass: 'logo-apple',
            href: '#',
        },
        {
            title: 'Dashboard',
            iconClass: 'home-outline',
            href: '#',
        },
        {
            title: 'Customer',
            iconClass: 'person-outline',
            href: '#',
        },
        {
            title: 'Message',
            iconClass: 'chatbubble-outline',
            href: '#',
        },
        {
            title: 'Help',
            iconClass: 'help-outline',
            href: '#',
        },
        {
            title: 'Settings',
            iconClass: 'settings-outline',
            href: '#',
        },
        {
            title: 'Password',
            iconClass: 'lock-closed-outline',
            href: '#',
        },
        {
            title: 'Sign Out',
            iconClass: 'log-out-outline',
            href: '#',
        },
    ]
    return (
        <div className={style.container}>
            <Navigation>
                {navigate.map((nav, i) => (
                    <NavigationItem
                        key={i}
                        iconClass={nav.iconClass}
                        href={nav.href}
                        title={nav.title}
                    />
                ))}
            </Navigation>
            <style global jsx>{`
              body {
                background: black;
              }
            `}</style>
        </div>
    )
}
export default Index

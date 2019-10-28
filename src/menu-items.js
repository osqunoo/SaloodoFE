export default {
    items: [
        {
            id: 'navigation',
            title: 'Portal',
            type: 'group',
            userType: 'general',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'Mdashboard',
                    title: 'Manager Dashboard',
                    type: 'item',
                    url: '/dashboard/manager',
                    icon: 'feather icon-home',
                    userType: 'manager'
                },
                {
                    id: 'Bdashboard',
                    title: 'Biker Tool',
                    type: 'item',
                    url: '/dashboard/biker',
                    icon: 'feather icon-box',
                    userType: 'biker'
                }
            ]
        },
        {
            id: 'disabled-menu',
            title: 'Disabled Menu',
            type: 'item',
            url: '#',
            classes: 'nav-item disabled',
            icon: 'feather icon-power',
            userType: 'general'
        } 
    ]
}
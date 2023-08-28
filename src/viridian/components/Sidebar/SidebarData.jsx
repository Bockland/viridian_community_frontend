import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "Usuarios",
        icon: <AdminPanelSettingsIcon />,
        link: "/users"
    },
    {
        title: "Equipos",
        icon: <GroupIcon />,
        link: "/teams"
    },
    {
        title: "Roles",
        icon: <GroupIcon />,
        link: "/roles"
    },
    {
        title: "Jugadores",
        icon: <GroupIcon />,
        link: "/players"
    }  
]

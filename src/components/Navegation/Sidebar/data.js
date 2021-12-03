import { AiFillDashboard, AiFillSetting } from 'react-icons/ai';
import { FaUserCog, FaUsersCog } from 'react-icons/fa';

const classIcon = 'w-6 h-6 text-gray-400 text-blueGray-500';
const classIconSub = 'w-4 h-4 text-gray-400 text-blueGray-500'

export const data = [
    { type: 'section', name: 'General' },
    { type: 'normal', name: 'Dashboard', icon: <AiFillDashboard className={classIcon} />, path: '/dashboard' },
    { type: 'section', name: 'Configuraciones' },
    {
        type: 'menu', name: 'Config de la App', icon: <AiFillSetting className={classIcon} />, subMenu: [
            { name: 'Usuarios', icon: <FaUsersCog className={classIconSub} />, path: '/settings/users' },
        ]
    }
]
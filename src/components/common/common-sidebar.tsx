import { styled } from "@mui/material/styles";
import { NavItem } from "@components/common/nav-item";
import BpatIcon from '@icons/bpatIcon.svg';
import BpbpIcon from '@icons/bpbpIcon.svg';

const Side = styled('div')(({ theme }) => ({
    display: 'flex',
    borderRight: '1px solid #E5E7EB',
    flexDirection: 'column',
    alignItems: 'center',
    width: '200px',
    backgroundColor: theme.colors.white,
    padding: '40px 20px'
}));

const Menu = styled('div')(({ theme }) => ({
    width: '160px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    
    '& .active': { backgroundColor:'#FFEBF5'},
}));



const menus = [
    {
        icon:<BpatIcon />,
        href: '/menu/BusPrefAccumTrn',
        title: '경영실적/누적/추이',
    },
    {
        icon:<BpbpIcon />,
        href: '/menu/BusPrefByPrdt',
        title: '제품별 3년 경영실적'
    },
];

export const CommonSidebar = (props) => {
    const { ...other } = props;


    return (
        <Side>
            <Menu>
                {menus.map((item) => (
                    <NavItem
                        icon={item.icon}
                        key={item.title}
                        href={item.href}
                        title={item.title}
                    />
                ))}
            </Menu>
        </Side>
    )
}

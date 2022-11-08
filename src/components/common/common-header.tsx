import { Box } from "@mui/material";
import {styled} from "@mui/material/styles";
import HeaderLogo from '@icons/headerLogo.svg';
import ProfileIcon from '@icons/profileIcon.svg';
import HeadLogoutIcon from '@icons/headLogoutIcon.svg';

const Wrap = styled('div')(({ theme }) => ({
    width:'100%',
    height:'100%',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}));

const HeaderRight = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    gap: '11px' 
}));

const MyInfoWrap = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    gap: '6px'
}));

const Myname = styled('div')(({ theme }) => ({
   fontSize:'14px',
   color: theme.colors.white
}));

export const CommonHeader = (props) => {

    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    height: '60px',
                    backgroundColor:'#C30452',
                    padding: '0 30px'
                }}
            >
                <Wrap>
                    <HeaderLogo />
                    <HeaderRight>
                        <MyInfoWrap>
                            <ProfileIcon />
                            <Myname>홍길동</Myname>
                        </MyInfoWrap>
                        <HeadLogoutIcon />
                    </HeaderRight>
                </Wrap>
            </Box>
        </>
    )
}

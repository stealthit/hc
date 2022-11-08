import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";
import {CommonNavbar} from "@components/common/common-navbar";
import {CommonFooter} from "@components/common/common-footer";
import {CommonHeader} from "@components/common/common-header";
import {CommonSidebar} from "@components/common/common-sidebar";

const CommonLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: 'auto',
    maxWidth: '100%'
}));

export const CommonLayout = (props) => {
    const { children } = props;

    return (
        <>
            <CommonHeader />
            <CommonLayoutRoot>
                <CommonSidebar />
                <Box
                    sx={{
                        flexDirection: 'column',
                        width: '100%'
                    }}
                >
                    {children}
                </Box>
            </CommonLayoutRoot>
            <CommonFooter />
        </>
    )
}

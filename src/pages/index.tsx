import {Box, Typography} from '@mui/material';
import MainHighlight from "@components/main/main-highlight";

const Main = () => {

    return (
        <>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                }}
            >
                <MainHighlight />
            </Box>
        </>
    );
}

export default Main;

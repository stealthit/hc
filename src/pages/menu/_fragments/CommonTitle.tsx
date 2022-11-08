import { styled } from "@mui/material/styles";

const TitleWrap = styled('div')(({ theme }) => ({

}));

const TitleIcon = styled('span')(({ theme }) => ({
    width: '6px',
    height: '6px',
    background: '#C30452',
    borderRadius: '2px',
}));

const Text = styled('div')(({ theme }) => ({
    color: '#5D6064',
    fontWeight: '600',
    fontSize: '14px'
}));

const CommonTitle = (props) => {
    const { children } = props;
    return (
        <TitleWrap>
            <TitleIcon />
            <Text>{ children }</Text>
        </TitleWrap>
    )
}

export default CommonTitle;

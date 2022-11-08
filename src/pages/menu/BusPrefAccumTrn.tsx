import MainHighlight from "@components/main/main-highlight";
import { styled } from "@mui/material/styles";


const CommonTitle = (props) => {
    const TitleWrap = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        marginBottom: '10px'
    }));

    const TitleIcon = styled('span')(({ theme }) => ({
        width: '6px',
        height: '6px',
        display: 'inline-flex',
        background: '#C30452',
        borderRadius: '2px',
    }));

    const Text = styled('div')(({ theme }) => ({
        color: '#5D6064',
        fontWeight: '600',
        fontSize: '14px'
    }));
    const { tit } = props;
    return (
        <TitleWrap>
            <TitleIcon />
            <Text>{tit}</Text>
        </TitleWrap>
    )

}
const TabMenu = (props) => {
    const TabWrap = styled('ul')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '10px',
        borderBottom: '1px solid #DFE3EC',
    }));
    const TabItem = styled('li')(({ theme }) => ({
        width: '300px',
        textAlign: 'center',
        backgroundColor: '#F6F6FA',
        borderRadius: '6px 6px 0px 0px',
        padding: 8,
        listStyle: 'none',
        color: '#ADB2BA',
        '& active': {
            borderStyle: 'solid',
            borderColor: '#DFE3EC',
            backgroundColor: '#ffffff',
            borderWidth: '1px 1px 0px 1px',
            color: '#5D6064',
        },
    }));
    const TabItem1 = styled('li')(({ theme }) => ({
        width: '300px',
        textAlign: 'center',
        borderRadius: '6px 6px 0px 0px',
        padding: 8,
        listStyle: 'none',
        borderStyle: 'solid',
        borderColor: '#DFE3EC',
        backgroundColor: '#ffffff',
        borderWidth: '1px 1px 0px 1px',
        color: '#5D6064',
        borderBottom: '1.5px solid #fff',
        marginBottom: '-1.5px'

    }));

    const { tit } = props;
    return (
        <TabWrap>
            {/* <TabItem className="active">실적</TabItem> */}
            <TabItem1>실적</TabItem1>
            <TabItem>누적</TabItem>
        </TabWrap>
    )

}
const Wrapper = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    backgroundColor: '#F6F6FA',
    padding: '20px'
}));

const Card = styled('div')(({ theme }) => ({
    width: '100%',
    backgroundColor: theme.colors.white,
    padding: '20px',
    marginBottom: '20px',
  

    '& :lastChild': { marginBottom: '0' },
}));

const Row = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px'
}));

const TableWrap = styled('div')(({ theme }) => ({
    width: '100%',
    height: '220px',
    backgroundColor: '#FFF3F8',
    marginBottom: '20px'
}));
const Searchwrap = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    height:40,
    '& label':{
        width:120,
        height:'100%',
        display: 'flex',
        alignItems: 'center'
    },
    '& input':{
        width:275,
        height:'100%',
        marginRight:20
    },
    '& select':{
        width:275,
        height:'100%'
    },
}));

const BusPrefAccumTrn = () => {

    return (
        <Wrapper>
            <Card>
                <CommonTitle tit="경영실적 / 누적" />
                <TabMenu />
                <Searchwrap>
                    <label htmlFor="date1">조회년월</label>
                    <input type="date" name="date1" id="" />
                    <label htmlFor="select1">제품</label>
                    <select name="select1" id="">
                        <option value="">전체</option>
                    </select>
                </Searchwrap>
            </Card>
            <Row>
                <Card>
                    <CommonTitle tit="매출액" />
                    <TableWrap></TableWrap>
                    <CommonTitle tit="Total" />
                    <TableWrap></TableWrap>
                    <CommonTitle tit="서비스" />
                    <TableWrap></TableWrap>
                    <CommonTitle tit="판매" />
                    <TableWrap></TableWrap>
                </Card>

                <Card>
                    <CommonTitle tit="영업이익" />
                    <TableWrap></TableWrap>
                    <CommonTitle tit="Total" />
                    <TableWrap></TableWrap>
                    <CommonTitle tit="서비스" />
                    <TableWrap></TableWrap>
                    <CommonTitle tit="판매" />
                    <TableWrap></TableWrap>
                </Card>
            </Row>
            <Card>
                <TableWrap></TableWrap>
            </Card>
        </Wrapper>
    )
}

export default BusPrefAccumTrn;

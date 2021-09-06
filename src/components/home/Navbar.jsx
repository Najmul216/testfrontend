import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { navData } from '../../constant/data';


const useStyle = makeStyles (theme => ({
    component: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '15px',
        margin: '55px 130px 0 130px',
        overflowX: 'overlay',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    container: {
        padding: '12px 8px',
        textAlign: 'center'
    },
    image: {
        width: 50
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'inherit'
    }
}));

const Navbar = () => {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
            {
                navData.map(temp => (
                    <Box className={classes.container}>
                        <img src={temp.url} className={classes.image} />
                        <Typography className={classes.text}>{temp.text}</Typography>
                    </Box>
                ))
            }
        </Box>
    )
}

export default Navbar;

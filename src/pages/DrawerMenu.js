import { Drawer as MUIDRawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from '@material-ui/icons/MoveToInbox';

import { withRouter } from 'react-router-dom';
const useStyles = makeStyles(() => ({
    drawer: {
        width: "190px"
    }
}))
const DrawerMenu = props => {
console.log("props=",props)

const {history}=props
    const classes = useStyles()
    const itemsList = [
        {
            text: 'Home',
            icon:<InboxIcon/>,
            onClick:()=>history.push("/")
        },
        {
            text: 'About',
            icon:<InboxIcon/>,
            onClick:()=>history.push("/about")
        },
        {
            text: 'Contact',
            icon:<InboxIcon/>,
            onClick:()=>history.push("/contact")
        }

    ]
    return (
  
    <MUIDRawer variant="permanent" className={classes.drawer}>
        <List>

            {itemsList.map((item, index) => {
                const {text,icon,onClick}=item;
                return  (
                <ListItem button key={text} onClick={onClick}>
                  
                        {icon && <ListItemIcon>{icon}</ListItemIcon>}
                       
                    <ListItemText primary={text} />
                </ListItem>
                
            )
            })}
        </List>
    </MUIDRawer>
    )
}

export default withRouter(DrawerMenu)
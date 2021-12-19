
import { List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from "@material-ui/core"
import React from "react"

const DrawerComponet = ({openDrawer, setOpenDrawer}) => {
    return (
        <SwipeableDrawer  open={openDrawer} anchor="right" >
       <List>
           <ListItem button  divider onClick={()=>setOpenDrawer=(false)}>
           <ListItemIcon>
               <ListItemText>
                   Men
               </ListItemText>
           </ListItemIcon>
           </ListItem>
           <ListItem button divider onClick={()=>setOpenDrawer=(false)}>
           <ListItemIcon>
               <ListItemText>
                   Women
               </ListItemText>
           </ListItemIcon>
           </ListItem>
           <ListItem button divider onClick={()=>setOpenDrawer=(false)}>
           <ListItemIcon>
               <ListItemText>
                   Categories
               </ListItemText>
           </ListItemIcon>
           </ListItem>
           
           
       </List>
         
        </SwipeableDrawer>

    )
}

export default DrawerComponet
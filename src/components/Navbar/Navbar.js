import { AppBar, Badge, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography,useMediaQuery } from "@material-ui/core"
import { MenuOutlined, ShoppingBasket } from "@material-ui/icons"

import { React, useState } from 'react';
import DrawerComponet from "../DrawerComponet";

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [openDrawer, setOpenDrawer] = useState(false)
    const matches=useMediaQuery("lg")
    const openMenu = Boolean(anchorEl)
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <>
        <DrawerComponet openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
        <AppBar elevation={0} style={{background: "white" }}>

            <Toolbar>
                <Box style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }} component="div">
                    <Box>
                        <IconButton>
                            <MenuOutlined />
                        </IconButton>
                    </Box>
                    <Box style={{ display: "flex" }}>
                        <Typography style={{ color:"red",cursor:"pointer",marginRight:"20px"}} >Home</Typography>
                        <Typography style={{ color:"red",cursor:"pointer",marginRight:"20px"}} >Brand</Typography>
                        <Typography style={{ color:"red",cursor:"pointer",marginRight:"20px"}}
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={openMenu ? "true" : undefined}
                            onClick={handleClick}
                        >Categories
                        </Typography>
                        <Menu id="basic-menu"
                            anchorEl={anchorEl}
                            open={openMenu}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Men</MenuItem>
                            <MenuItem onClick={handleClose} >Women</MenuItem>
                            <MenuItem onClick={handleClose} >Phone</MenuItem>
                            <MenuItem onClick={handleClose} >Others</MenuItem>
                        </Menu>
                        <Typography style={{ color:"red",cursor:"pointer",marginRight:"20px"}}>Men</Typography>
                        <Typography style={{ color:"red",cursor:"pointer",marginRight:"20px"}} >Women</Typography>
                       
                    </Box>

                    <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button style={{ backgroundColor: "#ff4081" }} disableElevation variant="contained">Account</Button>
                        <IconButton>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingBasket />
                            </Badge>
                        </IconButton>

                    </Box>

                </Box>

                
      

            </Toolbar>
        </AppBar>
</>
    )
}

export default Navbar
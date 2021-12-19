import { FavoriteOutlined, LocationCityOutlined, RestoreFromTrash } from "@material-ui/icons"
import { BottomNavigationAction, makeStyles } from "@material-ui/core"
import BottomNavigation from "@material-ui/core/BottomNavigation";
import React, { useState } from "react"
const useStyles = makeStyles({
    root: {
        width: "100%",
        background: "pink"
    }
})
const BottomNavigation1 = () => {
    const [value, setValue] = useState(0)
    const classes = useStyles()

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <div >
            
            <BottomNavigation className={classes.root}
             value={value}
              onChange={(event,newValue)=>handleChange(event,newValue)}
              showLabels
              >
                <BottomNavigationAction label="Recents" icon={<RestoreFromTrash />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteOutlined />} />
                <BottomNavigationAction label="Nearby" icon={<LocationCityOutlined />} />
            </BottomNavigation>
        </div>
    )
}
export default BottomNavigation1
import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

const NavBar = () => {
    const StyledToobar = styled(Toolbar) (() => ({ 
    }))

    return (
        <>
            <AppBar position="absolute">
                <StyledToobar>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Projects</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </StyledToobar>
            </AppBar>
        </>
    )
};

export default NavBar;
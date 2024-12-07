import { AppBar, Toolbar, Button, Box, CardMedia } from "@mui/material";
import Search from "@mui/icons-material/Search";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

export default function NavigationBar() {
  return (
    <AppBar position="static" color="default"  sx={{ boxShadow: "none", direction:'rtl', mt:"10px", width:'auto' }}>
        <Toolbar>
        <CardMedia
      component= "img"
      sx={{
        width:"150px"
      }}
      image = "/Images/mainLogo.png"
    >
      </CardMedia>
        <Box display="flex" gap={2}>
          <Button sx={{color:"black"}}>خانه</Button>
          <Button sx={{color:"black"}}>آموزش‌ها</Button>
          <Button sx={{color:"black"}}>شرکت‌های برگزیده</Button>
          <Button sx={{color:"black"}}>ایونت‌ها</Button>
          <Button sx={{color:"black"}}>پشت صحنه فیلم</Button>
          <Button sx={{color:"black"}}>فیلم تئاتر‌ها</Button>
          <Button sx={{color:"black"}}>اکتورز استودیو</Button>
          <Button sx={{color:"black"}}>پکیج آموزش کوتاه</Button>
        </Box>
        
        <Box display="flex" alignItems="center" gap={2}>
          <Button>
            <Search />
          </Button>
          <Button>
            <ShoppingCart />
          </Button>
          <Button variant="outlined" color="inherit">
            ورود
          </Button>
          <Button variant="contained" color="secondary">
            ثبت‌نام
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

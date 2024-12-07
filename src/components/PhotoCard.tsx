import * as React from 'react';
import { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {photocarddata} from "@/components/database/photocards.data";
import { Box, Grid } from '@mui/material';
import Link from 'next/link';

type PhotoCardType ={
    id: string;
    image: string;
    describtion: string;
}

type Ownprops = {
    data: PhotoCardType
}

const PhotoCard: FC<Ownprops> = (data) => {
  return (
    
     <Grid item xs={12} sm={6} md={4} lg={3} mt={2}>
      <Link href={`/courses/${data?.data?.id}`} style={{ textDecoration: "none"}}>
      <Card sx={{ maxWidth: 345, mr:"10px" }}>
      <CardMedia
        component="img"
        alt="courseIMG"
        height="140"
        image={data.data.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" minHeight={70} sx={{fontFamily:"sans-serif", fontWeight:"bold"}}>
          {data.data.id}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', direction:"rtl" }}>
          {data.data.describtion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">رایگان</Button>
      </CardActions>
    </Card>
    </Link>
     </Grid>
     
  );
}
export default PhotoCard;

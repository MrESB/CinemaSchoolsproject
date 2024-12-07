import * as React from 'react';
import Container from '@mui/material/Container';
import NavBar from "@/components/NavBar"
import Link from '@mui/material/Link';
import PhotoCardList from "@/components/PhotoCardList"

export default function Home() {
  return (
    <Container sx={{width:"1600px"}}>
      <NavBar/>
      <PhotoCardList/>
    </Container>
  );
}

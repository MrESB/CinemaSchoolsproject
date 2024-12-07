import { Grid } from "@mui/material"
import { photocarddata } from '@/components/database/photocards.data';
import PhotoCard from "@/components/PhotoCard"

const PhotoCardList = () => {
    return(
        <Grid container mt={4}>
            {photocarddata.map((item) =>
                <PhotoCard data={item} />
            )}
        </Grid>
    )
}
export default PhotoCardList;
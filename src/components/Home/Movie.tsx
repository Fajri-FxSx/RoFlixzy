import { Box, Grid } from "@mui/material";
import { FC } from "react";
import MovieProps from "../../models/MovieProps";
import FlexTitle from "../FlexTitle";
import OtherCard from "../Card/OtherCard";
const Movie: FC<MovieProps> = ({ data, url, title }) => {
  return (
    <Box mt='20px'>
      <FlexTitle url={url} title={title} />
      <Box mt='10px'>
        <Grid container spacing={"10px"}>
          {data?.map((item) => (
            <Grid key={item.id} item lg={2} md={4} xs={6}>
              <OtherCard
                image={item.poster_path || item.backdrop_path}
                id={item.id.toString()}
                title={item.title || item.original_title}
                media_type='movie'
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Movie;

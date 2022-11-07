import { Grid, TextField } from "@mui/material";

export function SearchFilters() {
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render
  return (
    <form>
      <Grid
        container
        spacing={2}
        alignContent={"center"}
        justifyContent={"start"}
      >
        <Grid item xs={4}>
          <TextField type="text" label="Cidade" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <TextField type="text" label="Pais" fullWidth />
        </Grid>
      </Grid>
    </form>
  );
}

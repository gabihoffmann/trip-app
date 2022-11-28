import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SearchFilters } from "./searchFilters";
import { SearchResults } from "./searchResult";
import { useLocationsService } from "./useLocationsService";

export function SearchLocations() {
  const service = useLocationsService();
  const navigate = useNavigate();
  // ---------------------------------------------
  // Transformations
  const handleNavigateToFormPage = (index?: number) => {
    if (index) navigate(`location/${index}`);
    else navigate("location");
  };
  // ---------------------------------------------
  // Render

  return (
    <Container sx={{ mt: "1rem" }}>
      <Grid
        container
        spacing={2}
        alignItems={"center"}
        alignContent={"space-between"}
      >
        <Grid item xs>
          <Typography variant="h4">GabiTrip</Typography>
        </Grid>
        <Grid item xs>
          <Button
            variant="contained"
            onClick={() => handleNavigateToFormPage()}
          >
            Adicionar
          </Button>
        </Grid>
      </Grid>

      {/* Filters */}
      <Grid
        container
        direction={"column"}
        spacing={2}
        alignContent={"stretch"}
        justifyContent={"start"}
      >
        <Grid item>
          <Typography variant="h5">Buscar</Typography>
        </Grid>
        <Grid item xs={12}>
          <SearchFilters onSubmit={service.setFilters} />
        </Grid>
      </Grid>
      {/* SearchResult */}
      <Divider sx={{ m: "1rem" }} />
      {service.loading && <span>...carregando</span>}
      {!service.loading && (
        <SearchResults
          items={service.locations}
          onSelect={(item: number) => handleNavigateToFormPage(item)}
          onPageChange={service.setPage}
          onPerPageChange={service.setPerPage}
        />
      )}
    </Container>
  );
}

import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { DtoTripLocation } from "../../../../services/api/v1/locations/types/dtoTripLocation";
import { DtoServiceResult } from "../../../../services/types/dtoServicesResult";

interface SearchResultsProps {
  items?: DtoServiceResult<DtoTripLocation>;
  onPageChange: (page: number) => void;
  onSelect: (item: number) => void;
  onPerPageChange: (per_page: number) => void;
}

export function SearchResults(props: SearchResultsProps) {
  const { items } = props;

  // ---------------------------------------------
  // Transformations

  const totalPages =
    items &&
    Math.ceil(items.pagination.total_items / items.pagination.per_page);
  // ---------------------------------------------
  // Render

  return (
    <>
      <TableContainer>
        <Table aria-label="simple table">
          {/* head */}
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }} align="left">
                Cidade
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="left">
                Pais
              </TableCell>
              <TableCell>
                <>
                  <FormControl fullWidth>
                    <InputLabel id="select_per_page">
                      Itens por página
                    </InputLabel>
                    <Select
                      labelId="select_per_page"
                      label={"Itens por página"}
                      value={items?.pagination?.per_page}
                      onChange={(value) =>
                        props.onPerPageChange(Number(value?.target.value || 0))
                      }
                    >
                      <MenuItem value={2}>02</MenuItem>
                      <MenuItem value={5}>05</MenuItem>
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                    </Select>
                  </FormControl>
                </>
              </TableCell>
            </TableRow>
          </TableHead>
          {/* body */}
          <TableBody>
            {items?.data?.map((location) => (
              <TableRow key={location.id}>
                <TableCell>{location.city}</TableCell>
                <TableCell>{location.country}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="text"
                    onClick={() => props.onSelect(location.id!)}
                  >
                    Editar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {totalPages && (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ m: "1rem" }}
        >
          <Pagination
            count={totalPages}
            page={items?.pagination.page}
            onChange={(evt, page) => props.onPageChange(page)}
          />
        </Grid>
      )}
    </>
  );
}

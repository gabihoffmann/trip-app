import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { DtoTripLocation } from "../../../../services/api/v1/locations/types/dtoTripLocation";

interface SearchResultsProps {
  locations: DtoTripLocation[];
  onSelect: (item: number) => void;
}

export function SearchResults(props: SearchResultsProps) {
  const { locations } = props;

  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
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
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        {/* body */}
        <TableBody>
          {locations?.map((location) => (
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
  );
}

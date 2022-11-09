import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DtoTripLocation } from "../../../../services/api/v1/locations/types/dtoTripLocation";

interface SearchResultsProps {
  locations: DtoTripLocation[];
}

export function SearchResults(props: SearchResultsProps) {
  const { locations } = props;

  const navigate = useNavigate();

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
                  onClick={() => navigate(`location/${location.id}`)}
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

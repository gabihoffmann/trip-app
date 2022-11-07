import { DtoTripLocation } from "../../../../services/api/v1/locations/types/dtoTripLocation";

interface SearchResultsProps {
  locations: DtoTripLocation[];
}

export function SearchResults(props: SearchResultsProps) {
  const { locations } = props;

  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return <pre>{JSON.stringify(locations, null, 2)}</pre>;
}

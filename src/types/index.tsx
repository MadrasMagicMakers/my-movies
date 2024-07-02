export interface Movie {
  id: number;
  title: string;
  image: string;
  genre: string[];
  rating: number;
  // Add more fields as needed
}

export interface MovieListProps {
  title: string;
  movies: Movie[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
  moviesPerPage?: number;
  handleNext: () => void;
  handlePrevious: () => void;
}

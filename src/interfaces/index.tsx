export interface Movies {
    results: Result[];
}

export interface Movie {
    id: number
}

export interface Result {
    poster_path:       string;
    adult:             boolean;
    overview:          string;
    release_date:      Date;
    first_air_date:    Date;
    genre_ids:         number[];
    id:                number;
    original_title:    string;
    title:             string;
    backdrop_path:     string;
    popularity:        number;
    vote_count:        number;
    video:             boolean;
    vote_average:      number;
    key?:              number;
    name?:             string;
}

export interface ErrorProps {
    error: string;
}
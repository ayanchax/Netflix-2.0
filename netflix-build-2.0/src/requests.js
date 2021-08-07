import { getRandomNumber } from "./util";
const API_KEY = process.env.REACT_APP_API;
const REGION = process.env.REACT_APP_REGION;
const requests = {
    fetchTrending: `trending/all/week?api_key=${API_KEY}&region=${REGION}&page=${getRandomNumber(
		1000
	  )}`, // no region or language or page  // week can be replaced by day

    fetchOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213&watch_region=${REGION}&page=${getRandomNumber(
		61
	  )}`, // with language, page and watch_region 213 is the network id for netflix,  212 is amazon 211 is hotstar

    //with language, page and region | page =1-1000(max), default=1 language =iso_3166_1 code region= iso_3166_1 code default language and region is en_US

    fetchTopRatedMovies: `movie/top_rated?api_key=${API_KEY}&page=${getRandomNumber(
    30
  )}&region=${REGION}`,

    fetchPopularMovies: `movie/popular?api_key=${API_KEY}&region=${REGION}&page=${getRandomNumber(
		30
	  )}`,
    fetchAdventureMovies: `discover/movie?api_key=${API_KEY}&with_genres=12&region=${REGION}&page=${getRandomNumber(
		25
	  )}`,
    fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28&region=${REGION}&page=${getRandomNumber(
		25
	  )}`,
    fetchAnimationMovies: `discover/movie?api_key=${API_KEY}&with_genres=16&region=${REGION}&page=${getRandomNumber(
		10
	  )}`,
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35&region=${REGION}&page=${getRandomNumber(
		166
	  )}`,
    fetchCrimeMovies: `discover/movie?api_key=${API_KEY}&with_genres=80&region=${REGION}&page=${getRandomNumber(
		55
	  )}`,
    fetchDramaMovies: `discover/movie?api_key=${API_KEY}&with_genres=18&region=${REGION}&page=${getRandomNumber(
		417
	  )}`,
    fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99&region=${REGION}&page=${getRandomNumber(
		20
	  )}`,
    fetchFamilyMovies: `discover/movie?api_key=${API_KEY}&with_genres=10751&region=${REGION}&page=${getRandomNumber(
		59
	  )}`,
    fetchFantasyMovies: `discover/movie?api_key=${API_KEY}&with_genres=14&region=${REGION}&page=${getRandomNumber(
		20
	  )}`,
    fetchHistoryMovies: `discover/movie?api_key=${API_KEY}&with_genres=36&region=${REGION}&page=${getRandomNumber(
		14
	  )}`,
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27&region=${REGION}&page=${getRandomNumber(
		31
	  )}`,
    fetchMusicalMovies: `discover/movie?api_key=${API_KEY}&with_genres=10402&region=${REGION}&page=${getRandomNumber(
		15
	  )}`,
    fetchMysteryMovies: `discover/movie?api_key=${API_KEY}&with_genres=9648&region=${REGION}&page=${getRandomNumber(
		24
	  )}`,
    fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749&region=${REGION}&page=${getRandomNumber(
		166
	  )}`,
    fetchScienceFictionMovies: `discover/movie?api_key=${API_KEY}&with_genres=878&region=${REGION}&page=${getRandomNumber(
		12
	  )}`,
    fetchTVMovies: `discover/movie?api_key=${API_KEY}&with_genres=10770&region=${REGION}&page=${getRandomNumber(
		0
	  )}`,
    fetchThrillerMovies: `discover/movie?api_key=${API_KEY}&with_genres=53&region=${REGION}&page=${getRandomNumber(
		111
	  )}`,
    fetchWarMovies: `discover/movie?api_key=${API_KEY}&with_genres=10752&region=${REGION}&page=${getRandomNumber(
		5
	  )}`,
    fetchWesternMovies: `discover/movie?api_key=${API_KEY}&with_genres=37&region=${REGION}&page=${getRandomNumber(
		0
	  )}`,
};

export const content = [{
        title: "Top Rated",
        url: requests.fetchTopRatedMovies,
        displayRow: false,
        largeRow: true,
        slice: 0,
    },

    {
        title: "Trending",
        url: requests.fetchTrending,
        displayRow: true,
        largeRow: true,
        slice: 20,
    },

    {
        title: "Production Originals",
        url: requests.fetchOriginals,
        displayRow: true,
        largeRow: true,
        slice: 10
    },

    {
        title: "Popular in 2021",
        url: requests.fetchPopularMovies,
        displayRow: true,
        largeRow: true,
        slice: 20,
    },
    {
        title: "Adventure",
        url: requests.fetchAdventureMovies,
        displayRow: false,
        largeRow: true,
        slice: 20,
    },
    {
        title: "Adventure &amp; Action",
        url: requests.fetchActionMovies,
        displayRow: true,
        largeRow: true,
        slice: 15,
    },

    {
        title: "Best in Animation",
        url: requests.fetchAnimationMovies,
        displayRow: true,
        largeRow: true,
        slice: 15,
    },

    {
        title: "Comedy",
        url: requests.fetchComedyMovies,
        displayRow: true,
        largeRow: true,
        slice: 15,
    },

    {
        title: "Crime",
        url: requests.fetchCrimeMovies,
        displayRow: true,
        largeRow: true,
        slice: 18,
    },

    {
        title: "Drama",
        url: requests.fetchDramaMovies,
        displayRow: true,
        largeRow: true,
        slice: 10,
    },

    {
        title: "Documentaries",
        url: requests.fetchDocumentaries,
        displayRow: true,
        largeRow: true,
        slice: 20,
    },

    {
        title: "Family Time",
        url: requests.fetchFamilyMovies,
        displayRow: true,
        largeRow: true,
        slice: 5,
    },

    {
        title: "Fantasy",
        url: requests.fetchFantasyMovies,
        displayRow: true,
        largeRow: true,
        slice: 5,
    },

    {
        title: "History",
        url: requests.fetchHistoryMovies,
        displayRow: true,
        largeRow: true,
        slice: 10,
    },

    {
        title: "Horror",
        url: requests.fetchHorrorMovies,
        displayRow: true,
        largeRow: true,
        slice: 20,
    },

    {
        title: "Musical",
        url: requests.fetchMusicalMovies,
        displayRow: true,
        largeRow: true,
        slice: 5,
    },


    {
        title: "Mystery",
        url: requests.fetchMysteryMovies,
        displayRow: true,
        largeRow: true,
        slice: 10,
    },

    {
        title: "Romance",
        url: requests.fetchRomanceMovies,
        displayRow: true,
        largeRow: true,
        slice: 20,
    },

    {
        title: "Sci-fi",
        url: requests.fetchScienceFictionMovies,
        displayRow: true,
        largeRow: true,
        slice: 10,
    },

    {
        title: "Just TV Things",
        url: requests.fetchTVMovies,
        displayRow: true,
        largeRow: true,
        slice: 10,
    },

    {
        title: "Thrillers",
        url: requests.fetchThrillerMovies,
        displayRow: true,
        largeRow: true,
        slice: 20,
    },

    {
        title: "War &amp; Violence",
        url: requests.fetchWarMovies,
        displayRow: true,
        largeRow: true,
        slice: 10,
    },

    {
        title: "Wild Wild West",
        url: requests.fetchWesternMovies,
        displayRow: true,
        largeRow: true,
        slice: 10,
    },
];

/*{
    Netflix Genre
	https://api.themoviedb.org/3/genre/movie/list?api_key=c0d4114c75ee03d7d64ae16b4ef9632c
	"genres": [{
		"id": 28,
		"name": "Action"
	}, {
		"id": 12,
		"name": "Adventure"
	}, {
		"id": 16,
		"name": "Animation"
	}, {
		"id": 35,
		"name": "Comedy"
	}, {
		"id": 80,
		"name": "Crime"
	}, {
		"id": 99,
		"name": "Documentary"
	}, {
		"id": 18,
		"name": "Drama"
	}, {
		"id": 10751,
		"name": "Family"
	}, {
		"id": 14,
		"name": "Fantasy"
	}, {
		"id": 36,
		"name": "History"
	}, {
		"id": 27,
		"name": "Horror"
	}, {
		"id": 10402,
		"name": "Music"
	}, {
		"id": 9648,
		"name": "Mystery"
	}, {
		"id": 10749,
		"name": "Romance"
	}, {
		"id": 878,
		"name": "Science Fiction"
	}, {
		"id": 10770,
		"name": "TV Movie"
	}, {
		"id": 53,
		"name": "Thriller"
	}, {
		"id": 10752,
		"name": "War"
	}, {
		"id": 37,
		"name": "Western"
	}]
}*/

/***Netflix Regions
 * 
 * {
	"results": [{
		"iso_3166_1": "AR",
		"english_name": "Argentina",
		"native_name": "Argentina"
	}, {
		"iso_3166_1": "AT",
		"english_name": "Austria",
		"native_name": "Austria"
	}, {
		"iso_3166_1": "AU",
		"english_name": "Australia",
		"native_name": "Australia"
	}, {
		"iso_3166_1": "BE",
		"english_name": "Belgium",
		"native_name": "Belgium"
	}, {
		"iso_3166_1": "BG",
		"english_name": "Bulgaria",
		"native_name": "Bulgaria"
	}, {
		"iso_3166_1": "BR",
		"english_name": "Brazil",
		"native_name": "Brazil"
	}, {
		"iso_3166_1": "CA",
		"english_name": "Canada",
		"native_name": "Canada"
	}, {
		"iso_3166_1": "CH",
		"english_name": "Switzerland",
		"native_name": "Switzerland"
	}, {
		"iso_3166_1": "CZ",
		"english_name": "Czech Republic",
		"native_name": "Czech Republic"
	}, {
		"iso_3166_1": "DE",
		"english_name": "Germany",
		"native_name": "Germany"
	}, {
		"iso_3166_1": "DK",
		"english_name": "Denmark",
		"native_name": "Denmark"
	}, {
		"iso_3166_1": "EE",
		"english_name": "Estonia",
		"native_name": "Estonia"
	}, {
		"iso_3166_1": "ES",
		"english_name": "Spain",
		"native_name": "Spain"
	}, {
		"iso_3166_1": "FI",
		"english_name": "Finland",
		"native_name": "Finland"
	}, {
		"iso_3166_1": "FR",
		"english_name": "France",
		"native_name": "France"
	}, {
		"iso_3166_1": "GB",
		"english_name": "United Kingdom",
		"native_name": "United Kingdom"
	}, {
		"iso_3166_1": "HU",
		"english_name": "Hungary",
		"native_name": "Hungary"
	}, {
		"iso_3166_1": "ID",
		"english_name": "Indonesia",
		"native_name": "Indonesia"
	}, {
		"iso_3166_1": "IE",
		"english_name": "Ireland",
		"native_name": "Ireland"
	}, {
		"iso_3166_1": "IN",
		"english_name": "India",
		"native_name": "India"
	}, {
		"iso_3166_1": "IT",
		"english_name": "Italy",
		"native_name": "Italy"
	}, {
		"iso_3166_1": "JP",
		"english_name": "Japan",
		"native_name": "Japan"
	}, {
		"iso_3166_1": "KR",
		"english_name": "South Korea",
		"native_name": "South Korea"
	}, {
		"iso_3166_1": "LT",
		"english_name": "Lithuania",
		"native_name": "Lithuania"
	}, {
		"iso_3166_1": "MX",
		"english_name": "Mexico",
		"native_name": "Mexico"
	}, {
		"iso_3166_1": "NL",
		"english_name": "Netherlands",
		"native_name": "Netherlands"
	}, {
		"iso_3166_1": "NO",
		"english_name": "Norway",
		"native_name": "Norway"
	}, {
		"iso_3166_1": "NZ",
		"english_name": "New Zealand",
		"native_name": "New Zealand"
	}, {
		"iso_3166_1": "PH",
		"english_name": "Philippines",
		"native_name": "Philippines"
	}, {
		"iso_3166_1": "PL",
		"english_name": "Poland",
		"native_name": "Poland"
	}, {
		"iso_3166_1": "PT",
		"english_name": "Portugal",
		"native_name": "Portugal"
	}, {
		"iso_3166_1": "RU",
		"english_name": "Russia",
		"native_name": "Russia"
	}, {
		"iso_3166_1": "SE",
		"english_name": "Sweden",
		"native_name": "Sweden"
	}, {
		"iso_3166_1": "TR",
		"english_name": "Turkey",
		"native_name": "Turkey"
	}, {
		"iso_3166_1": "US",
		"english_name": "United States of America",
		"native_name": "United States"
	}, {
		"iso_3166_1": "ZA",
		"english_name": "South Africa",
		"native_name": "South Africa"
	}]
}
 */
export default requests;
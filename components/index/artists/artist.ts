// Create a file: components/artists/artist.ts
export interface Artist {
  id: number;
  name: string;
  avatar: string;
  musics: Music[];
}

// Define the Music type expected by this component
export interface Music {
  id: number;
  name: string;
  artist: string;
  src: string;
  avatar: string;
  coverImage: string;
  playedCount: number;
}

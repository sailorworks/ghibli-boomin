// types/component-types.ts
export interface Artist {
  id: number;
  name: string;
  avatar: string;
  musics: Music[];
}

export interface Music {
  id: number;
  name: string;
  artist: string;
  src: string;
  avatar: string;
  coverImage: string;
  playedCount: number;
}

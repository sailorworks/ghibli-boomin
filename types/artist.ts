// types/artist.ts
import { Music } from "./music";

export interface Artist {
  id: string | number;
  name: string;
  avatar: string;
  musics: Music[];
}

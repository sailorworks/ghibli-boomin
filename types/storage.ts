import { Music } from "./music";

export interface AppLocalStorage {
  currentMusic: Music | null;
  isPlaying: boolean;
  playList: Music[];
  playListId: string;
  volume: number;
  repeatType: "all" | "one" | "shuffle";
  shuffleIndex: number[];
  currentMusicTime: number;
}

export interface AuthLocalStorage {
  token: string;
  id: string;
  set_at: number;
}

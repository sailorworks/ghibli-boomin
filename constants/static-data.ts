import { Music as TrendMusic } from "@/types/music";
import { Artist, Music } from "@/types/component-types";

export const staticArtists: Artist[] = [
  {
    id: 1,
    name: "Bruno Mars",
    avatar: "/images/artists/bruno-mars.jpg",
    musics: [
      {
        id: 1,
        name: "Uptown Funk",
        artist: "Bruno Mars",
        src: "/music/uptownfunk.mp3",
        avatar: "/images/artists/bruno-mars.jpg",
        coverImage: "/images/artists/bruno-mars.jpg",
        playedCount: 0,
      },
    ],
  },

  {
    id: 2,
    name: "Charlie Puth",
    avatar: "/images/artists/charlie-puth.jpg",
    musics: [
      {
        id: 2,
        name: "See You Again",
        artist: "Charlie Puth",
        src: "/music/see-you-again.mp3",
        avatar: "/images/artists/charlie-puth.jpg",
        coverImage: "/images/artists/charlie-puth.jpg",
        playedCount: 0,
      },
    ],
  },
  {
    id: 3,
    name: "Ed Sheeran",
    avatar: "/images/artists/ed-sheeran.jpg",
    musics: [
      {
        id: 3,
        name: "Perfect",
        artist: "Ed Sheeran",
        src: "/music/perfect.mp3",
        avatar: "/images/artists/ed-sheeran.jpg",
        coverImage: "/images/artists/ed-sheeran.jpg",
        playedCount: 0,
      },
    ],
  },
  {
    id: 4,
    name: "Sonu Nigam",
    avatar: "/images/artists/sonu-nigam.png",
    musics: [
      {
        id: 4,
        name: "Kal Ho Naa Ho",
        artist: "Sonu Nigam",
        src: "/music/kal-ho-na-ho.mp3",
        avatar: "/images/artists/sonu-nigam.png",
        coverImage: "/images/artists/sonu-nigam.png",
        playedCount: 0,
      },
    ],
  },
  {
    id: 5,
    name: "Coldplay",
    avatar: "/images/artists/cold-play.jpg",
    musics: [
      {
        id: 5,
        name: "Girl Like You",
        artist: "Coldplay",
        src: "/music/girl-like-you.mp3",
        avatar: "/images/artists/cold-play.jpg",
        coverImage: "/images/artists/cold-play.jpg",
        playedCount: 0,
      },
    ],
  },
];

export const staticTopMusics: Music[] = [
  {
    id: 1,
    name: "Uptown Funk",
    artist: "Bruno Mars",
    src: "/music/uptownfunk.mp3",
    avatar: "/images/artists/bruno-mars.jpg",
    coverImage: "/images/artists/bruno-mars.jpg",
    playedCount: 0,
  },
  {
    id: 2,
    name: "See You Again",
    artist: "Charlie Puth",
    src: "/music/see-you-again.mp3",
    avatar: "/images/artists/charlie-puth.jpg",
    coverImage: "/images/artists/charlie-puth.jpg",
    playedCount: 0,
  },
  {
    id: 3,
    name: "Perfect",
    artist: "Ed Sheeran",
    src: "/music/perfect.mp3",
    avatar: "/images/artists/ed-sheeran.jpg",
    coverImage: "/images/artists/ed-sheeran.jpg",
    playedCount: 0,
  },
  {
    id: 4,
    name: "Kal Ho Naa Ho",
    artist: "Sonu Nigam",
    src: "/music/kal-ho-na-ho.mp3",
    avatar: "/images/artists/sonu-nigam.png",
    coverImage: "/images/artists/sonu-nigam.png",
    playedCount: 0,
  },
  {
    id: 5,
    name: "Girl Like You",
    artist: "Coldplay",
    src: "/music/girl-like-you.mp3",
    avatar: "/images/artists/cold-play.jpg",
    coverImage: "/images/artists/cold-play.jpg",
    playedCount: 0,
  },
];
export const staticTrends: TrendMusic[] = staticTopMusics.map((music) => ({
  id: String(music.id),
  title: music.name,
  artist: music.artist,
  url: music.src,
  cover: music.coverImage,
}));

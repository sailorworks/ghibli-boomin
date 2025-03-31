"use client";

import LocalMusicManager from "@/components/music/LocalMusicManager";

export default function LocalMusicPage() {
  return (
    <div className="local-music-page">
      <h1 style={{ padding: "20px", margin: 0 }}>Local Music Player</h1>
      <LocalMusicManager />
    </div>
  );
}

import { useState, useCallback } from "react";
import { useAppStore } from "@/store/app-store";
import { Button, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";

const LocalMusicManager = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const setPlaylist = useAppStore((state) => state.setPlaylist);

  const handleFileSelect = useCallback(
    (files: File[]) => {
      const musicFiles = files.filter((file) => file.type.startsWith("audio/"));

      if (musicFiles.length === 0) {
        messageApi.error("No valid music files selected");
        return;
      }

      const playlist = musicFiles.map((file, index) => ({
        id: index,
        name: file.name.replace(/\.[^/.]+$/, ""),
        artist: "Local Artist",
        src: URL.createObjectURL(file),
        avatar: "/images/default-album.svg",
        coverImage: "/images/default-album.svg",
        playedCount: 0,
      }));

      setPlaylist("local-playlist", playlist);
      messageApi.success(`Added ${playlist.length} music files to playlist`);
    },
    [messageApi, setPlaylist]
  );

  const uploadProps: UploadProps = {
    multiple: true,
    accept: "audio/*",
    beforeUpload: (file) => {
      if (!file.type.startsWith("audio/")) {
        messageApi.error(`${file.name} is not a valid audio file`);
        return false;
      }
      return false; // Prevent auto upload
    },
    onChange: (info) => {
      if (info.fileList.length > 0) {
        const files = info.fileList.map((file) => file.originFileObj);
        handleFileSelect(files);
      }
    },
  };

  return (
    <div style={{ padding: "20px" }}>
      {contextHolder}
      <Upload.Dragger {...uploadProps}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag music files to this area
        </p>
        <p className="ant-upload-hint">
          Support for single or bulk upload of audio files
        </p>
      </Upload.Dragger>
    </div>
  );
};

export default LocalMusicManager;

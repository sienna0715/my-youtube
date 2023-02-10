import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { formatAgo } from "../util/date";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const navigate = useNavigate();
  const {
    error,
    isLoading,
    data: videos,
  } = useQuery(["related", id], () => youtube.relatedVideos(id));

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Somthing is wrong...</p>}
      {videos && (
        <ul>
          {videos.map((video) => {
            return (
              <li
                key={video.id}
                video={video}
                className="flex mb-3"
                onClick={() => {
                  navigate(`/videos/watch/${video.id}`, { state: { video } });
                }}
              >
                <img
                  className="w-1/2 rounded-2xl"
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                />

                <div className="flex flex-row">
                  <div className="mt-3 ml-3">
                    <p className="font-semibold mb-2 line-clamp-2">
                      {video.snippet.title}
                    </p>
                    <p className="text-sm opacity-80">
                      {video.snippet.channelTitle}
                    </p>
                    <span className="text-sm opacity-80">
                      {formatAgo(video.snippet.publishedAt, "ko")}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

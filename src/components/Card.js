import React from "react";
import { formatAgo } from "../util/date";
import { useNavigate } from "react-router-dom";
import ChannelInfo from "./ChannelInfo";

export default function Card({ video }) {
  const { title, thumbnails, channelId, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();

  return (
    <li
    className="mb-8"
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
        <img className='w-full rounded-2xl' src={thumbnails.medium.url} alt={title} />
        
        <div className="flex flex-row mt-2">
          <ChannelInfo id={channelId} />
          <div className="w-full ml-3">
            <p className="font-semibold mb-2 line-clamp-2">{title}</p>
            <p className="text-sm opacity-80">{channelTitle}</p>
            <span className="text-sm opacity-80">{formatAgo(publishedAt, "ko")}</span>
          </div>
        </div>
    </li>
  );
}

import { ChatMessage } from "../types.ts";
import { FC } from "react";
interface MessageStartProps {
  message: ChatMessage;
  profilePic: string;
}

interface MessageEndProps {
  message: ChatMessage;
  profilePic: string;
}

export const MessageStart: FC<MessageStartProps> = ({
  profilePic,
  message,
}) => {
  console.log("message", message);
  return (
    <div>
      <div className="tw-chat tw-chat-start">
        <div className="tw-chat-image tw-avatar">
          <div className="tw-w-10 tw-rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={profilePic}
            />
          </div>
        </div>
        <div className="tw-chat-header tw-text-gray-300 tw-text-xs tw-opacity-50">
          Obi-Wan Kenobi
          <time className="tw-text-xs tw-opacity-50 tw-ms-3">12:45</time>
        </div>
        <div className="tw-chat-bubble">{message?.message || ""}</div>
        <div className="tw-chat-footer tw-opacity-50">Delivered</div>
      </div>
    </div>
  );
};

export const MessageEnd: FC<MessageEndProps> = ({ message, profilePic }) => {
  return (
    <div className={`tw-chat tw-chat-end`}>
      <div className="tw-chat-image tw-avatar">
        <div className="tw-w-10 tw-rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div className="tw-chat-header">
        Obi-Wan Kenobi
        <time className="tw-text-xs tw-opacity-50">12:45</time>
      </div>
      <div className="tw-chat-bubble">{message?.message || ""}</div>
      <div className="tw-chat-footer tw-opacity-50">Sent</div>
    </div>
  );
};

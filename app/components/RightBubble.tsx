import { MessageMeta } from "./MessageMeta";
import { TextContent } from "./TextContext";

export const RightBubble = ({ text, id }: { text: string; id?: string }) => {
  return (
    <>
      <div className="col-start-6 col-end-13 p-3">
        <div className="flex items-center justify-start flex-row-reverse">
          <div className="relative text-sm bg-[#1E1E23] py-2 px-4 shadow rounded-s-xl rounded-ee-xl">
            <TextContent text={text} />
          </div>
        </div>
        <small className="block text-zinc-500 pr-3 text-right py-1">
          <MessageMeta id={id} />
        </small>
      </div>
    </>
  );
};

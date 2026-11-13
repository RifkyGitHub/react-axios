import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import CommentModalUpdate from "./CommentModalUpdate";

interface Comment {
  id: string;
  body: string;
  postId: number;
  likes: number;
  username?: string;
  author?: string;
  user?: {
    username: string;
  };
}

interface CommentListProps {
  comments: Comment[];
  setTrigger: React.Dispatch<React.SetStateAction<undefined>>
}

function CommentList({ comments, setTrigger }: CommentListProps) {
  const [selectedId, setSelectedId] = useState("");

  return (
    <section className="flex flex-col gap-3">
      <Dialog>
        {comments.map((comment, index) => {
          return (
            <DialogTrigger
              key={comment.id}
              onClick={() => setSelectedId(comment.id)}
              className="group w-full cursor-pointer text-left rounded-xl border border-[#E9E9E3] bg-white p-5 transition-all duration-300 hover:border-[#C8A58B] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEE9E2] text-sm font-semibold text-[#91694E]">
                    {comment.username}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#292923]">
                      {comment.username}
                    </h3>

                    <p className="text-xs text-[#A1A198]">Community member</p>
                  </div>
                </div>

                <span className="text-xs text-[#B8B8AF]">#{index + 1}</span>
              </div>

              <p className="text-sm leading-7 text-[#62625B]">{comment.body}</p>

              <div className="mt-5 flex items-center justify-between border-t border-[#F0F0EB] pt-4">
                <span className="text-xs text-[#A1A198]">
                  Post ID / {comment.postId || 1}
                </span>

                <div className="flex items-center gap-2 text-xs font-medium text-[#91694E]">
                  <span>♡</span>
                  <span>{comment.likes} likes</span>
                </div>
              </div>
            </DialogTrigger>
          );
        })}

        <DialogContent className="rounded-2xl border border-[#E9E9E3] bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:max-w-md">
          <CommentModalUpdate selectedId={selectedId} setTrigger={setTrigger}/>
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default CommentList;

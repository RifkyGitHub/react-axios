import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import CommentModalUpdate from "./CommentModalUpdate";
import CommentModalDelete from "./CommentModalDelete";
import { Pencil, Trash2 } from "lucide-react";

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
  setTrigger: React.Dispatch<React.SetStateAction<undefined>>;
}

function CommentList({ comments, setTrigger }: CommentListProps) {
  const [selectedId, setSelectedId] = useState("");

  return (
    <section className="flex flex-col gap-3">
      {comments.map((comment, index) => {
        return (
          <article
            key={comment.id}
            className="group w-full rounded-xl border border-[#E9E9E3] bg-white p-5 text-left transition-all duration-300 hover:border-[#C8A58B] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
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

              <div className="flex items-center gap-2">
                <Dialog>
                  <DialogTrigger
                    type="button"
                    onClick={() => setSelectedId(comment.id)}
                    className="flex items-center justify-center gap-1 rounded-md border border-[#91694E] bg-[#91694E] px-2.5 py-1 text-xs font-medium text-white transition-all duration-200 hover:border-[#A16B48] hover:bg-[#A16B48] active:scale-95"
                  >
                    <Pencil className="h-3 w-3" />
                    <span>Change</span>
                  </DialogTrigger>

                  <DialogContent className="rounded-2xl border border-[#E9E9E3] bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:max-w-md">
                    <CommentModalUpdate
                      selectedId={selectedId}
                      setTrigger={setTrigger}
                    />
                  </DialogContent>
                </Dialog>

                <AlertDialog>
                  <AlertDialogTrigger
                    type="button"
                    onClick={() => setSelectedId(comment.id)}
                    aria-label="Delete Comment"
                    className="flex items-center justify-center gap-1 rounded-md border border-[#91694E]/40 bg-transparent px-2.5 py-1 text-xs font-medium text-[#91694E] transition-all duration-200 hover:border-red-600 hover:bg-red-600 hover:text-white active:scale-95"
                  >
                    <Trash2 className="h-3 w-3" />
                    <span>Delete</span>
                  </AlertDialogTrigger>

                  <AlertDialogContent className="rounded-2xl border border-[#E9E9E3] bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:max-w-md">
                    <CommentModalDelete
                      selectedId={selectedId}
                      setTrigger={setTrigger}
                    />
                  </AlertDialogContent>
                </AlertDialog>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-[#91694E]">
                <span>♡</span>
                <span>{comment.likes} likes</span>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default CommentList;

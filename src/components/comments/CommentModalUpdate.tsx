import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { requestComment } from "../axios";

  interface ModalUpdateProps {
    selectedId: string;
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  }

function CommentModalUpdate({ selectedId, setTrigger }: ModalUpdateProps) {
  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    const getCommentByID = async () => {
      try {
        const response = await requestComment.get(`/comments/${selectedId}`);
        setValue("body", response.data.body);
      } catch (error) {
        console.log(error);
      }
    };

    getCommentByID();
  }, [selectedId]);

  const onSave = async (data: { body: string }) => {
    try {
      const response = await requestComment.put(`/comments/${selectedId}`, {
        body: data.body,
        likes: 89320,
        user: {
          username: "rifky",
        },
      });
      setTrigger((prev) => !prev);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <DialogHeader className="border-b border-[#F0F0EB] pb-4 text-left">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#91694E]">
          EDIT DISCUSSION • ID #{selectedId}
        </span>
        <DialogTitle className="font-serif text-xl font-bold text-[#292923]">
          Update your thought.
        </DialogTitle>
        <DialogDescription className="text-xs text-[#A1A198]">
          Editing comment by{" "}
          <span className="font-medium text-[#62625B]">Member</span> • Post ID / 1
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(onSave)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="body"
            className="text-[11px] font-semibold uppercase tracking-wider text-[#62625B]"
          >
            KOMENTAR
          </label>
          <textarea
            {...register("body")}
            id="body"
            rows={4}
            placeholder="Write something meaningful..."
            className="w-full resize-none rounded-xl border border-[#E9E9E3] bg-[#FAFAF8] p-3.5 text-sm leading-relaxed text-[#292923] placeholder:text-[#B8B8AF] transition-colors focus:border-[#C8A58B] focus:bg-white focus:outline-none"
          />
        </div>

        <div className="flex items-center justify-between border-t border-[#F0F0EB] pt-4">
          <div className="flex items-center gap-1.5 text-xs font-medium text-[#91694E]">
            <span>♡</span>
            <span>0 likes</span>
          </div>
          <button
            type="submit"
            className="cursor-pointer rounded-lg bg-[#292923] px-5 py-2.5 text-xs font-medium text-white transition-all hover:bg-[#A16B48] active:scale-[0.99]"
          >
            - Save changes -
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentModalUpdate;

import { useState } from "react";

function CommentForm() {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://dummyjson.com/comments/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          body: comment,
          postId: 3,
          userId: 5,
        }),
      });

      const data = await response.json();
      console.log(data);
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-[#E9E9E3] bg-white p-5 shadow-sm"
    >
      <div className="flex flex-col gap-3">
        <label
          htmlFor="komentar"
          className="text-xs font-semibold uppercase tracking-widest text-[#77776F]"
        >
          Komentar
        </label>

        <textarea
          id="komentar"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write something meaningful..."
          className="min-h-36 w-full resize-none rounded-lg border border-[#E9E9E3] bg-[#FAFAF8] p-4 text-sm outline-none transition focus:border-[#A16B48]"
        />

        <button
          type="submit"
          className="rounded-lg bg-[#292923] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#A16B48]"
        >
         -Post comment -
        </button>
      </div>
    </form>
  );
}

export default CommentForm;

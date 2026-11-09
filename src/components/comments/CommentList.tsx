interface Comment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: {
    id: number;
    username: string;
    fullname: string;
  };
}

interface CommentListProps {
  comments: Comment[];
}

function CommentList({ comments }: CommentListProps) {
  return (
    <section className="flex flex-col gap-3">
      {comments.map((comment, index) => {
        return (
          <article
            key={comment.id}
            className="group rounded-xl border border-[#E9E9E3] bg-white p-5 transition-all duration-300 hover:border-[#C8A58B] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEE9E2] text-sm font-semibold text-[#91694E]">
                  {comment.user.username.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#292923]">
                    {comment.user.username}
                  </h3>

                  <p className="text-xs text-[#A1A198]">Community member</p>
                </div>
              </div>

              <span className="text-xs text-[#B8B8AF]">#{index + 1}</span>
            </div>

            <p className="text-sm leading-7 text-[#62625B]">{comment.body}</p>

            <div className="mt-5 flex items-center justify-between border-t border-[#F0F0EB] pt-4">
              <span className="text-xs text-[#A1A198]">
                Post ID / {comment.postId}
              </span>

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

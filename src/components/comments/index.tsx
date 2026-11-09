import { useState, useEffect} from "react";
import CommentsForm from "./CommentForm";
import CommentsList from "./CommentList";

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

function Comments() {
  const [comments, setComments] = useState([]);
  

  useEffect(() => {
    const getAllComments = async () => {
      try {
        const response = await fetch("https://dummyjson.com/comments?limit=5");
        const data = await response.json();
        setComments(data.comments);
      } catch (error) {
        console.log(error);
      }
    };

    getAllComments();
  }, []);

  return (
    <main className="min-h-screen bg-[#F7F7F5] px-5 py-12 text-[#242421] md:px-10">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12 flex items-end justify-between border-b border-[#E5E5DF] pb-7">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#A16B48]">
              Community / Discussion
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Conversations<span className="text-[#A16B48]">.</span>
            </h1>

            <p className="mt-3 text-sm text-[#85857E]">
              A place for thoughts, opinions and discussions.
            </p>
          </div>

          <div className="hidden text-right sm:block">
            <p className="text-3xl font-semibold">{comments.length}</p>
            <p className="text-xs uppercase tracking-widest text-[#85857E]">
              Comments
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_320px]">
          <section>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-widest">
                Recent discussions
              </h2>

              <span className="text-xs text-[#999990]">Latest activity</span>
            </div>

            <CommentsList comments={comments} />
          </section>

          <aside>
            <div className="sticky top-8">
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A16B48]">
                  Join the conversation
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  Share your thoughts.
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-[#85857E]">
                  Your perspective matters. Leave something meaningful.
                </p>
              </div>

              <CommentsForm />
            </div>
          </aside>
        </div>

        <footer className="mt-16 border-t border-[#E5E5DF] pt-6 text-xs text-[#A1A198]">
          COMMUNITY SPACE — OPEN DISCUSSION
        </footer>
      </div>
    </main>
  );
}

export default Comments;

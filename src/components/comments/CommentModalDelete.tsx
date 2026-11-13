import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogContent,
} from "../ui/alert-dialog";
import { requestComment } from "../axios";

interface ModalDeleteProps {
  selectedId: string;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

function CommentModalDelete({ selectedId, setTrigger }: ModalDeleteProps) {
  const handleDelete = async () => {
    try {
      await requestComment.delete(`/comments/${selectedId}`);
      setTrigger((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Delete this comment?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          comment from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>No, keep comment</AlertDialogCancel>
        <AlertDialogAction onClick={handleDelete}>
          Yes, delete it
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}

export default CommentModalDelete;

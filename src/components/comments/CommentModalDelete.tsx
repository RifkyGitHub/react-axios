import { useEffect } from "react";
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
function CommentModalDelete({selectedId, setTrigger }:ModalDeleteProps) {
    const handleDelete = async () => {
        try {
            await requestComment.delete(`/comments/${selectedId}`);
            setTrigger((prev ) => !prev)
        } catch (error) {
            
        console.log(error)
        }
    }
  return (
    <AlertDialogContent>
      <button>Show Dialog</button>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}

export default CommentModalDelete;

import {
  BulkDeleteWithConfirmButton,
  BulkDeleteWithConfirmButtonProps,
  useListContext,
} from "react-admin";
import { getStorage, ref, deleteObject } from "firebase/storage";

function deleteFileInFirestore(fileURL: string) {
  const storage = getStorage();

  const desertRef = ref(storage, fileURL);

  deleteObject(desertRef)
    .then(function () {
      console.log("File Deleted");
    })
    .catch(function (error) {
      console.log("An error occured when deleting a file.");
    });
};

function handleDeletion(field:any) {
  if (Array.isArray(field)) {
    for (let i = 0; i < field.length; i++) {
      deleteFileInFirestore(field[i]?.src);
    }
  } else if (typeof field === "object") {
    deleteFileInFirestore(field?.src);
  }
};

export const BulkDeleteButton = (props: BulkDeleteWithConfirmButtonProps) => {
  const listContext = useListContext();

  const handleClick = () => {
    const { data, selectedIds } = listContext;

    const result = data?.filter((record) => {
      return selectedIds.find((id) => {
        return id === record.id;
      });
    });

    result?.forEach((record) => {
      const { picture, attachment } = record;
      handleDeletion(picture);
      handleDeletion(attachment);
    });
  };

  return <BulkDeleteWithConfirmButton {...props} onClick={handleClick} />;
};

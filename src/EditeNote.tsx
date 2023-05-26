import {NoteData, Tag} from "./App";
import NoteForm from "./NoteForm";
import { useNote } from "./NoteLayout";
type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

function EditNote({onSubmit, onAddTag, availableTags}: EditNoteProps) {
  const note = useNote();
  return (
    <div>
      <h1>Edit Note</h1>
      <NoteForm
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </div>
  );
}

export default EditNote;

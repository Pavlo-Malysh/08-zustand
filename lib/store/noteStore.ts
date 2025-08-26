import { NewNote } from "@/types/note";
import { create } from "zustand";
import { persist } from "zustand/middleware";




type NoteDraft = {
    draft: NewNote;
    setDraft: (note: NewNote) => void;
    clearDraft: () => void;
}


const initialDraft: NewNote = {
    title: '',
    content: '',
    tag: '',
};


export const useNoteDraft = create<NoteDraft>()(
    persist((set) => {
        return {
            draft: initialDraft,
            setDraft: (note: NewNote) => set({ draft: note }),
            clearDraft: () => set({ draft: initialDraft }),
        }
    }, {
        name: 'draft',
    })
)


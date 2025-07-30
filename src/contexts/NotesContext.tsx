"use client";

import { createContext, useState, ReactNode } from 'react';
import { Note } from '@/types';

interface NotesContextType {
  notes: Note[];
  addNote: (content: string) => void;
  deleteNote: (id: number) => void;
}

export const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (content: string) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      { id: Date.now(), content },
    ]);
  };

  const deleteNote = (id: number) => {
    setNotes((prevNotes) => prevNotes.filter(note => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
}
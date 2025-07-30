"use client";

import { useContext } from 'react';
import { NotesContext } from '@/contexts/NotesContext';
import { Note } from '@/types';

export function NoteList() {
  const { notes, deleteNote } = useContext(NotesContext);

  return (
    <ul className="list-disc pl-5">
      {notes.map((note: Note) => (
        <li key={note.id} className="mb-2">
          <div className="flex justify-between items-center">
            <span>{note.content}</span>
            <button onClick={() => deleteNote(note.id)} className="text-red-500">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
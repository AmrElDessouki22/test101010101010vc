"use client";

import { FormEvent, useState } from 'react';
import { useContext } from 'react';
import { NotesContext } from '@/contexts/NotesContext';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export function NoteForm() {
  const [content, setContent] = useState('');
  const { addNote } = useContext(NotesContext);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!content.trim()) return;
    addNote(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <Input
        label="New Note"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter your note here..."
      />
      <Button label="Add Note" type="submit" />
    </form>
  );
}
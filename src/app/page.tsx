import { useEffect, useState } from 'react';
import { NoteList } from '@/components/features/NoteList';
import { NoteForm } from '@/components/features/NoteForm';

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Notes</h1>
      <NoteForm />
      <NoteList />
    </div>
  );
}
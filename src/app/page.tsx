
import JournalList from '@/components/JournalList';

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-primary">International Journal of English Literature and Social Sciences (IJELS)</h1>
        <p className="text-muted-foreground">
          Your gateway to quality research publications.
        </p>
      </header>

      <JournalList />
    </div>
  );
}

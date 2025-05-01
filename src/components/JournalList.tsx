
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';

const journals = [
  {
    id: '1',
    title: 'Journal of Applied Science',
    description:
      'A multidisciplinary journal focusing on innovations in applied sciences and technology.',
    href: '#',
  },
  {
    id: '2',
    title: 'International Journal of Research',
    description:
      'Dedicated to publishing high-quality research papers across all academic disciplines.',
    href: '#',
  },
  {
    id: '3',
    title: 'Global Science Review',
    description:
      'An open-access journal that provides a platform for discussing global scientific advancements.',
    href: '#',
  },
];

const JournalList = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {journals.map((journal) => (
        <Card key={journal.id}>
          <CardHeader>
            <CardTitle>{journal.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{journal.description}</CardDescription>
            <Button asChild className="mt-4">
              <a href={journal.href}>Learn More</a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default JournalList;

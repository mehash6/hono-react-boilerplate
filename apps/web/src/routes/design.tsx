import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/design')({
  component: Design,
});

function Design() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">Design Page</h1>
      <p className="mt-4">Your selected design options would be processed here.</p>
    </div>
  );
}

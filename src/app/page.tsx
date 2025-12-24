import Image from 'next/image';

export default function Home() {
  const cards = [
    {
      title: 'Card 1',
      description: 'This is the description for card 1.',
      imageUrl: '/images/image.png',
      date: '2024-06-01',
    },
    {
      title: 'Card 2',
      description: 'This is the description for card 2.',
      imageUrl: '/images/image.png',
      date: '2024-06-02',
    },
  ];

  return (
    <main className="m-auto max-w-7xl p-4">
      <div className="grid grid-cols-3 gap-4">
        {
          cards.map((card, index) => {
            const date = new Date(card.date).toLocaleDateString();
            return (
              <div key={index} className="card">
                <time>{date}</time>
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  width={300}
                  height={200}
                />
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </div>
            );
          })
        }
      </div>
    </main>
  );
}

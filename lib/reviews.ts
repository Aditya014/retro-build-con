export interface Review {
  id: string;
  author: string;
  authorImage: string;
  rating: number;
  text: string;
  source: 'google';
}

// Static data from actual Google reviews
export const reviews: Review[] = [
  {
    id: 'g1',
    author: 'Travelogs',
    authorImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop',
    rating: 5,
    text: "Thanks to Divyajit Das CEO for helping me build my home despite being far away. It was just a hassle-free experience. I never dreamt of that I couldn't build my home in bhubaneswar without actively being involved in it. Starting from planning to approval till finishing and pratistha, it was such a wonderful experience. Thanks to RBC I wish all the best such honesty will take you to heights 👌🏼",
    source: 'google'
  },
  {
    id: 'g2',
    author: 'Abhishek Mohanty',
    authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
    rating: 5,
    text: "I have assigned Team RBC for one of my construction projects and they have succeeded my expectations of being one of the best client servicing firms. The quality they maintain and price both are quite commendable. I would definitely recommend them.",
    source: 'google'
  },
  {
    id: 'g3',
    author: 'Chandan Meher',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
    rating: 5,
    text: "Consulting work is excellent here, they deal with house design, interior design and other home requirements. I have taken help for my house renovation. Work is undergoing. Great people to work with.",
    source: 'google'
  }
];

export function getTopReviews(count: number = 3): Review[] {
  return reviews.slice(0, count);
}
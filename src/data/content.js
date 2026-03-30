export const podcasts = [
  {
    id: 'biblical-foundations',
    title: 'Biblical Foundations',
    host: 'Dr. Lydia Stone',
    summary: 'Big-picture journeys through foundational books with practical application for modern life.',
    cover: '/images/genesis.svg',
    badge: 'Trending',
    tags: ['trending', 'popular'],
    followers: '12.4K',
    episodes: [
      {
        id: 'origins-101',
        title: 'Origins 101',
        length: '36 min',
        description: 'Explore Genesis as the framework for identity, purpose, and redemption.',
        publishedAt: 'Mar 2026',
        guides: [
          { id: 'g1', title: 'Genesis Overview PDF', duration: '12 min read', isPremium: false },
          { id: 'g2', title: 'Character Arc Worksheet', duration: '18 min read', isPremium: true },
          { id: 'g3', title: 'Group Discussion Prompts', duration: '10 min read', isPremium: true }
        ]
      },
      {
        id: 'exodus-practice',
        title: 'Exodus in Practice',
        length: '42 min',
        description: 'Understand liberation themes and how they shape spiritual disciplines.',
        publishedAt: 'Feb 2026',
        guides: [
          { id: 'g4', title: 'Exodus Timeline Companion', duration: '14 min read', isPremium: false },
          { id: 'g5', title: 'Leadership Reflection Pack', duration: '16 min read', isPremium: true }
        ]
      }
    ]
  },
  {
    id: 'wisdom-lab',
    title: 'Wisdom Lab',
    host: 'Pastor Jonah Cole',
    summary: 'A practical take on wisdom books, ideal for students, leaders, and teams.',
    cover: '/images/proverbs.svg',
    badge: 'Popular',
    tags: ['popular'],
    followers: '9.1K',
    episodes: [
      {
        id: 'proverbs-habits',
        title: 'Habits of the Wise',
        length: '29 min',
        description: 'Build daily rhythms through the lens of Proverbs.',
        publishedAt: 'Mar 2026',
        guides: [
          { id: 'g6', title: '7-Day Habit Reset Plan', duration: '8 min read', isPremium: false },
          { id: 'g7', title: 'Proverbs Deep-Dive Notes', duration: '20 min read', isPremium: true }
        ]
      }
    ]
  },
  {
    id: 'gospel-deep-dive',
    title: 'Gospel Deep Dive',
    host: 'Alicia Rowan',
    summary: 'Cinematic walkthroughs of the Gospels with culture notes and weekly challenges.',
    cover: '/images/matthew.svg',
    badge: 'New',
    tags: ['new', 'trending'],
    followers: '4.7K',
    episodes: [
      {
        id: 'sermon-on-the-mount',
        title: 'The Sermon on the Mount',
        length: '33 min',
        description: 'A layered study experience with modern case studies and prompts.',
        publishedAt: 'Mar 2026',
        guides: [
          { id: 'g8', title: 'Beatitudes Visual Guide', duration: '9 min read', isPremium: false },
          { id: 'g9', title: 'Community Workshop Kit', duration: '24 min read', isPremium: true }
        ]
      }
    ]
  }
];

export const getPodcastById = (podcastId) => podcasts.find((podcast) => podcast.id === podcastId);
export const getEpisodeById = (podcast, episodeId) => podcast?.episodes.find((episode) => episode.id === episodeId);
export const getPodcastsByTag = (tag) => podcasts.filter((podcast) => podcast.tags.includes(tag));

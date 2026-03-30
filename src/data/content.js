export const podcasts = [
  {
    id: 'biblical-foundations',
    title: 'Biblical Foundations',
    host: 'Dr. Lydia Stone',
    summary: 'Big-picture journeys through foundational books with practical application for modern life.',
    cover: '/images/genesis.svg',
    episodes: [
      {
        id: 'origins-101',
        title: 'Origins 101',
        length: '36 min',
        description: 'Explore Genesis as the framework for identity, purpose, and redemption.',
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
    episodes: [
      {
        id: 'proverbs-habits',
        title: 'Habits of the Wise',
        length: '29 min',
        description: 'Build daily rhythms through the lens of Proverbs.',
        guides: [
          { id: 'g6', title: '7-Day Habit Reset Plan', duration: '8 min read', isPremium: false },
          { id: 'g7', title: 'Proverbs Deep-Dive Notes', duration: '20 min read', isPremium: true }
        ]
      }
    ]
  }
];

export const getPodcastById = (podcastId) => podcasts.find((podcast) => podcast.id === podcastId);

export const getEpisodeById = (podcast, episodeId) => podcast?.episodes.find((episode) => episode.id === episodeId);

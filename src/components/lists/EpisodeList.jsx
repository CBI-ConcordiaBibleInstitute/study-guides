import EpisodeCard from '../cards/EpisodeCard';

export default function EpisodeList({ episodes = [], podcastId }) {
  return (
    <div className="space-y-4">
      {episodes.map((episode, index) => (
        <EpisodeCard key={episode.id} episode={episode} podcastId={podcastId} episodeNumber={index + 1} />
      ))}
    </div>
  );
}

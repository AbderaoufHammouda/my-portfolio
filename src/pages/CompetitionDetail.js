import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const CompetitionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const competitions = {
    'nextrace-2024': {
      title: 'NextRace 2024',
      subtitle: 'Capture The Flag Competition',
      teamName: 'Attack On Tal3a',
      ranking: '7th place out of 25 teams',
      score: '2100 points',
      members: [
        'Souhail Namous',
        'Foued Mecelti',
        'Abderaouf Hammouda (me)'
      ],
      description: 'In 2024, we participated for the first time ever in a Capture The Flag competition. Although our team was missing a player and competed with only two active members for most challenges, we still managed to achieve an impressive result.',
      personalContribution: 'I personally contributed through multiple challenge categories and earned 2100 points. This competition pushed me into real cybersecurity problem-solving for the first time and helped build strong teamwork with Souhail and Foued.',
      images: [
        { src: '/competitions/2024/team.jpg', caption: 'Team Photo' },
        { src: '/competitions/2024/ranking.jpg', caption: 'Ranking Table' },
        { src: '/competitions/2024/scores.jpg', caption: 'Individual Scores' }
      ]
    },
    'nextrace-2025': {
      title: 'NextRace 2025',
      subtitle: 'Capture The Flag Competition',
      teamName: 'Attack On Tal3a 2.0',
      ranking: '4th place out of 25 teams',
      score: '3400 points (Personal)',
      members: [
        'Mohamed Baha Eddine Fellah',
        'Abdelwadoud Amirouche',
        'Brahim Elkhalil Azzouza',
        'Abderaouf Hammouda (captain)'
      ],
      description: 'In 2025, we returned stronger and with a full team. Thanks to better coordination, improved strategy, and more experience, we achieved 4th place, only 100 points behind 3rd place.',
      personalContribution: 'As the team captain, I focused on leading the strategy and solving complex challenges. My main specialty was cryptography, where I solved every challenge in the category, earning 3400 points – the highest score in the team. This competition was a major step in my cybersecurity journey: I improved my skills in problem-solving, challenge analysis, and rapid thinking under pressure.',
      images: [
        { src: '/competitions/2025/team.jpg', caption: 'Team Photo' },
        { src: '/competitions/2025/ranking.jpg', caption: 'Final Rankings' },
        { src: '/competitions/2025/contribution.jpg', caption: 'My Individual Contributions' }
      ]
    }
  };

  const competition = competitions[id];

  if (!competition) {
    return (
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Competition Not Found</h1>
          <Link to="/about" className="text-primary hover:underline">← Back to About Me</Link>
        </div>
      </main>
    );
  }

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % competition.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + competition.images.length) % competition.images.length);
  };

  return (
    <main className="flex-grow py-12 md:py-16 animate-fadeIn">
      <div className="px-4 mb-8">
        <button onClick={() => navigate('/about')} className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to About Me
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tighter mb-4">
            {competition.title}
          </h1>
          <p className="text-xl text-primary font-medium">{competition.subtitle}</p>
        </div>
      </div>

      <div className="px-4 mb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="gradient-border rounded-xl p-6 bg-black/50 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-gray-800 pb-2">Competition Details</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Team Name</p>
                  <p className="text-white font-medium">{competition.teamName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Ranking</p>
                  <p className="text-primary font-bold text-lg">{competition.ranking}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Score</p>
                  <p className="text-white font-medium">{competition.score}</p>
                </div>
              </div>
            </div>

            <div className="gradient-border rounded-xl p-6 bg-black/50 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-gray-800 pb-2">Team Members</h3>
              <ul className="space-y-2">
                {competition.members.map((member, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="gradient-border rounded-xl p-8 bg-black/50 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                {competition.description}
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">My Contribution</h2>
              <p className="text-gray-300 leading-relaxed">
                {competition.personalContribution}
              </p>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Gallery</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {competition.images.map((img, index) => (
                  <div 
                    key={index}
                    onClick={() => openLightbox(index)}
                    className={`group relative cursor-pointer overflow-hidden rounded-xl border border-gray-800 bg-gray-900 ${index === 0 ? 'md:col-span-2' : ''}`}
                  >
                    <img 
                      src={img.src} 
                      alt={img.caption}
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                      <span className="text-white font-medium">{img.caption}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md animate-fadeIn" onClick={closeLightbox}>
          <button 
            className="absolute top-4 right-4 text-gray-400 hover:text-white p-2"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-4 hover:bg-white/10 rounded-full transition-colors"
            onClick={prevImage}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative max-w-7xl max-h-[90vh] w-full px-4 flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={competition.images[currentImage].src} 
              alt={competition.images[currentImage].caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-center text-gray-300 mt-4 text-lg font-medium">
              {competition.images[currentImage].caption}
            </p>
          </div>

          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-4 hover:bg-white/10 rounded-full transition-colors"
            onClick={nextImage}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </main>
  );
};

export default CompetitionDetail;

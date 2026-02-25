import React from 'react';

// Post with AI face background - overlay to hide logos, logo only at bottom
const AIFacePost = () => {
  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/ai-face-bg.jpg)',
        }}
      />

      {/* Gradient overlay at bottom to hide logos */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[250px]"
        style={{
          background: 'linear-gradient(to top, #F8F7F5 0%, #F8F7F5 50%, transparent 100%)'
        }}
      />

      {/* Bottom: Logo only */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2"
        style={{ bottom: '60px' }}
      >
        <img 
          src="/instantclaw-logo.png" 
          alt="InstantClaw" 
          className="h-32 w-32"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>
    </div>
  );
};

export default AIFacePost;

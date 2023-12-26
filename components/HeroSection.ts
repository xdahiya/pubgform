const HeroSection = () => {
  return (
    <div className="hero-section">
      <video autoPlay loop muted className="video-bg">
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Your Hero Title</h1>
        <p>Your hero section content goes here.</p>
      </div>
      <style jsx>{`
        .hero-section {
          position: relative;
          height: 100vh;
          overflow: hidden;
        }

        .video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          text-align: center;
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        p {
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;

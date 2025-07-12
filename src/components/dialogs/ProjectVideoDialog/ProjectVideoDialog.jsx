import React, { useState, useEffect, useRef } from 'react';
import Markdown from 'react-markdown';
import styles from './ProjectVideoDialog.module.css';

const ProjectVideoDialog = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  
  const videoRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
    return () => {
      document.body.style.overflow = 'unset';
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  const showVideoControls = () => {
    setShowControls(true);
    
    // Clear existing timeout
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    
    // Set new timeout to hide controls after 3 seconds
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  const handleMouseMove = () => {
    showVideoControls();
  };

  const handleMouseLeave = () => {
    // Clear timeout when mouse leaves video area
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    setShowControls(false);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 300);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handlePlayVideo = () => {
    setError(false);
    setIsLoading(true);
    setIsVideoVisible(true);
    showVideoControls();
    
    // Start playing video after a short delay to ensure it's loaded
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.error('Error playing video:', error);
          setError(true);
          setIsLoading(false);
        });
      }
    }, 100);
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
    setError(false);
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      // Auto-play the video once it's loaded
      videoRef.current.play().catch(error => {
        console.error('Error playing video:', error);
        setError(true);
      });
    }
    showVideoControls();
  };

  const handleVideoError = (e) => {
    setIsLoading(false);
    setError(true);
    console.error('Video failed to load:', videoUrl);
    console.error('Video error details:', e);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    showVideoControls();
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
    showVideoControls();
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const togglePlayPause = () => {
    showVideoControls();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(error => {
          console.error('Error playing video:', error);
        });
      }
    }
  };

  const handleSeek = (e) => {
    showVideoControls();
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e) => {
    showVideoControls();
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    showVideoControls();
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.volume = volume;
        setIsMuted(false);
      } else {
        videoRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsVideoVisible(false);
    setIsPlaying(false);
    setCurrentTime(0);
    setError(false);
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getMonth() + 1}/${d.getFullYear()}`;
  };

  const videoUrl = project.videoUrl;

  return (
    <div 
      className={`${styles.overlay} ${isVisible ? styles.visible : ''} ${isClosing ? styles.closing : ''}`}
      onClick={handleOverlayClick}
    >
      <div 
        className={`${styles.dialog} ${isVisible ? styles.visible : ''} ${isClosing ? styles.closing : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>{project.title}</h2>
          <button className={styles.closeButton} onClick={handleClose}>
            ×
          </button>
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* Video Section */}
          <div className={styles.videoSection}>
            <div className={styles.videoContainer}>
              {!isVideoVisible ? (
                // Thumbnail with play button
                <div 
                  className={styles.thumbnail}
                  style={{ 
                    backgroundImage: project.thumbnailUrl ? `url(${project.thumbnailUrl})` : 'none' 
                  }}
                >
                  <button className={styles.playButton} onClick={handlePlayVideo}>
                    {isLoading ? '⟳' : '▶'}
                  </button>
                  <div className={styles.videoLabel}>Demo Video</div>
                </div>
              ) : (
                // Video player
                <div 
                  className={styles.videoPlayer}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  {isLoading && (
                    <div className={styles.loading}>
                      <div className={styles.spinner}>⟳</div>
                      <div>Loading video...</div>
                    </div>
                  )}

                  {error && (
                    <div className={styles.error}>
                      <div className={styles.errorIcon}>⚠</div>
                      <div>Video failed to load</div>
                      <div className={styles.errorUrl}>URL: {videoUrl}</div>
                      <div className={styles.errorActions}>
                        <button onClick={handlePlayVideo}>Retry</button>
                        <button onClick={closeVideo}>Back</button>
                      </div>
                    </div>
                  )}

                  <video
                    ref={videoRef}
                    className={styles.video}
                    onLoadedData={handleVideoLoad}
                    onLoadedMetadata={handleVideoLoad}
                    onCanPlay={handleVideoLoad}
                    onError={handleVideoError}
                    onPlay={handleVideoPlay}
                    onPause={handleVideoPause}
                    onTimeUpdate={handleTimeUpdate}
                    onClick={togglePlayPause}
                    preload="metadata"
                    controls={false}
                  >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Close Button - Always visible */}
                  {/* <button className={styles.closeVideoButton} onClick={closeVideo}>
                    ×
                  </button> */}

                  {/* Video Controls */}
                  <div className={`${styles.controls} ${showControls ? styles.controlsVisible : styles.controlsHidden}`}>
                    <div className={styles.progressBar} onClick={handleSeek}>
                      <div 
                        className={styles.progressFill}
                        style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                      />
                    </div>
                    
                    <div className={styles.controlButtons}>
                      <div className={styles.leftControls}>
                        <button onClick={togglePlayPause}>
                          {isPlaying ? '⏸' : '▶'}
                        </button>
                        <button onClick={toggleMute}>
                          {isMuted ? '🔇' : '🔊'}
                        </button>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.1"
                          value={isMuted ? 0 : volume}
                          onChange={handleVolumeChange}
                          className={styles.volumeSlider}
                        />
                        <span className={styles.timeDisplay}>
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Details Section */}
          <div className={styles.details}>
            <div className={styles.section}>
              <h3>Technologies</h3>
              <div className={styles.technologies}>
                {project.technologies?.map((tech, index) => (
                  <span key={index} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.info}>
              <div className={styles.infoItem}>
                <span className={styles.label}>Category</span>
                <span className={styles.value}>{project.category}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Completed</span>
                <span className={styles.value}>{formatDate(project.completionDate)}</span>
              </div>
            </div>

            <div className={styles.section}>
              <h3>Project Details</h3>
              <div className={styles.description}>
                <Markdown>{project.detailedDescription}</Markdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectVideoDialog;

// import React, { useState, useEffect, useRef } from 'react';
// import Markdown from 'react-markdown';
// import styles from './ProjectVideoDialog.module.css';

// const ProjectVideoDialog = ({ project, onClose }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);
//   const [isVideoVisible, setIsVideoVisible] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [volume, setVolume] = useState(1);
//   const [isMuted, setIsMuted] = useState(false);
//   const [showControls, setShowControls] = useState(true);
  
//   const videoRef = useRef(null);
//   const controlsTimeoutRef = useRef(null);

//   useEffect(() => {
//     setTimeout(() => setIsVisible(true), 10);
//     return () => {
//       document.body.style.overflow = 'unset';
//       if (controlsTimeoutRef.current) {
//         clearTimeout(controlsTimeoutRef.current);
//       }
//     };
//   }, []);

//   const showVideoControls = () => {
//     setShowControls(true);
    
//     // Clear existing timeout
//     if (controlsTimeoutRef.current) {
//       clearTimeout(controlsTimeoutRef.current);
//     }
    
//     // Set new timeout to hide controls after 1 second
//     controlsTimeoutRef.current = setTimeout(() => {
//       setShowControls(false);
//     }, 1000);
//   };

//   const handleMouseMove = () => {
//     showVideoControls();
//   };

//   const handleMouseLeave = () => {
//     // Clear timeout when mouse leaves video area
//     if (controlsTimeoutRef.current) {
//       clearTimeout(controlsTimeoutRef.current);
//     }
//     setShowControls(false);
//   };

//   const handleClose = () => {
//     setIsClosing(true);
//     setTimeout(() => onClose(), 300);
//   };

//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       handleClose();
//     }
//   };

//   const handlePlayVideo = () => {
//     setError(false);
//     setIsLoading(true);
//     setIsVideoVisible(true);
//     showVideoControls();
//   };

//   const handleVideoLoad = () => {
//     setIsLoading(false);
//     setError(false);
//     if (videoRef.current) {
//       setDuration(videoRef.current.duration);
//     }
//     showVideoControls();
//   };

//   const handleVideoError = (e) => {
//     setIsLoading(false);
//     setError(true);
//     console.error('Video failed to load:', videoUrl);
//     console.error('Video error details:', e);
//   };

//   const handleVideoPlay = () => {
//     setIsPlaying(true);
//     showVideoControls();
//   };

//   const handleVideoPause = () => {
//     setIsPlaying(false);
//     showVideoControls();
//   };

//   const handleTimeUpdate = () => {
//     if (videoRef.current) {
//       setCurrentTime(videoRef.current.currentTime);
//     }
//   };

//   const togglePlayPause = () => {
//     showVideoControls();
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play().catch(error => {
//           console.error('Error playing video:', error);
//         });
//       }
//     }
//   };

//   const handleSeek = (e) => {
//     showVideoControls();
//     const rect = e.currentTarget.getBoundingClientRect();
//     const clickX = e.clientX - rect.left;
//     const newTime = (clickX / rect.width) * duration;
//     if (videoRef.current) {
//       videoRef.current.currentTime = newTime;
//     }
//   };

//   const handleVolumeChange = (e) => {
//     showVideoControls();
//     const newVolume = parseFloat(e.target.value);
//     setVolume(newVolume);
//     setIsMuted(newVolume === 0);
//     if (videoRef.current) {
//       videoRef.current.volume = newVolume;
//     }
//   };

//   const toggleMute = () => {
//     showVideoControls();
//     if (videoRef.current) {
//       if (isMuted) {
//         videoRef.current.volume = volume;
//         setIsMuted(false);
//       } else {
//         videoRef.current.volume = 0;
//         setIsMuted(true);
//       }
//     }
//   };

//   const closeVideo = () => {
//     if (videoRef.current) {
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0;
//     }
//     setIsVideoVisible(false);
//     setIsPlaying(false);
//     setCurrentTime(0);
//     setError(false);
//     setShowControls(true);
//     if (controlsTimeoutRef.current) {
//       clearTimeout(controlsTimeoutRef.current);
//     }
//   };

//   const formatTime = (time) => {
//     if (isNaN(time)) return '0:00';
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds.toString().padStart(2, '0')}`;
//   };

//   const formatDate = (date) => {
//     const d = new Date(date);
//     return `${d.getMonth() + 1}/${d.getFullYear()}`;
//   };

//   const videoUrl = project.videoUrl;

//   return (
//     <div 
//       className={`${styles.overlay} ${isVisible ? styles.visible : ''} ${isClosing ? styles.closing : ''}`}
//       onClick={handleOverlayClick}
//     >
//       <div 
//         className={`${styles.dialog} ${isVisible ? styles.visible : ''} ${isClosing ? styles.closing : ''}`}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Header */}
//         <div className={styles.header}>
//           <h2 className={styles.title}>{project.title}</h2>
//           <button className={styles.closeButton} onClick={handleClose}>
//             ×
//           </button>
//         </div>

//         {/* Content */}
//         <div className={styles.content}>
//           {/* Video Section */}
//           <div className={styles.videoSection}>
//             <div className={styles.videoContainer}>
//               {!isVideoVisible ? (
//                 // Thumbnail with play button
//                 <div 
//                   className={styles.thumbnail}
//                   style={{ 
//                     backgroundImage: project.thumbnailUrl ? `url(${project.thumbnailUrl})` : 'none' 
//                   }}
//                 >
//                   <button className={styles.playButton} onClick={handlePlayVideo}>
//                     {isLoading ? '⟳' : '▶'}
//                   </button>
//                   <div className={styles.videoLabel}>Demo Video</div>
//                 </div>
//               ) : (
//                 // Video player
//                 <div 
//                   className={styles.videoPlayer}
//                   onMouseMove={handleMouseMove}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   {isLoading && (
//                     <div className={styles.loading}>
//                       <div className={styles.spinner}>⟳</div>
//                       <div>Loading video...</div>
//                     </div>
//                   )}

//                   {error && (
//                     <div className={styles.error}>
//                       <div className={styles.errorIcon}>⚠</div>
//                       <div>Video failed to load</div>
//                       <div className={styles.errorUrl}>URL: {videoUrl}</div>
//                       <div className={styles.errorActions}>
//                         <button onClick={handlePlayVideo}>Retry</button>
//                         <button onClick={closeVideo}>Back</button>
//                       </div>
//                     </div>
//                   )}

//                   <video
//                     ref={videoRef}
//                     className={styles.video}
//                     onLoadedData={handleVideoLoad}
//                     onLoadedMetadata={handleVideoLoad}
//                     onCanPlay={handleVideoLoad}
//                     onError={handleVideoError}
//                     onPlay={handleVideoPlay}
//                     onPause={handleVideoPause}
//                     onTimeUpdate={handleTimeUpdate}
//                     onClick={togglePlayPause}
//                     preload="metadata"
//                     controls={false}
//                   >
//                     <source src={videoUrl} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>

//                   {/* Close Button - Always visible */}
//                   <button className={styles.closeVideoButton} onClick={closeVideo}>
//                     ×
//                   </button>

//                   {/* Video Controls */}
//                   <div className={`${styles.controls} ${showControls ? styles.controlsVisible : styles.controlsHidden}`}>
//                     <div className={styles.progressBar} onClick={handleSeek}>
//                       <div 
//                         className={styles.progressFill}
//                         style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
//                       />
//                     </div>
                    
//                     <div className={styles.controlButtons}>
//                       <div className={styles.leftControls}>
//                         <button onClick={togglePlayPause}>
//                           {isPlaying ? '⏸' : '▶'}
//                         </button>
//                         <button onClick={toggleMute}>
//                           {isMuted ? '🔇' : '🔊'}
//                         </button>
//                         <input
//                           type="range"
//                           min="0"
//                           max="1"
//                           step="0.1"
//                           value={isMuted ? 0 : volume}
//                           onChange={handleVolumeChange}
//                           className={styles.volumeSlider}
//                         />
//                         <span className={styles.timeDisplay}>
//                           {formatTime(currentTime)} / {formatTime(duration)}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Details Section */}
//           <div className={styles.details}>
//             <div className={styles.section}>
//               <h3>Technologies</h3>
//               <div className={styles.technologies}>
//                 {project.technologies?.map((tech, index) => (
//                   <span key={index} className={styles.techBadge}>
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className={styles.info}>
//               <div className={styles.infoItem}>
//                 <span className={styles.label}>Category</span>
//                 <span className={styles.value}>{project.category}</span>
//               </div>
//               <div className={styles.infoItem}>
//                 <span className={styles.label}>Completed</span>
//                 <span className={styles.value}>{formatDate(project.completionDate)}</span>
//               </div>
//             </div>

//             <div className={styles.section}>
//               <h3>Project Details</h3>
//               <div className={styles.description}>
//                 <Markdown>{project.detailedDescription}</Markdown>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectVideoDialog;

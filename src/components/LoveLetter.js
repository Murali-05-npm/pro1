import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './I-Wanna-Be-Yours.mp3';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
      My Chubby-Cheeks Thingarbuchi 😛💞,<br /><br />

First of all — stop being this adorable, I’m running out of ways to act normal. 😵‍💫<br />
Your long hair deserves a national award — it’s like my personal curtain to peek from and smile like an idiot. 🫣<br /><br />

Your earrings? Yeah, those cute dangly assassins — they distracted me so much I forgot what I was saying mid-convo. 😳<br />
And your eyes? I swear they’ve subscribed to “Make Him Blush Daily” newsletter. 😍<br /><br />


Honestly, if Studio Ghibli made a movie about us, it’d be called:<br />
  ***"The Girl Who Stole My Fries and Also My Heart."*** 🍟❤️<br /><br />

  So here's my plan: I annoy you forever, you keep calling me “stupid,”<br />
  and we live happily ever after — with snacks. 🧃🍫<br /><br />

  Say yes, or I’m telling your mom I love you. 😂<br /><br />

  Forever your cartoon villain-turned-lover,<br />
  Solivagant 🤓💘<br />
  GUTS 🎈

      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;

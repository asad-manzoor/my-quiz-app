import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const CelebrationComponent = (props) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const isWinner = props.isWinner;

  useEffect(() => {
    if (isWinner) {
      setShowConfetti(true);
    }
  }, [isWinner]);

  return (
    <>
      {showConfetti && <Confetti />}
    </>
  );
};

export default CelebrationComponent;
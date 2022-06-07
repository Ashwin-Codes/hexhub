import React, { useState } from 'react';

// Icons
import { AiOutlineHeart as Heart } from 'react-icons/ai';
import { BsFillHeartFill as FullHeart } from 'react-icons/bs';
import { VscCloudDownload as Copy } from 'react-icons/vsc';

// Components
import { toast } from 'react-toastify';

// Helpers
import likeHandler from './likeHandler';

export default function ShortColorBox({ clr }) {
  const [liked, setLiked] = useState();

  return (
    <div className="quad-colors-clr2" style={{ backgroundColor: clr }}>
      <div className="quad-colors-overlay-short">
        <Copy
          className="quad-colors-icons quad-colors-overlay-copy"
          data-clipboard-text={clr}
          onClick={() => {
            toast('Hex Copied !');
          }}
        />
        {liked && (
          <FullHeart
            className="quad-colors-icons quad-colors-overlay-heart"
            onClick={() => {
              setLiked(!liked);
              likeHandler(clr, liked);
              toast('Saved Color');
            }}
          />
        )}
        {!liked && (
          <Heart
            className="quad-colors-icons quad-colors-overlay-heart"
            onClick={() => {
              setLiked(!liked);
              likeHandler(clr, liked);
              toast('Saved Color');
            }}
          />
        )}
      </div>
    </div>
  );
}

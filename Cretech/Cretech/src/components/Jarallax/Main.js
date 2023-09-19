import React, { useRef, useEffect } from 'react';

import { jarallax, jarallaxVideo } from 'jarallax';
import 'jarallax/dist/jarallax.css';
import BGImg from '../../assets/images/background/cta-two-bg-1-1.jpg'

// Optional video extension
jarallaxVideo();

export default function Jarallax({ className = '', children, ...props }) {
  const $el = useRef();

  // Init Jarallax.
  useEffect(() => {
    if ($el.current) {
      jarallax($el.current, props.options);
    }

    // Destroy Jarallax.
    // return function destroy() {
    //   if ($el.current) {
    //     jarallax($el.current, 'destroy');
    //   }
    // };
  }, [props]);

  // Update options.
  useEffect(() => {
    if ($el.current) {
      jarallax($el.current, 'destroy');
      jarallax($el.current, props.options);
    }
  }, [props]);

  return (
    <div ref={$el} className={`jarallax ${className}`}>
      <img className="jarallax-img" src={ props.options.src } />
    </div>
  );
}
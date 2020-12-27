import React, { useState, useEffect } from "react";

import Musk from "../../../assets/images/Musk.jpg";
import Gilfoyle from "../../../assets/images/Gilfoyle.png";
import Technology from "../../../assets/images/technology.jpeg";

const Collection = () => {
  const [inspiration, setInspiration] = useState([
    {
      name: "Elon Musk",
      class: "elon",
      information:
        "Not your average human being. Zip2, PayPal, Tesla, SpaceX: just a few of the forward-thinking companies he's been behind. He taught himself how to code in three days; earned degrees in both physics and economics; borrowed books from friends and taught himself how to build rockets.",
      image: Musk,
    },
    {
      name: "Bertram Gilfoyle",
      class: "gilfoyle",
      information:
        "Although just a fictional character from the series Silicon Valley, there is a lot to learn from this character, The way he keeps calm in every situation and manage every situation in a peaceful manner is a skill to be mastered, He inspires me.",
      image: Gilfoyle,
    },
    {
      name: "Technology",
      class: "technology",
      information:
        "Technology is a never ending thing, it inspires me to push myself everyday and learn stuff. Around the world, revolutionary technological ideas are helping individuals live life to the fullest, engage with their communities and, most importantly, help others.",
      image: Technology,
    },
  ]);
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container__inspiration">
      {inspiration.map((leaders, i) => (
        <div key={i} className="container__inspiration_box">
          <div className="container__inspiration_box_1">
            <div className="container__inspiration_box_1_name">
              {leaders.name}
            </div>
            <div className="container__inspiration_box_1_info">
              {leaders.information}
            </div>
          </div>
          <div className="container__inspiration_box_2">
            <img
              style={{
                transition: "all .5s",
                transform:
                  window.innerWidth >= 768
                    ? `translateX(${
                        offsetY * 0.15 * (inspiration.length - i + 1.5)
                      }px)`
                    : "translateX(0)",
              }}
              alt={leaders.name}
              className="container__inspiration_box_2_image"
              src={leaders.image}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collection;

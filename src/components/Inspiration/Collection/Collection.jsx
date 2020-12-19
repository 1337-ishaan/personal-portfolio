import React, { useState, useEffect } from "react";

const Collection = () => {
  const [inspiration, setInspiration] = useState([
    {
      name: "Elon Musk",
      class: "elon",
      information:
        "Not your average human being. Zip2, PayPal, Tesla, SpaceX: just a few of the forward-thinking companies he's been behind. He taught himself how to code in three days; earned degrees in both physics and economics; borrowed books from friends and taught himself how to build rockets.",
      image:
        "https://c4.wallpaperflare.com/wallpaper/299/836/55/artwork-astronaut-elon-musk-spacex-wallpaper-thumb.jpg",
    },
    {
      name: "Bertram Gilfoyle",
      class: "gilfoyle",
      information:
        "Although just a fictional character from the series Silicon Valley, there is a lot to learn from this character, The way he keeps calm in every situation and manage every situation in a peaceful manner is a skill to be mastered, He inspires me.",
      image:
        "https://external-preview.redd.it/BqKY5yBrQx_tMHQCxN8IaVe91-XrEsKi7PYvoksGayI.png?auto=webp&s=404b710de406c2bdf0d289cf57dcc3f2f1d7b337",
    },
    {
      name: "Technology",
      class: "technology",
      information:
        "Technology is a never ending thing, it inspires me to push myself everyday and learn stuff. Around the world, revolutionary technological ideas are helping individuals live life to the fullest, engage with their communities and, most importantly, help others.",
      image:
        "data:image/jpeg;base64,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",
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
                transform: window.innerWidth >= 768 ? `translateX(${
                  offsetY * 0.15 * (inspiration.length - i + 1.5)
                }px)` : 'translateX(0)'

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

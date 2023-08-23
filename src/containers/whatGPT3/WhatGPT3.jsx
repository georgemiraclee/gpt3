import { Feature } from "../../components";

import "./whatGPT3.css";

const featuresContent = [
  {
    title: "Apa itu GPT-3",
    text: "GPT-3 adalah platform pembelajaran mesin (machine learning) yang memungkinkan pengembang untuk melatih dan menerapkan model AI"
  },
  {
    title: "Chatbots",
    text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought."
  },
  {
    title: "Knowledgebase",
    text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
  },
  {
    title: "Education",
    text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
  },
];

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title={featuresContent[0].title} text={featuresContent[0].text} />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
        Kemungkinannya berada di luar imajinasi Anda
        </h1>
        <p>Lihat Selengkapnya</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title={featuresContent[1].title} text={featuresContent[1].text} />
        <Feature title={featuresContent[2].title} text={featuresContent[2].text} />
        <Feature title={featuresContent[3].title} text={featuresContent[3].text} />
      </div>
    </div>
  );
};

export default WhatGPT3;

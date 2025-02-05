import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px=6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className=" text-3xl font-extrabold text-gray-900 mb-6">
          Kaushal Nepal
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          I'm Kaushal Nepal, a passionate web developer dedicated to sharing
          knowledge and insights about web development. Here, you'll find
          tutorials, tips, and guides on HTML, CSS, JavaScript, React, Django,
          and more to help you enhance your coding skills. Whether you're a
          beginner looking to start your journey or an experienced developer
          aiming to refine your skills, this channel is the perfect place to
          learn and grow.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          {" "}
          I share full-stack project walkthroughs, debugging solutions, best
          practices, and tech insights to make web development easier and more
          accessible. Subscribe now and join me on this exciting journey of
          coding, learning, and building amazing web applications!
        </p>
      </div>
    </section>
  );
};

export default About;

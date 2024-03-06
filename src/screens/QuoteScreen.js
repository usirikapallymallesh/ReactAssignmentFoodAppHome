import React from "react";
import Quote from "../components/QuoteComp";
import Header from "../components/Header";
import Footer from "../components/Footer";

const QuoteComp = () => {
  const QuoteData = [
    {
      Quote:
        "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      author: "Adam Scott",
    },
    {
      Quote:
        "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
      author: "Adelle Davis",
    },

    {
      Quote:
        "We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
      author: "Adelle Davis",
    },

    {
      Quote:
        "Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.",
      author: "Albert Einstein",
    },

    {
      Quote:
        "Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth.",
      author: "Alice May Brock",
    },

    {
      Quote: `Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, "Your fatness is an affront to me, so we have the right to treat you as offensively as you appear." Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up.`,
      author: "Anthelme Brillat-Savarin",
    },

    {
      Quote: `Tomatoes and oregano make it Italian; wine and tarragon make it French. Sour cream makes it Russian; lemon and cinnamon make it Greek. Soy sauce makes it Chinese; garlic makes it good.`,

      author: "Calvin Trillin",
    },
    {
      Quote: `The most remarkable thing about my mother is that for thirty years she served the family nothing but leftovers. The original meal has never been found.`,

      author: "Epictetus",
    },
    {
      Quote: `The people who can most successfully lose weight and maintain a healthy life style are foodies. When it comes to healthy eating, people who know how to cook and make ingredients taste good have a distinct advantage over those who can't.
        author: "G. K. Chesterton`,
      author: "G. K. Chesterton",
    },
    {
      Quote: `He who comes first, eats first. [Familiar as: First come first served.]`,
      author: "Geoffrey Neighor",
    },
    {
      Quote: `Bear in mind that you should conduct yourself in life as at a feast.`,
      author: "George Bernard Shaw",
    },
    {
      Quote: `TPreach not to others what they should eat, but eat as becomes you, and be silent..`,
      author: "George Dennison Prentice",
    },
    {
      Quote: `I have never cared much for fish - it floats in the belly as much as in the pond.`,
      author: "Henry Bromel",
    },
    {
      Quote: `I have never cared much for fish - it floats in the belly as much as in the pond.`,
      author: "Henry Bromel",
    },
    {
      Quote: `I have never cared much for fish - it floats in the belly as much as in the pond.`,
      author: "Henry Bromel",
    },
    {
      Quote: `I have never cared much for fish - it floats in the belly as much as in the pond.`,
      author: "Henry Bromel",
    },
    {
      Quote: `I have never cared much for fish - it floats in the belly as much as in the pond.`,
      author: "Henry Bromel",
    },
    {
      Quote: `I have never cared much for fish - it floats in the belly as much as in the pond.`,
      author: "Henry Bromel",
    },
    {
      Quote: `If the divine creator has taken pains to give us delicious and exquisite things to eat, the least we can do is prepare them well and serve them with ceremony.`,
      author: "J. R. R. Tolkien",
    },
    {
      Quote: `Bear in mind that you should conduct yourself in life as at a feast.`,
      author: "George Bernard Shaw",
    },
  ];

  return (
    <>
      <section
        className="header"
        style={{ position: "sticky", top: "0", zIndex: "100" }}
      >
        <Header />
      </section>

      <section
        style={{
          padding: "2rem 6rem",
          gap: "4rem",
          paddingBottom: "2rem",
        }}
      >
        {QuoteData.map((item, index) => {
          return <Quote key={index} desc={item.Quote} author={item.author} />;
        })}
      </section>
      <Footer />
    </>
  );
};

export default QuoteComp;

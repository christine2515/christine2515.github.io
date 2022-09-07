import cereal from "../assets/projects/cereal.png";
import aot from "../assets/projects/aot.png";
import generation from "../assets/projects/generation.png";
import flan from "../assets/projects/flan.png";
import spoilers from "../assets/projects/spoilers.png";
import acnh from "../assets/projects/acnh.png";
import bookshelf from "../assets/projects/bookshelf.png";
import stocks from "../assets/projects/stocks.png";
import movies from "../assets/projects/movies.png";
import campsite from "../assets/projects/campsite.png";
import blockchain from "../assets/projects/blockchain.png";
import twitter from "../assets/projects/twitter.png";

export const tags = {
  WEB: "web",
  MOBILE: "mobile",
  UIUX: "ui/ux",
  WRITING: "writing",
}

export const tools = {
  REACT: "react",
  AIRTABLE: "airtable",
  REDUX: "redux",
  HTMLCSS: "html/css",
  JS: "javascript",
  MONGODB: "mongodb",
  EXPRESS: "express.js",
  NODE: "node.js",
  PYTHON: "python",
  PANDAS: "pandas",
}

export const getProject = (name) => {
  return projects.find(p => p.name === name);
}

const projects = [
  {
    name: "Campsite Checker",
    description: "snag an awesome campsite!",
    thumb: campsite,
    static: campsite,
    date: "aug 2022",
    tags: [tags.WEB, tags.UIUX],
    tools: [tools.REACT, tools.MONGODB, tools.EXPRESS, tools.NODE],
    link: "https://github.com/christine2515/campsite-availability-checker",
  },
  {
    name: "Bookshelf",
    description: "aesthetic chrome extension that keeps track of your reading",
    thumb: bookshelf,
    static: bookshelf,
    date: "aug 2022",
    tags: [tags.WEB, tags.UIUX],
    tools: [tools.HTMLCSS, tools.JS],
    link: "https://github.com/christine2515/bookshelf-chrome-extension",
  },
  {
    name: "Blockchain Betting Game",
    description: "bet eth on a fun daily yes/no!",
    thumb: blockchain,
    static: blockchain,
    date: "may 2022",
    tags: [tags.WEB],
    tools: [tools.REACT],
    link: "https://github.com/christine2515/blockchain-project",
  },
  {
    name: "Valuation Calculator",
    description: "scrapes company financials and calculates a company's intrinsic valuation",
    thumb: stocks,
    static: stocks,
    date: "may 2022",
    tags: [tags.WEB],
    tools: [tools.PYTHON, tools.PANDAS],
    link: "https://github.com/christine2515/valuationcalculator",
  },
  {
    name: "Flixster",
    description: "app to view all available movies",
    thumb: movies,
    static: movies,
    date: "may 2021",
    tags: [tags.MOBILE, tags.UIUX],
    tools: [tools.SWIFT],
    link: "https://github.com/christine2515/flixster",
  },
  {
    name: "fake Twitter",
    description: "app to view, compose, favorite, and retweet tweets",
    thumb: twitter,
    static: twitter,
    date: "april 2021",
    tags: [tags.MOBILE, tags.UIUX],
    tools: [tools.SWIFT],
    link: "https://github.com/christine2515/twitter_ios_starter",
  },
  {
    name: "An Open Letter to the Person That Thinks It’s Ok To Eat Cereal With Water",
    description: "Perhaps it’s that OP is protesting against the basic fabric of society itself that makes the combination so enticing.",
    thumb: cereal,
    static: cereal,
    date: "june 2021",
    tags: [tags.WRITING],
    tools: [],
    link: "https://dailynexus.com/2021-06-17/an-open-letter-to-the-person-that-thinks-its-ok-to-eat-cereal-with-water/",
  },
  {
    name: "Argument in the Office: Is “Attack on Titan” Worth the Hype?",
    description: "“Attack on Titan” Is a Must-Watch. No Buts.",
    thumb: aot,
    static: aot,
    date: "march 2021",
    tags: [tags.WRITING],
    tools: [],
    link: "https://dailynexus.com/2021-03-18/argument-in-the-office-is-attack-on-titan-worth-the-hype/",
  },
  {
    name: "Argument in the Office: Warning, This Article Contains Spoilers!",
    description: "Don’t spoil it!",
    thumb: spoilers,
    static: spoilers,
    date: "may 2021",
    tags: [tags.WRITING],
    tools: [],
    link: "https://dailynexus.com/2021-05-18/argument-in-the-office-warning-this-article-contains-spoilers/",
  },
  {
    name: "A Generation of Constant Crisis",
    description: "Maybe we deserve a break.",
    thumb: generation,
    static: generation,
    date: "december 2020",
    tags: [tags.WRITING],
    tools: [],
    link: "https://dailynexus.com/2020-12-20/a-generation-of-constant-crisis/",
  },
  {
    name: "Easy Creme Caramel Recipe",
    description: "Are you craving dessert but are helpless when it comes to baking? Well, this recipe is perfect for you.",
    thumb: flan,
    static: flan,
    date: "october 2020",
    tags: [tags.WRITING],
    tools: [],
    link: "https://dailynexus.com/2020-10-12/easy-creme-caramel-recipe/",
  },
  {
    name: "The Most Disappointing Game of 2020 is Animal Crossing: New Horizons",
    description: "Today, my island is covered in weeds, I can’t terraform and, worst of all, I’ve failed to live up to my Pinterest Animal Crossing expectations.",
    thumb: acnh,
    static: acnh,
    date: "april 2021",
    tags: [tags.WRITING],
    tools: [],
    link: "https://dailynexus.com/2021-04-28/the-most-disappointing-game-of-2020-is-animal-crossing-new-horizons/",
  },
]

export default projects;

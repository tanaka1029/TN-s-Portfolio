import "./portfolio.css";

import IMG1 from "../../assets/mimir.PNG";
import IMG2 from "../../assets/hodoi.png";
import IMG3 from "../../assets/centric.PNG";
import IMG4 from "../../assets/yield.png";
import IMG5 from "../../assets/Solsea.PNG";
import IMG6 from "../../assets/novation.PNG";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "MIMIR:Visualize Your Crypto Portfolio",
      img: IMG1,
      description:
        "Mimir serves as a full-stack solution where all your wallet addresses are effortlessly integrated and managed in one place.",
      technologies: "Blockchain | Solidity | NFT | React Js | Smart Contract | Typescript | Ethereum | Node.js | Web3.js",
      link: "https://mimirapp.xyz/",
    },
    {
      id: 2,
      title: "Yield Hunter Game(P2E)",
      img: IMG4,
      description:
        "P2E game on avalanche Mainnet.Built using solidity and web3.js Product Url is on the Fuji Testnet.",
      technologies: "Solidity | web3.js | React | ERC-20 | ERC-721",
      link: "https://ldzlq-miaaa-aaaad-qbf3q-cai.ic.fleek.co/",
    },
    {
      id: 3,
      title: "Smart contract developer",
      img: IMG2,
      description: "Develop smart contract part.Optimize performance, review code and bug fixing.Deploy the SC to testnet and mainnet.",
      technologies: "Smart Contract | NFT | Blockchain | Web3 | JavaScript | TypeScript",
      link: "https://www.hodooi.com/",
    },
    {
      id: 4,
      title: "Centric - Home of CNS &amp; CNR",
      img: IMG3,
      description:
        "Centric is a dual-token cryptocurrency underpinning a thriving economy of merchants and Web3 projects.",
      technologies: "React | Web3.js | JavaScript | Smart Contract ",
      link: "https://www.centric.com/",
    },
    {
      id: 5,
      title: "NFT Marketplace on Solana",
      img: IMG5,
      description:
        "SolSea is the biggest NFT platform on Solana, lowest trading fees, and real-time analytics from on-chain data.",
      technologies: "NFT | Solana | React | Web3 | Node.js | Express",
      link: "https://solsea.io/",
    },
    {
      id: 6,
      title: "Novation Launchpad & Exchange",
      img: IMG6,
      description:
        "The Novation DApp is a DeFi application designed to streamline asset management across multiple blockchain platforms.",
      technologies: "DApp | NFT | React | Smart Contract | Solidity | Defi",
      link: "https://novation-dapp.netlify.app/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

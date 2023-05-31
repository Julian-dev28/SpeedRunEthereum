export const challengeInfo = {
  "crowdfunding-dapp": {
    id: 0,
    branchName: "challenge-0-crowdfunding-dapp",
    label: "Soroban Crowdfunding Dapp Example",
    disabled: false,
    description:
      "This is a Next.js project, demoing how to build a dapp frontend backed by smart contracts on Stellar. It is a crowdfunding dapp, where users can create campaigns and donate to them.",
    previewImage: "/assets/challenges/screenshot.png",
    dependencies: [],
  },
};

const githubChallengesRepoBaseRawUrl = {
  js: "https://raw.githubusercontent.com/Julian-dev28/live-laugh-soroban-challenges",
  ts: "https://raw.githubusercontent.com/Julian-dev28/live-laugh-soroban-challenges",
};

export const getGithubChallengeReadmeUrl = (challengeId, version) =>
  `${githubChallengesRepoBaseRawUrl[version]}/${challengeInfo[challengeId].branchName}/README.md`;

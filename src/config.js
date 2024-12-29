// eslint-disable-next-line no-undef
const { REACT_APP_FOOTER_TITLE, REACT_APP_FOOTER_DESCRIPTION } =
  process.env;

const config = {
  baseUrl: 'https://winston.services/api/v1',
  footerTitle: REACT_APP_FOOTER_TITLE,
  footerDescription: REACT_APP_FOOTER_DESCRIPTION,
  //discordLink:'https://discord.com/api/oauth2/authorize?client_id=594415583638847488&scope=bot&permissions=8',
  discordLink: 'https://discord.gg/rickle-897546129108008960',
  twitterLink: 'https://x.com/Rickle_Token',
  youtubeLink: 'https://www.youtube.com/',
};
export default config;

// !STARTERCONF Change the siteUrl
module.exports = {
  siteUrl: 'https://letterpad.app/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};

const { env } = require('../config');

const institutions = {
  UOG: require('../fetchers/course.uog.fetcher'),
  UW: () => {},
  WLU: require('../fetchers/course.wlu.fetcher'),
};

module.exports = async (root, { code, institution, term }, context) => {
  try {
    const resolver = institutions[institution];
    const course = resolver && (await resolver(code, term, context));
    return course || undefined;
  } catch (e) {
    console.error(e);
    throw env === 'production'
      ? Error('Internal resolve error encountered')
      : e;
  }
};

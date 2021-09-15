const { featuredSection } = require("./featuredSection.js");

const sections = {
  components: {
    FeaturedSection: featuredSection,
  },

  props: {
    section: { type: Object, required: true },
  },

  // Dynamic components in a for loop
  // <component v-for="(section) in sections" :key="section.id" :is="section.__typename" v-bind="{ section } />"
  // throws this error:
  // [Vue warn]: resolveComponent can only be used in render() or setup().
  // ¯\_(ツ)_/¯

  template: `
    <component :is="section.__typename" v-bind="{ section }" />
  `,
};

exports.sections = sections;

const util = require("../util");

const { sections } = require("../components/sections.js");
const { tags } = require("../components/tags.js");
const { footer } = require("../components/footer.js");

const body = {
  components: {
    Sections: sections,
    Tags: tags,
    Footer: footer,
  },

  props: {
    sections: { type: Array, required: true },
  },

  computed: {
    articleTags() {
      return this.sections
        .filter((section) => section.__typename === "FeedSection")
        .flatMap((section) => section.items)
        .flatMap((item) => item.tags);
    },
    tags() {
      const tags = util.dedup(this.articleTags);
      return util.sortAscending(tags);
    },
    topics() {
      return this.sections
        .filter((section) => section.__typename === "FeedSection")
        .map((item) => ({
          id: item.id,
          title: item.title,
        }));
    },
  },

  template: `
    <mj-wrapper background-color="#292929" />
    <mj-wrapper background-color="#000">
      <Sections
        v-for="(section) in sections"
        :key="section.id"
        v-bind="{ section }"
      />
      <Tags v-bind="{ tags }" />
    </mj-wrapper>
    <Footer />
  `,
};

exports.body = body;

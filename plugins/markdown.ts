// @ts-nocheck
import marked from "marked";


const mdToJs = (str) => {
  const content = JSON.stringify(marked(str));
  return `export default ${content}`;
};

export function md() {
  return {
    name: 'md-plugin',
    transform(code, id) {
      if (id.endsWith(".md")) {
        return mdToJs(code)
      } else {
        return
      }
    },
  }
}

// const test = require("../node_modules/svelte-layout-editor/index.js");
import LayoutEditor  from "../node_modules/svelte-layout-editor/src/LayoutEditor.svelte";

// console.log(test.foobar());
//  const root = document.getElementById('root');

const app = new LayoutEditor({
	target: document.body,
	props: {
		name: 'WORLD'
	}
});

export default app;
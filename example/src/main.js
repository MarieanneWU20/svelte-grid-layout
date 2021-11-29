// const test = require("../node_modules/svelte-layout-editor/index.js");
import  {foobar}  from "../node_modules/svelte-layout-editor/index.js";

// console.log(test.foobar());
//  const root = document.getElementById('root');

//  root.innerHTML = test.foobar();
 import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: foobar()
	}
});

export default app;
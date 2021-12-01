# ✨ Svelte layout editor ✨
# README-template:
![npm](https://img.shields.io/npm/v/svelte-layout-editor?style=plastic) ![GitHub](https://img.shields.io/github/license/wiviwonderwoman/svelte-layout-editor?style=plastic) ![npm](https://img.shields.io/npm/dw/svelte-layout-editor?style=plastic) 
## Description (Why?)
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Installation
`npm install svelte-layout-editor`
### Import & Use component
```svelte
<script>
  import LayoutEditor from "svelte-layout-editor";
</script>
``` 

```javascript
import LayoutEditor from "svelte-layout-editor";

const app = new LayoutEditor({
	target: document.body,
	props: {
          rows: 3,
          columns: 3,
          example: true
      }
});

export default app;
```

## Props
  Prop  | Type  | Default | Description
-----|------|---------|-----------
rows | number | 2 | Number of rows.
columns | number | 2 | Number of columns.
example | boolean | false | 	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Methods
### `doSomething()`
Does something. `(example) => Promise<void>`
Argument | Type | Default | Description
---------|------|---------|------------
example | boolean | false | 	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```svelte
<script>
  //insert example code here
</script>
```

### `doSomethingElse()`
Does something else. `(examples) => Promise<void>`
Argument | Type | Default | Description
---------|------|---------|------------
examples | number | 5 | 	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```svelte
<script>
  //insert example code here
</script>
```

## Demo
[Link to example](./example)






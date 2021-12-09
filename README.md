# ✨ Svelte layout editor ✨

![npm](https://img.shields.io/npm/v/svelte-layout-editor?style=plastic) ![GitHub](https://img.shields.io/github/license/wiviwonderwoman/svelte-layout-editor?style=plastic) ![npm](https://img.shields.io/npm/dw/svelte-layout-editor?style=plastic) 
## Description 
**Svelte layout editor** is a tool that gives the user a graphical interface (to work with) to create a page template for Svelte applications. 

A page template specifies the layout of the page with a set of rules that determine how components should be laid out on a page. 

### Why?
All the nitty gritty details such as resposive sizing and styling is already been taken care of by **Svelte layout editor** and will be ✨ automagically ✨ generated with just a few clicks.

Therefore, you can focus entirely on the content part of your app. 
Once you have a layout that you prefer it's easy to reuse the same it on multiple pages.

## Installation
```bash
npm install svelte-layout-editor
```
## Dependencies
Checkout [examples README.md](.\example\README.md)
### Import & Use component
In main.js / index.js:
```javascript
import LayoutEditor from "svelte-layout-editor";

const layoutEditor = new LayoutEditor({
  target: document.body,
  props: {
    rows: number,
    columns: number,
    gridItems: [
      { 
        id: string,
        gridArea {
          startRow: number,
          startColumn: number,
          endRow: number,
          endColumn: number
        }
      }
    ]
  }
});

export default layoutEditor;
```
In yor Svelte component:
```svelte 
<script> 
  import LayoutEditor from "svelte-layout-editor";
</script>

  // For default Grid
  <LayoutEditor />
  
  // For custom Grid
  <LayoutEditor gridData={ [your object] } />

<style>

</style> 
``` 
## Props
  Prop  | Type  | Default|Example | Description
-----|------|---------|------|-----------
gridData | object | \* | \* | All the data needed to render the grid. 
gridData.rows | number | 3 | |Number of rows.
gridData.columns | number | 3 | |Number of columns.
gridData.gridItems | array[gridItem] |  \* [9] | | The start grid contains 3 * 3 gridItems if nothing else is specified.
*gridItem*.id | string | \*| "r1c1" | The id specifies gridItems startRow and startColumn: "r`{startRow}`c`{startRow}`"
*gridItem*.gridArea | object | \*| \* | `{ startRow: number, startColumn: number, endRow: number, endColumn: number }`

### \* Default gridData object:
```javascript
gridData = {
  rows: 3,
  columns: 3,
  gridItems:[
    {
      id: "r1c1",
      gridArea:{
        startRow: 1,
        startColumn: 1,
        endRow: 2,
        endColumn: 2
      }
    },{
      id: "r1c2",
      gridArea:{
        startRow: 1,
        startColumn: 2,
        endRow: 2,
        endColumn: 3
      }
    },{
      id: "r1c3",
      gridArea:{
        startRow: 1,
        startColumn: 3,
        endRow: 2,
        endColumn: 4
      }
    },{
      id: "r2c1",
      gridArea:{
        startRow: 2,
        startColumn: 1,
        endRow: 3,
        endColumn: 2
      }
    },{
      id: "r2c2",
      gridArea:{
        startRow: 2,
        startColumn: 2,
        endRow: 3,
        endColumn: 3
      }
    },{
      id: "r2c3",
      gridArea:{
        startRow: 2,
        startColumn: 3,
        endRow: 3,
        endColumn: 4
      }
    },{
      id: "r3c1",
      gridArea:{
        startRow: 3,
        startColumn: 1,
        endRow: 4,
        endColumn: 2
      }
    },{
      id: "r3c2",
      gridArea:{
        startRow: 3,
        startColumn: 2,
        endRow: 4,
        endColumn: 3
      }
    },{
      id: "r3c3",
      gridArea:{
        startRow: 3,
        startColumn: 3,
        endRow: 4,
        endColumn: 4
      }
    }
  ]
};
```
## Demo
[Link to example](./example)
__________________________________________________________________________________
__________________________________________________________________________________

# :point_down: REMOVE ?? :point_down:
> ## Methods
>### `doSomething()`
> Argument | Type | Default | Description
> ---------|------|---------|------------
> example | boolean | false | 	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
> ```svelte
> <script>
>  //insert example code here
> </script>
> ```
> ### `doSomethingElse()`
> Does something else. `(examples) => Promise<void>`
> Argument | Type | Default | Description
> ---------|------|---------|------------
> examples | number | 5 | 	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
> ```svelte
> <script>
>   //insert example code here
> </script>
> ```
>






# ✨ Svelte Grid Layout ✨

![npm](https://img.shields.io/npm/v/svelte-grid-layout?style=plastic) ![GitHub](https://img.shields.io/github/license/wiviwonderwoman/svelte-grid-layout?style=plastic) ![npm](https://img.shields.io/npm/dw/svelte-grid-layout?style=plastic) 
## Description 
**Svelte Grid Layout** is a tool that make it easier to create a page template for applications built with Svelte. 

The page templates specify the layout of the page through a set of predetermined rules of how the components of the page should be laid out.  

### Why?
All the nitty gritty details, such as responsive sizing and styling, has already been taken care of by **Svelte Grid Layout**, and will be ✨ automagically ✨ generated as long as you provide data for the starting point.

Therefore, you can focus entirely on the content part of your app, without having to worry about the layout. Once you have the layout that you want, it's easy to reuse and apply the same one to multiple pages. 
___________________________________________________________________
## Installation
```bash
npm install svelte-grid-layout
```
___________________________________________________________________
## Dependencies
### [svelte ^3.44.2](https://www.npmjs.com/package/svelte)
___________________________________________________________________

## Import & Use component

```svelte 
<script>
  import { Grid, Row, Column } from "svelte-grid-layout";
</script>

<Grid>
  <Row>
    <Column height="1" width="4">
      {your content}
    </Column>
  </Row>
</Grid>

``` 
___________________________________________________________________
## Props
### Column
  Prop  | Type  | Description
-----|------|---------|
width | number |  Cell (column) width. 
height | number | Cell (row) height
___________________________________________________________________
## Demo
[Link to example](https://github.com/MarieanneWU20/svelte-grid-layout-example)
___________________________________________________________________
## Future development
The goal for **Svelte Grid Layout** is a tool that gives the user a graphical interface to create a page template for applications built with Svelte. 
This will be possible through arrow-buttons that lets the user add rows or columns and resize individual columns.
Other possible upcomming features are: drag and drop, change the spacing between columns and animation for smooth transitions.






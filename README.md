# ✨ Svelte layout editor ✨

![npm](https://img.shields.io/npm/v/svelte-layout-editor?style=plastic) ![GitHub](https://img.shields.io/github/license/wiviwonderwoman/svelte-layout-editor?style=plastic) ![npm](https://img.shields.io/npm/dw/svelte-layout-editor?style=plastic) 
## Description 
**Svelte Layout Editor** is a tool that make it easier to create a page template for applications built with Svelte. 

The page templates specify the layout of the page through a set of predetermined rules of how the components of the page should be laid out.  

### Why?
All the nitty gritty details, such as responsive sizing and styling, has already been taken care of by **Svelte Layout Editor**, and will be ✨ automagically ✨ generated as long as you provide data for the starting point.

Therefore, you can focus entirely on the content part of your app, without having to worry about the layout. Once you have the layout that you want, it's easy to reuse and apply the same one to multiple pages. 

## Installation
```bash
npm install svelte-layout-editor
```
## Dependencies
Checkout [examples README.md](.\example\README.md)
### Import & Use component

```svelte 
<script>
  import { Grid, Row, Column } from "svelte-layout-editor";
</script>

<Grid>
  <Row>
    <Column height="1" width="4">
      {your content}
    </Column>
  </Row>
</Grid>

``` 
## Column Props
  Prop  | Type  | Description
-----|------|---------|
width | number |  Cell (column) width. 
height | number | Cell (row) height

## Demo
[Link to example](./example)

## Future features
The goal for **Svelte Layout Editor** is a tool that gives the user a graphical interface to create a page template for applications built with Svelte. 
This will be possible through arrow-buttons that lets the user add rows or columns and resize individual columns.






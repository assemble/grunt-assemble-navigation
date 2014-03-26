Add this exact markup where you want the navigation:

```html
<div id="navigation">
  <!-- navigation -->
</div>
```

The plugin uses page headings to construct the nav items, results in something like:

```html
<div id="navigation">
  <!-- navigation -->
  <ul class="nav sidenav">
    <li><a href="#collections">Collections</a>
      <ul class="nav">
        <li> <a href="#collections-after">{{after}}</a> </li>
        <li> <a href="#collections-any">{{any}}</a> </li>
        <li> <a href="#collections-before">{{before}}</a> </li>
      </ul>
    </li>
  </ul>
</div>
```
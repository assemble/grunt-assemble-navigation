Next, register the plugin with Assemble in your project's Gruntfile:

```js
assemble: {
  options: {
    plugins: ['{%= name %}', 'foo/*.js']
  }
}
```

Visit the [plugins docs](http://assemble.io/plugins/) for more info or for help getting started.

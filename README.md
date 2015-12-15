# jx-builder-graph

The jillix builder graph engine.

## Installation

```sh
$ npm i --save jx-builder-graph
```

## Documentation

### `Builder(graphData, container)`

#### Params
- **Object** `graphData`: An object containing the following fields:
 - `nodes` (Array): The array of nodes.
 - `edges` (Array): The array of edges.
- **DOMElement** `container`: The graph container.

### `render()`
Renders the graph.

### `jxBuilder(graphData, container)`

#### Params
- **Object** `graphData`: An object containing the following fields:
 - `nodes` (Array): The array of nodes.
 - `edges` (Array): The array of edges.
- **DOMElement** `container`: The graph container.

#### Return
- **Builder** The `Builder` instance.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [jillix][website]

[license]: http://showalicense.com/?fullname=jillix%20%3Ccontact%40jillix.com%3E%20(http%3A%2F%2Fjillix.com)&year=2015#license-mit
[website]: http://jillix.com
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
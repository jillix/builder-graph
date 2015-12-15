// Sigma stuff
sigma = require("sigma");
conrad = require("sigma/src/conrad.js");
sigma.plugins = {};
require("sigma/src/renderers/sigma.renderers.canvas.js");
require("sigma/plugins/sigma.plugins.dragNodes/sigma.plugins.dragNodes.js");
require("sigma/plugins/sigma.renderers.parallelEdges/sigma.canvas.edgehovers.curvedArrow.js");
require("sigma/plugins/sigma.renderers.parallelEdges/sigma.canvas.edgehovers.curve.js");
require("sigma/plugins/sigma.renderers.parallelEdges/sigma.canvas.edges.curvedArrow.js");
require("sigma/plugins/sigma.renderers.parallelEdges/sigma.canvas.edges.curve.js");
require("sigma/plugins/sigma.renderers.parallelEdges/sigma.canvas.edges.labels.curve.js");
require("sigma/plugins/sigma.renderers.parallelEdges/utils.js");
sigma.renderers.def = sigma.renderers.canvas

class Builder {
    /**
     * Builder
     *
     * @name Builder
     * @function
     * @param {Object} graphData An object containing the following fields:
     *
     *  - `nodes` (Array): The array of nodes.
     *  - `edges` (Array): The array of edges.
     *
     * @param {DOMElement} container The graph container.
     */
    constructor (data, container) {
        this.container = container;
        this.data = data;
    }

    /**
     * render
     * Renders the graph.
     *
     * @name render
     * @function
     */
    render () {
        this.container.innerHTML = "";

        // Create the sigma instance
        this.sigma = new sigma({
            graph: this.data,
            container: this.container
        });

        // Handle node dragging
        sigma.plugins.dragNodes(s, s.renderers[0]);
    }
}

/**
 * jxBuilder
 *
 * @name jxBuilder
 * @function
 * @param {Object} graphData An object containing the following fields:
 *
 *  - `nodes` (Array): The array of nodes.
 *  - `edges` (Array): The array of edges.
 *
 * @param {DOMElement} container The graph container.
 * @return {Builder} The `Builder` instance.
 */
function jxBuilder(graphData, container) {
    return new Builder(graphData, container);
}

module.exports = jxBuilder;

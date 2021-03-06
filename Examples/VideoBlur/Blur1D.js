const GL = require("gl-react");
const React = require("react");
const glslify = require("glslify");

const {
  PropTypes
} = React;

const shaders = GL.Shaders.create({
  blur1D: {
    frag: glslify(`${__dirname}/blur1D.frag`)
  }
});

module.exports = GL.createComponent(
  ({ width, height, direction, children: t, ...rest }) =>
  <GL.Node
    {...rest}
    shader={shaders.blur1D}
    width={width}
    height={height}
    uniforms={{
      direction,
      resolution: [ width, height ],
      t
    }}
  />,
{
  displayName: "Blur1D",
  propTypes: {
    width: PropTypes.number,
    height: PropTypes.number,
    direction: PropTypes.array.isRequired,
    children: PropTypes.any.isRequired
  }
});

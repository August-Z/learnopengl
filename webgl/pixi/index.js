// Initialize WebGL Renderer
const VIEWPORT_WIDTH = 640;
const VIEWPORT_HEIGHT = 360;
const $canvas = document.getElementById('app')
const app = new PIXI.Application({
  view: $canvas,
  width: VIEWPORT_WIDTH,
  height: VIEWPORT_HEIGHT,
  backgroundColor: 0x333333,
  antialias: true
});

// Cover Sprite
const coverImageUrl = '../res/cover.jpeg';
const $cover = new PIXI.Sprite();
$cover.width = VIEWPORT_WIDTH;
$cover.height = VIEWPORT_HEIGHT;

// Blur filter Demo
const vertexSource = `

`
const fragmentSource = `

`
const blurFilter = new PIXI.Filter(
  vertexSource,
  fragmentSource,
  null
)
$cover.filters = [blurFilter]

app.stage.addChild($cover);

// Fetch Texture
PIXI.Texture.fromURL(coverImageUrl).then((tex) => {
  $cover.texture = tex
})

function render() {
  app.render()
  requestAnimationFrame(render);
}

requestAnimationFrame(render);
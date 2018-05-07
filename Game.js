

class Game {
  /**
   * @param {Element} canvas the canvas element for the game to draw on
   */
  constructor(canvas) {
    this.canvas = canvas
    this.canvas.width = 480
    this.canvas.height = 270
    this.context = this.canvas.getContext("2d")
  }

  start() {

  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

}

export default Game
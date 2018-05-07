
import GameComponent from "./GameComponent"

class ComponentOne extends GameComponent{
  /**
   * FROM AN OBJECT
   * @param { Number } width the width of the game component
   * @param { Number } height the Height of the component
   * @param { String } color the css color of the component
   * @param { y } y the y location of the component
   * @param { x } x the x location of the components
   */
  constructor({width, height, color, x, y, context}) {
    super({ x, y, context })
    this.width = width
    this.height = height
    this.color = color
  }

  draw() {
    this.context.fillStyle = this.color
    this.context.fillRect(
      this.x, this.y, this.width, this.height
    )
  }
}

export default ComponentOne
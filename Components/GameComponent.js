
class GameComponent {
  constructor({x, y, context}) {
    this.x = x
    this.y = y
    this.context = context
  }

  /**
   * calls parent draw method that is shown in class
   * @param { CanvasContext } context 
   */
  update(context) {
    this.context = context
    this.draw()
  }
}

export default GameComponent
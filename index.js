import Game from "./Game"
import Component from "./Components/ComponentOne"

const canvas = document.createElement("canvas")
const game = new Game(canvas)

// Mount the game
document.body.insertBefore(game.canvas, document.body.childNodes[0])
game.canvas.style.border = "3px solid #333"

const components = []

// Mounting Component
const component = new Component({
  x: 10, y: 120, width: 30, height: 30, color: "red",
  context: game.context
})
component.draw()
components.push(component)

const blueRectangle = new Component({
  x: 10, y: 120, width: 30, height: 30, color: "blue",
  context: game.context
})
blueRectangle.draw()
components.push(blueRectangle)

setInterval(updateGameArea, 20)

function updateGameArea() {
  game.clear()
  component.x += 1
  blueRectangle.y += 1

  components.forEach(component => component.update())
}
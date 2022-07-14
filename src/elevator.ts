// Import required dependencies
import * as utils from "@dcl/ecs-scene-utils";

// Initiate first and third floor vector
let firstFloor = new Vector3(7.55, 0, 8.55)
let secondFloor = new Vector3(7.55, 3, 8.55)
let thirdFloor = new Vector3(7.55, 6, 8.55)
let fourthFloor = new Vector3(7.55, 8.37, 8.55)
let UP = true
let start:Vector3
let end:Vector3

// Create new class Elevator from Entity
export class Elevator extends Entity {
    constructor(
        model: GLTFShape,
        transform: Transform,
        triggerShape: utils.TriggerBoxShape
    ) {
        super()
        engine.addEntity(this)
        this.addComponent(model)
        this.addComponent(transform)

        // Create trigger for entity
        this.addComponent(
            new utils.TriggerComponent(triggerShape, {
                onCameraEnter: () => {
                    this.getComponent(utils.ToggleComponent).toggle()
                },
                onCameraExit: () => {
                    this.getComponent(utils.ToggleComponent).toggle()
                },
            })
        )

        // Create toggle for entity
        this.addComponent(
            new utils.ToggleComponent(utils.ToggleState.Off, (value) => {
                    if (value == utils.ToggleState.On) {
                        start = this.getComponent(Transform).position
                        if (start.equals(firstFloor)) {
                            end = secondFloor
                            UP = true
                        } else if (start.equals(secondFloor)) {
                            end = UP ? thirdFloor : firstFloor
                        } else if (start.equals(thirdFloor)) {
                            end = UP ? fourthFloor : secondFloor
                        } else if (start.equals(fourthFloor)) {
                            end = thirdFloor
                            UP = false
                        }
                        this.addComponentOrReplace(
                            new utils.MoveTransformComponent(start, end, 2)
                        )}
                }
            )
        )
    }
}
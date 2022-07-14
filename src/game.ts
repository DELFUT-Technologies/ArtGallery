// Import necessary dependencies
import * as utils from "@dcl/ecs-scene-utils"
import {Elevator} from 'elevator'
//import NftPictureFrameScript from "models/nftPictureFrame/item"

// Instantiate main structure
const artGallery = new Entity()
artGallery.addComponent(new GLTFShape('models/2022_02_05_haji_2228.glb'))
artGallery.addComponent(new Transform({
    position: new Vector3(16, 0, 0),
    rotation: new Quaternion(0, 1, 0, 1)
}))
// Add structure to scene
engine.addEntity(artGallery)


// Instantiate elevator
const elevator = new Elevator(
    new GLTFShape('models/ev_2022_2_01_haji1_2243.glb'),
    new Transform({
        position: new Vector3(7.55, 0, 8.55)
    }),
    new utils.TriggerBoxShape(
        new Vector3(1, 1, 1),
        new Vector3(0, 2, 0)
    )
)
// Rotate elevator to fit coordinates
const elevatorTransform = elevator.getComponent(Transform)
elevatorTransform.rotation.setEuler(0, 180, 0)
// Add elevator to scene
engine.addEntity(elevator)


// Add music to scene
const clip = new AudioClip('sounds/Piano_Sonata_no_14_Moonlight_Op_27_no_2_II_Allegretto.mp3')
const music = new AudioSource(clip)
artGallery.addComponent(music)
music.playing = true
music.loop = true


const radio = new Entity('radio')
engine.addEntity(radio)
radio.addComponent(new GLTFShape('models/radio.glb'))
const transform31 = new Transform({
    position: new Vector3(5.353029251098633, 0.5, 6.7706828117370605),
    rotation: new Quaternion(-4.770667435855143e-16, 0.7043431997299194, -8.396424533430036e-8, 0.7098596096038818),
    scale: new Vector3(0.5000005960464478, 0.5, 1.0000011920928955)
})
radio.addComponentOrReplace(transform31)

/*const makersNFT = new Entity()
const shapeComponent = new NFTShape('ethereum://0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756/7224/')
makersNFT.addComponent(shapeComponent)
makersNFT.addComponent(
    new Transform({
        position: new Vector3(1.816032409667969, 0.8818327188491821, 3.250774383544922),
        rotation: new Quaternion(-6.9643502085875355e-15, -0.0639880895614624, 7.627970255441596e-9, -0.9979507327079773),
        scale: new Vector3(2.183903694152832, 2.25, 1.0388367176055908)
    })
)
engine.addEntity(makersNFT)*/
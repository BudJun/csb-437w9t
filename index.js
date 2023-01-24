import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Tank from "./Tank/Tank.js";
import Turrent from "./Turrent/Turrent.js";
import Bullet from "./Bullet/Bullet.js";
import StartReset from "./StartReset/StartReset.js";
import Button2 from "./Button2/Button2.js";
import ETank from "./ETank/ETank.js";
import ETurrent from "./ETurrent/ETurrent.js";
import EBullet from "./EBullet/EBullet.js";
import Exit from "./Exit/Exit.js";
import Settings from "./Settings/Settings.js";
import _1 from "./_1/_1.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  Tank: new Tank({
    x: -150,
    y: 20,
    direction: -90,
    costumeNumber: 1,
    size: 15,
    visible: false,
    layerOrder: 5
  }),
  Turrent: new Turrent({
    x: -150,
    y: 20,
    direction: 105.79240352885729,
    costumeNumber: 1,
    size: 24,
    visible: false,
    layerOrder: 8
  }),
  Bullet: new Bullet({
    x: -115.21784399984519,
    y: 12.534707286238856,
    direction: 75.59443013441232,
    costumeNumber: 1,
    size: 92.78348143695048,
    visible: false,
    layerOrder: 2
  }),
  StartReset: new StartReset({
    x: 2,
    y: -65,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Button2: new Button2({
    x: 173,
    y: -145,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  ETank: new ETank({
    x: 138.9822687547733,
    y: -92.51812340412775,
    direction: -68.73181120282501,
    costumeNumber: 1,
    size: 15,
    visible: false,
    layerOrder: 6
  }),
  ETurrent: new ETurrent({
    x: 138.9753389259678,
    y: -92.4819858773175,
    direction: -68.73181120282501,
    costumeNumber: 1,
    size: 24,
    visible: false,
    layerOrder: 7
  }),
  EBullet: new EBullet({
    x: 44.69382690774502,
    y: -146.62965354882002,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Exit: new Exit({
    x: 216,
    y: 155,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  Settings: new Settings({
    x: -168,
    y: -149,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 10
  }),
  _1: new _1({
    x: -213,
    y: 161,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 11
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;

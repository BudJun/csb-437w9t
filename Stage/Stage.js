/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("battle-ground", "./Stage/costumes/battle-ground.png", {
        x: 480,
        y: 360
      }),
      new Costume("settings", "./Stage/costumes/settings.png", {
        x: 480,
        y: 359
      }),
      new Costume("start page", "./Stage/costumes/start page.png", {
        x: 480,
        y: 359
      }),
      new Costume("defeat", "./Stage/costumes/defeat.svg", {
        x: 181.3611473272491,
        y: 103.63494132985673
      }),
      new Costume("victory", "./Stage/costumes/victory.svg", {
        x: 181.3611473272491,
        y: 103.63494132985676
      })
    ];

    this.sounds = [
      new Sound("background music", "./Stage/sounds/background music.mp3")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.start = "false";
    this.vars.bSpeed = 5;
    this.vars.eBSpeed = 10;
    this.vars.eSpeed = 10;
    this.vars.hp = 20;
    this.vars.eHp = 10;
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.startSound("background music");
      yield* this.wait(142);
      yield;
    }
  }
}

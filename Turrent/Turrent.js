/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Turrent extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("turrent", "./Turrent/costumes/turrent.png", {
        x: 155,
        y: 112
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "reset" }, this.whenIReceiveReset),
      new Trigger(Trigger.BROADCAST, { name: "exit" }, this.whenIReceiveExit),
      new Trigger(
        Trigger.BROADCAST,
        { name: "defeat" },
        this.whenIReceiveDefeat
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "victory" },
        this.whenIReceiveVictory
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.visible = true;
    while (true) {
      this.goto(this.sprites["Tank"].x, this.sprites["Tank"].y);
      this.direction = this.radToScratch(
        Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
      );
      yield;
    }
  }

  *whenIReceiveReset() {
    this.goto(this.sprites["Tank"].x, this.sprites["Tank"].y);
  }

  *whenIReceiveExit() {
    this.visible = false;
  }

  *whenIReceiveDefeat() {
    this.visible = false;
  }

  *whenIReceiveVictory() {
    this.visible = false;
  }
}

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Tank extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("tank", "./Tank/costumes/tank.png", { x: 480, y: 283 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "w" }, this.whenKeyWPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "a" }, this.whenKeyAPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "d" }, this.whenKeyDPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "s" }, this.whenKeySPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "reset" }, this.whenIReceiveReset),
      new Trigger(Trigger.BROADCAST, { name: "exit" }, this.whenIReceiveExit),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
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

  *whenKeyWPressed() {
    if (this.stage.vars.start == "true") {
      this.move(-20);
    }
  }

  *whenKeyAPressed() {
    if (this.stage.vars.start == "true") {
      this.direction -= 15;
      this.move(-30);
    }
  }

  *whenKeyDPressed() {
    if (this.stage.vars.start == "true") {
      this.direction += 15;
      this.move(-30);
    }
  }

  *whenKeySPressed() {
    if (this.stage.vars.start == "true") {
      this.move(20);
    }
  }

  *whenGreenFlagClicked() {
    this.goto(-150, 20);
    this.direction = -90;
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.goto(-150, 20);
    this.direction = -90;
    this.visible = true;
  }

  *whenIReceiveReset() {
    this.goto(-150, 20);
    this.direction = -90;
  }

  *whenIReceiveExit() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching(this.sprites["EBullet"].andClones())) {
        this.stage.vars.hp += -1;
        yield* this.wait(1);
      }
      if (this.touching(this.sprites["ETank"].andClones())) {
        this.stage.vars.hp += -1;
        yield* this.wait(1);
      }
      yield;
    }
  }

  *whenIReceiveDefeat() {
    this.visible = false;
  }

  *whenIReceiveVictory() {
    this.visible = false;
  }
}

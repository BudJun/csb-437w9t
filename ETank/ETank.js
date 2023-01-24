/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ETank extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("e-tank", "./ETank/costumes/e-tank.png", { x: 480, y: 283 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "reset" }, this.whenIReceiveReset),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "exit" }, this.whenIReceiveExit),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "defeat" },
        this.whenIReceiveDefeat
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "victory" },
        this.whenIReceiveVictory
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "victory" },
        this.whenIReceiveVictory2
      ),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart2)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.eHp = 10;
    this.goto(150, 20);
    this.direction = 90;
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.visible = true;
    this.goto(150, 20);
    this.direction = 90;
    while (true) {
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["Tank"].y - this.y,
          this.sprites["Tank"].x - this.x
        )
      );
      yield;
    }
  }

  *whenIReceiveReset() {
    this.goto(150, 20);
    this.direction = -90;
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenIReceiveExit() {
    this.visible = false;
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.touching(this.sprites["Bullet"].andClones())) {
        this.stage.vars.eHp += -1;
        yield* this.wait(1);
      }
      if (this.touching(this.sprites["Tank"].andClones())) {
        this.stage.vars.eHp += -1;
        yield* this.wait(1);
      }
      yield;
    }
  }

  *whenIReceiveDefeat() {
    this.visible = false;
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.stage.vars.eHp == 0) {
        this.broadcast("victory");
      }
      yield;
    }
  }

  *whenIReceiveVictory() {
    this.visible = false;
  }

  *whenIReceiveVictory2() {
    this.visible = false;
    this.stage.vars.eHp = 10;
  }

  *whenIReceiveStart2() {
    while (true) {
      yield* this.glide(
        this.stage.vars.eSpeed,
        this.sprites["Tank"].x,
        this.sprites["Tank"].y
      );
      yield;
    }
  }
}

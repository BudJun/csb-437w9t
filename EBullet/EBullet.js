/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class EBullet extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bullet", "./EBullet/costumes/bullet.svg", {
        x: 1.4650185365414359,
        y: 0.42891552215041884
      })
    ];

    this.sounds = [new Sound("pop", "./EBullet/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "exit" }, this.whenIReceiveExit),
      new Trigger(Trigger.BROADCAST, { name: "reset" }, this.whenIReceiveReset),
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

  *startAsClone() {
    this.goto(this.sprites["ETank"].x, this.sprites["ETank"].y);
    this.visible = true;
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Tank"].y - this.y,
        this.sprites["Tank"].x - this.x
      )
    );
    yield* this.glide(
      this.stage.vars.eBSpeed,
      this.sprites["Tank"].x,
      this.sprites["Tank"].y
    );
    this.deleteThisClone();
  }

  *whenIReceiveStart() {
    while (true) {
      yield* this.wait(2);
      this.createClone();
      yield;
    }
  }

  *whenIReceiveExit() {
    this.visible = false;
  }

  *whenIReceiveReset() {
    this.visible = false;
    this.deleteThisClone();
  }

  *whenIReceiveDefeat() {
    this.visible = false;
  }

  *whenIReceiveVictory() {
    this.visible = false;
  }
}

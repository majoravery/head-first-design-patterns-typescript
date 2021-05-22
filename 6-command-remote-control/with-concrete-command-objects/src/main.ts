import { CeilingFan } from './classes/CeilingFan';
import { GarageDoor } from './classes/GarageDoor';
import { Light } from './classes/Light';
import { Stereo } from './classes/Stereo';
import { LightOnCommand } from './classes/LightOnCommand';
import { LightOffCommand } from './classes/LightOffCommand';
import { CeilingFanLowCommand } from './classes/CeilingFanLowCommand';
import { CeilingFanMediumCommand } from './classes/CeilingFanMediumCommand';
import { CeilingFanHighCommand } from './classes/CeilingFanHighCommand';
import { CeilingFanOffCommand } from './classes/CeilingFanOffCommand';
import { GarageDoorOpenCommand } from './classes/GarageDoorOpenCommand';
import { GarageDoorCloseCommand } from './classes/GarageDoorCloseCommand';
import { StereoOnWithCdCommand } from './classes/StereoOnWithCdCommand';
import { StereoOffCommand } from './classes/StereoOff';
import { RemoteControl } from './classes/RemoteControl';

class RemoteLoader {
  constructor() {
    const livingRoomLight: Light = new Light('Living Room');
    const kitchenLight: Light = new Light('Kitchen');
    const garageDoor: GarageDoor = new GarageDoor();
    const stereo: Stereo = new Stereo('Living Room');
    const remoteControl: RemoteControl = new RemoteControl(7);

    // Lights
    const livingRoomLightOn: LightOnCommand = new LightOnCommand(
      livingRoomLight
    );
    const livingRoomLightOff: LightOffCommand = new LightOffCommand(
      livingRoomLight
    );
    const kitchenLightOn: LightOnCommand = new LightOnCommand(kitchenLight);
    const kitchenLightOff: LightOffCommand = new LightOffCommand(kitchenLight);

    // Garage door
    const garageDoorOpen: GarageDoorOpenCommand = new GarageDoorOpenCommand(
      garageDoor
    );
    const garageDoorClose: GarageDoorCloseCommand = new GarageDoorCloseCommand(
      garageDoor
    );

    // Stereo
    const stereoOnWithCd: StereoOnWithCdCommand = new StereoOnWithCdCommand(
      stereo
    );
    const stereoOff: StereoOffCommand = new StereoOffCommand(stereo);

    // Set commands
    remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
    remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff);
    remoteControl.setCommand(2, garageDoorOpen, garageDoorClose);
    remoteControl.setCommand(3, stereoOnWithCd, stereoOff);

    remoteControl.toString();
    remoteControl.onButtonWasPushed(0);
    remoteControl.offButtonWasPushed(0);
    remoteControl.toString();
    remoteControl.undoButtonWasPushed();
    remoteControl.offButtonWasPushed(0);
    remoteControl.onButtonWasPushed(1);
    remoteControl.offButtonWasPushed(1);
    remoteControl.onButtonWasPushed(2);
    remoteControl.offButtonWasPushed(2);
    remoteControl.toString();
    remoteControl.onButtonWasPushed(3);
    remoteControl.offButtonWasPushed(3);
  }
}

// TODO: Quite unsure about the suggested undo implementation of ceiling fan though
class RemoteLoaderFanSpeed {
  constructor() {
    const ceilingFan: CeilingFan = new CeilingFan('Living Room');
    const remoteControl: RemoteControl = new RemoteControl(3);

    const ceilingFanLow: CeilingFanLowCommand = new CeilingFanLowCommand(
      ceilingFan
    );
    const ceilingFanMedium: CeilingFanMediumCommand = new CeilingFanMediumCommand(
      ceilingFan
    );
    const ceilingFanHigh: CeilingFanHighCommand = new CeilingFanHighCommand(
      ceilingFan
    );
    const ceilingFanOff: CeilingFanOffCommand = new CeilingFanOffCommand(
      ceilingFan
    );

    remoteControl.setCommand(0, ceilingFanLow, ceilingFanOff);
    remoteControl.setCommand(1, ceilingFanMedium, ceilingFanOff);
    remoteControl.setCommand(2, ceilingFanHigh, ceilingFanOff);

    remoteControl.toString();
    remoteControl.onButtonWasPushed(0);
    remoteControl.offButtonWasPushed(0);
    remoteControl.toString();
    remoteControl.undoButtonWasPushed();
    remoteControl.offButtonWasPushed(0);
    remoteControl.onButtonWasPushed(1);
    remoteControl.onButtonWasPushed(2);
    remoteControl.undoButtonWasPushed();
    remoteControl.offButtonWasPushed(2);
  }
}

// new RemoteLoader();
new RemoteLoaderFanSpeed();

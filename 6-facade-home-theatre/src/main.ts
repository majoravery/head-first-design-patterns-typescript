import Amplifier from './Amplifier';
import HomeTheatreFacade from './HomeTheatreFacade';
import PopcornPopper from './PopcornPopper';
import Projector from './Projector';
import Screen from './Screen';
import StreamingPlayer from './StreamingPlayer';
import TheatreLights from './TheatreLights';
import Tuner from './Tuner';

class HomeTheatreTestDrive {
  constructor() {
    const amplifier = new Amplifier('Amplifier');
    const tuner = new Tuner('AM/FM Tuner', amplifier);
    const player = new StreamingPlayer('Streaming Player', amplifier);
    const projector = new Projector('Projector', player);
    const lights = new TheatreLights('Theater Ceiling Lights');
    const screen = new Screen('Theater Screen');
    const popper = new PopcornPopper('Popcorn Popper');

    const homeTheatre = new HomeTheatreFacade(
      amplifier,
      lights,
      player,
      popper,
      projector,
      screen,
      tuner
    );

    homeTheatre.watchMovie('Raiders of the Lost Ark');
    homeTheatre.endMovie();
  }
}

new HomeTheatreTestDrive();

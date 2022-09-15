import {Car, Color, Direction, Doors} from './ex01';

const gol = new Car ('vw gol', Color.Silver, 4);

gol.openTheDoor(Doors.DRIVER);
gol.closeTheDoor(Doors.DRIVER);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn(Direction.LEFT);
gol.speedUp();
gol.speedDown();
gol.turn(Direction.RIGHT);
gol.speedUp();
gol.speedDown();
gol.turn(Direction.RIGHT);
gol.speedDown();
gol.stop();
gol.turnOff();
gol.honk();
gol.openTheDoor(Doors.BEHIND);
gol.closeTheDoor(Doors.BEHIND);
gol.turnOn();
gol.speedUp();
gol.turn(Direction.LEFT);
gol.turn(Direction.RIGHT);
gol.speedDown();
gol.stop();
gol.openTheDoor(Doors.BEHIND);

import Canvas from 'common/canvas';
import Grid from './grid';
import Axes, { AxesData } from './axes';
import { random } from 'common/util';

class AxesCanvas extends Canvas {
  ctx: CanvasRenderingContext2D;
  grid: Grid;
  axes: Axes;
  data: AxesData[];
  constructor() {
    super();
    this.ctx = this.getContext('2d');
    this.initData();
  }
  initData() {
    let rangeX = [0, 100];
    let rangeY = [0, 100];
    let count = 10;
    let data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        x: random(rangeX[0], rangeX[1]),
        y: random(rangeY[0], rangeY[1]),
      });
    }
    this.data = data;
  }
  render(container: HTMLElement) {
    super.render(container);
    this.grid = new Grid(this.ctx);
    this.axes = new Axes(this.ctx, this.data);
    this.grid.render();
    this.axes.render();
  }
}

export default AxesCanvas;
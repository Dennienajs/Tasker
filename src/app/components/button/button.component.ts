import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export enum Colors { Blue, Green, Cyan, Teal, Lime, Red, Pink, Purple }
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type: string = "button";
  @Input() text: string = "Click";
  @Input() color: Colors = Colors.Purple;
  @Output() click = new EventEmitter();

  classes: string = "hover:animate-pulse bg-gradient-to-r hover:bg-gradient-to-br focus:outline-none focus:ring-1 font-medium rounded-lg text-sm px-5 py-2.5 text-center ";

  public Colors = Colors;

  constructor() {

  }

  ngOnInit(): void {
    this.classes += GetButtonColorGradients(this.color);
  }

  onClick = () => {
    this.click.emit();
  }

}

const SetButtonColorGradient = (color: string, start: number, increase: number = 100, text: string = "white") => {
  const from = `from-${color}-${start}`;
  const via = `via-${color}-${start + increase}`;
  const to = `to-${color}-${start + increase + increase}`;

  return `text-${text} ${from} ${via} ${to}`;
}

const GetButtonColorGradients = (color: Colors) => {
  switch (color) {
    case Colors.Blue: return SetButtonColorGradient("blue", 500);
    case Colors.Green: return SetButtonColorGradient("green", 400);
    case Colors.Cyan: return SetButtonColorGradient("cyan", 400);
    case Colors.Teal: return SetButtonColorGradient("teal", 400);
    case Colors.Lime: return SetButtonColorGradient("lime", 200, 200, "gray-900")
    case Colors.Red: return SetButtonColorGradient("red", 400);
    case Colors.Pink: return SetButtonColorGradient("pink", 400);
    case Colors.Purple: return SetButtonColorGradient("purple", 500);

    default: return "text-white from-blue-500 via-blue-600 to-blue-700";
  }
}



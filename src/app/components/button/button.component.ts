import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export enum Colors { Blue, Green, Cyan, Teal, Lime, Red, Pink, Purple, Purple2, OrangeIsh }
const baseClasses = "hover:animate-pulse bg-gradient-to-r hover:bg-gradient-to-br focus:outline-none focus:ring-1 font-medium rounded-lg text-sm px-5 py-2.5 text-center";
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

  classes: string = "";
  public Colors = Colors;

  constructor() { }

  ngOnInit(): void {
    this.SetButtonClasses();
  }

  onClick = () => {
    this.click.emit();
  }

  SetButtonClasses = () => {
    const base: string = "hover:animate-pulse bg-gradient-to-r hover:bg-gradient-to-br focus:outline-none focus:ring-1 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-200 ";
    let custom: string = "";

    switch (this.color) {
      case Colors.Blue:
        custom = "text-white from-blue-500 via-blue-600 to-blue-700";
        break;
      case Colors.Green:
        custom = "text-white from-green-400 via-green-500 to-green-600"
        break;
      case Colors.Cyan:
        custom = "text-white from-cyan-400 via-cyan-500 to-cyan-600"
        break;
      case Colors.Teal:
        custom = "text-white from-teal-400 via-teal-500 to-teal-600"
        break;
      case Colors.Lime:
        custom = "text-gray-900 from-lime-200 via-lime-400 to-lime-500"
        break;
      case Colors.Red:
        custom = "text-white from-red-400 via-red-500 to-red-600"
        break;
      case Colors.Pink:
        custom = "text-white from-pink-400 via-pink-500 to-pink-600"
        break;
      case Colors.Purple:
        custom = "text-white from-purple-500 via-purple-600 to-purple-700"
        break;
      case Colors.Purple2:
        custom = "text-white from-indigo-500 via-purple-500 to-pink-500"
        break;
      case Colors.OrangeIsh:
        custom = "text-white from-green-400 to-blue-500 from-pink-500 to-yellow-500"
        break;


    }

    this.classes = base + custom;
  }

}




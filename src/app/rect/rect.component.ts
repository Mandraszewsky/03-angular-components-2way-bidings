import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  @Input({ required: true }) size!: { width: string; height: string };
  @Output() sizeChange = new EventEmitter<{ width: string; height: string }>(); // size (input name) + Change (it is static, angular feature), angular understand it as input + output value = 2way binding

  onReset() {
    // ...
    this.sizeChange.emit({
      width: '200',
      height: '100'
    });
  }

  // newer and easier way using 2way binding with signals (angular 17.2 +):
  // size = model.required<{ width: string; height: string }>();

  // onReset() {
  //   // ...
  //   this.size.set({
  //     width: '200',
  //     height: '100'
  //   });
  // }

}

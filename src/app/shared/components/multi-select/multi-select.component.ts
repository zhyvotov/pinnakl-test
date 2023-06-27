import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiSelectComponent implements OnInit, OnDestroy {

  multiSelectControl = new UntypedFormControl();

  #subscription = new Subscription();

  @Input() title!: string | null;
  @Input() items!: string[] | null;
  @Input() set isDisabled(flag: boolean) {
    if (flag) {
      this.multiSelectControl.disable()
    } else {
      this.multiSelectControl.enable();
    }
  };

  @Output() selectItems = new EventEmitter<string[]>();

  ngOnInit(): void {
    this.#subscription.add(
      this.multiSelectControl.valueChanges.subscribe(
        value => this.selectItems.emit(value)
      )
    );
  }

  ngOnDestroy(): void {
    this.#subscription.unsubscribe();
  }
}

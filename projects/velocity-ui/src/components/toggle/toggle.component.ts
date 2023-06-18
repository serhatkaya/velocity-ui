import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'vui-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VelocityToggleComponent),
      multi: true,
    },
  ],
})
export class VelocityToggleComponent implements OnInit, ControlValueAccessor {
  @Input() disabled: boolean = false;

  private innerValue: boolean = false;
  private onChange: any = () => {};
  private onTouched: any = () => {};

  ngOnInit(): void {
    this.onChange(this.innerValue);
  }

  get value(): boolean {
    return this.innerValue;
  }

  set value(val: boolean) {
    if (val !== this.innerValue) {
      this.innerValue = val;
      this.onChange(this.innerValue);
    }
  }

  toggle(): void {
    if (!this.disabled) {
      this.value = !this.value;
    }
  }

  writeValue(value: any): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

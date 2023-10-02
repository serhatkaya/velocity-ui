# Virtus UI Components Documentation

Table of Contents:

- [Introduction](#introduction)
- [Installation](#installation)
- [Tabs Component](#tabs-component)
- [Toast Component](#toast-component)
- [Toggle Component](#toggle-component)
- [Sidebar Component](#sidebar-component)
- [Usage](#usage)
- [Contribution](#contribution)"
- [License](#license)

---

## Introduction

Welcome to Virtus UI, a pure Angular component library designed with speed, ease of use, and flexibility in mind. Leveraging only Angular's native capabilities, this library ensures seamless integration without the need for external dependencies.

---

## Why Choose Virtus UI?

Pure Angular: Experience the power of Angular without the overhead of third-party libraries. Every component is built using only Angular's native functionalities.

Optimized for Speed: Designed with performance in focus, our components ensure a snappy and responsive user experience.

Ease of Use: Every component is crafted to be intuitive, ensuring developers can integrate them into projects with minimal effort.

Highly Flexible: Built to cater to diverse requirements, the components can be easily customized to fit any design or functionality needs.

## Installation

To get started with Virtus UI, you'll need to install the library via npm or yarn.

```bash
npm install virtus-ui --save
```

or

```bash
yarn add virtus-ui
```

---

Sure! Here's your HTML content converted to Markdown:

---

## Sidebar Component

The `VirtusSidebar` component acts as a side navigation bar for your application, providing an area where additional content can be placed. Sidebars are common in modern web applications and websites, especially those that have a large amount of nested content or require secondary navigation.

### Features:

1. **Toggle Visibility**: The sidebar can be opened and closed programmatically via the `VirtusSidebarService`.
2. **Custom Header**: You can provide a custom header for the sidebar or use the default one which contains a title and a close button.
3. **Position**: The sidebar can be displayed either on the left or right side of the viewport.
4. **Outer Click**: Sidebar can be closed when a user clicks outside of it.

### Installation:

To integrate the `VirtusSidebar` in your Angular application, you should import the `VirtusSidebarModule`:

```typescript
import { VirtusSidebarModule } from "virtus-ui";

@NgModule({
  imports: [
    // ... other modules
    VirtusSidebarModule,
  ],
})
export class YourModule {}
```

### Usage:

1. **Basic Usage**:

```html
<vui-sidebar id="mainSidebar" title="Menu">
  <!-- Your content here -->
</vui-sidebar>
```

2. **Custom Header**:

```html
<vui-sidebar id="customHeaderSidebar" [customHeader]="true">
  <div vuiSidebarHeader>
    <!-- Your custom header content -->
  </div>
  <!-- Sidebar body content -->
</vui-sidebar>
```

3. **Programmatic Control**:

You can open, close, or toggle the sidebar using the `VirtusSidebarService`:

```typescript
constructor(private sidebarService: VirtusSidebarService) {}

openSidebar() {
  this.sidebarService.open('mainSidebar');
}

closeSidebar() {
  this.sidebarService.close('mainSidebar');
}

toggleSidebar() {
  this.sidebarService.toggle('mainSidebar');
}
```

### Styling:

- `.sidebar-container`: Main container of the sidebar.
- `.sidebar`: The actual sidebar content.
- `.sidebar-header`: The header section of the sidebar.
- `.close-btn`: The button used to close the sidebar.

You can customize or extend these styles by targeting the class names in your stylesheets.

### Best Practices:

- **Unique IDs**: Ensure each sidebar has a unique ID if you're using multiple sidebars in your application.
- **Avoid Overcrowding**: Sidebars should be used for secondary or additional content. Avoid putting critical content that should be immediately visible to the user.
- **Accessibility**: Ensure the sidebar is accessible, especially if it contains critical navigation links.

### Notes:

- The provided code assumes you have an `outerClick` directive that can detect clicks outside the provided element. Ensure this directive is working correctly for the outer click feature to function.
- The `vuiDelay` pipe, as seen in the template, seems to introduce a delay before displaying the content. Ensure that this pipe is correctly implemented and its purpose aligns with your needs.

---

This documentation offers an introductory guide to the `VirtusSidebar` component. Depending on your specific project structure and needs, you may need to adjust or extend the functionality.

---

## Tabs Component

The `VirtusTabs` component provides a way to switch between content that is broken out into multiple panes. Each tab's label is shown in a tab header, and selecting a tab activates its associated content pane.

### Features:

1. **Dynamic Tabs**: Tabs and their respective content are rendered dynamically based on the content provided.

2. **Tab Activation**: Only one tab can be active at a time.

3. **Tab Status**: Tabs can be in one of three states: active, inactive, or disabled.

4. **Animated Content Switching**: Provides an animation when switching between tabs, enhancing the user experience.

### Installation:

To utilize the `VirtusTabs` in your Angular application, import the `VirtusTabsModule`:

```typescript
import { VirtusTabsModule } from "virtus-ui";

@NgModule({
  imports: [
    // ... other modules
    VirtusTabsModule,
  ],
})
export class YourModule {}
```

### Usage:

1. **Basic Usage**:

```html
<vui-tabs>
  <vui-tab title="Tab 1">Content for Tab 1</vui-tab>
  <vui-tab title="Tab 2">Content for Tab 2</vui-tab>
  <vui-tab title="Tab 3" [disabled]="true">Content for Tab 3</vui-tab>
</vui-tabs>
```

### Styling:

- `.tab-container`: Main container for the tabs.
- `.tab-header`: The header area showing all tabs.
- `.tab-item`: Each individual tab.
- `.active`: The currently active tab.
- `.disabled`: A tab that is disabled and not clickable.
- `.tab-content`: The content area for the active tab.

To customize or extend these styles, target these class names in your stylesheets.

### Best Practices:

- **Limit Number of Tabs**: Too many tabs can become overwhelming. If you have many sections, consider another method of organization.

- **Clear Labels**: Ensure your tab labels are clear and concise, indicating the content they represent.

- **Avoid Disabled Tabs**: While the functionality exists, it's generally better to not show a tab than to show it as disabled, unless it's very clear why the tab is disabled.

### Notes:

- The provided code assumes a child component `VirtusTabComponent` which represents each tab. This child component will be responsible for the actual content of each tab and its status.

- For the animation to work, you'll need to implement the `tabAnimation`. The code you provided mentions it but doesn't give its actual implementation. Ensure that you've created and tested this animation accordingly.

---

## This documentation offers an introductory guide to the `VirtusTabs` component. Depending on your project's specific structure and needs, you may need to adjust or extend the functionality.

## Toast Component

A toast notification is a UI element that pops up to alert users of an event, saving them from having to go to a notification center. This solution provides an implementation of a Toast component in Angular and its accompanying service.

### Features:

1. **Dynamic Positioning**: The toast can be positioned in various places on the screen using the `VirtusToastPosition` enum.
2. **Types of Toast**: Different types (Success, Info, Warning, and Error) can be displayed using the `VirtusToastType` enum.
3. **Time Control**: A timeout feature to auto-hide the toast after a certain period.
4. **Manual Closing**: Toasts can be closed manually by the user by clicking a button.
5. **Service Driven**: Toasts can be invoked from anywhere in the application using the `VirtusToastService`.

### Usage:

1. **Installation**:

To use the toast in your Angular application, first import the `VirtusToastModule`:

```typescript
import { VirtusToastModule } from "virtus-ui";

@NgModule({
  imports: [
    // ... other modules
    VirtusToastModule,
  ],
})
export class YourModule {}
```

2. **Service Injection and Usage**:

Inject `VirtusToastService` in your component or service and use it:

```typescript
import { VirtusToastService, VirtusToastType, VirtusToastPosition } from 'virtus-ui';

constructor(private toastService: VirtusToastService) {}

showSuccessToast() {
  this.toastService.show("Success", "Operation completed successfully!", {
    type: VirtusToastType.SUCCESS,
    position: VirtusToastPosition.TOP_RIGHT
  });
}

showErrorToast() {
  this.toastService.show("Error", "Something went wrong!", {
    type: VirtusToastType.ERROR,
    position: VirtusToastPosition.TOP_LEFT,
    timeOut: 10000
  });
}
```

### Styling:

This Toast component uses a few classes for styling:

- `.toast`: The main container of the toast notification.
- `.toast-header`: The header section of the toast.
- `.toast-title`: The title inside the toast header.
- `.toast-close-button`: The close button inside the toast header.
- `.toast-message`: The main content/message of the toast.

To customize or extend these styles, target these class names in your stylesheets. Moreover, additional classes for positions (`toast-top-right`, `toast-bottom-left`, etc.) and types (`toast-success`, `toast-info`, etc.) will be applied based on user input.

### Notes:

- The toast component is attached directly to the body. This might overlap with other fixed or absolute elements. Ensure correct z-index and positioning in your styles.
- The show method in `VirtusToastService` returns an object with a hide method. This can be used to programmatically close the toast if needed.
- To provide custom animations or more advanced features, you might want to further extend the service and component provided.

Remember, always consider user experience when using toast notifications. Overusing them or setting them to remain on the screen for too long can be distracting or annoying to users. Use them sparingly and only for significant user feedback.

## Toggle Component:

#### HTML:

The HTML part contains a `div` with a `toggle` class which acts as a container for the switch. The `toggle-handle` class is for the actual switch that will move from left to right.

Events and Bindings:

- `(click)`: The `click` event toggles the state of the switch only if it's not disabled.
- `[ngClass]`: Angular directive that dynamically binds one or more CSS classes to an HTML element. Here, it checks the `value` (state of the toggle) and assigns the class 'active' when the toggle is on.

#### TypeScript:

- The component implements `ControlValueAccessor`, making it compatible with Angular forms. This lets it work with both template-driven and reactive forms.
- `NG_VALUE_ACCESSOR`: It provides the Token to inject the `ControlValueAccessor` which is used by forms to communicate with the component.
- `innerValue`: The internal data model for the value of the toggle.
- `onChange` and `onTouched`: Callback functions to be registered with the component and to be called when the value of the component changes or when it's touched.

Functions:

- `toggle`: This function inverts the current value of the toggle.
- `writeValue`: This function writes a new value from the form model into the view or (if needed) updates the local value.
- `registerOnChange` and `registerOnTouched`: Registers a callback function that should be called when the control's value changes in the UI.
- `setDisabledState`: Used to set the disabled state of the toggle.

### Styling:

The following classes would be used for styling:

- `.toggle`: Main container of the toggle switch.
- `.toggle-handle`: The switch itself.
- `.active`: When the toggle is on or activated.

You'd typically want to have styles that would shift the `.toggle-handle` to the left or right based on the `.active` class, changing the background color, and more. Remember to handle the visual states for when the toggle is in its `disabled` state, so users know it's not interactive.

### Usage:

1. **Installation**:

To use the toggle component in your Angular application, first import the `VirtusToggleModule`:

```typescript
import { VirtusToggleModule } from "virtus-ui";

@NgModule({
  imports: [
    // ... other modules
    VirtusToggleModule,
  ],
})
export class YourModule {}
```

2. **Using in Forms**:

The component can be seamlessly integrated with Angular forms:

```html
<form [formGroup]="myForm">
  <vui-toggle formControlName="myToggle"></vui-toggle>
</form>
```

3. **Binding to Component Property**:

You can also bind the toggle's value to a component property using `ngModel`:

```html
<vui-toggle [(ngModel)]="isToggled"></vui-toggle>
```

## Remember to provide visual feedback, so users are aware of the current state of the toggle, and if possible, provide a label or description indicating what the toggle represents.

## Usage

To use any of the components, you need to import their respective modules in your Angular application.

---

## Contribution

Contributions are always welcome! Please refer to our [Contribution Guide](./CONTRIBUTING.md) for more details.

---

## License

Virtus UI Components is licensed under the [MIT License](./LICENSE.md).

---

For further details, enhancements, or issues, please check our [official documentation](#) or raise an issue in our [GitHub repository](#).

---

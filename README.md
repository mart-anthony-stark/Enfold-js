# Enfold js

### A simple element reveal animation library

- [Animation Demo](https://mart-anthony-stark.github.io/Enfold-js/)
- [Usage](https://github.com/mart-anthony-stark/Enfold-js#usage)
- [Component Attributes](https://github.com/mart-anthony-stark/Enfold-js#attributes)
- [Animation Names](https://github.com/mart-anthony-stark/Enfold-js#animation-names)

## Usage

Include the external Javascript file to your html document.

```html
<script src="./build/enfold.min.js"></script>
```

Or you can use this link:

```html
<script src="https://mart-anthony-stark.github.io/Enfold-js/src/enfold.min.js"></script>
```

Wrap the element you want to animate when entering the screen with enfold-animate component.

```html
<enfold-animate name="fadeIn">
  <div>...</div>
</enfold-animate>
```

## Attributes

- name
  - Specifies the animation name
- delay
  - This _attribute_ specifies a delay for the start of an animation. **Default: 0s**
- duration
  - The _duration_ attribute defines how long an animation should take to complete one cycle.
- easing

  - _easing_ attribute specifies the speed curve of an animation. The speed curve defines the TIME an animation uses to change from one set of CSS styles to another. **Default: ease**

- intensity
  - This attribute specifies how wide does the animation occupies. This only applies to shifting animations (does not include _fadeIn_)
- threshold
  - The animation activated when the _threshold_ is crossed into the viewport. A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked. **Default: 0.3**
- once
  - If the _once_ attribute is present, the animation will be triggered only once the element enters viewport.

# Animation Names

- fadeRight
- fadeIn
- fadeLeft
- slideRight
- slideUp
- slideDown
- slideLeft
- zoomInRight
- zoomIn
- zoomInLeft
- rotateCenter
- rotateDiagonal
- rotateBotLeft
- rotateVertical
- flipHorizontalBottom
- flipScaleUpHor
- slideRotateTopHor
- slideRotateHorBottom
- shadowDropCenter
- shadowDropTB
- shadowDropLR
- shadowDrop2Center

## Samples
![img](https://github.com/mart-anthony-stark/Enfold-js/blob/main/docs/src/animations/section1.gif?raw=true)
```html
<enfold-animate name="fadeRight" duration="1">
    <div class="box">
        <h1>Section 1</h1>
        <h2>Fade Right</h2>
    </div>
</enfold-animate>
```
```html
 <enfold-animate name="fadeIn">
    <div class="box">
        <h1>Section 1</h1>
        <h2>Fade In</h2>
    </div>
</enfold-animate>
```
```html
<enfold-animate name="fadeLeft">
    <div class="box">
        <h1>Section 1</h1>
        <h2>Fade Left</h2>
    </div>
</enfold-animate>
```

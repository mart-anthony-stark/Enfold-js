# Enfold js

### A simple onscroll reveal animation library

## Usage

```html
<enfold-animate name="fadeIn">
  <div>...</div>
</enfold-animate>
```

## Attributes

- name
  Specifies the animation name
- delay
  This _attribute_ specifies a delay for the start of an animation. **Default: 0s**
- duration
  The _duration_ attribute defines how long an animation should take to complete one cycle.
- easing
  _easing_ attribute specifies the speed curve of an animation. The speed curve defines the TIME an animation uses to change from one set of CSS styles to another. **Default: ease**

- intensity
  This attribute specifies how wide does the animation occupies. This only applies to shifting animations (does not include _fadeIn_)
- threshold
  The animation activated when the _threshold_ is crossed into the viewport. A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked. **Default: 0.3**
- once
  If the _once_ attribute is present, the animation will be triggered only once the element enters viewport.

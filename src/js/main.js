import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import homeSlider from './homeSlider';
import { cardSliders } from './cardSliders';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    homeSlider();
    cardSliders();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)
})

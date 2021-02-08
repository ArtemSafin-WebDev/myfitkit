import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import homeSlider from './homeSlider';
import { cardSliders } from './cardSliders';
import selectType from './selectType';
import customSelects from './customSelects';
import newProductsSlider from './newProductsSlider';
import ourBlogSlider from './ourBlogSlider';
import tabletBurger from './tabletBurger';
import cartItems from './cartItems';
import validation from './validation';
import blogGallery from './blogGallery';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    homeSlider();
    cardSliders();
    selectType();
    customSelects();
    newProductsSlider();
    ourBlogSlider();
    tabletBurger();
    cartItems();
    validation();
    blogGallery();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300);
});

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
import chooseTasteSlider from './chooseTasteSlider';
import productGallery from './productGallery';

import productsVideoSlider from './productsVideoSlider';
import modals from './modals';
import phoneMask from './phoneMask';
import tabs from './tabs';
import citySearch from './citySearch';
import cartPopup from './cartPopup';
import similarProductsSlider from './similarProductsSlider';
import scrollToActiveMenuItem from './scrollToActiveMenuItem';
import resetForm from './resetForm';
import mobileMenu from './mobileMenu';

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
    chooseTasteSlider();
    productGallery();
    tabs();
    productsVideoSlider();
    modals();
    phoneMask();
    citySearch();
    cartPopup();
    similarProductsSlider();
    scrollToActiveMenuItem();
    resetForm();
    mobileMenu();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300);
});

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
import aboutProductMobileModals from './aboutProductMobileModals';
import advantagesMobileModals from './advantagesMobileModals';
import checkIfFiltersChanged from './checkIfFiltersChanged';
import stickyGallery from './stickyGallery'
import constructor from './constructor';
import addedToCart from './addedToCart';
import whereToBuy from './whereToBuy';
import editBoxes from './edit-boxes';
import media from './media';
import copyLink from './copyLink';
import messages from './messages';
import showCatalogElements from './showCatalogElements';
import onlyNumeric from './onlyNumeric';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    messages();
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
    phoneMask();
    citySearch();
    cartPopup();
    similarProductsSlider();
    scrollToActiveMenuItem();
    resetForm();
    mobileMenu();
    aboutProductMobileModals();
    advantagesMobileModals();
    checkIfFiltersChanged();
    stickyGallery();
    constructor();
    addedToCart();
    modals();
    whereToBuy();
    editBoxes();
    media();
    copyLink();
    showCatalogElements();
    onlyNumeric();
    
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300);
});

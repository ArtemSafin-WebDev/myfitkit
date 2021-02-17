import { lockScroll, unlockScroll } from "./scrollBlocker";

export default function mobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');

    const mobileMenuOpenBtns = Array.from(document.querySelectorAll('.js-mobile-menu-open'));
    const mobileMenuCloseBtns = Array.from(document.querySelectorAll('.js-mobile-menu-close'));
  

    if (!mobileMenu) return;

    let menuOpen = false;

    const openMenu = () => {
        if (menuOpen) return;
        lockScroll(mobileMenu);
        mobileMenu.classList.add('active');
        menuOpen = true;
    }

    const closeMenu = () => {
        if (!menuOpen) return;
        unlockScroll();
        mobileMenu.classList.remove('active');
        menuOpen = false;
    }

    mobileMenuCloseBtns.forEach(btn => {
        btn.addEventListener('click', event => {
            event.preventDefault();
            closeMenu();
        })
    })
    mobileMenuOpenBtns.forEach(btn => {
        btn.addEventListener('click', event => {
            event.preventDefault();
            openMenu();
        })
    })



    const mobileMenuCatalogOpenBtn = mobileMenu.querySelector('.js-mobile-menu-catalog-open');
    const mobileMenuCatalogCloseBtn = mobileMenu.querySelector('.js-mobile-menu-catalog-close');
    const mobileCatalog = mobileMenu.querySelector('.mobile-menu__catalog');

    if (mobileCatalog) {
        let catalogOpen = false;
        const openMobileCatalog = () => {
            if (catalogOpen) return;
            mobileCatalog.classList.add('active');
            unlockScroll();
            lockScroll(mobileCatalog);
            catalogOpen = true;
        }
        const closeMobileCatalog = () => {
            if (!catalogOpen) return;
            mobileCatalog.classList.remove('active');
            unlockScroll();
            lockScroll(mobileMenu);
            catalogOpen = false;
        }

        mobileMenuCatalogOpenBtn.addEventListener('click', event => {
            event.preventDefault();
            openMobileCatalog();
        })
        mobileMenuCatalogCloseBtn.addEventListener('click', event => {
            event.preventDefault();
            closeMobileCatalog();
        })
    }
}
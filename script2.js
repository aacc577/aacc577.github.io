// script.js
function toggleList(item) {
    const nestedList = item.querySelector('.nested-list');
    item.classList.toggle('expanded');

    // Optionally, you can reset the max-height to 0 first to ensure a smooth transition
    // when collapsing, but this is not always necessary depending on your layout
    // nestedList.style.maxHeight = '0px';
    // RequestAnimationFrame to ensure the style is applied before toggling the class
    // requestAnimationFrame(() => {
    //     item.classList.toggle('expanded');
    // });

    // However, in this case, the transition should work fine with just toggling the class
}
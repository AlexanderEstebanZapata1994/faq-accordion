const togleEvent = (event) => {
    const currentElement = event.srcElement;
    const isPlusButtonClicked = currentElement.classList.contains('plus');
    if (isPlusButtonClicked) {
        collapseAllDetails();
        currentElement.classList.replace('plus', 'minus');
        const detail = currentElement.parentElement.nextElementSibling;
        if (detail.classList.contains('hidden')){
            detail.classList.remove('hidden')
        }
    } else {
        currentElement.classList.replace('minus', 'plus');
        currentElement.parentElement.nextElementSibling.classList.add('hidden');
    }
    
}

const collapseAllDetails = () => {
    const arrayOfDetails = Array.from(document.getElementsByClassName('accordion__item-details'));
    arrayOfDetails.forEach(detail => {
        detail.classList.add('hidden');
    })

    const arrayOfMinusButtons = Array.from(document.getElementsByClassName('minus'));
    arrayOfMinusButtons.forEach(button => {
        button.classList.replace('minus', 'plus');
    })
}
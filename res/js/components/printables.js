const printablesContainer = document.querySelector('[data-printables-button]')

if (printablesContainer) {
    printablesContainer.addEventListener('click', () => {
        window.print()
    })
}



const pages = document.querySelectorAll('.page')
const pagePanel = document.querySelector('[data-page-panel]')
const spanCurrentPageNum = document.querySelector('[data-current-page-num]')
const spanTotalPageNum = document.querySelector('[data-total-page-num]')

// * Page Counter
pageCount = 0;

if (spanTotalPageNum) {
    spanTotalPageNum.innerText = pages.length
}

if (pagePanel) {
    pagePanel.addEventListener('mouseover', () => {
        pagePanel.classList.add('show-page-panel')
    })
    
    pagePanel.addEventListener('mouseout', (e) => {
        const { relatedTarget } = e;
        if (!pagePanel.contains(relatedTarget)) {
            pagePanel.classList.remove('show-page-panel')
        }
    })
}


pages.forEach(page => {
    if (page) {
        page.classList.add('page-break-after')
    }
    pageCount++
    page.setAttribute('id', `Page${pageCount}`)

    page.addEventListener('mouseover', () => {
        pagePanel.classList.add('show-page-panel')
    })

    page.addEventListener('mouseout', (e) => {
        const { relatedTarget } = e;
        if (!page.contains(relatedTarget)) {
            pagePanel.classList.remove('show-page-panel')
        }
    })


})

// * Intersection Observer for Page Number
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // * Extract the page number from the ID attribute
            const pageNumber = entry.target.id.replace('Page', '');
            
            // * Display the current page number
            spanCurrentPageNum.value = pageNumber;
        }
    })
}, {
    threshold: 0.4
})

pages.forEach(page => {
    observer.observe(page)
})

// * Add functionality to go to a specific page
if (spanCurrentPageNum) {
    spanCurrentPageNum.addEventListener('input', () => {
        const pageNumber = parseInt(spanCurrentPageNum.value);
        
        // * Validate input
        if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= pages.length) {
            
            // * Scroll to the selected page
            pages[pageNumber - 1].scrollIntoView({ behavior: 'smooth' })
        }
    });
}


function openModal(open, modal) {
    open.addEventListener('click', () => {
        modal.showModal()
    })
}

function closeModal(close, modal) {
    close.addEventListener('click', () => {
        modal.setAttribute("closing", "");
        modal.addEventListener("animationend", () => {
            modal.removeAttribute("closing");
            modal.close();
        }, { once: true });
    
    })
}

function proceedButton(proceed, modal, url) {
    proceed.addEventListener('click', () => {
        modal.setAttribute("closing", "");
        modal.addEventListener("animationend", () => {
            modal.removeAttribute("closing");
            modal.close();
        }, { once: true });
        location.href = url
    })
}


const queryModal = document.querySelector('[data-query-modal]')

const openQueryModalButton = document.querySelector('[data-open-query-modal]')
const closeQueryModalButton = document.querySelector('[data-close-query-modal]')
const proceedQueryModalButton = document.querySelector('[data-proceed-print-passbook-button]')

// * Application Module: Receipt Voucher Button (Printables)
// ***** Okay Button (Passbook Front)
if (proceedQueryModalButton) {
    url = '/KC/transactions/new-application-passbook-print.html'
    openModal(openQueryModalButton, queryModal)
    closeModal(closeQueryModalButton, queryModal)
    proceedButton(proceedQueryModalButton, queryModal, url)
}

// ***** Back Button (Passbook Back)
const backButton = document.querySelector('[data-passbook-back-print-button]')
const passbookBack = document.querySelector('.page.page-2.passbook')
const passbookFront = document.querySelector('.page.page-1.passbook')

const doneButton = document.querySelector('[data-proceed-to-releasing-completion-button]')

if (backButton) {
    backButton.addEventListener('click', () => {
        passbookFront.classList.remove('show');
        passbookBack.classList.add('show');
        openQueryModalButton.classList.remove('hidden');
        backButton.classList.add('hidden');

        // * Application Module: Passbook (Printables)
        // ***** Done Button (to Releasing Completion)
        if (doneButton) {
            url = '/KC/transactions/new-application-releasing-completion.html'
            openModal(openQueryModalButton, queryModal)
            closeModal(closeQueryModalButton, queryModal)
            proceedButton(doneButton, queryModal, url)
        }
    })
}



// * Passbook Fill-out Line
// const fillLine = document.querySelectorAll('.p-fill')

// fillLine.forEach(p => {
//     const underline = document.createElement('p')
//     underline.classList.add('fill-line')
//     p.insertAdjacentElement('afterend', underline)
// })


// function countColumns(item, classname) {
//     count = 0

//     item.forEach(box => {
//         count ++
//         const spanNum = document.createElement('span')
//         spanNum.classList.add(classname)
//         spanNum.textContent = `${count}`
//         box.appendChild(spanNum)
//     })
// }

// // * Passbook Number of Days
// const cellNum = document.querySelectorAll('.box-cell.num')
// visible = 'visible'
// const cellNumHidden = document.querySelectorAll('.box-cell.hidden')
// hidden = 'hidden' 

// // * Visiible Numbers
// countColumns(cellNum, visible)
// // * Hidden Numbers
// countColumns(cellNumHidden, hidden)

// const passbookBack = document.querySelector('.page-2 .passbook')

// passbookBack.remove()
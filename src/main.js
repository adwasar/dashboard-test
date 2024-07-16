const sidebarNavItems = document.querySelectorAll('.sidebar__nav-item')
const paginationNavItems = document.querySelectorAll('.customers__pagination-btn')

const clearSelectedSidebarStatus = () => {
  sidebarNavItems.forEach((item) => {
    item.classList.remove('sidebar__nav-item--selected')
  })
}

const clearSelectedPaginationStatus = () => {
  paginationNavItems.forEach((item) => {
    item.classList.remove('customers__pagination-btn--selected')
  })
}

sidebarNavItems.forEach((item) => {
  item.addEventListener('click', () => {
    clearSelectedSidebarStatus()
    item.classList.add('sidebar__nav-item--selected')
  })
})

paginationNavItems.forEach((item) => {
  item.addEventListener('click', () => {
    clearSelectedPaginationStatus()
    item.classList.add('customers__pagination-btn--selected')

    const result = document.querySelector('.customers__pagination-btn--selected')
    console.log(result.innerText)
  })
})

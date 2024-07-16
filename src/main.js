const sidebarNavItems = document.querySelectorAll('.sidebar__nav-item')
const paginationNavItems = document.querySelectorAll('.customers__pagination-btn')
const sidebar = document.querySelector('.sidebar')
const burgerBtn = document.querySelector('.burger-btn')

let sidebarStatus = false

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

const openSideBar = () => {
  sidebarStatus = true
  burgerBtn.classList.add('burger-btn--open')
  sidebar.classList.add('sidebar--open')
}

const closeSidebar = () => {
  sidebarStatus = false
  burgerBtn.classList.remove('burger-btn--open')
  sidebar.classList.remove('sidebar--open')
}

sidebarNavItems.forEach((item) => {
  item.addEventListener('click', () => {
    clearSelectedSidebarStatus()
    closeSidebar()
    item.classList.add('sidebar__nav-item--selected')
  })
})

paginationNavItems.forEach((item) => {
  item.addEventListener('click', () => {
    clearSelectedPaginationStatus()
    item.classList.add('customers__pagination-btn--selected')
  })
})

burgerBtn.addEventListener('click', () => {
  sidebarStatus ? closeSidebar() : openSideBar()
})

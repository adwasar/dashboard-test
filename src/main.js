const sidebarNavItems = document.querySelectorAll('.sidebar__nav-item')

const clearSelectedStatus = () => {
  sidebarNavItems.forEach(item => {
    item.classList.remove('sidebar__nav-item--selected')
  })
}

sidebarNavItems.forEach(item => {
  item.addEventListener('click', () => {
    clearSelectedStatus();
    item.classList.add('sidebar__nav-item--selected')
  })
})
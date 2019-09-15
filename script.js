function switchSidebar() {
  if (document.querySelector('.strafe-sidebar-narrow')) {
    if (document.querySelector('.strafe-sidebar-narrow').style.display == 'none') {
      document.querySelector('.strafe-sidebar-narrow').style.display = 'flex';
      document.querySelector('.strafe-sidebar-wide').style.display = 'none';
      document.querySelector('.sidebar-toggle').style.transform = 'rotate(0deg)';
    }
    else {
      document.querySelector('.strafe-sidebar-narrow').style.display = 'none';
      document.querySelector('.strafe-sidebar-wide').style.display = 'flex';
      document.querySelector('.sidebar-toggle').style.transform = 'rotate(45deg)';
    }
  }
}
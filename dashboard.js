// Toggle sidebar items
document.querySelectorAll('.sidebar ul li').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.sidebar ul li').forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    const target = item.getAttribute('data-target');
    document.querySelectorAll('.main .card').forEach(card => {
      card.style.display = (card.classList.contains(target)) ? 'block' : 'none';
    });
  });
});

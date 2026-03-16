<<<<<<< HEAD
document.querySelectorAll(".hero-character").forEach(card => {
  card.addEventListener("click", () => {
    const target = card.dataset.target;
    window.location.href = `characters.html#${target}`;
  });
});
=======
document.querySelectorAll(".hero-character").forEach(card => {
  card.addEventListener("click", () => {
    const target = card.dataset.target;
    window.location.href = `characters.html#${target}`;
  });
});
>>>>>>> 3511ea7 (Initial commit with LFS assets)
//події для карток
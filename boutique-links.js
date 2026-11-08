document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('.product').forEach(card=>card.addEventListener('click',event=>{event.preventDefault();location.href='/produit.html?p='+encodeURIComponent(card.dataset.name)}));});


function init(){
    var checkboxes = [].slice.call(document.getElementsByTagName('input'));

  checkboxes.forEach(function(cb, i, checkboxes){
        cb.addEventListener('click', function(evt) {
            evt.target.parentNode.classList[ evt.target.checked ? 'add' : 'remove'] ('complete');
        }, false);
    });
    
}

init();
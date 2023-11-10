//this code we use it to change the src of the img with a new one using att('previous-src', new src)
// i definded the new src by alt value of the first img

$('img').click(function() {
 $(this).attr('src', $(this).attr('alt-pic')).width('100%');
 });


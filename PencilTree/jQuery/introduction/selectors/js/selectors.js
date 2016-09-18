// $('#click_me').click(function() {
//   alert('You clicked me :-)');
// });

// paragraph, p
// var p_text = $('#text').text();
// alert(p_text);

// input
// var name = $('#name').val();
// alert('Hello, ' + name);

// // Text selector
// $(':text').focusin(function() {
//   $(this).css('background-color', 'yellow');
// });
//
// // $(':text').focusout(function() {
// $(':text').blur(function() {    // possible
//   $(this).css('background-color', 'white');
// });


// A selector example with CSS
// $(':button').click(function() {
//   // $('p').css('background-color', 'black').css('color', 'white');
//   $('p').css('background-color', '#000').css('color', '#fff');
// });

// Confirm window
// $(window).unload(function() {     // doesn't work in Chrom/Safari
// $(window).on('beforeunload', function () {
//   var c = confirm('Do you want to leave?');
//
//   if (c) {
//     return true;
//   } else {
//     return false;
//   }
// });

// Multiple selectors
// $('#btn1').click(function() {
//   alert('Something was pressed/clicked!');
// });

// $('#para1').click(function() {
//   alert('Something was pressed/clicked!');
// });

$('#btn1, #para1').click(function() {
  alert('Something was pressed/clicked!');
});

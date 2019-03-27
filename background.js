console.log('background IS RUNNING');

$(document).ready( function() {
  console.log('we are in document ready')

  // $("#link").click(open);
  console.log( $('button')[2] );
  console.log( 'clicking button');

  // $('button')[2].click();

  $('#BUTTON_submit').click(add);


});

function add() {
  let name = document.getElementById("INPUT_name").value;
  let li = document.createElement("li");

  let t = document.createTextNode(name);

  li.id = 'LINK';
  // li.id = linkURL
  li.appendChild(t);

  document.getElementById("myLinks").appendChild(li);
}

//
// $(document).on("click", "p", function(e) {
//   console.log('we are in click p')
//
//   // get the link of the clicked p
//
//   var linkToOpen = $(this).attr('href');
//   console.log('Link to open: ' + linkToOpen)
//
//   // open(linkToOpen);
//   e.stopPropagation()
// })
//
// function open(URL) {
//   // open the link in a new tab
//   // press play
// }

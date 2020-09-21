document.addEventListener("keydown", cacheKeyHandler, false);

async function cacheKeyHandler(e) {
  keepGoing = true
  if (e.code === 'KeyC') {
    while(keepGoing) {
      nextPage();
      await sleep(250);
    }
  }
  if (e.code === 'KeyD') {
    // stop the caching
    // TODO
    keepGoing = false
  }
}
function nextPage() {

  var inputs = document.getElementsByTagName('a');
  steps = Array.from(inputs)
  steps.forEach(function(element){
    data = element.className.toString()
    //console.log(data)
    if (data.includes("cardNext")){
      element.click()
    }
  });
  // TODO: wait for page to load
  
  // log something
  console.log("end of loop body")
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

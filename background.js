document.addEventListener("keydown", cacheKeyHandler, false);

async function cacheKeyHandler(e) {
  keepGoing = true
  if (e.code === 'KeyJ') {
    while(keepGoing) {
      nextPage();
      await sleep(250);
      console.log("gitbook-cache-all: end of loop body")
    }
  }
  if (e.code === 'KeyK') {
    // stop the caching
    console.log("gitbook-cache-all: K key pressed - stopping the loop")
    keepGoing = false
  }
}
function nextPage() {

  const inputs = document.getElementsByTagName('a');
  const steps = Array.from(inputs)
  steps.forEach(function(element){
    const data = element.className.toString()
    //console.log(data)
    if (data.includes("cardNext")){
      element.click()
    }
  });
  // TODO: wait for page to load / finish rendering?
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

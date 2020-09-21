document.addEventListener("keydown", cacheKeyHandler, false);

async function cacheKeyHandler(e) {
  let keepGoing = true
  if (e.code === 'KeyC') {
    while(keepGoing) {
      nextPage();
      await sleep(250);
      console.log("gitbook-cache-all: end of loop body")
    }
  }
  if (e.code === 'KeyD') {
    // stop the caching
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

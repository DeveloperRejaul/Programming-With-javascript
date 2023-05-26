/**
 * !!Why need debouncing :: jokon kono nirdisto somoye onek golo call asar bombabona take, tokon er moddo teke just akta call ke receive kura huy , tokonoy debouncing function ke vebo har kurte huy
 */
// Example
let timeoutId;
function myFnc() {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    console.log("hello");
  }, 5000);
}

myFnc();
myFnc();
myFnc();
myFnc();
myFnc();

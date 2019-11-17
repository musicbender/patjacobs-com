export const requestAnimFrame = (() => {
	return window.requestAnimationFrame       ||
		window.webkitRequestAnimationFrame ||
		function(callback: any, element: any) {
			window.setTimeout(callback, 1000 / 60);
		};
})();

export const requestInterval = (fn: any, delay: number): any => {
  var start = Date.now();
  var data: any = {};
  data.id = requestAnimationFrame(loop);

  return data;

  function loop() {
    data.id = requestAnimationFrame(loop);

    if (Date.now() - start >= delay) {
      fn();
      start = Date.now();
    }
  }
}

export const clearRequestInterval = (data: any): void => {
  cancelAnimationFrame(data.id);
}

export const requestTimeout = function(fn: any, delay: number): any {
	if(!window.requestAnimationFrame &&!window.webkitRequestAnimationFrame)
		return window.setTimeout(fn, delay);

	var start = new Date().getTime(),
		handle: any = new Object();

	function loop(){
		var current = new Date().getTime(),
			delta = current - start;

		delta >= delay ? fn.call() : handle.value = requestAnimFrame(loop);
	};

	handle.value = requestAnimFrame(loop);
	return handle;
};

export const clearRequestTimeout = function(handle: any): void {
  window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) :
  window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(handle.value) :
  clearTimeout(handle);
}

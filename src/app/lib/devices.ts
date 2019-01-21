
export class Devices {

	static isMobile() : boolean {
		return /Android|iPhone/i.test(window.navigator.userAgent)
	}

	static openFullscreen(elem : HTMLElement) : void {
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem['mozRequestFullScreen']) {
			elem['mozRequestFullScreen']();
		} else if (elem['webkitRequestFullscreen']) {
			this['webkitRequestFullscreen']();
		} else if (elem['msRequestFullscreen']) {
			elem['msRequestFullscreen']();
		}
	}

	static closeFullscreen(document : any) {
		if (document.exitFullscreen) {
		  document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
		  /* Firefox */
		  document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
		  /* Chrome, Safari and Opera */
		  document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) {
		  /* IE/Edge */
		  document.msExitFullscreen();
		}
	  }

}
$(document).ready(function () {
	$(".rw-launcher__btn, .rw-overflow__close").on("click", function () {

		let source = $(this).parent(".rw-launcher").attr('id'),
			targetFrame = document.getElementById('media');

		if(source != '') {
			switch (source) {
				case 'task1': 
					targetFrame.src = "https://www.youtube.com/embed/0PtXMudwZh0";
					console.log(targetFrame);
					break;
				case 'melody1': 
					targetFrame.src = "https://www.youtube.com/embed/4kQAKTY8_Uo";
					break;
				case 'melody2': 
					targetFrame.src = "https://www.youtube.com/embed/eMXvpMBip-A";
					break;
			}
		};

		$(".rw-overflow").hasClass("rw-overflow_state_open") == true ? removeClass() : addClass();
	});
});

addClass = () => {
	$(".rw-overflow").addClass("rw-overflow_state_open");
};

removeClass = () => {
	$(".rw-overflow").removeClass("rw-overflow_state_open");
}
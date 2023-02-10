window.onload = function() {
	var tabControlBtn = document.querySelectorAll(".tab-control-btn"); //lấy tất cả các nút
	var tabFormLogin = document.querySelector(".login-form"); //lấy nút login
	var tabFormRegister = document.querySelector(".register-form"); //lấy nút register


	// lặp qua từng nút 
	tabControlBtn.forEach(function(element, index) {
		// thêm sự kiện click cho từng nút lặp qua
		element.addEventListener("click", function() {
			// nếu nút đó tồn tại class là login 
			if (element.classList.contains("login")) {
				// thêm class active vào nút login
				tabFormLogin.classList.add("active");
				// xoá class active ở nút register
				tabFormRegister.classList.remove("active");
			} else {
				tabFormRegister.classList.add("active");
				tabFormLogin.classList.remove("active");
			}
			tabControlBtn.forEach(function(element) {
				element.classList.remove("active");
			});
			this.classList.add("active");
		});
	});

	
}
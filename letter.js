const letterImgs = document.querySelectorAll(".letter");

letterImgs.forEach(img => {
    img.addEventListener("click", e => {
        // Ẩn tất cả các .letter
        letterImgs.forEach(item => item.style.display = "none");

        // Hiển thị phần tử thay thế
        document.querySelector(".replacement").style.display = "block";
        document.getElementById("play-read").style.display = "inline-block";

        // Phát âm thanh intro khi người dùng nhấn vào lá thư
        const intro = document.getElementById("intro-audio");
        intro.play(); // Bắt đầu phát âm thanh intro
    });
});

let savedIntroTime = 0; // biến lưu thời gian đang phát của intro

window.onload = function () {
  const intro = document.getElementById("intro-audio");
  intro.loop = true; // Đảm bảo intro phát lặp lại khi trang tải
  intro.play();
};

document.getElementById("play-read").addEventListener("click", function () {
  const intro = document.getElementById("intro-audio");
  const read = document.getElementById("read-audio");

  // Lưu thời điểm hiện tại
  savedIntroTime = intro.currentTime;

  // Dừng intro
  intro.pause();

  // Phát âm thanh read
  read.play();
});

document.getElementById("read-audio").addEventListener("ended", function () {
  const intro = document.getElementById("intro-audio");

  // Phát lại intro từ thời điểm đã dừng
  intro.currentTime = savedIntroTime;
  intro.play();
});

// Ngăn zoom bằng Ctrl + cuộn chuột
window.addEventListener('wheel', function (e) {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  }, { passive: false });

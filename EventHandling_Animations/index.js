$(document).ready(function () {
    // Hover event
    $(".arrows button").mouseover(function () {
      $(this).css({
        color: "#555",
      });

      $(this).parent().css({
        "background-color": "#eee4",
      });
    });

    $(".arrows button").mouseleave(function () {
      $(this).css({
        color: "#fff",
      });

      $(this).parent().css({
        "background-color": "transparent",
      });
    });

    // Initial State
    let itemSliders = $(".carousel .list .item");
    for (let i = 0; i < itemSliders.length; i++) {
      if (i === 0) {
        itemSliders.eq(i).css({
          "z-index": "1",
        });
        itemSliders.eq(i).children(".content").children().slideDown(1000);
      } else {
        itemSliders.eq(i).css({
          "z-index": "-1",
        });
        itemSliders.eq(i).children(".content").children().css({
          display: "none",
        });
      }
    }

    // Click button next
    let nextButton = $("#next");
    let listItem = $(".carousel .list");
    let listThumbnail = $(".carousel .thumbnail");

    // Click next button
    nextButton.click(function () {
      let itemSliders = $(".carousel .list .item");
      let itemThumbnails = $(".carousel .thumbnail .item");

      // Handle item slider animation
      for (let i = 0; i < itemSliders.length; i++) {
        if (i === 1) {
          itemSliders.eq(i).css({
            "z-index": "1",
          });

          // Animation show item content
          itemSliders.eq(i).children(".content").children().slideDown(1000);

          // Transform image to thumbnail
          itemSliders.eq(i).children("img").css({
            width: "150px",
            height: "220px",
            position: "absolute",
            left: "50%",
            bottom: "50px",
            "border-radius": "20px",
          });

          // Animation transform image back to normal
          itemSliders.eq(i).children("img").animate(
            {
              left: "0",
              bottom: "0",
              width: "100%",
              height: "100%",
            },
            500,
            "linear"
          );
        } else {
          itemSliders.eq(i).css({
            "z-index": "-1",
          });
          itemSliders.eq(i).children(".content").children().hide();
        }
      }

      // Handle item thumbnail animation
      $({ x: 150 }).animate(
        { x: 0 },
        {
          duration: 500,
          easing: "linear",
          step: function (now) {
            $(".thumbnail").css({
              transform: "translateX(" + now + "px)",
            });
          },
        }
      );

      listItem.append(itemSliders.eq(0));
      listThumbnail.append(itemThumbnails.eq(0));
    });
  });
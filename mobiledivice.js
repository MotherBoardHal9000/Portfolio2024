if (matchMedia("only screen and (max-width: 768px)").matches) {
  let x = 0;
  let y = 0;

  let scrollNum = 0;
  let dimd = document.getElementById("dimd");
  const coverHeight = window.innerHeight;
  window.addEventListener("scroll", (addEventListener) => {
    scrollNum = window.scrollY;
    documentHeight =
      document.body.scrollHeight + coverHeight - window.innerHeight;
    dimd.style.backgroundColor = `rgba(11, 18, 21, ${
      (2.55 + scrollNum) / 500
    })`;
  });

  const percent = (num, totalNum) => {
    return ((num / totalNum) * 100).toFixed(0);
  };

  //Gsap 걸면 되려 섹션이랑 중첩됨 걸지말것.
  //Gsap end
  const listStyleChangeStartY = 1300;
  const listStyleChangeStartEndY = 2320;

  const listItems = document.querySelectorAll(".list-item");

  const division =
    (listStyleChangeStartEndY - listStyleChangeStartY) / listItems.length;

  //
  //
  const fixedDescriptionAppearTiming = 9010;
  const fixedDescriptionAppearEnds = 9180;
  const fixedDescription = document.getElementById("fixedDescription");
  const sec05 = document.getElementById("sec05");
  const sec05Contents = document.getElementById("sec05Contents");
  const sec06 = document.getElementById("sec06");
  const sec06Contents = document.getElementById("sec06Contents");

  //
  //
  //
  function centerElement(elementId) {
    const element = document.getElementById(elementId);
    const parent = element.parentElement;

    if (
      window.scrollY >
      parent.offsetTop -
        (document.documentElement.clientHeight - element.offsetHeight) / 2
    ) {
      element.style.position = "fixed";
      element.style.top = "50%";
      element.style.left = "50%";
      element.style.transform = "translate(-50%, -50%)";
    } else {
      element.style.position = "relative";
      element.style.top = "initial";
      element.style.left = "initial";
      element.style.transform = "initial";
    }
  }
  //
  //
  //
  //

  window.addEventListener("scroll", function (addEventListener) {
    console.log("over"); //콘솔창에 스크롤 높이를 구하는 방법이다 3476.
    console.log(window.scrollY);
    if (document.getElementById("on"))
      document.getElementById("on").removeAttribute("id");
    if (
      window.scrollY > listStyleChangeStartY &&
      window.scrollY < listStyleChangeStartEndY
    ) {
      const targetIndex = Math.round(
        (window.scrollY - listStyleChangeStartY) / division
      );

      if (listItems[targetIndex]) listItems[targetIndex].id = "on";
    }

    const scrollYBottom =
      window.scrollY + window.document.documentElement.clientHeight;

    if (
      scrollYBottom > panel1Img.offsetTop &&
      scrollYBottom < panel1Img.offsetTop + panel1Img.offsetHeight + 100
    ) {
      const translateX =
        390 -
        (390 * 1.3 * (scrollYBottom - panel1Img.offsetTop)) /
          (panel1Img.offsetHeight + 100);
      panel1Img.style.transform = `translate(${translateX}px)`;
    }

    centerElement("sec05Contents", "sec05");

    if (
      window.scrollY >
      sec05.offsetTop +
        sec05.offsetHeight -
        (sec05Contents.offsetHeight +
          (document.documentElement.clientHeight - sec05Contents.offsetHeight) /
            2)
    ) {
      sec05Contents.style.position = "relative";
      sec05Contents.style.top = "initial";
      sec05Contents.style.left = "initial";
      sec05Contents.style.transform = `translateY(${
        sec05.offsetHeight - sec05Contents.offsetHeight
      }px)`;
    }

    if (
      window.scrollY > fixedDescriptionAppearTiming &&
      window.scrollY < fixedDescriptionAppearEnds
    ) {
      fixedDescription.style.transform = `translateY(${
        fixedDescriptionAppearEnds - window.scrollY
      }px)`;

      fixedDescription.style.opacity =
        (window.scrollY - fixedDescriptionAppearTiming) / 1000;
    } else if (window.scrollY > fixedDescriptionAppearEnds) {
      fixedDescription.style.transform = `translateY(0px)`;
      fixedDescription.style.opacity = 1;
    } else {
      fixedDescription.style.transform = `translateY(300px)`;
      fixedDescription.style.opacity = 0;
    }

    centerElement("sec07Contents", "sec07");
  });

  ///////
  ///////
}
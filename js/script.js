const editor = document.getElementsByClassName("editor")[0];
const toolbar = editor.getElementsByClassName("toolbar")[0];
const buttons = toolbar.querySelectorAll(".alpha-editor:not(.has-submenu)");
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];

  // button.addEventListener("click", function (e) {
  //   $(this).toggleClass('active');
  //   $(this).parent().parent().parent().find('.content-area').find('.visuell-view').focus();
  //   let action = this.dataset.action;
  //   console.log(action)
  //   switch (action) {
  //     case "code":
  //       execCodeAction(this, editor);
  //       break;
  //     case "createLink":
  //       execLinkAction();
  //       break;
  //     default:
  //       execDefaultAction(action);
  //   }
  // });
}

$('.alpha-editor').click("click", function (e) {
    $(this).toggleClass('active');
    $(this).parent().parent().parent().find('.content-area').find('.visuell-view').focus();
    let action = this.dataset.action;
    console.log(action)
    switch (action) {
      case "code":
        execCodeAction(this, editor);
        break;
      case "createLink":
        execLinkAction();
        break;
      default:
        execDefaultAction(action);
    }
});

function execCodeAction(button, editor) {
  const contentArea = editor.getElementsByClassName("content-area")[0];
  const visuellView = contentArea.getElementsByClassName("visuell-view")[0];
  const htmlView = contentArea.getElementsByClassName("html-view")[0];

  if (button.classList.contains("active")) {
    // show visuell view
    visuellView.innerHTML = htmlView.value;
    htmlView.style.display = "none";
    visuellView.style.display = "block";

    button.classList.remove("active");
  } else {
    // show html view
    htmlView.innerText = visuellView.innerHTML;
    visuellView.style.display = "none";
    htmlView.style.display = "block";

    button.classList.add("active");
  }
}

function execDefaultAction(action) {
  document.execCommand(action, false);
}

/**
 *  this function for change type of input
 */
$(document).ready(function () {
  $("input[type=radio][name=type]").change(function () {
    var parent = $(this).parent().parent();
    var image = parent.parent().find('.content-area').find(".image-field");
    var editorView =  parent.parent().find('.content-area').find(".visuell-view");
    var toolbar = parent.find(".toolbar");

    if (this.value == "text") {
      toolbar.toggle();
      editorView.toggle();
      image.toggle();
      
      
    } else if (this.value == "picture") {
      toolbar.toggle();
      editorView.toggle();
      image.toggle();
      
    }
  });
  
  
  $('.checkbox--item').change(function() {
      if(this.checked) {
          $(this).parent().parent().find('input.visuell-view.padding-left--15').prop("disabled", false);
      }
      else {
         $(this).parent().parent().find('input.visuell-view.padding-left--15').prop("disabled", true).val('');
      }
    });
});




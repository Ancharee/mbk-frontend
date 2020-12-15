$(document).ready(function () {
	
	$(document).on("click", ".alpha-editor", function (e) {
		$(this).toggleClass("active");
		$(this)
			.parent()
			.parent()
			.parent()
			.find(".content-area")
			.find(".visuell-view")
			.focus();
		let action = this.dataset.action;
		console.log(action);
		
		execDefaultAction(action);
	});
	
	function execDefaultAction(action) {
		document.execCommand(action, false);
	}
	
	/**
	 *  this function for change type of input
	 */
	
	$(document).on("change", "input[type=radio].form-check-input", function () {
		const image = $(this).parents(".editor").find(".image-field");
		const toolbar = $(this).parents(".editor").find(".toolbar");
		const editorView = $(this).parents(".editor").find(".visuell-view");
		const minMaxForm = $(this).parents(".editor").find(".width-50");
		
		toolbar.toggle();
		editorView.toggle();
		image.toggle();
		minMaxForm.toggle();
	});
	
	$("input[type=radio][name=type]").change(function () {
		var parent = $(this).parent().parent();
		var image = parent.parent().find(".content-area").find(".image-field");
		var editorView = parent
			.parent()
			.find(".content-area")
			.find(".visuell-view");
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
	
	$(".checkbox--item").change(function () {
		if (this.checked) {
			$(this)
				.parent()
				.parent()
				.find("input.visuell-view.padding-left--15")
				.prop("disabled", false);
		} else {
			$(this)
				.parent()
				.parent()
				.find("input.visuell-view.padding-left--15")
				.prop("disabled", true)
				.val("");
		}
	});
	
	
	$(document).on('click', '.file-upload-browse', function () {
		var file = $(this).parent().parent().parent().find('.file-upload-default');
		file.trigger('click');
	});
	$(document).on('change', '.file-upload-default', function () {
		$(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
	});
	
	
	$(document).on('click', '.delete-icons-file', function () {
		const parent = $(this).parents('.form-group');
		parent.find('input').val(null)
	});
	
	$(document).on('click', '.up,.down', function () {
		const row = $(this).parents('li:first');
		if ($(this).is('.up')) {
			row.insertBefore(row.prev());
		} else {
			row.insertAfter(row.next());
		}
	});
	
	$(document).on('click', '.toolbar-right__item--add', function () {
		$(this).parents('li:first').find('ul.space:first').append(getHtmlCreateTemplate());
	});
	
	$(document).on('click', '.toolbar-right__item--delete', function () {
		$(this).parents('li:first').remove();
	});
	
	
	function getHtmlCreateTemplate() {
		var count = Math.floor(Math.random() * 101000);
		return `<li class="route">
          <div class="item">
            <div class="editor">
              <div class="container-select-type">
                <div class="select-type">
                  <label class="form-check-label" for="text-add-0${count + 1}">
                     <input type="radio" class="form-check-input" name="type-${count + 1}" checked id="text-add-0${count + 1}" value="text"/>
                     <span class="span-radio"></span>ข้อความ
                    </label>
                    <label class="form-check-label" for="picture-add-0${count + 1}">
                      <input type="radio" class="form-check-input" name="type-${count + 1}" id="picture-add-0${count + 1}" value="picture"/>
                      <span class="span-radio"></span>รูปภาพ
                    </label>
                  </div>
                  <div class="toolbar show">
                    <div class="line">
                      <div class="box">
                        <button class="alpha-editor" data-action="bold" title="Bold">B</button>
                        <button class="alpha-editor italic" data-action="italic" title="Italic">I</button>
                        <button class="alpha-editor underline" data-action="underline" title="Underline">U</button>
                      </div>
                    </div>
                  </div>
                  <div class="toolbar-right">
                    <div class="toolbar-right__item toolbar-right__item--add">เพิ่มหัวข้อ</div>
                    <div class="toolbar-right__item toolbar-right__item--delete">ลบ</div>
                    <div class="toolbar-right__item toolbar-right__item--sort">
                        <img class="icon-arrow-sort icon-arrow-sort--left up" src="images/arrow-up.png"/>
                        <img class="icon-arrow-sort icon-arrow-sort--right down" src="images/arrow-down.png"/>
                    </div>
                  </div>
                </div>
                <div class="content-area">
                  <div class="image-field">
                    <div class="form-group">
                      <input type="file" name="img[]" class="file-upload-default">
                      <div class="input-group col-6">
                        <span class="input-group-append">
                          <button class="file-upload-browse btn btn-primary" type="button">+ เพิ่ม</button>
                        </span>
                        <img class="delete-icons-file" src="images/icon-delete-file.svg">
                        <input type="text" class="form-control file-upload-info" disabled="" placeholder="Upload Image">
                      </div>
                    </div>
                  </div>
                  <div class="container-content-area">
                    <input class="visuell-view width-small" name="text" value="-" />
                    <div class="visuell-view width-large" contenteditable></div>
                    <div class="width-50">
                      <label class="form-check-label" for="check-add-${count + 11}">
                          <input type="checkbox" class="form-check-input checkbox--item" name="type-add-${count + 1}" id="check-add-${count + 1}" value="picture"/>
                          <span class="span-radio"></span>วงเงิน
                      </label>
                       <input class="visuell-view padding-left--15" name="min-money" disabled="true" placeholder="ต่ำสุด" />
                       <input class="visuell-view padding-left--15" name="max-money" disabled="true" placeholder="สูงสุด"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul class="space"></ul>
          </li>
        `
	}
});

var xing = xing || {};
xing.jira = xing.jira || {};

xing.jira.Application = (function ($) {

  'use strict'; // jslint

  function clickOutsidePopupHandler(event) {
    var $target = $(event.target),
      $container = $target.hasClass('gm-container') && $target || $target.parents('.gm-container')
    ;
    // remove popup is mouse clicked outside the popup
    if (!$container[0]) {
      hidePopup();
    }
  }

  function hidePopup(argument) {
    $('#gm-popup').remove();
    // jQuery 1.7+
    $(document).unbind('click', clickOutsidePopupHandler);
    // $(document).off('click', clickOutsidePopupHandler);
  }

  function addButton() {
    if ($('.gm-show-popup')[0]) {
      return false;
    }

    var $wrapper = $('<li class="toolbar-item"></li>'),
      $button = $('<a href="#print" class="gm-show-popup toolbar-trigger">Print Card</a>'),
      $toolbars = $('.toolbar-group')
    ;

    $($toolbars[$toolbars.length - 1]).append($wrapper.append($button));

    $button.bind('click', function (event) {
    // jQuery 1.7+
    // $toolbars.on('click', '.gm-show-popup', function (event) {
      event.preventDefault();
      module.showPopup();
      // assign event listener after this click
      setTimeout(function () {
        $(document).click(clickOutsidePopupHandler);
        // jQuery 1.7+
        // $(document).on('click', clickOutsidePopupHandler);
      }, 1);
    });
  }

  function updateHTML() {
    $('#gm-popup').remove();
    var builder = xing.jira.TableBuilder,
      format = xing.jira.tableFormat(xing.jira.DataCollector.data)
    ;

    $('body').append(
      $('<div id="gm-popup">'
        + '<div class="gm-container aui-popup box-shadow">'
          + '<h2 class="aui-popup-heading">Print preview</h2>'
          + '<div class="aui-popup-content">'
            + '<div class="form-body">'
              + builder.build(format)
            + '</div>'
            + '<div class="buttons-container form-footer">'
              + '<div class="buttons">'
                + '<button class="gm-print aui-button">Print</button>'
                + '<a class="gm-cancel cancel" href="#">Cancel</a>'
              + '</div>'
            + '</div>'
          + '</div>'
        + '</div>'
        + '<div class="aui-blanket"></div>'
      + '</div>'
      )
    );
  }

  var module = {

    addStyle: function (css) {
      var head,
        style = document.getElementById('gm-style')
      ;

      head = document.getElementsByTagName('head')[0];

      if (!style) {
        if (!head) {
          return;
        }
        style = document.createElement('style');
        style.setAttribute('id', 'gm-style');
        style.type = 'text/css';
        style.media = 'screen,print';
        head.appendChild(style);
      }
      style.innerHTML += css + '\n';
    },

    showPopup: function () {

      if ($('#gm-popup')[0]) {
        return false;
      }
      // register observer
      xing.jira.DataCollector.subscribe(this);

      updateHTML();

      $('body')
        .on('click', '.gm-print', function (event) {
          event.preventDefault();
          window.print();
          hidePopup();
        })
        .on('click', '.gm-cancel', function (event) {
          event.preventDefault();
          hidePopup();
        })
        .on('click', '#gm-add-collaborator', function () {
          xing.jira.DataCollector.addCollaborators();
        })
      ;
    },

    update: function () {
      updateHTML();
    },

    init: function (css) {
      module.addStyle(css);
      addButton();
    }


  };

  return module;

}(jQuery));
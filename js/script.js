'use strict';

{
 //固定ヘッダー分の高さを考慮してそれを引いた分のエリアを割り出す場合
 // #から始まるURLがクリックされた時

  $(function(){
    $('a[href^="#"]').click(function(){
      let header = $(".header").innerHeight(); 
      let speed = 500;
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = $(target).offset().top - header;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
    
    //MODAL
    // モダールを開く
    // $('.js-modal-open').click(function(e) {
    //   e.preventDefault();
    //   //data-以下が「target」になってる属性の値（for-modal）を取得
    //   let target = jQuery(this).data("target");
    //   //targetの値と同じクラス名を持った要素にis-showを追加
    //   $('.' + target).addClass( 'is-show' );
    
    // return false;
    // });
    
    // //モーダル を閉じる
    // $('.js-modal-close').click(function(e) {
    // e.preventDefault();
    // //data-以下が「target」になってる属性の値（for-modal）を取得
    // let target = jQuery(this).data("target");
    // //targetの値と同じクラス名を持った要素にis-showを追加
    // $('.' + target).removeClass( 'is-show' );
    
    // return false;
    // });

    //一定一までスクロールしたらアイテムを表示させる
    const pageTop = $('.page-top');
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pageTop.fadeIn();
       } else {
            pageTop.fadeOut();
            }
       });
       pageTop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
              return false;
   });

  //非同期通信：Google　Formへ結果送信された後のメッセージ表示
    // let $form = $( '#js-form' )
    // $form.submit(function (e) {
    //   $.ajax ({
    //     url: $form.attr('action'),
    //     data: $form.serialize(),
    //     type: "POST",
    //     dataType: "xml",
    //     statusCode: {
    //       0: function () {
    //         //送信に成功したときの処理
    //         $form.slideUp()
    //         $( '#js-success' ).slideDown()
    //       },
    //       200: function () {
    //         //送信に失敗したときの処理
    //         $form.slideUp()
    //         $( '#js-error' ).slideDown()
    //       }
    //     },

    //   });
    //   return false;
    // });
  });


    //wow適用のために記入する内容
    new WOW().init();


    //****************YouTube*************************
    $(function(){
      //再生ボタンがクリックされたらビデオを再生
      $("#play").on("click", function(){
        videoControl("playVideo"); 
        //再生ボタンがクリックされたらevent__infoを隠す
      $('.event__pause').addClass('is-active');
      $('.event__info').addClass('is-hidden');
      return false;
      });

      $("#pause").on("click", function(){
        videoControl("pauseVideo");
        $('.event__info').removeClass('is-hidden');
        return false;
      });
      
      function videoControl(action){ 
        var $playerWindow = $('#popup-YouTube-player')[0].contentWindow;
        $playerWindow.postMessage('{"event":"command","func":"'+action+'","args":""}', '*');

      }
    });
    
    $(function(){
      //再生ボタンがクリックされたらビデオを再生
      $("#play2").on("click", function(){
        videoControl("playVideo"); 
        //再生ボタンがクリックされたらevent__infoを隠す
      $('.event__pause2').addClass('is-active');
      $('.event__info2').addClass('is-hidden');
      return false;
      });

      $("#pause2").on("click", function(){
        videoControl("pauseVideo");
        $('.event__info2').removeClass('is-hidden');
        return false;
      });
      
      function videoControl(action){ 
        var $playerWindow = $('#popup-YouTube-player2')[0].contentWindow;
        $playerWindow.postMessage('{"event":"command","func":"'+action+'","args":""}', '*');

      }
    });


}

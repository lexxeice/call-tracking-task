$(function(){

  $('.phone-code').html('+375 ').append('<b>(29)</b>')
  $('.phone-code b').css({'font-size':'50%'})

  $('.header-contacts').html($('.header-contacts').html().replace('(Velcom)',''))

  var full_phone = $('.header-contacts').html().match(/.+\s*\S*\d{3}/)[0]

  $('.header-contacts').html($('.header-contacts').html().replace(full_phone, '')).prepend(`<div class=phone>${full_phone}</div>`)
  $('.phone').css({'padding-bottom':'10px'})

  var phone = $('.header-contacts').text().match(/\d{2}-\d{2}-\d{3}/)[0].replace(/-/g,'').split('')
  var correct_phone = phone[0] + phone[1] + phone[2] + "-" + phone[3] + phone[4] + "-" + phone[5] + phone[6]

  $('.header-contacts').html($('.header-contacts').html().replace(/\d{2}-\d{2}-\d{3}/, correct_phone))

});

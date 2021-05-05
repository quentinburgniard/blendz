window.addEventListener(
  'message',
  function(event) {
    if (event.data.event && event.data.event == 'calendly.event_type_viewed') {
      console.log('loaded');
    }
  }
)
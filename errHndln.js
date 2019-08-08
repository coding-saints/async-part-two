
try {
    console.log('try');
    ( 'try' );
    if (confirm('Make an error?')) BAD_CODE();
  } catch (e) {
    console.log('try');
    ( 'catch' );
  } finally {
    console.log('try');
    ( 'finally' );
  }
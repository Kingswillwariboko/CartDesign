// export const handlePayment = (email, phonenumber, amount) => {
//     const handler = PaystackPop.setup({
//         key: 'pk_live_bff6985b4456f2475dd230d27bcc7b61fd3fd38a', // Replace with your public key
//         email,
//         amount: amount * 100,
//         onClose: function(){
//           alert('Window closed.');
//         },
//         callback: function(response){
//           let message = 'Payment complete! Reference: ' + response.reference;
//           alert(message);
//         }
//       });
    
//       handler.openIframe();
// }
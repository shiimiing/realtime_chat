var socket = io();

socket.on("send", (data) => {
    element = '<div class="d-flex justify-content-start mb-4"><div class="img_cont_msg"><img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg"></div><div class="msg_cotainer">'+ data +'<span class="msg_time">9:12 AM, Today</span></div></div>'
    $(".msg_card_body").append(element)
})
function send(){
    message = $(".type_msg").val();
    $(".type_msg").val("");
    //Send message to server
    socket.emit("msg", message);
    element = '<div class="d-flex justify-content-end mb-4"><div class="img_cont_msg"><img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg"></div><div class="msg_cotainer">'+ message +'<span class="msg_time">9:12 AM, Today</span></div></div>'
    $(".msg_card_body").append(element)
}
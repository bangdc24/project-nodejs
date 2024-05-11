export const transValidation = {
    email_incorrect: "Email phải thuộc dạng demo@gmail.com",
    password_incorrect: "Mật khẩu phải có ít nhất 8 ký tự, và phải chứa ít nhất một ký tự chữ thường, một ký tự chữ hoa, một chữ số, và một ký tự đặc biệt.",
    password_confirmation_incorrect: "Nhập lại mật khẩu chưa chính xác"
};

export const transError = {
    accout_in_use: "Email này đã được sử dụng",
    accout_removed: "tài khoản này đã bị gỡ khỏi hệ thống, nếu tin rằng điều này là hiểu nhầm , vui lòng liên hệ chúng tôi",
    accout_not_active: "Email này đã được đăng kí nhưng chưa active tài khoản , vui lòng kiểm tra email của bạn",
}

export const transSuccess = {
    userCreated: (userEmail) =>{
        return`Tài khoản <strong>${userEmail}</strong> đã được tạo , vui lòng kiểm tra email của để active`
    }
}

export const transMail = {
    subject: "Awesome Chat : xác thực tài khoản ",
    template: (linkVerify) => {
        return`
            <h2>Bạn nhận được email này vì đã đăng kí tài khoản trên ứng dụng web chat.</h2>  
            <h3>VUi lòng click vào liên kết bên dưới để xác thực tài khoản</h3>
            <h3><a href="${linkVerify}" target="blank">${linkVerify}</a></h3>
            <h4>Nếu tin rằng email này là nhẫm lẫn hãy bỏ qua nó . Trân trọng</h4>
        `;
    },
    send_failed: "Có lỗi trong quá trình gửi email vui lòng liên hệ với bộ phận hỗ trợ của chúng tôi"

}
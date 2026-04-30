<!DOCTYPE html>
<html>
<head>
    <title>Reset Password Anda</title>
</head>
<body style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 500px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
        <h2 style="color: #007bff; text-align: center;">Permintaan Reset Password</h2>
        <p style="color: #333333; font-size: 16px;">Halo,</p>
        <p style="color: #333333; font-size: 16px;">Kami menerima permintaan untuk mengatur ulang kata sandi (password) akun Pet Adoption Anda. Silakan gunakan kode OTP berikut untuk membuat password baru:</p>

        <div style="text-align: center; margin: 30px 0;">
            <span style="font-size: 32px; font-weight: bold; color: #ffffff; background-color: #007bff; padding: 10px 20px; border-radius: 5px; letter-spacing: 5px;">
                {{ $otp }}
            </span>
        </div>

        <p style="color: #333333; font-size: 14px;"><em>Jika Anda tidak pernah meminta reset password, abaikan saja email ini. Akun Anda tetap aman.</em></p>

        <p style="color: #777777; font-size: 14px; text-align: center; margin-top: 30px;">
            <em>Kode OTP ini akan kedaluwarsa dalam 10 menit.</em>
        </p>
    </div>
</body>
</html>

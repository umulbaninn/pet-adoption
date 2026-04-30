<!DOCTYPE html>
<html>
<head>
    <title>Kode OTP Anda</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
    <div style="max-width: 500px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
        <h2 style="color: #ff8b3d; text-align: center;">Selamat Datang!</h2>
        <p style="color: #333333; font-size: 16px;">Halo,</p>
        <p style="color: #333333; font-size: 16px;">Terima kasih telah mendaftar. Untuk melanjutkan proses pendaftaran dan mulai mencari hewan peliharaan impianmu, silakan gunakan kode OTP berikut:</p>
        
        <div style="text-align: center; margin: 30px 0;">
            <span style="font-size: 32px; font-weight: bold; color: #ffffff; background-color: #ff8b3d; padding: 10px 20px; border-radius: 5px; letter-spacing: 5px;">
                {{ $otp }}
            </span>
        </div>

        <p style="color: #777777; font-size: 14px; text-align: center;">
            <em>Kode OTP ini akan kedaluwarsa dalam 10 menit. Jangan beritahu kode ini kepada siapapun.</em>
        </p>
    </div>
</body>
</html>
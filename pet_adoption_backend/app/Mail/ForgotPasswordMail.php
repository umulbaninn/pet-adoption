<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ForgotPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    public $otp;

    public function __construct($otp)
    {
        $this->otp = $otp;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Penting: Kode Reset Password Pet Adoption', // Subjek emailnya beda
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.forgot_password', // Mengarah ke file HTML yang baru kita buat
        );
    }

    public function attachments(): array
    {
        return [];
    }
}

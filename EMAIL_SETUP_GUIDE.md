# Contact Form Email Setup Guide

Aapka contact form ka backend already ready hai! Bas aapko email credentials setup karni hain.

## Required Setup Steps:

### 1. Gmail App Password Setup
1. **Gmail account me 2-Step Verification enable karein:**
   - Google Account settings (myaccount.google.com) me jaye
   - Security > 2-Step Verification pe click karein
   - Agar already enabled nahi hai to enable karein

2. **App Password generate karein:**
   - Security section me "App passwords" pe click karein
   - "Select app" me "Mail" choose karein
   - "Select device" me "Other" choose karein aur "Portfolio Website" likh kar Enter karein
   - 16-character password generate hoga - ye copy kar lein

3. **Environment variables set karein:**
   - `.env.local` file me apna Gmail address aur App Password add karein:
   ```
   EMAIL_ADDRESS=your-email@gmail.com
   GMAIL_PASSKEY=your-16-character-app-password
   ```

### 2. App URL Setup
Development ke liye:
```
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Production ke liye apna actual domain:
```
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## How It Works:

Jab koi aapko contact form se message karega:
1. ✅ Message aapke Gmail pe email ke through ayega
2. ✅ Email me sender ka naam, email aur message hoga
3. ✅ Aap direct reply kar sakte hain

## Testing:

1. Environment variables set karne ke baad server restart karein:
   ```bash
   npm run dev
   ```

2. Contact form fill karke test message bhejein

3. Check karein ke email aaya ya nahi

## Email Template:

Aapko jo email ayega usme ye information hogi:
- Sender ka naam
- Sender ka email address
- Message content
- Professional HTML formatting
- Direct reply option

## Common Issues:

1. **"Error while sending email"** - Gmail App Password galat hai
2. **"Server error occurred"** - Environment variables missing hain
3. **Email nahi aa raha** - Spam folder check karein

## Security Notes:

- `.env.local` file ko kabhi git me commit na karein
- App Password ko share na karein
- Production me strong passwords use karein

# Contact Form Email Setup Guide

## 🎯 Current Solution: Web3Forms (Recommended)

Your contact form is now using **Web3Forms** - a simple, free email API that doesn't require complex authentication.

## ✅ Quick Setup (5 minutes)

### Step 1: Get Your Access Key

1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Enter your email: `lavi156perera@gmail.com`
3. Click **"Create Access Key"**
4. You'll receive an access key via email (e.g., `a1b2c3d4-5678-90ab-cdef-1234567890ab`)

### Step 2: Add Access Key to Environment Variables

1. Open the `.env` file in your project root
2. Add your access key:

```
VITE_WEB3FORM_ACCESS_KEY=your_access_key_here
```

Example:

```
VITE_WEB3FORM_ACCESS_KEY=a1b2c3d4-5678-90ab-cdef-1234567890ab
```

**Note:** The `.env` file is already in `.gitignore`, so your key is safe and won't be committed to GitHub.

### Step 3: Restart Development Server

After adding the key, restart your server:

```bash
npm run dev
```

### Step 4: Test It!

1. Fill out the contact form on your website
2. Check your email at `lavi156perera@gmail.com`
3. You should receive the message within seconds!

## 🎉 That's it! No complex setup required!

---

## Why Web3Forms?

✅ **No Authentication Issues** - No Gmail API scopes needed  
✅ **Free Forever** - Unlimited emails on free tier  
✅ **No Sign-up Required** - Just enter your email  
✅ **Instant Setup** - Works in 5 minutes  
✅ **Spam Protection** - Built-in honeypot and captcha  
✅ **Email Notifications** - Get notified of every submission

---

## Alternative: EmailJS (If you prefer)

If you still want to use EmailJS, follow these steps to fix the Gmail API error:

### Option 1: Use EmailJS's Email Service (Easiest)

1. In EmailJS dashboard → **Email Services**
2. Select **"EmailJS"** (not Gmail)
3. This bypasses Gmail authentication entirely

### Option 2: Fix Gmail Authentication

1. Enable **2-Step Verification** on your Google Account
2. Go to: Security → 2-Step Verification → **App Passwords**
3. Generate an App Password for "Mail"
4. Use this 16-character password in EmailJS
5. Re-authenticate your Gmail connection

### Option 3: Use Different Email Provider

Try connecting with:

- Outlook/Hotmail
- Yahoo Mail
- SendGrid
- Mailgun

---

## Email Format

When someone contacts you, you'll receive:

```
From: [Their Name]
Email: [Their Email]
Subject: Portfolio Contact: [Subject]

Message:
[Their Message]
```

---

## Troubleshooting

### Not receiving emails?

- Check spam/junk folder
- Verify access key is correct
- Check browser console for errors
- Ensure email is spelled correctly

### Want to customize email format?

Visit Web3Forms dashboard to customize email templates

### Need more features?

Web3Forms Pro offers:

- Custom redirects
- File uploads
- Webhooks
- Analytics

---

## Support

- Web3Forms Docs: https://docs.web3forms.com/
- Web3Forms Support: support@web3forms.com

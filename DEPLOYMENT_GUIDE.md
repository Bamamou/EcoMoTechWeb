# Deployment Guide for Namecheap

## GitHub Secrets Configuration

You need to add these secrets to your GitHub repository:
**Settings** → **Secrets and variables** → **Actions** → **New repository secret**

### Required Secrets:

1. **FTP_SERVER**
   - For Namecheap, this is usually: `your-domain.com` or `ftp.your-domain.com`
   - Example: `ecomotech.online` or `ftp.ecomotech.online`
   - You can find this in your Namecheap cPanel under "File Manager" or "FTP Accounts"

2. **FTP_USERNAME**
   - Your FTP username from Namecheap
   - Usually in format: `username@your-domain.com`
   - Example: `admin@ecomotech.online`

3. **FTP_PASSWORD**
   - Your FTP password from Namecheap
   - The password you set when creating the FTP account

4. **FTP_DIR**
   - The directory path on your server
   - For main domain: `/public_html`
   - For subdomain: `/public_html/subdomain-name`
   - Example: `/public_html` (without trailing slash, the workflow adds it)

## How to Find Your Namecheap FTP Details:

1. **Login to Namecheap**
2. **Go to Dashboard** → **Manage** next to your domain
3. **Click on "Advanced DNS" or "cPanel"**
4. **Look for "File Manager" or "FTP Accounts"**
5. **Create or view existing FTP account details**

## Common Issues:

### Error: ENOTFOUND
- **Cause**: Incorrect FTP server hostname
- **Solution**: Verify the server hostname in Namecheap cPanel

### Error: Login authentication failed
- **Cause**: Wrong username or password
- **Solution**: Double-check credentials in Namecheap

### Error: Cannot change to directory
- **Cause**: Wrong FTP_DIR path
- **Solution**: Use `/public_html` for main domain

## Testing FTP Connection Manually:

You can test your FTP connection using an FTP client like FileZilla:
1. Server: Your FTP_SERVER value
2. Username: Your FTP_USERNAME value  
3. Password: Your FTP_PASSWORD value
4. Port: 21 (for regular FTP)

## Alternative: Manual Deployment

If GitHub Actions continues to fail, you can deploy manually:

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **Upload the `dist/` folder contents** to your Namecheap hosting via:
   - Namecheap File Manager (in cPanel)
   - FTP client like FileZilla
   - cPanel File Manager

3. **Upload to the correct directory:**
   - Main domain: `/public_html/`
   - Subdomain: `/public_html/subdomain-name/`

## Next Steps After Deployment:

1. **Test the website**: Visit https://ecomotech.online
2. **Check routing**: Test direct URLs like https://ecomotech.online/products
3. **Verify SSL**: Ensure HTTPS is working
4. **Check mobile**: Test responsive design

## Troubleshooting:

If you're still having issues:
1. **Check Namecheap server status**
2. **Verify domain DNS settings**
3. **Contact Namecheap support** for FTP configuration help
4. **Try manual deployment first** to verify hosting works

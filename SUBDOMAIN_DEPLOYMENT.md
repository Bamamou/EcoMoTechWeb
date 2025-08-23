# 🚀 EcoMoTech Subdomain Deployment Guide

## Automatic Deployment to ecomotech.online

This guide covers the automatic deployment setup for the EcoMoTech website to the subdomain `ecomotech.online`.

## 📋 Prerequisites

1. **Server Access**: Access to your hosting server with the directory `/home/afrixajs/ecomotech.online`
2. **FTP/FTPS Credentials**: Server credentials for file transfer
3. **GitHub Repository**: Write access to configure secrets and workflows

## 🔐 Required GitHub Secrets

Configure these secrets in your GitHub repository:
**Settings → Secrets and variables → Actions → New repository secret**

| Secret Name | Description | Example Value |
|-------------|-------------|---------------|
| `FTP_SERVER` | Your FTP server address | `ftp.yourdomain.com` or `ecomotech.online` |
| `FTP_USERNAME` | Your hosting username | `afrixajs` or your cPanel username |
| `FTP_PASSWORD` | Your hosting password | `your_secure_password` |
| `FTP_PORT` | FTP/FTPS port number | `21` (FTP) or `990` (FTPS) |

### Setting up GitHub Secrets:

1. Go to your repository on GitHub
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each secret with the values above

## 🚀 Deployment Process

### Automatic Deployment
The deployment happens automatically when:
- Code is pushed to the `main` branch
- The GitHub Action workflow runs successfully

### Manual Deployment
You can also trigger deployment manually:
1. Go to **Actions** tab in your GitHub repository
2. Select **Deploy to ecomotech.online Subdomain**
3. Click **Run workflow**
4. Click **Run workflow** button

## 📁 Project Structure for Subdomain

```
ecomotech.online/
├── index.html                 # Main entry point
├── assets/                    # CSS, JS, and static assets
│   ├── index-[hash].js       # Main JavaScript bundle
│   ├── index-[hash].css      # Main CSS bundle
│   └── ...                   # Other assets
├── images/                    # Product images and media
├── .htaccess                 # Apache configuration for SPA routing
└── ...                       # Other build files
```

## ⚙️ Configuration Files

### GitHub Actions Workflow
- **File**: `.github/workflows/deploy-subdomain.yml`
- **Purpose**: Automates build and deployment process
- **Triggers**: Push to main branch or manual trigger

### Vite Configuration
- **File**: `vite.config.subdomain.ts`
- **Purpose**: Build configuration for subdomain deployment
- **Base Path**: `/` (root path for subdomain)

### Package Scripts
```json
{
  \"build:subdomain\": \"vite build --config vite.config.subdomain.ts\",
  \"deploy:subdomain\": \"npm run build:subdomain\"
}
```

## 🌐 Environment Configuration

The subdomain deployment uses these environment variables:
- `VITE_DEPLOYMENT_TARGET=subdomain`
- `VITE_APP_BASENAME=/`

These are automatically set during the build process.

## 🔧 Local Testing

To test the subdomain build locally:

```bash
# Build for subdomain
npm run build:subdomain

# Preview the build
npm run preview
```

Visit `http://localhost:8080` to test the built application.

## 📝 Deployment Checklist

Before deploying, ensure:

- [ ] All GitHub secrets are configured
- [ ] FTP credentials are correct and working
- [ ] Server directory `/home/afrixajs/ecomotech.online/` exists and is writable
- [ ] Domain `ecomotech.online` points to your server
- [ ] SSL certificate is configured (recommended)

## 🛠️ Troubleshooting

### Windows-Specific FTP Issues:

**1. FTP Connection Failed (ENOTFOUND)**
- **Test locally first**: Run `find-ftp-settings.bat` to check server reachability
- **Use PowerShell test**: `./test-ftp-connection.ps1 -FtpServer "ecomotech.online" -Username "afrixajs" -Password "yourpassword"`
- **Common server addresses to try**:
  - `ecomotech.online`
  - `ftp.ecomotech.online`
  - `server.ecomotech.online`
  - Your hosting provider's specific FTP server

**2. Port Configuration**
- **Standard FTP**: Port `21` (most common)
- **FTPS**: Port `990` (secure)
- **SFTP**: Port `22` (if supported)
- **Custom ports**: Check with your hosting provider

**3. Windows Hosting Provider Settings**
- Contact your hosting provider for exact FTP settings
- Check your hosting control panel for FTP information
- Some providers require specific server addresses
- Ensure FTP access is enabled in your hosting account

### Common Issues:

**1. FTP Connection Failed**
- Verify FTP credentials in GitHub secrets
- Check if FTP/FTPS is enabled on your hosting
- Confirm the correct port (21 for FTP, 990 for FTPS)

**2. Directory Not Found**
- Ensure `/home/afrixajs/ecomotech.online/` exists on server
- Check directory permissions (should be writable)
- Verify the exact path with your hosting provider

**3. Build Failed**
- Check GitHub Actions logs for specific errors
- Ensure all dependencies are properly installed
- Verify Node.js version compatibility

**4. Website Not Loading**
- Check if `.htaccess` file was uploaded correctly
- Verify Apache mod_rewrite is enabled
- Ensure index.html is in the root directory

**5. Images Not Loading**
- Verify image paths are correct for subdomain deployment
- Check if images directory was uploaded
- Ensure proper file permissions

### Debugging Steps:

1. **Check GitHub Actions logs**: Go to Actions tab and review the latest workflow run
2. **Verify file upload**: Check if files were uploaded to the correct directory
3. **Test FTP connection**: Use an FTP client to manually connect with the same credentials
4. **Check server logs**: Review your hosting provider's error logs

## 🔄 Updating the Website

To update the website:

1. Make changes to your code
2. Commit and push to the `main` branch
3. GitHub Actions will automatically build and deploy
4. Changes will be live on `https://ecomotech.online` within minutes

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review GitHub Actions logs for error details
3. Contact your hosting provider for server-specific issues
4. Ensure your domain DNS settings are correct

## 🔗 Quick Links

- **Live Site**: https://ecomotech.online
- **GitHub Repository**: [Your Repository URL]
- **GitHub Actions**: [Repository URL]/actions
- **Build Logs**: Available in GitHub Actions workflow runs

---

**Note**: After initial setup, deployments are fully automated. Simply push your changes to the main branch and GitHub Actions will handle the rest!
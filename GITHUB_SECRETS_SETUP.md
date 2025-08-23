# GitHub Secrets Setup for EcoMoTech Deployment

## Step-by-Step Instructions:

### 1. Go to Your GitHub Repository
- Navigate to: https://github.com/Bamamou/EcoMoTechWeb
- Click on **Settings** tab
- Click on **Secrets and variables** in the left sidebar
- Click on **Actions**
- Click on **New repository secret**

### 2. Add These Exact Secrets:

#### Secret 1: FTP_SERVER
- **Name**: `FTP_SERVER`
- **Value**: `ftp.afrimes.com`

#### Secret 2: FTP_USERNAME  
- **Name**: `FTP_USERNAME`
- **Value**: `Bamamou@ecomotech.online`

#### Secret 3: FTP_PASSWORD
- **Name**: `FTP_PASSWORD`
- **Value**: [Your FTP password - the one you use to login to your Namecheap hosting]

#### Secret 4: FTP_DIR
- **Name**: `FTP_DIR`
- **Value**: `/public_html`

### 3. Verify Secrets Are Added
After adding all 4 secrets, you should see them listed in your repository secrets:
- ✅ FTP_SERVER
- ✅ FTP_USERNAME  
- ✅ FTP_PASSWORD
- ✅ FTP_DIR

### 4. Test the Deployment
Once you've added all secrets:
1. Make any small change to your code (like adding a comment)
2. Commit and push the change
3. Go to **Actions** tab to watch the deployment
4. The deployment should now succeed!

### 5. Check Your Live Site
After successful deployment, visit: https://ecomotech.online

---

## If You Don't Remember Your FTP Password:

1. **Login to Namecheap**
2. **Go to cPanel** → **FTP Accounts**
3. **Reset the password** for `Bamamou@ecomotech.online`
4. **Use the new password** in your FTP_PASSWORD secret

---

## Manual Testing (Optional):

You can test these FTP settings manually using FileZilla:
- **Host**: ftp.afrimes.com
- **Username**: Bamamou@ecomotech.online  
- **Password**: [Your FTP password]
- **Port**: 21

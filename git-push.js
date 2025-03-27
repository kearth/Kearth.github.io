const { execSync } = require('child_process');
const os = require('os');
const date = new Date().toISOString().slice(0, 19).replace('T', ' ');

try {
    if (os.platform() === 'win32') {
        // Windows 系统
        execSync('git add .', { stdio: 'inherit' });
        execSync(`git commit -m "Auto build and deploy: ${date}"`, { stdio: 'inherit' });
        execSync('git push origin main', { stdio: 'inherit' });
    } else {
        // Linux 或 macOS 系统
        execSync('git add .', { stdio: 'inherit' });
        execSync(`git commit -m "Auto build and deploy: ${date}"`, { stdio: 'inherit' });
        execSync('git push origin main', { stdio: 'inherit' });
    }
    console.log('Git operations completed successfully.');
} catch (error) {
    console.error('Git operation failed:', error.message);
}
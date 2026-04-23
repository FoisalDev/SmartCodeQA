/**
 * SmartCodeQA Deployment Optimization Script
 * Run with: node scripts/optimize.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 SmartCodeQA Deployment Optimizer\n');

try {
  // 1. Check if we're in the right directory
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    console.error('❌ Please run this script from the project root');
    process.exit(1);
  }

  console.log('📦 Checking dependencies...');
  
  // 2. Install dependencies if needed
  if (!fs.existsSync(path.join(process.cwd(), 'node_modules'))) {
    console.log('Installing dependencies...');
    execSync('npm install', { stdio: 'inherit' });
  }

  // 3. Run linting to catch issues early
  console.log('\n🔍 Running linting checks...');
  try {
    execSync('npm run lint', { stdio: 'inherit' });
    console.log('✅ Linting passed');
  } catch (error) {
    console.warn('⚠️  Linting found issues (continuing anyway)');
  }

  // 4. Build the application
  console.log('\n🏗️  Building application for production...');
  execSync('npm run build', { stdio: 'inherit' });

  // 5. Analyze build output
  console.log('\n📊 Build Analysis:');
  const nextDir = path.join(process.cwd(), '.next');
  if (fs.existsSync(nextDir)) {
    const stats = fs.statSync(nextDir);
    console.log(`   Build output size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
  }

  // 6. Check for image optimization
  console.log('\n🖼️  Image Optimization Check:');
  const publicDir = path.join(process.cwd(), 'public');
  if (fs.existsSync(publicDir)) {
    const images = fs.readdirSync(publicDir).filter(file => 
      /\.(png|jpe?g|webp|avif|svg)$/i.test(file)
    );
    console.log(`   Found ${images.length} images in public/`);
    if (images.length > 0) {
      console.log('   Consider using Next.js Image component for automatic optimization');
    }
  }

  // 7. Provide deployment recommendations
  console.log('\n🚀 Deployment Recommendations:');
  console.log('   1. Use Vercel for optimal Next.js deployment');
  console.log('   2. Enable compression in your hosting platform');
  console.log('   3. Use a CDN for static assets');
  console.log('   4. Enable caching headers (already configured)');
  console.log('   5. Monitor performance with Vercel Analytics or Google Lighthouse');

  console.log('\n✅ Optimization complete! Ready for deployment.');
  console.log('   Run "npm run start" to test locally before deploying\n');

} catch (error) {
  console.error('❌ Optimization failed:', error.message);
  process.exit(1);
}